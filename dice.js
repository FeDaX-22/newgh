function rollDice(){
    const numOfDice = document.getElementById('textbox').value;
    const diceResult = document.getElementById('diceResult');
    const diceImage = document.getElementById('diceImage');

    const value = [];
    const images =[];

    for(let i = 0;  i < numOfDice; i++){
        const values = Math.floor(Math.random()*6) +1;
        value.push(values)
        images.push(`<img src="image/${values}.png" alt="dice: ${values}">`)
    }
    
    diceResult.textContent = ` you roll ${value.join(', ')}`
    diceImage.innerHTML = images.join('')
}