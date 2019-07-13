
$(document).ready(function(){
  

//buttons
var first = 0;
var second = 0;
var third = 0;
var fourth = 0;


//record
var wins = 0;
var losses = 0;


//Scores
var pcScore = 0;
var userScore = 0;



// Pc Random Score
function randomNumberGenarator(min, max) {
    var random = Math.floor(Math.random()*(30)) + min;
    console.log(random)
    return(random)
    
}


function randomGemNumber(){
    var userrandom = Math.floor(Math.random()*11)
    console.log(userrandom)
    return(userrandom)
}

// randomGemNumber()
// randomNumberGenarator(12, 70)



// Start
function begin(){

    // pc and user initial scores

    userScore = 0;
    pcScore = randomNumberGenarator(12, 70)


    // buttons value

    first = randomGemNumber();
    second = randomGemNumber();
    third = randomGemNumber();
    fourth = randomGemNumber();


    // console.log(first);
    // console.log(second);


    // append scores

    $(".tgtscore").html(pcScore)
    $(".userscore").html(userScore)
    

}


function checkScore(){
    if(userScore > pcScore){
        losses++;
        console.log(losses);
        alert('You lost!')
        begin()

    }else if(userScore === pcScore){
        wins++;
        console.log(wins);
        alert('You Won!')
        begin()
    }
}


begin()

  
    
})

