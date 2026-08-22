<div align="center">

# 🛒 SaaS Platform for Online Sales

A web-based SaaS platform designed to automate and optimize business processes related to online sales.

The system allows businesses to receive customer orders automatically, manage products and orders through an administrative dashboard, and reduce the amount of manual work required for processing online sales.

[![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)](#)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)](#)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)](#)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)](#)
[![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)](#)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat&logo=postgresql&logoColor=white)](#)
[![REST API](https://img.shields.io/badge/REST_API-005571?style=flat)](#)

[About](#about) · [Features](#features) · [Architecture](#architecture) · [Technologies](#technologies) · [Installation](#installation-and-usage)

</div>

---

## About

This project is a SaaS platform for optimizing business processes in online sales.

The platform is designed primarily for small and medium-sized online businesses and provides tools for automating routine sales operations.

Customers can browse products, provide delivery information, and place orders without direct interaction with a manager. Every submitted order is automatically registered in the administrative system with its current status and creation timestamp.

This approach allows businesses to receive orders **24/7**, reduce manual processing, minimize the risk of losing customer requests, and improve the overall efficiency of online sales management.

The project was developed as the practical implementation of a bachelor's qualification work on the topic:

> **"Optimization of Business Processes for Online Sales Using a SaaS Platform"**
---

## Live Demo

🚀 [Open SaaS Platform](https://luchali.github.io/saas_retail/)

---
---

## Features

### 🛒 Automatic Order Processing 24/7

- Online storefront available to customers 24/7
- Product selection without manager involvement
- Customer delivery information collection
- Automatic order creation
- Automatic registration of new orders in the system
- Default **"New"** status for newly created orders
- Automatic order creation timestamp
- Centralized order storage
- Reduced risk of lost customer requests

### 📦 Product Management

- Product catalog
- Product information display
- Product pricing
- Product availability management
- Product selection during order creation

### 📋 Order Management

- Centralized list of customer orders
- Order details
- Customer information
- Ordered products and quantities
- Order creation date and time
- Order status tracking

### 📊 Administrative Dashboard

- Centralized business management interface
- Order monitoring
- Product management
- Sales information overview
- Business process control

> Additional functionality will be added during further development of the platform.

---

## Order Processing Flow

The automatic order processing module follows this workflow:

1. A customer opens the online store.
2. The customer browses available products.
3. The customer selects the required products.
4. Selected products are added to the shopping cart.
5. The customer proceeds to checkout.
6. The customer provides contact and delivery information.
7. The order is submitted through the web interface.
8. The frontend sends the order data to the backend through the REST API.
9. The backend validates the received data.
10. The order is stored in the database.
11. The system automatically assigns the **"New"** status.
12. The creation date and time are automatically recorded.
13. The order becomes available in the administrative dashboard.
14. A manager can process the order when required.

This workflow allows the platform to accept customer orders continuously without requiring a manager to be online at the moment of purchase.

---

## Architecture

The application follows a client-server architecture.

```text
┌──────────────────────┐
│       Customer       │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│    React Frontend    │
│                      │
│ Store / Cart /       │
│ Checkout             │
└──────────┬───────────┘
           │
           │ REST API
           ▼
┌──────────────────────┐
│   Node.js / Express  │
│       Backend        │
│                      │
│ Business Logic       │
│ Validation           │
│ Order Processing     │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│     PostgreSQL       │
│      Database        │
│                      │
│ Orders / Products /  │
│ Customers            │
└──────────────────────┘
```

The **frontend** provides the customer and administrative interfaces.

The **backend** processes requests, validates data, implements business logic, and communicates with the database.

The **database** provides persistent storage for products, customers, orders, and other platform data.

---

## Technologies

| Technology | Purpose |
|---|---|
| React | Building the user interface |
| TypeScript | Static typing and safer frontend development |
| Tailwind CSS | Application styling and responsive design |
| Node.js | Backend JavaScript runtime |
| Express | REST API and server-side application logic |
| PostgreSQL | Relational data storage |
| REST API | Communication between frontend and backend |
| Git | Version control |
| GitHub | Source code hosting and project management |

---

## Main Components

### Customer Storefront

Provides the customer-facing interface of the online store.

Customers can browse products, select items, and proceed to checkout at any time.

### Shopping Cart

Stores products selected by the customer before an order is submitted.

The cart contains information about:

- selected products;
- product quantities;
- individual prices;
- total order value.

### Checkout

Collects the information required to process an order:

- customer name;
- phone number;
- email;
- delivery information;
- selected products.

### Order Processing API

Receives order information from the frontend, validates the data, and creates a new order in the system.

Every new order receives:

```text
Status: New
Created At: automatically generated timestamp
```

### Administrative Dashboard

Provides managers with access to orders received through the online store.

Managers can review customer information, ordered products, timestamps, and order statuses without having to manually register customer requests.

---

## Business Process Optimization

The platform automates several operations that would otherwise require manual work from a sales manager.

### Before Automation

```text
Customer
    ↓
Contacts manager
    ↓
Manager receives request
    ↓
Manager manually records order
    ↓
Manager confirms information
    ↓
Order processing
```

### After Automation

```text
Customer
    ↓
Online Store
    ↓
Checkout
    ↓
Automatic Order Registration
    ↓
Database
    ↓
Administrative Dashboard
    ↓
Manager Processing
```

The optimized process reduces the number of manual operations and enables continuous order collection regardless of the manager's working hours.

---

## Responsive Design

The platform is designed to work on:

- Mobile devices
- Tablets
- Laptops
- Desktop screens

The interface adapts to different viewport sizes to provide convenient access both for customers and business managers.

---

## Installation and Usage

### 1. Clone the repository

```bash
git clone REPOSITORY_LINK
cd saas-online-sales
```

### 2. Install frontend dependencies

```bash
cd client
npm install
```

### 3. Install backend dependencies

```bash
cd ../server
npm install
```

### 4. Configure environment variables

Create a `.env` file in the server directory:

```env
DATABASE_URL=YOUR_POSTGRESQL_DATABASE_URL
PORT=3000
```

### 5. Start the backend server

```bash
npm run dev
```

### 6. Start the frontend

Open another terminal:

```bash
cd client
npm run dev
```

---

## Future Development

The platform is designed for further extension with additional business process automation modules, including:

- Advanced order status management
- Customer management
- Inventory management
- Sales analytics
- Business KPI dashboard
- Delivery service integrations
- Payment service integrations
- Automated customer notifications
- Authentication and authorization
- Role-based access control
- SaaS subscription management

---

## Academic Purpose

This project serves as the practical implementation of a bachelor's qualification work focused on optimizing online sales business processes through SaaS technologies.

The developed system demonstrates how automation can reduce manual operations, provide continuous order processing, centralize business information, and improve the efficiency of online sales management.

---

## Author

Bachelor's qualification project developed as a practical implementation of a SaaS platform for online sales business process optimization.

---

<div align="center">

**SaaS Platform for Online Sales**

Automation · Optimization · Centralized Management

</div>
