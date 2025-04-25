# Tip Calculator App

![Tip Calculator App](./public/design/desktop-design-completed.jpg)

## Overview

The Tip Calculator App is a responsive web application that calculates the tip and total amount per person based on the bill, tip percentage, and number of people. It provides a simple and elegant user interface for quick tip calculations.

## Table of Contents

- [Features](#features)
- [Live Demo](#live-demo)
- [Screenshots](#screenshots)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Development Process](#development-process)
- [Challenges and Solutions](#challenges-and-solutions)
- [Future Improvements](#future-improvements)
- [Contributing](#contributing)

## Features

- Calculate tip amount per person
- Calculate total amount per person
- Select from predefined tip percentages (5%, 10%, 15%, 25%, 50%)
- Input custom tip percentage
- Input bill amount and number of people
- Error validation for empty fields and zero value inputs
- Responsive design for desktop and mobile devices
- Interactive UI elements with hover and focus states
- Reset functionality

## Live Demo

Check out the live demo: [Tip Calculator App](https://13reath.github.io/Tip-calculator-app/)

## Screenshots

### Desktop View
![Desktop Design](./public/design/desktop-design-completed.jpg)

### Mobile View
![Mobile Design](./public/design/mobile-design.jpg)

### Active States
![Active States](./public/design/active-states.jpg)

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Flexbox and Grid for layout
- Mobile-first responsive design

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/13reath/Tip-calculator-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Tip-calculator-app
   ```

3. Open the `index.html` file in your browser or use a live server extension if you're using VS Code.

## Usage

1. Enter the bill amount in the "Bill" field
2. Select a tip percentage by clicking one of the preset buttons or enter a custom percentage
3. Enter the number of people sharing the bill
4. The tip amount per person and total amount per person will be calculated automatically
5. Click the "RESET" button to clear all inputs and start over

## Project Structure

```
Tip-calculator-app/
├── design/                # Design files and screenshots
│   ├── active-states.jpg
│   ├── desktop-design-completed.jpg
│   ├── desktop-design-empty.jpg
│   ├── desktop-preview.jpg
│   └── mobile-design.jpg
├── images/                # Image assets
│   ├── favicon-32x32.png
│   ├── icon-dollar.svg
│   └── icon-person.svg
├── index.html             # Main HTML file
├── style.css              # CSS styles
├── script.js              # JavaScript functionality
└── README.md              # Project documentation
```

## Development Process

This project was developed following these steps:

1. Set up the basic HTML structure
2. Implemented the CSS styling with a mobile-first approach
3. Added responsive design for desktop views
4. Implemented JavaScript functionality for calculations
5. Added validation for input fields
6. Implemented the reset functionality
7. Tested across different browsers and screen sizes
8. Optimized for performance and accessibility

## Challenges and Solutions

### Challenge 1: Input Validation
- **Problem**: Needed to validate user inputs and show appropriate error messages
- **Solution**: Implemented validation logic to check for empty fields and zero values, along with visual error indicators

### Challenge 2: Responsive Design
- **Problem**: Creating a layout that works well on both mobile and desktop devices
- **Solution**: Used CSS flexbox and grid along with media queries to adjust the layout based on screen size

### Challenge 3: Real-time Calculations
- **Problem**: Updating calculations instantly as users change inputs
- **Solution**: Added event listeners to all input elements to recalculate values on any change

## Future Improvements

- Add currency selection options
- Implement dark/light theme toggle
- Add ability to save favorite tip settings
- Create a history of previous calculations
- Add ability to split the bill unevenly

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request
