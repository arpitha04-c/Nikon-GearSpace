# Nikon GearSpace

A full-stack product management application built using **React, Spring Boot, and MySQL**. The project demonstrates REST API development, database integration, and frontend-backend communication for managing product information.

## 📌 Project Overview

**Nikon GearSpace** is a product management application that combines a React frontend with a Spring Boot backend and MySQL database.

The application allows users to add and view products through the frontend, while the backend provides REST APIs for product management. The APIs were developed and tested using **Postman**.

## 🛠️ Technologies Used

### Frontend

* React
* JavaScript
* HTML
* CSS
* Axios
* Vite

### Backend

* Java
* Spring Boot
* Spring Data JPA
* REST APIs
* Maven

### Database

* MySQL

### Tools

* Git & GitHub
* Postman
* Eclipse
* Visual Studio Code

## ✨ Key Features

* Add products through the React frontend
* Retrieve and display products dynamically
* Product data persistence using MySQL
* REST APIs for product management
* Create, retrieve, update, and delete product operations
* API testing using Postman
* Frontend-backend integration using HTTP requests
* Product cards with images, names, descriptions, ratings, prices, and stock information
* Responsive user interface

## 🔗 REST API Operations

The Spring Boot backend provides REST APIs for product management.

| Method   | Operation         | Purpose                             |
| -------- | ----------------- | ----------------------------------- |
| `POST`   | Create Product    | Add a new product                   |
| `GET`    | Retrieve Products | Fetch product information           |
| `PUT`    | Update Product    | Modify existing product information |
| `DELETE` | Delete Product    | Remove a product                    |

The REST APIs were tested using **Postman**, while the React frontend is integrated with the backend for adding and retrieving product information.

## 🔄 Application Architecture

```text
┌──────────────────────┐
│    React Frontend    │
│                      │
│  Add & View Products │
└──────────┬───────────┘
           │
           │ HTTP / REST API
           ▼
┌──────────────────────┐
│   Spring Boot API    │
│                      │
│ POST GET PUT DELETE  │
└──────────┬───────────┘
           │
           │ Spring Data JPA
           ▼
┌──────────────────────┐
│    MySQL Database    │
└──────────────────────┘
```

## 📂 Project Structure

```text
Nikon-GearSpace/
│
├── backend/
│   ├── src/
│   │   └── main/
│   │       ├── java/
│   │       │   └── com/example/demo/
│   │       │       ├── controller/
│   │       │       ├── entity/
│   │       │       ├── repository/
│   │       │       ├── service/
│   │       │       └── CorsConfig.java
│   │       └── resources/
│   │           └── application.properties
│   └── pom.xml
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── api.jsx
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

## 🚀 How to Run

### Backend

1. Configure the MySQL database details in `application.properties`.
2. Open the `backend` project in Eclipse.
3. Run the Spring Boot application.

### Frontend

1. Open the `frontend` folder in Visual Studio Code.
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

## 🎯 Learning Outcomes

Through this project, I gained practical experience in:

* Developing REST APIs using Spring Boot
* Implementing product operations using HTTP methods
* Working with MySQL and Spring Data JPA
* Integrating React with a Spring Boot backend
* Testing REST APIs using Postman
* Handling frontend-backend communication
* Structuring a full-stack application into separate frontend and backend modules
* Using Git and GitHub for version control

## 👩‍💻 Author

**Arpitha C**

Java Developer | Full-Stack Development Learner
