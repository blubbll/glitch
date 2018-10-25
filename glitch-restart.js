//Webserver restart alle 6 Stunden
const resetter = setTimeout(() => {
    console.log(`Restarting Glitch project...`);
    require('child_process').exec('refresh');
}, glitchRestart.interval * (60000 * 60));
