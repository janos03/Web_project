window.onload = function() {

    var file = document.getElementById("thefile");
    var audio = document.getElementById("audio");

    file.onchange = function() {
        var files = this.files;
        audio.src = URL.createObjectURL(files[0]);
        audio.load();
        audio.play();
        var context = new AudioContext();
        var src = context.createMediaElementSource(audio);
        var analyser = context.createAnalyser();

        var canvas = document.getElementById("canvas");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        var ctx = canvas.getContext("2d");

        src.connect(analyser);
        analyser.connect(context.destination);

        analyser.fftSize = 256;

        var bufferLength = analyser.frequencyBinCount;
        console.log(bufferLength);

        var dataArray = new Uint8Array(bufferLength);

        var WIDTH = canvas.width;
        var HEIGHT = canvas.height;

        var barWidth = (WIDTH / bufferLength) * 2.5;
        var barHeight;
        var x = 0;

        function renderFrame() {
            requestAnimationFrame(renderFrame);

            x = 0;

            analyser.getByteFrequencyData(dataArray);

            ctx.fillStyle = "#051622";
            ctx.fillRect(0, 0, WIDTH, HEIGHT);
            ctx.shadowBlur = 10;
            ctx.shadowColor = "black";


            for (var i = 0; i < bufferLength; i++) {
                barHeight = dataArray[i] + 100;



                var r = barHeight + (27 * (i / bufferLength));
                var g = 160 * (i / bufferLength);
                var b = 152;

                ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";

                ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

                x += barWidth + 1;
            }
        }

        audio.play();
        renderFrame();


    };
};

r = document.getElementById("red").nodeValue;