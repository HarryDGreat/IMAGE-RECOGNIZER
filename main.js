Webcam.set ({
width:300,
height:300,
image_format:"jpg",
jpg_quality:90
});
camera=document.getElementById("camera");
Webcam.attach("#camera");

function takingimg(){
    Webcam.snap(function(datauri){
        document.getElementById("result").innerHTML="<img id='snapshot' src='"+datauri+"'>";
    });
}
console.log("ml5version:",ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json",modelLoaded);
function modelLoaded(){
    console.log("modelLoaded");
}


function identifyimg(){
    img=document.getElementById("snapshot");
    classifier.classify(img,gotResult);
}

function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("objectname").innerHTML=results[0].label;
        document.getElementById("objectaccuracy").innerHTML=result=[0].confidence.toFixed(3);
    }
}