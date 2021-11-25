mustacheX=0
mustachey=0

function preload()
{
    mustache=loadImage("https://i.postimg.cc/0y9WkWxy/mustache.png");
}

function setup()
{
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
}

function draw()
{
    image(video,0,0,300,300);
    image(mustache, mustacheX,mustachey,100, 50)
}