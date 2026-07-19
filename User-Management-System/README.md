# User Management System

A complete Backend REST API project built using Node.js, Express.js, MongoDB, and Mongoose.

## Project Description
This project provides a robust REST API for managing user data. It supports full CRUD operations (Create, Read, Update, Delete) and is secured using Basic Authentication.

## Folder Structure
```
User-Management-System/
├── config/
│   └── db.js           # Database connection
├── controllers/
│   └── userController.js # Business logic
├── middleware/
│   └── auth.js         # Basic auth middleware
├── models/
│   └── User.js         # Mongoose User schema
├── routes/
│   └── userRoutes.js   # API routes
├── .env                # Environment variables
├── app.js              # Main entry point
├── package.json        # Dependencies and scripts
└── README.md           # Documentation
```

## Required Packages
- `express`: Web framework for Node.js.
- `mongoose`: MongoDB object modeling for Node.js.
- `dotenv`: Loads environment variables from a `.env` file.
- `nodemon` (dev): Automatically restarts the server during development.

## MongoDB Setup (Local)
1. Download and install [MongoDB Community Server](https://www.mongodb.com/try/download/community).
2. Start MongoDB service (default port: `27017`).
3. The app will automatically create a database named `user_management_system`.

## Installation Steps
1. Clone the repository.
2. Navigate to the project directory:
   ```bash
   cd User-Management-System
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file and add your `MONGO_URI` and `PORT`:
   ```env
   PORT=3000
   MONGO_URI=mongodb://127.0.0.1:27017/user_management_system
   ```
5. Run the server:
   ```bash
   npm run dev
   ```

## API Endpoints
All routes are protected by Basic Authentication (Username: `admin`, Password: `admin123`).

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/users` | Create a new user |
| GET | `/api/users` | Get all users |
| GET | `/api/users/:id` | Get a single user by ID |
| PUT | `/api/users/:id` | Update user details |
| DELETE | `/api/users/:id` | Delete a user |

## Postman Testing Examples
All requests require **Basic Auth** with `admin` / `admin123`.

### 1. Create User
- **Method:** POST
- **URL:** `http://localhost:3000/api/users`
- **Body (raw JSON):**
  ```json
  {
    "name": "Alice Smith",
    "email": "alice@example.com",
    "age": 28
  }
  ```

### 2. Get All Users
- **Method:** GET
- **URL:** `http://localhost:3000/api/users`

### 3. Get User by ID
- **Method:** GET
- **URL:** `http://localhost:3000/api/users/<USER_ID>`

### 4. Update User
- **Method:** PUT
- **URL:** `http://localhost:3000/api/users/<USER_ID>`
- **Body (raw JSON):**
  ```json
  {
    "name": "Alice Johnson",
    "email": "alice.johnson@example.com",
    "age": 29
  }
  ```

### 5. Delete User
- **Method:** DELETE
- **URL:** `http://localhost:3000/api/users/<USER_ID>`
