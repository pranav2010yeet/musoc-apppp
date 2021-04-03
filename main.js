leftwristscore=0
rightWristscore=0
song1=""
song2=""
leftwristx=0
leftwristy=0
rightwristx=0
rightwristy=0
song1status=""
song2status=""

function preload(){
    song1 = loadSound("1.mp3");
    song2 = loadSound("2.mp3")
   
}

function setup(){
          canvas=createCanvas(600,400)
          canvas.center()
                    video=createCapture(VIDEO)
                    video.hide()
                    posenet=ml5.poseNet(video,modelloaded)
posenet.on("pose",gotposes)
                } 





function gotposes(results){
    if (results.length>0) {
        console.log(results)
      leftwristx=floor(results[0].pose.leftWrist.x)
      leftwristy=floor(results[0].pose.leftWrist.y)
    rigthwristy=floor(results[0].pose.rightWrist.y)
    rightwristx=floor(results[0].pose.rightWrist.x)
    leftwristscore=results[0].pose.keypoints[9].score
    rightWristscore=results[0].pose.keypoints[10].score
}

}

function modelloaded(){
console.log("loaded")
}




function draw(){
        image(video,0,0,500,500)
   
    song1status=song1.isPlaying()
    song2status=song2.isPlaying()
    fill("red")
    if (rightWristscore>0.2) {
        circle(rightwristx,rightwristy,20)
        song2.stop()
       if (song1status==false) {
        song1.play()
        document.getElementById("status").innerHTML="song 1 is playing"   
       }
    }
    else if (leftWristscore>0.2) {
        circle(leftwristx,leftwristy,20)
        song1.stop()
       if (song2status==false) {
        song2.play()
        document.getElementById("status").innerHTML="song 2 is playing"   
       }
    }
   }
   

    


function play(){
    song.play()
song.setVolume(1)
song.rate(1)
}