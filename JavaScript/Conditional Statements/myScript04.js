let Per = prompt("Percentage of Student (0-100) =");
let Grade;

if(Per >= 85 && Per <= 100)
{
    Grade = "A";
}
else if(Per >= 70 && Per <= 84)
{
    Grade = "B";
}
else if(Per >= 55 && Per <= 69)
{
    Grade = "c";
}
else if(Per >= 35 && Per <= 54)
{
    Grade = "D";
}
else
{
    Grade = "Fail";
}

console.log("According to student Percentage Grade is :",Grade);
