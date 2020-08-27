function welcomePage(){
//DOM
const time = document.getElementById('time'),
greeting = document.getElementById('greeting'),
name = document.getElementById('name'),
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
    document.body.style.backgroundImage = "url(img/morning1.jpg)";
    greeting.textContent = 'Good Morning';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
} else if (hour < 18){
    //afternoon
    document.body.style.backgroundImage = "url(img/forrest.png)";
    greeting.textContent = 'Good Afternoon';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
} else{
    //evening
    document.body.style.backgroundImage = "url(img/forrest.png)";
    greeting.textContent = 'Good Evening';
    document.body.style.color = '#000';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
}
}

function setName(e){
    if(e.type === 'keypress'){
        // Make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13){
        localStorage.setItem('name', e.target.innerText);
        name.blur();   
        }

    } else{
        localStorage.setItem('name', e.target.innerText);
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
function getName(){
    if (localStorage.getItem('name') === null){
        name.textContent = '[ Enter Name ]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

//Get Focus
function getFocus(){
    if (localStorage.getItem('focus') === null){
        focus.textContent = '[ Enter Focus ]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);




    var quotes = [
            "You only live once, but if you do it right, once is enough.",
            "I am so clever that sometimes I don't understand a single word of what I am saying.",
            "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
            "The most beautiful experience we can have is the mysterious. It is the fundamental emotion that stands at the cradle of true art and true science.\n -Albert Einstein",
            "It is our choices, Harry, that show what we truly are, far more than our abilities.\n -J.K. Rowling, Harry Potter and the Chamber of Secrets",
            "All men who have turned out worth anything have had the chief hand in their own education.\n -Walter Scott",
            "Trust yourself. You know more than you think you do.\n -Benjamin Spock",
            "No one can make you feel inferior without your consent.\n -Eleanor Roosevelt, This is My Story",
            "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.\n -Ralph Waldo Emerson",
            "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.\n -H. Jackson Brown Jr., P.S. I Love You"
            ];

        function newQuote(){
            var randomNumber = Math.floor(Math.random()*quotes.length);
            document.getElementById('quote').innerHTML = '"' + quotes[randomNumber]+'"';
            document.getElementById('quote').style.fontStyle='italic';
        }

//Run
showTime();
setBgGreet();
getFocus();
getName();
newQuote();

}

welcomePage();



