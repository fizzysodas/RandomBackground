let btnPushed = document.querySelector('button');
let backGround = document.querySelector('body');
let textColor = document.querySelector('button');
let textBtn = document.querySelector('button');

btnPushed.addEventListener('click', myFunction)


function myFunction() {
 
    let randomNumber = Math.floor(Math.random() * 4);
    

    switch(randomNumber){
        case 0:
            backGround.style.backgroundColor = 'red';
            textBtn.innerHTML = "Don't Touch Me";
            break;
        case 1:
            backGround.style.backgroundColor = 'blue';
            textColor.style.color = 'black';
            textBtn.innerHTML = "You wouldn't";
            break;
        case 2:
            backGround.style.backgroundColor = 'black';
            textColor.style.color = 'white';
            textBtn.innerHTML = "STOP TOUCHING ME";
            break;
        default:
            backGround.style.backgroundColor = 'green';
            textColor.style.color = 'black';
            textBtn.innerHTML = "Fine, Do It!";
    }
}

