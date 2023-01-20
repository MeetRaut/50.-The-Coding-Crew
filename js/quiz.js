function check () {
    var c=0;
    var q1=document.quiz.Question1.value;
    var q2=document.quiz.Question2.value;
    var q3=document.quiz.Question3.value;
    var q4=document.quiz.Question4.value;
    var q5=document.quiz.Question5.value;
    var q6=document.quiz.Question6.value;
    var q7=document.quiz.Question7.value;
    var q8=document.quiz.Question8.value;
    var q9=document.quiz.Question9.value;
    var result=document.getElementById('result');
    var quiz=document.getElementById("quiz");
    if  (q1=="More than half of the days")  {c++}
    if  (q1=="Nearly every day") {c++}
    if  (q2=="More than half of the days")  {c++}
    if  (q2=="Nearly every day") {c++}
    if  (q3=="More than half of the days")  {c++}
    if  (q3=="Nearly every day") {c++}
    if  (q4=="More than half of the days")  {c++}
    if  (q4=="Nearly every day") {c++}
    if  (q5=="More than half of the days")  {c++}
    if  (q5=="Nearly every day") {c++}
    if  (q6=="More than half of the days")  {c++}
    if  (q6=="Nearly every day") {c++}
    if  (q7=="More than half of the days")  {c++}
    if  (q7=="Nearly every day") {c++}
    if  (q8=="More than half of the days")  {c++}
    if  (q8=="Nearly every day") {c++}
    if  (q9=="More than half of the days")  {c++}
    if  (q9=="Nearly every day") {c++}
    
    quiz.style.display="none";

     if (c<=4) {
        result.textContent="Great news!,You are not in depression,keep taking care of yourself You are doing Great!"

     }
     else {
        result.textContent="It is possible you are in depression,However you can cope with it in many ways,Getting support plays an essential role in overcoming depression. On your own, it can be difficult to maintain a healthy perspective and sustain the effort required to beat depression. At the same time, the very nature of depression makes it difficult to reach out for help. When you're depressed, the tendency is to withdraw and isolate so that connecting to even close family members and friends can be toughYou may feel too exhausted to talk, ashamed at your situation, or guilty for neglecting certain relationships. But this is just the depression talking. Staying connected to other people and taking part in social activities will make a world of difference in your mood and outlook. Reaching out is not a sign of weakness and it won't mean you're a burden to others. Your loved ones care about you and want to help. And if you don't feel that you have anyone to turn to, it's never too late to build new friendships and improve your support network."
     }
    }
    
    
    
   



