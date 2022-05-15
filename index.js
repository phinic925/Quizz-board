function result(){
    var b =0;
    var q1 = document.script.question1.value;
    var q2 = document.script.question2.value;
    var q3 = document.script.question3.value;
    var q4 = document.script.question4.value;
    var q5 = document.script.question5.value;
    var result= document .getElementById('result');
    var script = document .getElementById("quizz");
    
    if (q1=="Variables") {b++}
    if (q2=="object-oriented") {b++}
    if (q3=="const") {b++}
    if (q4=="let") {b++}
    if (q5== "in") {b++}
    
    script.style .display ="none";
    if (b<=3) {
        result.textContent ='Your score is ${b}. Try to improve next time.'
    }
    else {
        result .textContent= 'Your score is ${b}. Congrats!'
    }
    
}
