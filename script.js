//variables for on screen elements//
let cnote = document.querySelector(".c-note")
let dnote = document.querySelector(".d-note")
let flask = document.querySelector(".flask1")
let flask2 = document.querySelector(".flask2")
const direction = document.querySelector(".direction")
const directionBold = document.querySelector(".directionBold")
var form = document.querySelector("form");
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


const cnotechoice = document.querySelector('#c-button1').addEventListener('click', () => {
    console.log('test4')
    // playMusic();
})

let cbuttonClicked = document.querySelector('#c-button1').addEventListener('click', () => {
    console.log('test5')

})

let dbuttonClicked = document.querySelector('#d-button1').addEventListener('click', () => {
    console.log('test6')
})


// const cnotemusic = document.getElementsByClassName("c-note-music")
let flask1Choice = document.querySelector('#flask1choice').addEventListener('click', () => {
    console.log('test')
})

// let flask2Choice = document.querySelector('#flask2choice').addEventListener('click', () => {
//     // console.log('test2')
// })


const submitButton = document.querySelector('#submitbutton').addEventListener('click', () => {
    e.preventDefault();
})

// if (cbuttonClicked = true) {
//     console.log("button clicked")
// } else if (dbuttonClicked = true) {
//     console.log("another button clicked")
// }



let points = document.querySelector('#points')

// const pointsValue = (points.value)




let pointsValue = (submitButton) => {
    (('#c-button1').value) === "c1" || (('#d-button1').value) === "d1"
        pointsValue.value = 5;
        playerPoints.innerText = "5";

}
/////music code/////



// document.getElementById("audiocontrol").controls = true;
// document.getElementById("audiocontrol").controls.download = false;




// async function playMusic() {
//     try {
//         await cnotemusic.play();
//         cnotechoice.classList.add("playing");
//     } catch(err) {
//         cnotechoice.classList.remove("playing");
//     }
// }







//referenced an example provided at https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio//

// form.addEventListener("submit", function(event) {
//     var data = new FormData(form);
//     var output = "";
//     for (const entry of data) {
//       output = output + entry[C] + "=" + entry[D] + "\r";
//     };
//     log.innerText = output;
//     event.preventDefault();
//   }, false);






//possible elixir assignment code //

// const handleClick = (id) => {
//     // is the clicked card the first one for the round or the second?
//     if (firstCardForRound === null) {
//       // it must be the first one
//       firstCardForRound = id
//       // reveal the card
//       document.querySelector('#cell-' + id).innerText = faceDowns[id]
//     } else {
//       // it must be the second one
//       secondCardForRound = id
//       // reveal the card
//       document.querySelector('#cell-' + id).innerText = faceDowns[id]
//       // check for match
//       if (faceDowns[firstCardForRound] === faceDowns[secondCardForRound]) {
//         console.log('match!');
//         // here we would reset the round
//         // set firstCardForRound & secondCardForRound to null
//         // leave them face up: doesn't require any additional action
//       } else {
//         console.log('no match!');
//         // actually we reset the round in both cases!
//         // also hide the two cards, but after a delay with setTimeout
//       }
//     }
//   }

//variables for music//
//https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/play//
