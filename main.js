function welcomePage(){
//DOM
const time = document.getElementById('time'),
greeting = document.getElementById('greeting'),

focus= document.getElementById('focus');

//options
const showAmPm = true;

//show time
function showTime(){
    let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

    //set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';

    //12hr Format
    hour = hour % 12 || 12;

    //Outout time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}${showAmPm ? amPm : '' }`;

    setTimeout(showTime, 1000);

}

//add zero 
function addZero(n){
    return(parseInt(n, 10) <10 ?    '0' : '') + n;
}

//setbackground and greeting
function setBgGreet(){
    let today = new Date(),
    hour = today.getHours();

if(hour < 12){
    //Morning
    document.body.style.backgroundColor = "#606C88";
    greeting.textContent = 'Good Morning';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
} else if (hour < 18){
    //afternoon
    document.body.style.backgroundColor = "#606C88";
    greeting.textContent = 'Good Afternoon';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
} else{
    //evening
    document.body.style.backgroundColor = "#606C88";
    greeting.textContent = 'Good Evening';
   
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
}
}



function setFocus(e){
    if(e.type === 'keypress'){
        // Make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13){
        localStorage.setItem('focus', e.target.innerText);
        focus.blur();   
        }

    } else{
        localStorage.setItem('focus', e.target.innerText);
    }
}


//Get Name


//Get Focus



focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);




  

//Run
showTime();
setBgGreet();




}

welcomePage();



