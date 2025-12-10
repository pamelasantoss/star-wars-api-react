# Star Wars Search

A React-based search application to explore detailed information about Star Wars characters using the [SWAPI (Star Wars API)](https://www.swapi.dev/).

**[Live Demo](https://harmonious-dragon-748bee.netlify.app/)**

![Star Wars Search Screenshot](star-wars-search.png)

## About the Project

This is a practice project built with React that allows users to search for their favorite Star Wars characters and discover comprehensive details about them, including:

- **Basic Information**: Birth year, height, skin color, eye color, and hair color
- **Related Data**: Home planet, featured films, species, vehicles, and starships
- **Character Images**: Custom images for popular characters (Luke, Leia, Han Solo, Yoda, Darth Vader, and BB-8)

## Features

- 🔍 Search for Star Wars characters
- 📋 Display detailed character information
- 🖼️ Custom images for main characters
- ⚡ Real-time API data fetching
- 🎨 Clean and intuitive user interface
- 📱 Responsive design with SCSS styling
- ⏳ Loading states and error handling

## Tech Stack

- **React** 18.2.0 - UI library
- **React DOM** - React rendering
- **SASS** - Advanced styling
- **SWAPI** - Star Wars public API

## Getting Started

### Prerequisites

- Node.js installed on your machine
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/pamelasantoss/star-wars-api-react.git
cd star-wars-api-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open in your browser at `http://localhost:3000`

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from create-react-app (irreversible)

## Project Structure

```
src/
├── components/
│   ├── Inicio/          # Main search component
│   ├── InfoCard/        # Character details display
│   │   └── Details/     # Sub-components for specific data
│   ├── Loading/         # Loading indicator
│   ├── Erro/            # Error handling
│   ├── Voltar/          # Back button
│   └── utils/           # Utility functions (fetchData)
├── styles/              # SASS stylesheets
├── images/              # Character images
├── App.js               # Main application component
└── index.js             # React entry point
```

## How to Use

1. Enter a Star Wars character name in the search box
2. Press Enter or click the search button
3. View detailed information about the character
4. Click "Voltar" (Back) to search for another character

## API Reference

This project uses the free [SWAPI API](https://www.swapi.dev/) which provides:
- Character/People data
- Films information
- Starships and vehicles
- Planets
- Species details

## Deployment

The application is deployed on [Netlify](https://www.netlify.com/). To deploy your own version:

1. Build the production version: `npm run build`
2. Connect your GitHub repository to Netlify
3. Deploy directly from the main branch

## Learning Purpose

This project was created to practice and demonstrate React concepts including:
- React Hooks (useState, useEffect)
- Component composition
- API integration and data fetching
- Conditional rendering
- SASS styling and organization

## Acknowledgments

- [SWAPI](https://www.swapi.dev/) - Star Wars public API
- [Create React App](https://create-react-app.dev/) - React development environment
- Star Wars - For the amazing universe to explore

## License

ISC

---

Made with ❤️ by [Pamela Santos](https://pamelasantos.dev.br/)