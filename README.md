# Around the World 🌍

A modern React application that allows users to explore countries around the world, built with React, Tailwind CSS, and the REST Countries API.

## Features ✨

- View all countries from the REST Countries API
- Search for countries by name
- Filter countries by region
- Click on a country to see detailed information
- Toggle between light and dark mode
- Fully responsive design
- Loading states & error handling
- Modern and clean UI

## Tech Stack 🛠

- React 18
- React Router v6
- Tailwind CSS
- REST Countries API
- Vite

## Getting Started 🚀

1. Clone the repository:
```bash
git clone https://github.com/DORMODO/around-the-world.git
```

2. Install dependencies:
```bash
cd around-the-world
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

## Project Structure 📁

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   ├── CountryCard.jsx
│   ├── CountryList.jsx
│   ├── Loading.jsx
│   └── ShowMessage.jsx
├── pages/
│   ├── Home.jsx
│   ├── Country.jsx
│   ├── NoPage.jsx
│   └── Layout.jsx
├── hooks/
│   └── useFetchData.js
└── App.jsx
```

## Deployment 🌐

The project is ready to be deployed on platform like Vercel.

## Contributing 🤝

Contributions, issues, and feature requests are welcome!

## License 📝

This project is MIT licensed.