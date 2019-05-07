// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions= [
    {
        question : "Who created Buffy the Vampire Slayer?",
        imgSrc : "assets/images/BuffyB.jpg",
        choiceA : "Sarah-Michelle Gellar",
        choiceB : "Joss Whedon",
        choiceC : "Shonda Rhimes",
        correct : "B"
    },
    {
        question : "What is the name of the gang?",
        imgSrc : "assets/images/gang.jpg",
        choiceA : "The Little Rascals",
        choiceB : "The Nerd Herd",
        choiceC : "The Scoobies",
        correct : "C"
    },
    {
        question : "Which of the following is NOT a Buffy episode?",
        imgSrc : "assets/images/buffy.jpg",
        choiceA : "Dirty Girls",
        choiceB : "I Was Made to Love You",
        choiceC : "I Fall to Pieces",
        correct : "C"
    },
    {
        question : "Who is the founder of Sunnydale?",
        imgSrc : "assets/images/Sunnydale.jpg",
        choiceA : "Angelus",
        choiceB : "Richard Wilkins",
        choiceC : "Principal Snyder",
        correct : "B"
    },
    {
        question : " What celebrity stole their look from Spike?",
        imgSrc : "assets/images/Spike.jpg",
        choiceA : "Billy Idol",
        choiceB : "David Bowie",
        choiceC : "Justin Timberlake",
        correct : "A"
    },
    {
        question : " What is the name of Tara and Willow's cat?",
        imgSrc : "assets/images/MissKittyFantastico.jpg",
        choiceA : "Trixie",
        choiceB : "Glory",
        choiceC : "Miss Kitty Fantastico",
        correct : "C"
    },
    {
        question : "In which episode does no one speak?",
        imgSrc : "assets/images/gentleman.jpg",
        choiceA : "Shhhhhhh!",
        choiceB : "Hush",
        choiceC : "Silence",
        correct : "B"
    },
    {
        question : "How many episodes feature no vampires?",
        imgSrc : "assets/images/Clem.jpg",
        choiceA : "8",
        choiceB : "2",
        choiceC : "12",
        correct : "A"
    },
    {
        question : "Who is 'Ripper'?",
        imgSrc : "assets/images/darkage.jpg",
        choiceA : "Ethan Rayne",
        choiceB : "Giles",
        choiceC : "Riley Finn",
        correct : "B"
    },
    {
        question : "How many times did Buffy die?",
        imgSrc : "assets/images/gravestone.jpg",
        choiceA : "0",
        choiceB : "1",
        choiceC : "2",
        correct : "C"
    },
]

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

