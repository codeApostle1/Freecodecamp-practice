let xp = 0;
let health = 100
let gold = 50
let currentWeaponIndex = 0

let fighting;

let monsterHealth;
let inventory = ['sticks'];

// controls
const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');

// text box
const text = document.querySelector('#text');

//xp top bar
const xpText = document.querySelector('#xpText');

//your health
const healthText = document.querySelector('#healthText');

//your gold number
const goldText = document.querySelector('#goldText');

// monster div
const monsterStats = document.querySelector('#monsterStats');


//#monster stat #monster name
const monsterName = document.querySelector('#monsterName');

const monsterHealthText = document.querySelector('#monsterHealth');



// initialize buttons

function goStore() {
    // console.log('Going to store.');
    button1.innerText = 'Buy 10 health (10 gold)';
    button2.innerText = 'Buy weapon (30 gold)';
    button3.innerText = 'Go to town square';

    button1.onclick = buyHealth;
    button2.onclick = buyWeapon;
    button3.onclick = goTown;

    text.innerText = 'You enter the store.';
}
function goCave() {
    console.log("Going to cave.");
    
}



function fightDragon() {
    console.log("Fighting dragon.");
    
}

//events

button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;