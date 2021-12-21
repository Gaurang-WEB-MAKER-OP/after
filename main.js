noseX = 0;
noseY = 0;
difference = 0;
rightWrist = 0;
leftWrist = 0;

function setup() {
    vedio = createCapture(VIDEO);
    VEDIO.SIZE(560, 150);

    poseNet = ml5.poseNet(vedio, modelLoaded);
    poseNet.on('poswe', gotPoses);
}

function modelLoded() {
    console.log('PoseNet Is Initialized!')
}

function gotPoses(results) {

    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX =" + noseX + "noseY =" + noseY);

        leftWrisX = results[0].pose.left.Wrist.x;
        rightWristX = results[0].pose.rightWridt.X;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX  = " + leftWristX + " rightWristX = " + rightWristX + " difference = " + difference);
    }
}

function draw() {
    background('#969A97');

    document.getElementById("sqaure_side").innerHTML = 'Width and Hieght of a sqaure will be = "  + difference+ "Px";
    fill('#F90093');
    stroke('#F900930');
    sqaure(noseX, noseY, differnce);

}