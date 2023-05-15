window.onload = function() {
    window.setInterval(function() {
        const date = new Date();

        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();

        const clock = hours + ":" + minutes + ":" + seconds;
        document.getElementById("clock").innerHTML = clock
    }
    )
}