window.onload = function () {
    setInterval(function(){
        let dateObject = new Date();
        let currentTime = dateObject.toLocaleTimeString();
        let documentLocation = document.getElementById('time').innerHTML = currentTime;
    }, 1000);
}