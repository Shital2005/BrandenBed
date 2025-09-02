# Brandenbed Living Spaces – Prototype

Full-stack prototype for a **customer landing page** and **internal team dashboard**,  
built as part of the selection task for **Brandenbed Living Spaces UG (haftungsbeschränkt)**.

---

Tech Stack
- **Frontend:** React, React Router, CSS/Tailwind  
- **Backend:** Node.js + Express.js  
- **Data Layer:** Static JSON files (simulated database)  
- **Version Control:** GitHub  

---

Features

Landing Page (Public)
- Fully responsive layout: **Hero**, **Quick Stats**, **Core Values**, **Services**, **Footer**  
- Navigation header with **Language toggle** and **Sign-In** placeholder  
- Clean mobile and desktop design

Team Dashboard (Internal)
- Sidebar navigation: **Dashboard, Properties, Tasks, Tenant Queries, Rent Collection, Employees, Settings**  
- Dashboard charts populated with **dummy data**  
- Properties and Employees pages fetch data from **API endpoints**  
- Rent Collection form with **frontend-only** payment history table  
- Tasks and Settings pages designed as **static layouts**

---

Screenshots

Landing Page
![Landing Page Screenshot](https://github.com/YOUR-USERNAME/YOUR-REPO/assets/XXXXXX/landing.png)

Team Dashboard
![Dashboard Screenshot](https://github.com/YOUR-USERNAME/YOUR-REPO/assets/XXXXXX/dashboard.png)



Running the Project

1. Clone the repository
```bash
git clone https://github.com/YOUR-USERNAME/brandenbed-prototype.git
cd brandenbed-prototype


2. Install dependencies
Frontend and backend are separate:
```bash
cd client
npm install
cd ../server
npm install

3. Run backend (Express)
```bash
cd server
npm start
4. Run frontend (React)
```bash
cd client
npm start
