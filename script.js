var guess=Math.floor(Math.random()*100)+1
function calc()
{
    var n=parseInt(document.getElementById('num').value)
    if(n===guess)
    document.getElementById('result').innerText="Congrats! you got it correctly"
    else if(n>guess)
    document.getElementById('result').innerText="Guess a smaller number"
    else
    document.getElementById('result').innerText="Guess a greater number"
}