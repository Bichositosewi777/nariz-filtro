nosex=0;

nosey=0;

function preload()
{
    nariz_de_payaso=loadImage('https://i.postimg.cc/XqvgDV9Z/nariz-de-payaso-removebg-preview.png');
}

function setup()
{
    canvas=createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    posenet=ml5.poseNet(video, modelloaded);
    posenet.on('pose', gotposes);
}

function modelloaded()
{
    console.log('poseNet is initialied');
}

function gotposes(results)
{
    if(results.length>0)
    {
        console.log(results);
        console.log("nosex= "+results[0].pose.nose.x);
        console.log("nosex= "+results[0].pose.nose.y);
        nosex=results[0].pose.nose.x-15;
        nosey=results[0].pose.nose.y-15;
    }
}

function draw()
{
    image(video, 0, 0, 300, 300);
    image(nariz_de_payaso, nosex, nosey, 50, 50);
    /*s
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(nosex, nosey, 40);*/
}

function take_snapshot()
{
    save('my_selfie.png');
}

