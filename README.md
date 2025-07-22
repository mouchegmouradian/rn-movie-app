# Movie App 🎬

A React Native movie application built with Expo that allows users to discover, search, and save their favorite movies.

> **Note**: This project is based on the [JavaScript Mastery YouTube channel tutorial](https://www.youtube.com/@javascriptmastery). It serves as a learning project and implementation of the concepts taught in the tutorial.

## Features

- **Home Screen**: Browse trending and latest movies with a beautiful UI
- **Search**: Search for movies with real-time results
- **Movie Details**: View detailed information about each movie
- **Save Movies**: Save your favorite movies for later viewing (not yet implemented)
- **User Profile**: Manage your account and preferences (not yet implemented)

## Tech Stack

- **React Native** with Expo
- **TypeScript** for type safety
- **NativeWind** (Tailwind CSS for React Native) for styling
- **Expo Router** for navigation
- **Appwrite** for backend services
- **React Native Appwrite** for data management

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (for iOS development)
- Android Studio (for Android development)

### Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd rn-movie-app
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npx expo start
   ```

4. Run on your preferred platform:
   - **iOS**: Press `i` in the terminal or scan the QR code with Expo Go
   - **Android**: Press `a` in the terminal or scan the QR code with Expo Go
   - **Web**: Press `w` in the terminal

## Project Structure

```
rn-movie-app/
├── app/                    # Main app screens using Expo Router
│   ├── (tabs)/            # Tab navigation screens
│   │   ├── index.tsx      # Home screen
│   │   ├── search.tsx     # Search screen
│   │   ├── saved.tsx      # Saved movies screen
│   │   └── profile.tsx    # User profile screen
│   └── movies/            # Movie detail screens
├── components/            # Reusable UI components
├── services/             # API and data services
├── constants/            # App constants and assets
└── interfaces/           # TypeScript interfaces
```

## Screenshots

<!-- Add screenshots here -->
- [Home Screen](./screenshots/home-screen.png)
- [Search Screen](./screenshots/search-screen.png)
- [Movie Details Screen](./screenshots/movie-details-screen.png)

## Acknowledgments

- **JavaScript Mastery**: This project is based on their React Native tutorial series
- **Expo**: For the amazing development platform
- **Appwrite**: For backend services

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.