noseX=0;
noseY=0
function preload() {
    mustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
    }
    function setup() {
        canvas=createCanvas(300,300);
        canvas.center();
        video=createCapture(VIDEO);
        video.hide;
        poseNet=ml5.poseNet(video,modeLoaded);
        poseNet.on('pose' , gotpose);
    }
    function draw() {
Image(video,0,0,300,300);
Image(mustache,noseX,noseY,30,30);
    }
    function take_snapshot(){
        save('myfilter.png');
    }
    function modeLoaded(){
        console.log('poseNet is initonalised');
    }
function gotpose(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("nose x="+noseX);
        console.log("nose y="+ noseY);
    }
}