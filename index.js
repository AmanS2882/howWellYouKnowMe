var readLineSync=require('readline-sync')
var userName=readLineSync.question("What is your name? ");
console.log("Hi "+userName+".Check your score of how much you know Aman.")
var scores=0;
var questions=[{
  question:"Where do Aman Live? ",
  answer:"Allahabad"
},{
   question:"What is Aman's favourite food? ",
   answer:"Samosa"
},{
   question:"Which sports in Aman's favourite? ",
   answer:"Cricket"
},
{
   question:"Which is the favourite IPL team of Aman? ",
   answer:"Mumbai"
}]
for(i=0;i<questions.length;i++){
   name(questions[i].question,questions[i].answer.toLowerCase())
}

function 
 name(question,answer){
  var userName=readLineSync.question(question);
  if(userName.toLowerCase()===answer){
    scores+=1;
  }
 }
 

   console.log("Your score is "+scores);

   

