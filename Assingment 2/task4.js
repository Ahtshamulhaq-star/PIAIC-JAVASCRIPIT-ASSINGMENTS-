var eng=prompt("Marks obtained in english");
    var physics=prompt("Marks obtained in english");
var math=prompt("Marks obtained in Math");
Totalmob=parseInt(eng) + parseInt(math) + parseInt(physics);
total=300;
console.log(total);
console.log(Totalmob);
percentage=(Totalmob*100)/total;
console.log(percentage,"%");
if(percentage>=80)
{
    console.log("A+");
    console.log("Excellent");


}
else if(percentage>=70)
{
    console.log("A");
    console.log("Good");
}
else if(percentage>=60)
{
    console.log("B");
    console.log("you need to improve");
}
else{
    console.log("Fail");
    console.log("Sorry");

}