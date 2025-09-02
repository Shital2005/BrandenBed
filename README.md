# Brandenbed Living Spaces – Prototype

A **full-stack web prototype** for a **customer-facing landing page** and **internal team dashboard**,  
designed and developed for **Brandenbed Living Spaces UG (haftungsbeschränkt)** to demonstrate  
core features, design direction, and dashboard workflows.

---

**Tech Stack**  
- **Frontend:** React, React Router, CSS/Tailwind  
- **Backend:** Node.js + Express.js  
- **Data Layer:** Static JSON files (simulated database)  
- **Version Control:** GitHub  

---

**Features**

**Landing Page (Public)**  
- Fully responsive layout: **Hero**, **Quick Stats**, **Core Values**, **Services**, **Footer**  
- Navigation header with **Language toggle** and **Sign-In** placeholder  
- Clean mobile and desktop design  

**Team Dashboard (Internal)**  
- Sidebar navigation: **Dashboard, Properties, Tasks, Tenant Queries, Rent Collection, Employees, Settings**  
- Dashboard charts populated with **dummy data**  
- Properties and Employees pages fetch data from **API endpoints**  
- Rent Collection form with **frontend-only** payment history table  
- Tasks and Settings pages designed as **static layouts**  

---

**Screenshots**

**Landing Page**  
![Landing Page Screenshot](https://github.com/Shital2005/BrandenBed/blob/main/Screenshot%202025-09-02%20155530.png?raw=true)

**Team Dashboard**  
![Dashboard Screenshot](https://github.com/Shital2005/BrandenBed/blob/main/Screenshot%202025-09-02%20150401.png?raw=true)

---

**API Endpoints**

**Properties**  
- `GET /api/properties` → Returns list of properties  

**Employees**  
- `GET /api/employees` → Returns employee data  

**Payments**  
- `GET /api/payments` → Returns list of payments  
- `POST /api/payments` → Accepts new payment (dummy endpoint)  

**Tenant Queries**  
- `GET /api/queries` → Returns list of tenant queries  

**Tasks**  
- `GET /api/tasks` → Returns list of tasks  

**Tenants**  
- `GET /api/tenants` → Returns list of tenants  

---

**Running the project**

**1. Clone the repository** 
```bash
git clone https://github.com/YOUR-USERNAME/brandenbed-prototype.git
cd brandenbed-prototype
```

**2. Install dependencies**  
Frontend and backend are separate:  
```bash
cd client
npm install
cd ../server
npm install
```
**3. Run backend (Express)**  
```bash
cd server
npm start
```
**4. Run frontend (React)**  
```bash
cd client
npm start
```

**Future Improvements**  
- Add authentication (JWT or OAuth)  
- Connect to a real database (MongoDB/PostgreSQL)  
- Make dashboard charts dynamic  
- Implement language translation toggle

**Contributing**  
1. Fork the repository  
2. Create a feature branch (`git checkout -b feature-name`)  
3. Commit changes (`git commit -m "Added new feature"`)  
4. Push and open a Pull Request  



