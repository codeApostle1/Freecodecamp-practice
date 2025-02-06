let xp = 0;
let health = 100
let gold = 250 

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

function goTown() {
    // button1.innerText = 'Go to store';
    // button2.innerText = 'Go to cave';
    // button3.innerText = 'Fight dragon';

    // button1.onclick = goStore;
    // button2.onclick = goCave;
    // button3.onclick = fightDragon;

    // text.innerText = 'You are in the town square. You see a sign that says \"Store\".';
    update(locations[0]);
}

function goStore() {
    // console.log('Going to store.');
    // button1.innerText = 'Buy 10 health (10 gold)';
    // button2.innerText = 'Buy weapon (30 gold)';
    // button3.innerText = 'Go to town square';

    // button1.onclick = buyHealth;
    // button2.onclick = buyWeapon;
    // button3.onclick = goTown;

    // text.innerText = 'You enter the store.';
    update(locations[1]);
}
function goCave() {
   update(locations[2]);
    
}





//events

button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function buyHealth() {

    //assignmentv line
    if (gold >= 10) {
        gold -= 10;
        health += 10;
        
        goldText.innerText = gold;
    healthText.innerText = health;
    } else {
   text.innerText = "You do not have enough gold to buy health."; 
    }

}



function buyWeapon() {
    if (currentWeaponIndex < weapons.length - 1) {
        if (gold >= 30) {
            gold -= 30;
            currentWeaponIndex++;
            goldText.innerText = gold;
    
            let newWeapon = weapons[currentWeaponIndex].name;
    
            text.innerText =  "You now have a " + newWeapon + ".";
    
            //push to the inventory
    
            inventory.push(newWeapon);
    
            text.innerText += " In your inventory you have: " + inventory  
        } else {
            text.innerText = "You do not have enough gold to buy a weapon."
        }  
    } else {
        text.innerText = "You already have the most powerful weapon!"

        //SELLING THE WEAPONS

        // button2.innerText = "Sell weapon for 15 gold";
        button2.innerText = "Sell weapon for 15 gold";
        button2.onclick = sellWeapon
    }
}

//SELL WEAPON FUNCTION
function sellWeapon() {
    if( inventory.length > 1) {
        gold += 15;
        goldText.innerText = gold;

        let currentWeapon = inventory.shift();

        text.innerText = "You sold a " + currentWeapon + "." ;

        text.innerText += " In your inventory you have: " + inventory;
    } else {
        text.innerText = "You cannot sell your last weapon."
}
}

function update (location) {
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];

    button1.onclick = location["button functions"][0];
    button2.onclick = location["button functions"][1];
    button3.onclick = location["button functions"][2];

    // text.innerText = 'You are in the town square. You see a sign that says \"Store\".';

    text.innerText = location.text;
}


//after finising the buy health function, do the buy weapon function

// we create an array for weapons variable

const weapons = [
    {
        name: 'stick',
        power: 5,
    },

    {
        name: 'dagger',
        power: 30,
    },

    {
        name: 'claw hammer',
        power: 50,
    },

    {
        name: 'sword',
        power: 100,
    },

];
// end of weapons arraY

//MONSTERS ARRAY

const monsters = [
    {name: 'slime', level: 2, health:15},
    {name: 'fanged beast', level: 8, health: 60},
    {name: 'dragon', level: 20, health: 300}
]




const locations = [
    {
        name: "town square", 

        "button text":['Go to store', 'Go to cave', 'Fight dragon'], 

        "button functions":[goStore, goCave, fightDragon],

        text: 'You are in the town square. You see a sign that says \"Store\".'
    },

    {
        name: "store",

        "button text": ['Buy 10 health (10 gold)', 'Buy weapon (30 gold)','Go to town square'],

        "button functions":[buyHealth, buyWeapon, goTown],

        text: 'You enter the store.'

    },

    {
        name: "cave",

        "button text": ['Fight slime', 'Fight fanged beast', 'Go to town square'],

        "button functions":[fightSlime, fightBeast, goTown],

        text: 'You enter the cave. You see some monsters.'
    },

    {
        name: 'fight', 

        "button text": ["Attack", "Dodge", "Run"],

        "button functions" : [attack, dodge, goTown],

        text: "You are fighting a monster."
    }
];

function goFight() {
    update(locations[3]);
    monsterHealth = monsters[fighting].health;
    monsterStats.style.display = 'block';
    monsterName.innerText = monsters[fighting].name;
    monsterHealthText.innerText = monsterHealth;
}

function fightSlime() {
  fighting = 0 - monsters[0];
  goFight();
}

function fightBeast() {
 fighting = 1 - monsters[1];
  goFight();
}

function fightDragon() {
    fighting = 2 - monsters[2];
    goFight();
    
}

function attack() {
text.innerText = "The " + monsters[fighting].name + " attacks. " ;

text.innerText += " You attack it with your " + weapons[currentWeaponIndex].name + "." ;

health -= monsters[fighting].level
};

function dodge() {

}
