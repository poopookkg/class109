function adios(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    cbutt = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/K6uL0qbFo/model.json",fartion);
}
function fartion(){
    console.log("model loaded succesfully");
    cbutt.classify(soung);
}
function soung(error,results){
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        b = Math.floor(Math.random()*255)
        r = Math.floor(Math.random()*255)
        g = Math.floor(Math.random()*255)

        document.getElementById("hbutt21").innerHTML = "i can hear-"+results[0].label;
        document.getElementById("hbutt31").innerHTML = "Accuracy-"+(results[0].confidence*100).toFixed(2)+"%";

        document.getElementById("hbutt21").style.color = "rgb(" + r + "," + g + "," + b + ")";
        document.getElementById("hbutt31").style.color = "rgb(" + r + "," + g + "," + b + ")";

        img1 = document.getElementById("ibutt1");
        img2 = document.getElementById("ibutt2");
        img3 = document.getElementById("ibutt3");
        img4 = document.getElementById("ibutt4");

        if (results[0].label=="CLAP")  {
            img1.src = "aliens-01.gif"
            img2.src = "aliens-02.png"
            img3.src = "aliens-03.png"
            img4.src = "aliens-04.png"
        } else if (results[0].label=="JINGLE") {
            img1.src = "aliens-01.png"
            img2.src = "aliens-02.gif"
            img3.src = "aliens-03.png"
            img4.src = "aliens-04.png"
        }
        else if (results[0].label=="TAP") {
            img1.src = "aliens-01.png"
            img2.src = "aliens-02.png"
            img3.src = "aliens-03.gif"
            img4.src = "aliens-04.png"
        }
        else {
            img1.src = "aliens-01.png"
            img2.src = "aliens-02.png"
            img3.src = "aliens-03.png"
            img4.src = "aliens-04.gif"
        }
    }
}