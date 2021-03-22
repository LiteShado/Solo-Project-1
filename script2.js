//variables for on screen elements//
let cnote = document.querySelector(".c-note")
let dnote = document.querySelector(".d-note")
let flask = document.querySelector(".flask1")
let flask2 = document.querySelector(".flask2")
const direction = document.querySelector(".direction")
const directionBold = document.querySelector(".directionBold")
var form = document.querySelector("form");
var log = document.querySelector("#log");

var playerPoints = document.querySelector("#points");

//variables for music//

let cnotemusicsound = new Audio ('Assets/ESM_Vibe_One_Shot_Synth_Alternative_R&B_Piano_Emotion_C_Melodic_Stab_Note_Dusty.wav')
cnotemusicsound.volume = 1.0;

let dnotemusicsound = new Audio ('Assets/ESM_Vibe_One_Shot_Synth_Organic_LoFi_Smeared_D_Melodic_Stab_Note_Dusty.wav')
cnotemusicsound.volume = 0.6;

///////////////////////
//<source class="c-note-music" src="Assets/ESM_Vibe_One_Shot_Synth_Alternative_R&B_Piano_Emotion_C_Melodic_Stab_Note_Dusty.wav" type="audio/mpeg" id="cnotemusic" onclick="play()"></audio></button>
//<source class="d-note-music" src="Assets/ESM_Vibe_One_Shot_Synth_Organic_LoFi_Smeared_D_Melodic_Stab_Note_Dusty.wav" type="audio/mpeg" id="dnotemusic" onclick="play()"></audio></button>//
//<audio controls id="audiocontrol">

///code for making music play////
const cnotemusic = document.querySelector('#cnotechoice').addEventListener('click', () => {
    console.log('test3')
        cnotemusicsound.play();
})

const dnotemusic = document.querySelector('#dnotechoice').addEventListener('click', () => {
    console.log('test4')
        dnotemusicsound.play();
})

//////////////////////////////////

////radio button select code//////

var pointValue = document.getElementById("c-button1").value;

// function cbuttonClicked() {
//     document.querySelector('#c-button1').addEventListener('click', () => {
//     console.log('test5')
// })
// return 5;
// }
// console.log(cbuttonClicked);

let cbuttonClicked = document.querySelector('#c-button1')
let dbuttonClicked = document.querySelector('#d-button1')


var counter = document.querySelector('#points')

cButtonValue = cbuttonClicked.value
cButtonValueNumber = parseInt(cButtonValue, 10)

dButtonValue = dbuttonClicked.value
dButtonValueNumber = parseInt(dButtonValue, 10)

cbuttonClicked.addEventListener('click', () => {
    // document.querySelector('#c-button1') {
    console.log('test5')
        // log.innerText = cbuttonClicked.value;
        // var text = '42px';
        // var integer = parseInt(text, 10);
        // returns 42
    cButtonValueNumber = 0
    counter.innerText = cButtonValueNumber += 5

    function storedPoints(){
        var cButtonPoints = cButtonValueNumber++;
        console.log(cButtonPoints)
        // return 5;
    }
    storedPoints();
});

dbuttonClicked.addEventListener('click', () => {
        // document.querySelector('#c-button1') {
    console.log('test7')
        // log.innerText = dbuttonClicked.value;
    dButtonValueNumber = 0
    counter.innerText = dButtonValueNumber += 3

        ///beginning of function code//
    function storedPoints(){
        var dButtonPoints = dButtonValueNumber++;
        console.log(dButtonPoints)
    }
    storedPoints();
    });


    // localStorage.setItem("storedPoints", )

    //https://stackoverflow.com/questions/28512528/how-to-store-user-typed-value-before-in-to-javascript-variable-before-submit-but

    //Syntax for REMOVING data from localStorage: localStorage.removeItem("key");

    //https://stackoverflow.com/questions/58679452/how-can-i-save-multiple-click-counters-in-localstorage
