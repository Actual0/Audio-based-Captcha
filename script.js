let btnRandom = document.querySelector('button');
let result = document.querySelector('h1');
let users = ['train', 'siren', 'horn','guitar','laugh','doorbell','firework'];

//Function To select random audio 
function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    return result;
}

//Funtion to load random audio using above function
btnRandom.addEventListener('click', () => {
    let index = getRandomNumber(0, users.length-1);
    result.innerText = users[index];
    if(result.innerText==="train"){
        document.getElementById("mp3player").src = "E:/project/train.wav";
        document.getElementById("audio").load();
    }

    if(result.innerText==="siren"){
        document.getElementById("mp3player").src = "E:/project/siren.wav";
        document.getElementById("audio").load();
    }
    if(result.innerText==="horn"){
        document.getElementById("mp3player").src = "E:/project/horn.wav";
        document.getElementById("audio").load();
    }

    if(result.innerText==="doorbell"){
        document.getElementById("mp3player").src = "E:/project/doorbell.wav";
        document.getElementById("audio").load();
    }

    if(result.innerText==="guitar"){
        document.getElementById("mp3player").src = "E:/project/guitar.wav";
         document.getElementById("audio").load();
    }

    if(result.innerText==="firework"){
        document.getElementById("mp3player").src = "E:/project/firework.wav";
        document.getElementById("audio").load();
    }

    if(result.innerText==="laugh"){
        document.getElementById("mp3player").src = "E:/project/laugh.wav";
         document.getElementById("audio").load();
    }
 
});

//Main function to check the input 
function captcha(){
    var b = document.getElementById('ans').value;
    if(b==result.innerText){
        window.location.replace('file:///E:/project/homepage.html')
    }
    else{
        window.alert("Your input is incorrect");
    }

};





