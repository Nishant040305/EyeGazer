/* Script related to functions */
    import { recalibrate } from "./Lib/recalibration.js";
    import { startGazeClick } from "./Lib/clickFunction.js";

    // Disable WebGazer's video feed (optional for background operation)
    webgazer.showVideo(false);
    const recalibrateOption = document.getElementById('recalibrateOption_webgazer_team_vandus');
    if(recalibrateOption){
        recalibrateOption.addEventListener('click',function() {
        if(this.classList.contains('selected_webgazer_team_vandus')){
            
            document.getElementById('calibration-container').style.display="none";
        }
        else{
            recalibrate();
            document.getElementById('calibration-container').style.display = "block";
        }
     
    })
    }
    document.body.addEventListener('keydown', function(e) {
        if (e.key === 'r') { // Press 'R' to recalibrate
            recalibrate();
        }
    });
    document.getElementById('btn1').addEventListener('click', () => {
        alert('Button 1 clicked!');
    });
    document.getElementById('btn2').addEventListener('click', () => {
        alert('Button 2 clicked!');
    });

    // Start calibration and gaze click feature on page load
    recalibrate();
    startGazeClick(); // Trigger recalibration and resume gaze tracking
