# Web Scraper for Portfolio Website

This repository contains a web scraper built with Puppeteer and Node.js. The scraper extracts project names and descriptions from a portfolio website and stores them in a MongoDB database. It is designed for extracting project information from a portfolio for further analysis or use.

### Technologies Used
- Puppeteer
- Node.js
- MongoDB

### Install dependencies

npm install

### Usage
Set up your MongoDB connection URI in the .env file:

MONGODB_URI=your-mongodb-uri

### Run the scraper:
node scraper.js

### Output
The scraper will extract project names and descriptions from the portfolio website and store them in the MongoDB database.
{
  "project_name": "Notes-app",
  "project_para": "This project is a Notes App built using Express, MongoDB, and Passport. It allows users to create, read, update, and delete notes securely. The app features user authentication using Passport, ensuring that only authenticated users can access and manage their notes."
}



