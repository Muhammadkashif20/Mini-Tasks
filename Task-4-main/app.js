var randomNumber=Math.random()*10
var convert=Math.round(randomNumber)
console.log(convert);

var guessNumber=prompt('enter your Number')
if(guessNumber==convert){
    alert('Good Work')
}
else{
    alert('Not Matched')
}

