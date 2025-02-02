# React Dynamic Input Display

## Overview
This is a simple React application where a user can type their name into an input field, and the name dynamically updates in the heading without requiring a button click.

## Features
- Input field updates the heading in real time.
- Uses React's `useState` for state management.
- Component-based structure with `App.jsx` handling input and `Title.jsx` managing state.

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo-name.git
   cd project-folder
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the application:
   ```sh
   npm run dev
   ```

## File Details

### `Title.jsx`
- Manages the `name` state using `useState`.
- Passes `name` and `setName` to `App.jsx`.
- Displays the dynamically updating heading.

### `App.jsx`
- Accepts `name` and `setName` as props from `Title.jsx`.
- Updates `name` when the user types in the input field.

### `main.jsx`
- Renders `Title.jsx` inside `StrictMode` to mount the React app.

## Usage
1. Open the application in the browser.
2. Type a name into the input field.
3. The heading updates dynamically as you type.

## Technologies Used
- React.js
- JavaScript (ES6+)
- Vite
- CSS (Basic styling)

## Contributing
Feel free to fork this repository and submit a pull request with improvements!

## License
This project is licensed under the MIT License.

