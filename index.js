require("dotenv").config();
const puppeteer = require("puppeteer");
const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.6osozaw.mongodb.net/web_scrapping_data`, { useNewUrlParser: true, useUnifiedTopology: true });

// Define a schema for your data
const projectSchema = new mongoose.Schema({
  project_name: String,
  project_para: String
});

// Create a model based on the schema
const Project = mongoose.model('Project', projectSchema);

async function run() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://harshit-adhikari-portfolio.netlify.app/");

  const project_details = await page.evaluate(() =>
    Array.from(document.getElementsByClassName('description')).map(element => ({
      project_name: element.querySelector('.description-head').innerText,
      project_para: element.querySelector('.description-para p').innerText
    }))
  );

  // Save each project detail to the database
  for (const detail of project_details) {
    const project = new Project(detail);
    await project.save();
  }

  console.log('Data saved to the database');

  await browser.close();
}

run();
