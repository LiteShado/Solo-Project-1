//variables for on screen elements//
let cnote = document.querySelector(".c-note")
let dnote = document.querySelector(".d-note")
let enote = document.querySelector(".e-note")
let gnote = document.querySelector(".g-note")
let bbnote = document.querySelector(".bb-note")
let flask = document.querySelector(".flask1")
let flask2 = document.querySelector(".flask2")
let flask3 = document.querySelector(".flask3")
let flask4 = document.querySelector(".flask4")
let flask5 = document.querySelector(".flask5")
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

let gnotemusicsound = new Audio ('Assets/PSoul_Piano_Gmaj_Rusty_Piano_Chord.wav')
cnotemusicsound.volume = 0.6;

let enotemusicsound = new Audio ('Assets/RU_PP_Screws_oneshot_short_E5.wav')
cnotemusicsound.volume = 0.6;

let bbnotemusicsound = new Audio ('Assets/SNS_NA_piano_north_Bm.wav')
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
const enotemusic = document.querySelector('#enotechoice').addEventListener('click', () => {
    console.log('test3')
        enotemusicsound.play();
})

const gnotemusic = document.querySelector('#gnotechoice').addEventListener('click', () => {
    console.log('test4')
        gnotemusicsound.play();
})

const bbnotemusic = document.querySelector('#bbnotechoice').addEventListener('click', () => {
    console.log('test5')
        bbnotemusicsound.play();
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
let ebuttonClicked = document.querySelector('#e-button1')
let gbuttonClicked = document.querySelector('#g-button1')
let bbbuttonClicked = document.querySelector('#bb-button1')


var counter = document.querySelector('#points')

cButtonValue = cbuttonClicked.value
cButtonValueNumber = parseInt(cButtonValue, 10)

dButtonValue = dbuttonClicked.value
dButtonValueNumber = parseInt(dButtonValue, 10)

eButtonValue = ebuttonClicked.value
eButtonValueNumber = parseInt(eButtonValue, 10)

gButtonValue = gbuttonClicked.value
gButtonValueNumber = parseInt(gButtonValue, 10)

bbButtonValue = bbbuttonClicked.value
bbButtonValueNumber = parseInt(bbButtonValue, 10)

// function showThePoints(){

        cbuttonClicked.addEventListener('click', () => {
            // document.querySelector('#c-button1') {
            // console.log('test5')
                // log.innerText = cbuttonClicked.value;
                // var text = '42px';
                // var integer = parseInt(text, 10);
                // returns 42
            cButtonValueNumber = 0
            counter.innerText = cButtonValueNumber += 5

            function storedPoints(){
                storedPoints = () => {
                var cButtonPoints = cButtonValueNumber++;
                // console.log(cButtonPoints)
                // return 5;
                const callPoints = window.localStorage.setItem(storedPoints, JSON.stringify(cButtonPoints));
                const callThePoints = window.localStorage.getItem(storedPoints, JSON.parse(cButtonPoints));
                console.log(callThePoints);

            }

        }
                storedPoints();
        });

        dbuttonClicked.addEventListener('click', () => {
                // document.querySelector('#d-button1') {
            // console.log('test7')
                // log.innerText = dbuttonClicked.value;
            dButtonValueNumber = 0
            counter.innerText = dButtonValueNumber += 3

                ///beginning of function code//
            function storedPoints(){
                storedPoints = () => {
                var dButtonPoints = dButtonValueNumber++;
                // console.log(dButtonPoints)
                const callPoints2 = window.localStorage.setItem(storedPoints, JSON.stringify(dButtonPoints));
            // console.log(callPoints);
                const callThePoints2 = window.localStorage.getItem(storedPoints, JSON.parse(dButtonPoints));
                console.log(callThePoints2);
            }

        }
                storedPoints();
        });

        ebuttonClicked.addEventListener('click', () => {
                // document.querySelector('#d-button1') {
            // console.log('test7')
                // log.innerText = dbuttonClicked.value;
            eButtonValueNumber = 0
            counter.innerText = eButtonValueNumber += 3

                ///beginning of function code//
            function storedPoints(){
                storedPoints = () => {
                var eButtonPoints = eButtonValueNumber++;
                // console.log(dButtonPoints)
                const callPoints3 = window.localStorage.setItem(storedPoints, JSON.stringify(eButtonPoints));
            // console.log(callPoints);
                const callThePoints3 = window.localStorage.getItem(storedPoints, JSON.parse(eButtonPoints));
                console.log(callThePoints3);
            }

        }
                storedPoints();
        });


        // function Counter() {
        //         let count = 0;

        //         this.up = function() {
        //           return ++count;
        //         };

        //         this.down = function() {
        //           return --count;
        //         };
        //       }

        // let counter = new Counter();

        //       alert( counter.up() ); // 1
        //       alert( counter.up() ); // 2
        //       alert( counter.down() ); // 1
        //     })






// }
// showThePoints()

    // localStorage.setItem("storedPoints", )

    //https://stackoverflow.com/questions/28512528/how-to-store-user-typed-value-before-in-to-javascript-variable-before-submit-but

    //Syntax for REMOVING data from localStorage: localStorage.removeItem("key");

    //https://stackoverflow.com/questions/58679452/how-can-i-save-multiple-click-counters-in-localstorage


    ///create an object for the counter and a function for calculates between the two///

    //https://javascript.info/task/counter-object-independent
