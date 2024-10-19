document.addEventListener('DOMContentLoaded', function () {
    // Toggle switch functionality
    const toggleWebGazer = document.getElementById('toggle_webgazer_team_vandus');
    if (toggleWebGazer) {
        toggleWebGazer.addEventListener('change', function() {
            if (this.checked) {
                console.log('Switched On');
                // Perform the "on" action
            } else {
                console.log('Switched Off');
                // Perform the "off" action
            }
        });
    }

    // Recalibration option functionality
    const recalibrateOption = document.getElementById('recalibrateOption_webgazer_team_vandus');
    if (recalibrateOption) {
        const stopIcon = recalibrateOption.querySelector('.stop-icon_webgazer_team_vandus');
        recalibrateOption.addEventListener('click', function() {
            this.classList.toggle('selected_webgazer_team_vandus'); // Toggle the 'selected' class

            // Toggle the display of the stop icon
            if (this.classList.contains('selected_webgazer_team_vandus')) {
                stopIcon.style.display = 'inline'; // Show the stop icon
            } else {
                stopIcon.style.display = 'none'; // Hide the stop icon
            }
        });
    }
});
