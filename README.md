# 🍷 Vine & Dine – Interactive Winery Mapping Website

An interactive web application that allows users to explore wineries on a dynamic Google Map, filter locations by category, and get directions seamlessly.

Built with the Google Maps JavaScript API, custom markers, filtering logic, and dynamic UI interactions.

## 📌 Project Overview

Vine & Dine is a winery discovery web app designed to help users:

View wineries on an interactive map

Filter wineries by category

Click markers to view detailed information

Get directions to selected wineries

Experience a clean and responsive UI

This project focuses on practical API integration, DOM manipulation, and front-end problem solving.

## 🚀 Features: 
### 🗺️ Interactive Google Map:
  - Dynamic map initialization
  
  - Custom markers for each winery
  
  - Info windows with:
      * Winery name
      * Address
      * Website link
      * Directions button

###🔎 Category Filtering
  - Filter wineries by type (e.g., Boutique Winery, Estate Winery, etc.)
  - Active filter styling
  - Only selected category displays on the map
  - Clear and re-render markers dynamically

###📍 Directions Functionality
  - Integrated DirectionsService and DirectionsRenderer
  - Route generation to selected winery
  - Proper clearing of previous routes
  - Automatic map re-centering & zoom control

###🎨 UI Enhancements
  - Sticky footer behavior
  - Hover states for desktop
  - Touch-friendly button behavior for mobile
  - Selected filter button styling (only colored when active)
  - Scroll effects for better user experience

## 🛠️ Technologies Used

### Frontend
- HTML5
- Bootstrap
- CSS3
- JavaScript (Vanilla)
  
### API's and services
- Google Maps JavaScript API

## ⚙️ Key Challenges & Fixes:

1️⃣ Google Maps Loading Warning

Issue:
Google Maps API was loaded without async, causing performance warnings.

Fix:
Updated script loading to follow Google’s recommended async loading pattern.

2️⃣ “null is not an object” When Clearing Directions

Issue:
Calling methods on directionsRenderer before it was initialized caused runtime errors.

Fix:
Ensured directionsRenderer was properly instantiated before attempting to clear routes:

if (directionsRenderer) {
  directionsRenderer.setDirections({ routes: [] });
}.

3️⃣ Directions Not Clearing Properly (Only Zoom Changing)

Issue:
Clearing directions changed map zoom but did not remove the rendered path.

Fix:
Used:

directionsRenderer.setMap(null);

Then reattached when generating a new route.

4️⃣ Mobile Hover Not Working

Issue:
:hover styles do not behave consistently on touch devices.

Fix:
Implemented an active/selected state using JavaScript instead of relying solely on :hover.

5️⃣ Filter Button Styling Logic

Issue:
Filter buttons stayed colored even when not selected.

Fix:
Added logic to:

Remove .active class from all buttons

Add .active only to the clicked button.

6️⃣ Marker & InfoWindow Management

Issue:
Multiple info windows could remain open.

Fix:
Used a currentWindow variable to track and close the previously opened InfoWindow before opening a new one.

## 📂 Project Structure
vine-and-dine/
│
├── index.html
├── login.html
├── style.css
├── script.js
├── images/
│   └── logo/
└── README.md

## 🧠 What I Learned

1. Proper Google Maps API integration
2. Managing third-party API warnings and performance recommendations
3. Handling mobile vs desktop UI behavior differences
4. Debugging asynchronous JavaScript behavior
5. Managing state for filters, markers, and directions
6. Improving UX with scroll and selection-based interactions


## Possible Future Improvements:

### 🔐 User Authentication & Personal Accounts:
   Implement a full authentication system to allow users to:
    * Create accounts and securely log in
    * Maintain personalized profiles
    * Persist user-specific data across sessions
      (This would require integration of a backend service and a database system.)

### ⭐ Winery Visit Ratings
   Enhance user experience by allowing users to:
    * Leave 1–5 star ratings
    * Add personal notes or reviews
    * User data would be stored in a database and dynamically rendered upon login.


### 💾 Persistent Data Storage
Currently, all data is stored client-side. Future implementation would include:
  * Backend API routes
  * Secure database storage
  * Protected user sessions
  * Data persistence across devices

### 🧑‍💻 Full-Stack Architecture Upgrade
Convert the project from a front-end application to a full-stack web application by introducing:
  * Authentication middleware
  * RESTful API endpoints
  * Database integration
  * Secure data handling
  * Scalable architecture design



## 👨🏽‍💻 Author

### Andrew Evboifo
#### Interactive Map Project – 2026
