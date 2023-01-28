//kod za HOLD button
const holdValue = () => {
    if(running === true){
      
        m += i;
        hTwoLeft.innerText = m;
        i=0;

        statusOne.innerText = 0;
        running = false;
        if( hTwoLeft.innerText > 100){
            document.querySelector('.left').style.backgroundColor = "grey";
            
             rollDiceBtn = document.querySelector('.RD').disabled = true;
            holdBtn = document.querySelector('.H').disabled = true;
        }
        }else{
            l += i;
            hTwoRight.innerText = l;
            i=0;
            statusTwo.innerText = 0;
            running = true;
        if( hTwoRight.innerText > 100){
            document.querySelector('.right').style.backgroundColor = "grey";
            let rollDiceBtn = document.querySelector('.RD').disabled = true;
            holdBtn = document.querySelector('.H').disabled = true;
        }
    }
}

// Kod za okretanje kockice
const rollDice = () => {
    let k = 0;
     num = imageArray[Math.floor(Math.random()*imageArray.length)];
     diceDisplay.style.backgroundImage = `${num}`;
     
    if(num == 'url(img/one.jpg)'){
        k = 0;
    }
    if(num == 'url(img/two.jpg)'){
        k = 2;
    }
    if(num == 'url(img/three.jpg)'){
        k = 3;
    }
    if(num == 'url(img/four.jpg)'){
        k = 4;
    }
    if(num == 'url(img/five.jpg)'){
        k = 5;
    }
    if(num == 'url(img/six.jpg)'){
        k = 6;
    }
    
   //Kod za promenu igraca 
    if(running === true){
      
      i += k;
      statusOne.innerText = i;
      document.querySelector('.right').style.backgroundColor = "rgba(245, 245, 245, 0.37)";
      document.querySelector('.left').style.backgroundColor = "lightblue";
       if(num == 'url(img/one.jpg)'){
        statusOne.innerText = 0;
        running = false
        i = 0;
        document.querySelector('.right').style.backgroundColor = "lightblue";
        document.querySelector('.left').style.backgroundColor = "rgba(245, 245, 245, 0.37)";
       }
     }else{
        
        i += k;
        statusTwo.innerText = i;
        document.querySelector('.left').style.backgroundColor = "rgba(245, 245, 245, 0.37)";
        document.querySelector('.right').style.backgroundColor = "lightblue";
        if(num == 'url(img/one.jpg)'){
            statusTwo.innerText = 0;
            running = true;
            i = 0;
            document.querySelector('.left').style.backgroundColor = "lightblue"
            document.querySelector('.right').style.backgroundColor = "rgba(245, 245, 245, 0.37)";
        }
     }
}
let l = 0;
let m = 0;
let i = 0;
let holdBtn = document.querySelector('.H').addEventListener('click', holdValue);
let hTwoLeft = document.querySelector('.hTwoLeft');
let hTwoRight = document.querySelector('.hTwoRight');
let statusOne = document.querySelector('.hthree'); 
let statusTwo = document.querySelector('.hthreeRight');
let running = true;
let rollDiceBtn = document.querySelector('.RD').addEventListener('click', rollDice);
let diceDisplay = document.querySelector('.dice');
let imageArray = ['url(img/one.jpg)', 'url(img/two.jpg)', 'url(img/three.jpg)', 'url(img/four.jpg)', 'url(img/five.jpg)', 'url(img/six.jpg)'];



// Kod za promenu imena igraca
const saveNameChange = () => {
   if(changePlayerOne.value === '' ||  changePlayerTwo.value === ''){
        alert('Moras uneti imena igraca')
   }else if(changePlayerOne.value === changePlayerTwo.value){
        alert('Oba igraca moraju imati unikatna imena');
   }else{
    playerNameOne.innerText = changePlayerOne.value;
    playerNameTwo.innerText = changePlayerTwo.value;
    changePlayerOne.value = '';
    changePlayerTwo.value = '';
   }
}
let changePlayerOne = document.querySelector('.inputOne');
let changePlayerTwo = document.querySelector('.inputTwo');
let saveNameButton = document.querySelector('.saveName').addEventListener('click', saveNameChange);
let playerNameOne = document.querySelector('.nameOne');
let playerNameTwo = document.querySelector('.nameTwo');

// Kod za zapocinjanje nove igre <<------------- Nisam zavrsio!
const resetGame = () =>{
    playerNameOne.innerText = 'PLAYER 1';
    playerNameTwo.innerText = 'PLAYER 2';
    l = 0;
    m = 0;
    i = 0;
    running = true;
    hTwoLeft.innerText = m;
    statusOne.innerText = 0;
    hTwoRight.innerText = l;
    statusTwo.innerText = 0;
    document.querySelector('.left').style.backgroundColor = "rgba(245, 245, 245, 0.01)";
    document.querySelector('.right').style.backgroundColor = "rgba(245, 245, 245, 0.01)";
    rollDiceBtn = document.querySelector('.RD').disabled = false;
    holdBtn = document.querySelector('.H').disabled = false;
}
let newGameButton = document.querySelector('.NG').addEventListener('click', resetGame);

