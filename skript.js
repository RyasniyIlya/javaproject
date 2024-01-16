
let cardOftherText = document.querySelector('.card-ofther-text')
let cardDemoInput = document.querySelector('.card__demo-input')
cardDemoInput.addEventListener('input', function(){
    let card = cardDemoInput.value
    cardOftherText.textContent = card
} )

let cardOftherPin = document.querySelector('.card-ofther-pin')
let cardDemoInput2 = document.querySelector('.card__demo-input2')
cardDemoInput2.addEventListener('input', function(){
    let pin = cardDemoInput2.value
    cardOftherPin.textContent = pin
} )

let cardOtherRightNumber = document.querySelector('.card-other-right-number')
let cardOtherRightNumberRand = (Math.floor(Math.random()*( 9000 - 1000 ) + 1000 ) )  
let cardOtherRightNumberRandtwo = (Math.floor(Math.random()*( 9000 - 1000 ) + 1000 ) )  
let cardOtherRightNumberRandthree = (Math.floor(Math.random()*( 9000 - 1000 ) + 1000 ) )  
let cardOtherRightNumberRandfour = (Math.floor(Math.random()*( 9000 - 1000 ) + 1000 ) )  

cardOtherRightNumber.textContent =  `${cardOtherRightNumberRand} ${cardOtherRightNumberRandtwo} ${cardOtherRightNumberRandthree} ${cardOtherRightNumberRandfour}` 
