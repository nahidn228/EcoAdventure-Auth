# 🌿 Eco-Adventure Experiences ✨

Welcome to **Eco-Adventure Experiences**, a blog website designed to showcase **eco-friendly travel adventures**! From mountain treks to ocean dives, this platform provides detailed information about various eco-adventures and empowers users to consult with experts for personalized guidance.

## 🌟 Live Preview

Visit the live site here: [Eco-Adventure](https://fusiondeck-228.web.app/)

---

## 📜 Project Overview

This project serves as a comprehensive resource for adventure enthusiasts who value sustainability. It includes:
- Engaging descriptions of eco-adventures with visual appeal.
- A **user-friendly** interface for browsing and exploring adventures.
- **Profile management**, login, and registration for enhanced user engagement.

---

## 🛠️ Key Features

### 1. **Dynamic Eco-Adventure Content**
   - Showcases varied adventure experiences like **mountain treks**, **ocean dives**, **wildlife safaris**, and more.
   - Adventure cards dynamically fetch data from **JSON**, including details like **cost**, **location**, and **duration**.

### 2. **Authentication**
   - **Email & Password Login/Registration** with validation.
   - **Social Login** using **Google Authentication** for easy access.
   - **Password validation** ensures a secure user experience.
   - Functional **Forgot Password** feature.

### 3. **User Profile Management**
   - Users can view and **update** their profiles.
   - Updates are stored in **Firebase Authentication**.
   - Profile includes **image**, **name**, and **email**.

### 4. **Adventure Details (Private Route)**
   - Detailed adventure pages with extensive information.
   - **"Talk with Expert" feature**: 
     - Opens **Google Meet** if the current time is 10:00 AM - 8:00 PM.
     - Displays a **modal** with consultation time outside the window.

### 5. **Winter-Themed Design**
   - **Snowfall effect** using the **react-snowfall** package.
   - Subtle frosted-glass effects and **cool tones** for a winter-inspired aesthetic.

### 6. **Error Handling**
   - **Custom 404 Page** with a whimsical winter theme and redirect to home.

---

## 🧰 Tech Stack

### Frontend
- **React**: Component-based library for building the UI.
- **React Router**: For routing between pages.
- **TailwindCSS** & **DaisyUI**: For responsive and beautiful design.
- **Swiper**: For implementing sliders in the banner section.

### Enhancements
- **Animate.css**: Smooth animations throughout the site.
- **React-Helmet**: Dynamic titles for each page.
- **React-Loader-Spinner**: Loading indicators for better UX.
- **React-Snowfall**: Adds a snowfall effect for the winter theme.

### Backend
- **Firebase Authentication**: Manages user authentication securely.

---

## 📦 Dependencies

    "animate.css": "^4.1.1",
    "firebase": "^11.0.2",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-helmet": "^6.1.0",
    "react-hot-toast": "^2.4.1",
    "react-icons": "^5.3.0",
    "react-loader-spinner": "^6.1.6",
    "react-router-dom": "^6.28.0",
    "react-snowfall": "^2.1.1",
    "react-tabs": "^6.0.2",
    "react-toastify": "^10.0.6",
    "swiper": "^11.1.14"

---

## 📦 devDependencies

    "@eslint/js": "^9.13.0",
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react": "^4.3.3",
    "autoprefixer": "^10.4.20",
    "daisyui": "^4.12.14",
    "eslint": "^9.13.0",
    "eslint-plugin-react": "^7.37.2",
    "eslint-plugin-react-hooks": "^5.0.0",
    "eslint-plugin-react-refresh": "^0.4.14",
    "globals": "^15.11.0",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.15",
    "vite": "^5.4.10"

---

## 🌐 Project Structure

### **Main Pages**

- **Home Page**: 
   - Adventure Experiences Section with dynamic cards.
   - Banner with Swiper sliders.
   - Two additional sections relevant to eco-adventures.

- **Login & Register Pages**:
   - User-friendly forms with proper validation and error handling.

- **Adventure Detail Page**:
   - Comprehensive details with eco-friendly features.

- **My Profile**:
   - User profile with editing options for name and photo URL.

- **Error Page**:
   - A whimsical 404 page with navigation to home.

---

## 📝 Challenges Faced

- Handling secure routing for private pages.
- Implementing real-time **Google Meet** redirection based on time.
- Designing a visually appealing yet **responsive** layout.
- Auto-filled email in the input field of the **Forgot Password** route.
- **Update user information** and ensure data consistency.

---

## 🔗 Links

- **Live Site**: [Eco-Adventure](https://fusiondeck-228.web.app/)


---

## 🚀 Next Steps & Future Enhancements
- Add more adventure types like eco-friendly road trips, sustainable tourism packages, etc.
- Introduce an interactive map for adventure locations.
- Enable **user-generated content** with reviews and ratings for each eco-adventure.

Thank you for exploring **Eco-Adventure Experiences**! 🌿✨
