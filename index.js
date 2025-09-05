function grade(){
const grade=document.getElementById("grade");
const output=document.getElementById("output");
const word =document.getElementById("word");

var ans;
var slogan;

const Tamil=prompt("Enter your Tamil Mark");
const English=prompt("Enter your English Mark");
const Maths=prompt("Enter your Maths Mark");
const Science=prompt("Enter your Science Mark");
const Social=prompt("Enter your Social Mark");

const totalMark=parseFloat(Tamil)+parseFloat(English)+parseFloat(Maths)+parseFloat(Science)+parseFloat(Social);
const percentage=totalMark/5;

if(percentage>90){
    ans= "Your Grade is A+" 
    output.innerHTML=ans;

    
    slogan="Hard work, dedication, perseverance – you did it! "
    word.innerText=slogan;

}
else if(percentage>80 && percentage<89){

    ans= "Your Grade is A"
    output.innerText=ans;

    slogan="Awesome! You are near to the Target."
    word.innerText=slogan;

    
}
else if(percentage>70 && percentage<79){
    ans= "Your Grade is B"
    output.innerHTML=ans;


 slogan="You've unlocked a new level of success!"
    word.innerText=slogan;
    

    
}
else if(percentage>60 && percentage<69){
    ans= "Your Grade is C"
    output.innerHTML=ans;


     slogan=" You've unlocked a new level of success! Study well!"
    word.innerText=slogan;
    
    
}
else if(percentage>50 && percentage<59){
    ans= "Your Grade is D" 
    output.innerHTML=ans;

      slogan=" Do not give up, the beginning is always the hardest"
    word.innerText=slogan;

    
}
else if(percentage<50){
    ans= "Your Grade is F" 
     output.innerHTML=ans;

     
      slogan="Don't forget the value and importance of Studies! please overcome from this Grade Soon. "
    word.innerText=slogan;

}



}