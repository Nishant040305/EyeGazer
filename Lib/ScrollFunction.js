// Initialize WebGazer
window.onload = function() {
    webgazer.setGazeListener((data, elapsedTime) => {
        if (data == null) {
            return;
        }

        const x = data.x; // x-coordinate of gaze
        const y = data.y; // y-coordinate of gaze

        const screenHeight = window.innerHeight;
        const scrollSensitivity = 50; // Adjust sensitivity

        // Scrolling behavior
        if (y < scrollSensitivity) {
            window.scrollBy(0, -10); // Scroll up when looking at the top
            showScrollNotification("Scrolling up");
        } else if (y > screenHeight - scrollSensitivity) {
            window.scrollBy(0, 10); // Scroll down when looking at the bottom
            showScrollNotification("Scrolling down");
        }
    }).begin();
};

// Show scrolling notification
function showScrollNotification(message) {
    const notification = document.getElementById('scroll-notification');
    notification.textContent = message;
    notification.style.display = 'block';

    clearTimeout(notification.timeout);
    notification.timeout = setTimeout(() => {
        notification.style.display = 'none';
    }, 1000);
}
