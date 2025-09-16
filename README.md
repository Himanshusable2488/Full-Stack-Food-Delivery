# FOOD DEL

A full-stack food delivery application with separate admin, backend, and frontend modules.

## Project Structure

```
FOOD DEL/
├── admin/      # Admin dashboard for managing food items, orders, and users
├── Backend/    # Node.js/Express backend API, database models, controllers
├── Frontend/   # React-based user interface for customers
```

### 1. admin/
- Built with React and Vite
- Features: Admin login, food management, order tracking
- Location: `/admin`

### 2. Backend/
- Built with Node.js, Express, MongoDB
- Features: REST API, authentication, order/cart/food/user management
- Location: `/Backend`

### 3. Frontend/
- Built with React and Vite
- Features: User registration/login, browse menu, cart, order history
- Location: `/Frontend`

## Setup Instructions

1. **Clone the repository**
2. **Install dependencies**
   - For each folder (`admin`, `Backend`, `Frontend`):
     ```sh
     cd <folder>
     npm install
     ```
3. **Start the backend server**
   ```sh
   cd Backend
   npm start
   ```
4. **Start the frontend or admin app**
   ```sh
   cd Frontend
   npm run dev
   # or
   cd admin
   npm run dev
   ```

## Folder Details

### admin/
- `src/components/` - Reusable UI components
- `src/pages/` - Page views (Add, List, Orders)
- `public/` - Static assets

### Backend/
- `controllers/` - Business logic for API endpoints
- `models/` - Mongoose models
- `routes/` - Express routes
- `middleware/` - Auth and other middleware
- `uploads/` - Uploaded food images

### Frontend/
- `src/components/` - UI components (Navbar, Header, FoodDisplay, etc.)
- `src/pages/` - Main pages (Home, Cart, MyOrders, Verify)
- `public/` - Static assets and images

## Screenshots

### Home Page
![Home Page](Screenshots/Screenshot%202025-09-16%20153019.png)

### Admin Dashboard
![Admin Dashboard](Screenshots/Screenshot%202025-09-16%20153110.png)

### Menu List
![Menu List](Screenshots/Screenshot%202025-09-16%20152955.png)

### Cart
![Cart](Screenshots/Screenshot%202025-09-16%20153147.png)

### Authentication
![Authentication](Screenshots/Screenshot%202025-09-16%20153051.png)

---

