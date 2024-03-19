var colorArray=["green","red","yellow","blue"];
var gameArray=[];
var userClickPatern=[];
var level=0;

$(document).keypress(function(){
    if(level==0)nextSequence(); 
})
function nextSequence()
{   
    userClickPatern=[];
    level++;
    $("h1").text("Level "+level);
    var randomColor=Math.floor(Math.random()*4);
    gameArray.push(colorArray[randomColor]);
    $("#"+colorArray[randomColor]).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio=new Audio("sounds/"+colorArray[randomColor]+".mp3");
    audio.play();   
} 
    

function checkAnswer(index){
    if(userClickPatern[index]==gameArray[index])
    {
        if(userClickPatern.length==gameArray.length)
            setTimeout(function(){
            userClickPatern=[];
            nextSequence();
            },1000);
    }

    else
        gameOver();

}


$(".btn").click(function(){
    var chosenColor=this.getAttribute("id");
    userClickPatern.push(chosenColor);
    
    var audio=new Audio("sounds/"+chosenColor+".mp3");
    audio.play();
    $("#"+chosenColor).addClass("pressed");
    setTimeout(function(){
        $("#"+chosenColor).removeClass("pressed");
    },100);

    checkAnswer(userClickPatern.length-1);        

})
    



function gameOver()
{
    $("body").css("background-color","red");
    setTimeout(function(){
        $("body").css("background-color","#011F3F");
    },200)
    var audio=new Audio("sounds/wrong.mp3");
            audio.play();
    $("h1").text("Game Over, Press Any Key to Restart");
    $(document).keypress(function()
    {
        location.reload();
    })
}
