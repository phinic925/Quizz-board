function result(){
    var b =0;
    var q1 = document.script.question1.value;
    var q2 = document.script.question2.value;
    var q3 = document.script.question3.value;
    var q4 = document.script.question4.value;
    var q5 = document.script.question5.value;
    
    if (q1=="javascript is a lightweight programing language") (b++);
    if (q2=="Object-Oriented") (b++);
    if (q3=="const") (b++);
    if (q4=="Both A and B") (b++);
    if (q5=="in") (b++);
    document .write(b);
   

}
function score(){
    var c=0;
    var q6 = document.check.question6.value;
    var q7 = document.check.question7.value;
    var q8 = document.check.question8.value;
    var q9 = document.check.question9.value;
    var q10 = document.check.question10.value;
    
    if (q6=="The contents are displayed by non-JS-based browsers") (c++);
    if (q7=="All of the above") (c++);
    if (q8=="stringify()") (c++);
    if (q9=="Class,prototype,object's extensible flag") (c++);
    if (q10=="All of the above") (c++);
    document .write(c);
    document .getElementById("quiz") .onsubmit();
}