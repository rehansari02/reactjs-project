# FoodZone - React Practice Project

FoodZone ek React.js practice project hai jisme humne simple food listing webpage banaya hai.
Is project ka main focus React ke component interaction, state management, aur filter/search functionality ko practice karna hai.

Features

Backend se frontend me data fetch karna using Axios.

Custom backend me JSON data create karke frontend me display karna.

Search bar ka use karke food items ko filter karna.

React ke props aur state ka use karke component-to-component data transfer practice karna.

Responsive card layout with hover effects.

Project Structure

backend/ : Custom backend using Express.js with JSON data.

frontend/ : React.js frontend with FoodContain aur Navbar components.

public/images/ : Food images used in the cards.

Getting Started

# 1. Backend

Navigate to backend folder:

cd backend

Install dependencies:

npm install

Start the server:

npm run server

Server will run on: http://localhost:9000/

# 2. Frontend

Navigate to frontend folder:

cd frontend

Install dependencies:

npm install

Start the React app:

npm start

React app will run on: http://localhost:3000/

# How it works

Backend contains a JSON array of food items with name, price, text, image, and type.

React frontend uses Axios to fetch data from backend and display it in cards.

Navbar contains a search bar which filters the food items in real-time.

Data is passed between Navbar and FoodContain using props and state.

# What I learned

Creating a simple backend JSON server without database.

Fetching data in React using Axios.

Using React state to manage search input and filter data.

Passing data from one component to another via props.

Implementing a responsive layout for cards and hover effects.
