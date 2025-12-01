# ToDo_App

# Simple To-Do List App  

A web-based interactive To-Do application that allows users to add, edit, and delete tasks in real-time. Built with HTML, CSS, JavaScript, and Node.js backend with MySQL for data storage.  

---

## Scope  

i. Add new tasks to the list with description.  

ii. Edit existing tasks dynamically.  

iii. Delete tasks both from UI and database.  

iv. Fetch and display tasks from the backend on page load.  

v. Seamless frontend-backend integration for a responsive task management experience.  

vi. Enable future extensions like task prioritization, deadlines, and notifications.  

---

## Tech Stack  

### Frontend  
- HTML, CSS, JavaScript  
- Bootstrap 5 for UI components and styling  

### Backend  
- Node.js with Express.js  

### Database  
- MySQL for task storage and retrieval  

---

## Features  

### User-Side  
- Add new tasks dynamically  
- Edit tasks inline with live updates  
- Delete tasks instantly  
- Tasks are fetched from database on page load  
- Responsive design for desktop and mobile  

### Developer-Side (Optional / Planned)  
- Task categorization and prioritization  
- Task deadlines and reminders  
- User authentication and multi-user support  
- Integration with notifications or calendar  

---

## Requirements  

Ensure the following are installed:  

- Node.js  
- MySQL  
- npm  

---

## Setup & Installation  

1. Clone the repo  
   ```bash
   git clone https://github.com/SAIKOUNDINYAVELURI/ToDo_App.git
   cd ToDo_App
   ```

2. Install dependencies  
   ```bash
   npm install
   ```

3. Setup MySQL database  
   ```sql
   CREATE DATABASE todo_db;
   CREATE TABLE todoItems (
       ID INT AUTO_INCREMENT PRIMARY KEY,
       itemDescription VARCHAR(255) NOT NULL
   );
   ```

4. Start the backend server  
   ```bash
   node server.js
   ```

5. Open the frontend  
   - Open `index.html` in your browser or host via localhost.  

---

## Project Structure  

```
ToDo_App/
│
├── backend/             
│   ├── server.js
│   ├── database.js
│   └── package.json
│
├── frontend/            
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── README.md            
└── .gitignore
```

---

  


## Usage  

- Open `index.html` in your browser.  
- Add tasks using the input box and click Add.  
- Edit tasks inline and click Save.  
- Delete tasks using the Delete button.  
- All changes sync with backend MySQL database.

