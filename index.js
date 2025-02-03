
let computerNumber
let userNumbers = []
let attemps = 0
let maxJogadas = 10

function init(){
   computerNumber = Math.floor(Math.random() * 100 + 1)
}

function compareNumbers(){
   const userNumber =  Number(document.getElementById('inputBox').value)
   userNumbers.push(' ' + userNumber)
   document.getElementById('guesses').innerHTML = userNumbers
   
   if(attemps < maxJogadas){
   if(userNumber > computerNumber){
    document.getElementById('textOutput').innerHTML = 'Seu numero está muito maior'
    document.getElementById('inputBox').value = ''
    attemps++
    document.getElementById('attempts').innerHTML = attemps


   }
   else if (userNumber < computerNumber){
    document.getElementById('textOutput').innerHTML = 'Seu numero está muito menor'
    document.getElementById('inputBox').value = ''
    attemps++
    document.getElementById('attempts').innerHTML = attemps

   }
   else {
    document.getElementById('textOutput').innerHTML = 'Parabens. Você acertou!! 🎉'
    attemps++
    document.getElementById('attempts').innerHTML = attemps
   }


   }
   else {
    document.getElementById('textOutput').innerHTML = 'Você perdeu! 😪 o numero correto era: ' + computerNumber
    


   }
}