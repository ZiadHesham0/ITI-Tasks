# Restaurant Website

A fully responsive restaurant website built with HTML5, Tailwind CSS, and DaisyUI. This project was created as a learning exercise to practice **Responsive Web Design (RWD)** and master **Tailwind CSS**.

## 🎯 Project Purpose

This project demonstrates modern web development practices focusing on:
- **Responsive Design**: Fully responsive across mobile, tablet, and desktop devices
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Mobile-First Approach**: Designed and optimized for all screen sizes
- **Clean Code**: Well-structured HTML with semantic markup

## 📁 Project Structure

```
Restaurant Project/
├── index.html              # Home page with hero section and featured meals
├── about.html              # About us page with restaurant story and mission
├── contact.html            # Contact form page
├── service.html            # Services page (ready to be filled)
├── tailwind.config.js      # Tailwind CSS configuration
├── assets/                 # Images and static files
│   └── person-doing-their-cook-job.jpg
├── js/
│   └── script.js          # Mobile menu toggle functionality
└── README.md              # This file
```

## 🎨 Features

### Pages
- **Home (index.html)**: 
  - Hero section with background image
  - Featured meals showcase with grid layout
  - Service cards section
  - Responsive navigation menu
  - Footer with social links

- **About (about.html)**:
  - Restaurant story and mission statement
  - Image showcase section
  - Welcoming narrative content

- **Contact (contact.html)**:
  - Contact form with input fields (Name, Email, Phone, Subject, Message)
  - Professional form styling
  - Call-to-action button

### Responsive Features
- Mobile hamburger menu that collapses on smaller screens
- Fully responsive grid layouts (2-5 columns based on screen size)
- Adaptive navigation bar
- Mobile-optimized images and spacing

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **Tailwind CSS**: Utility-first CSS framework (via CDN)
- **DaisyUI**: Tailwind CSS component library
- **Font Awesome**: Icon library
- **Google Fonts**: Inter font family
- **Vanilla JavaScript**: Mobile menu toggle functionality

## 📱 Responsive Breakpoints

The design uses Tailwind's breakpoints:
- **Mobile**: Default (up to 640px)
- **Tablet**: `sm:` (640px+), `md:` (768px+), `lg:` (1024px+)
- **Desktop**: `xl:` (1280px+), `2xl:` (1536px+)

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No build process or installation required!

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/restaurant-project.git
   cd restaurant-project
   ```

2. **Open in browser**:
   - Simply open `index.html` in your web browser
   - Or use a local server for better performance:

### Using a Local Server (Recommended)

**Using Python 3**:
```bash
python -m http.server 8000
```

**Using Node.js (http-server)**:
```bash
npx http-server
```

**Using VS Code Live Server**:
- Install "Live Server" extension in VS Code
- Right-click `index.html` and select "Open with Live Server"

Then navigate to `http://localhost:8000` (or the port shown in your terminal).

## 📖 Usage

- **Navigation**: Use the top navigation bar to navigate between pages
- **Mobile Menu**: On mobile devices, tap the hamburger icon to open/close the menu
- **Contact Form**: Fill in the contact form and submit to send inquiries

## 🎓 Learning Outcomes

By building this project, I practiced:
- ✅ Responsive web design principles and mobile-first approach
- ✅ Tailwind CSS utility classes and customization
- ✅ Creating flexible grid layouts
- ✅ Responsive navigation patterns
- ✅ Form styling and structure
- ✅ CSS animations and transitions
- ✅ Accessibility best practices
- ✅ Semantic HTML markup

## 🎨 Color Scheme

- **Primary**: Orange (`#ea580c` / `orange-600`)
- **Text**: Zinc/Dark Gray (`zinc-900`)
- **Background**: White, Light Gray, Light Orange (`#FFEDE3`)
- **Accents**: Orange shades and gray tones

## 📝 Notes

- All CSS is loaded from CDN (Tailwind, DaisyUI)
- No build process required - just open in a browser!
- The `service.html` page is ready for additional content
- Images use placeholder paths - replace with actual images
- Form submission requires backend integration (currently display only)

## 🔗 Resources Used

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [DaisyUI Components](https://daisyui.com/)
- [Font Awesome Icons](https://fontawesome.com/)
- [Google Fonts](https://fonts.google.com/)

## 📄 License

This project is open source and available for educational purposes.

## 👨‍💻 Author

Created as a learning project for responsive web design and Tailwind CSS mastery.

---

**Happy Learning!** 🚀

Feel free to fork, modify, and improve this project. If you found this helpful, please consider giving it a star ⭐
