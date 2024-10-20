# Eye Gazer

Eye Gazer is a web-based application that allows users to control web elements and browse the internet hands-free using eye movements. Powered by WebGazer.js, it leverages eye-tracking technology to detect gaze points on a web page, simulating mouse clicks and interactions. This project is ideal for accessibility, hands-free navigation, or even experimental interfaces for human-computer interaction.

## Features

- **Gaze-based Interaction**: Users can hover over and click web elements by focusing their gaze on them.
- **Recalibration**: Allows users to recalibrate their gaze for more accurate interactions.
- **Customizable Gaze Click**: The click can be triggered after a customizable amount of time when the user gazes at an element.
- **Support for Multiple Elements**: Handles different interactive elements such as buttons, text, and scrollable areas(clickable class).

## Technologies

- **WebGazer.js**: A library for eye-tracking using regular webcams, detecting the user's gaze to control the web interface.
- **HTML5 / CSS3 / JavaScript**: Core technologies for building and styling the user interface.
- **JavaScript Modules**: Modular structure to separate calibration, click functions, and other logic.

## Demo

A live demo of Eye Gazer can be experienced using the following steps:

1. Open a webpage of the Eye Gazer.
2. Wait for the gaze click to trigger after focusing on an element for a few seconds.

## Getting Started

### Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/your-username/eye-gazer.git
    cd eye-gazer
    ```


2. Open the project in your browser:

    ```bash
    open index.html
    ```

3. Allow access to the webcam when prompted.

### Project Structure

```bash
EyeGazer/
│
├── Lib/
│   ├── recalibration.js        # Handles the recalibration process
│   ├── clickFunction.js        # Manages gaze-based click functionality
│   └── ScrollFunction.js       # Provides gaze-controlled scrolling functionality
│
├── eyegazerStyles.css          # Main stylesheet for the UI
├── webgazer.js                 # WebGazer.js library for gaze tracking
├── index.html                  # Main HTML file containing the interface
├── background.js               # Script to disable video feed and handle background tasks
├── contentScript.js            # Main logic for gaze tracking and interactions
└── README.md                   # Project documentation
