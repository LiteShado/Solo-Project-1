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
var audio = document.getElementById("intromusic");
audio.volume=0.2;

var playerPoints = document.querySelector("#points");

document.querySelector('#restart').classList.add('hidden')

document.querySelector('#youwon').classList.remove('active')
document.querySelector('#youwon').classList.add('hidden')

document.querySelector('#youwinpic1').classList.add('hidden')


// window.onload = function() {
//     document.getElementById("intromusic").play();
// }


let submitButton2 = document.querySelector('#submitbutton').addEventListener('click', () => {
    console.log('test3');
    location.reload();
})

document.querySelector('#secondscreen').classList.add('hidden')


// document.querySelector('#firstscreen').classList.add('active')
//https://stackoverflow.com/questions/14356956/playing-audio-after-the-page-loads-in-html


document.querySelector('#pressstart').addEventListener('click', () => {
    document.querySelector('#firstscreen').classList.add('hidden')
    document.querySelector('#secondscreen').classList.remove('hidden')
    document.querySelector('#secondscreen').classList.add('active')
    document.querySelector('#gscaleoption').classList.add('hidden')
    document.getElementById("intromusic").play();

})
document.querySelector('#pressstart').addEventListener('click', () => {
    document.querySelector('#secondscreen').classList.remove('hidden')
})

// document.querySelector('#youlosepic1').classList.add('hidden')
// document.querySelector('#youlosepic2').classList.add('hidden')
document.querySelector('#youlosepic3').classList.add('hidden')
document.querySelector('#youlosepic4').classList.add('hidden')
// document.querySelector('#youlosepic5').classList.add('hidden')
document.querySelector('#youlosepic6').classList.add('hidden')
// document.querySelector('#youlosepic7').classList.add('hidden')


// document.querySelector('#youwinpic1').classList.add('hidden')
document.querySelector('#youwinpic2').classList.add('hidden')



//variables for music//

let intromusic = new Audio ('Assets/dch_100_full_loop_ballet_Cm.wav')
intromusic.volume = 0.5;

let cnotemusicsound = new Audio ('Assets/ESM_Vibe_One_Shot_Synth_Alternative_R&B_Piano_Emotion_C_Melodic_Stab_Note_Dusty.wav')
cnotemusicsound.volume = 1.0;
cnotemusicsound.playbackRate = 1.0;

let dnotemusicsound = new Audio ('Assets/ESM_Vibe_One_Shot_Synth_Organic_LoFi_Smeared_D_Melodic_Stab_Note_Dusty.wav')
cnotemusicsound.volume = 0.6;
cnotemusicsound.playbackRate = 2.0;

let gnotemusicsound = new Audio ('Assets/PSoul_Piano_Gmaj_Rusty_Piano_Chord.wav')
cnotemusicsound.volume = 0.6;
cnotemusicsound.playbackRate = 2.0;

let enotemusicsound = new Audio ('Assets/RU_PP_Screws_oneshot_short_E5.wav')
cnotemusicsound.volume = 0.6;
cnotemusicsound.playbackRate = 2.0;

let bbnotemusicsound = new Audio ('Assets/SNS_NA_piano_north_Bm.wav')
cnotemusicsound.volume = 0.6;
cnotemusicsound.playbackRate = 2.0;

let fsharpnotemusicsound = new Audio ('Assets/RTR_Fmaj7_PianoChord_13.wav')
cnotemusicsound.volume = 0.6;
cnotemusicsound.playbackRate = 2.0;

let esharpnotemusicsound = new Audio ('Assets/SO_LN_piano_chord_maj7_Emaj.wav')
cnotemusicsound.volume = 0.6;
cnotemusicsound.playbackRate = 2.0;

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

const fsharpnotemusic = document.querySelector('#fsharpnotechoice').addEventListener('click', () => {
    console.log('test6')
        fsharpnotemusicsound.play();
})

const esharpnotemusic = document.querySelector('#esharpnotechoice').addEventListener('click', () => {
    console.log('test7')
        esharpnotemusicsound.play();
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
let bbbuttonClicked2 = document.querySelector('#bb-button2')
let fsharpbuttonClicked = document.querySelector('#fsharp-button1')
let esharpbuttonClicked = document.querySelector('#esharp-button1')


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

bbButtonValueNumber2 = bbbuttonClicked2.value
bbButtonValueNumber2 = parseInt(bbButtonValueNumber2, 10)

fsharpButtonValue = fsharpbuttonClicked.value
fsharpButtonValueNumber = parseInt(fsharpButtonValue, 10)

esharpButtonValue = esharpbuttonClicked.value
esharpButtonValueNumber = parseInt(esharpButtonValue, 10)

document.querySelector('#choose3').classList.add('hidden')
document.querySelector('#choose4').classList.add('hidden')
document.querySelector('#gscale').classList.add('hidden')
document.querySelector('#escale').classList.add('hidden')
document.querySelector('#escaleoption').classList.add('hidden')

document.querySelector('#cscaleoption').addEventListener('click', () => {
  document.querySelector('#cnotechoice').classList.add('active')
  document.querySelector('#dnotechoice').classList.add('active')
  document.querySelector('#gnotechoice').classList.add('active')
  document.querySelector('#bbnotechoice').classList.add('active')
  document.querySelector('#enotechoice').classList.add('active')
  document.querySelector('#fsharpnotechoice').classList.add('hidden')
  document.querySelector('#esharpnotechoice').classList.add('hidden')
  document.querySelector('#gscale').classList.add('hidden')
  document.querySelector('#gscaleoption').classList.add('hidden')
  document.querySelector('#fsharp-button1').classList.add('hidden')
  document.querySelector('#fsharpbuttonlabel').classList.add('hidden')
  document.querySelector('#esharp-button1').classList.add('hidden')
  document.querySelector('#esharpbuttonlabel').classList.add('hidden')
  document.querySelector('#escaleoption').classList.add('hidden')
  document.querySelector('#choose3').classList.add('hidden')
  document.querySelector('#choose2').classList.add('hidden')
  document.querySelector('#choose').classList.add('hidden')
  document.querySelector('#bbbuttonlabel2').classList.remove('active')
  document.querySelector('#bbbuttonlabel2').classList.add('hidden')
  document.querySelector('#bb-button2').classList.remove('active')
  document.querySelector('#bb-button2').classList.add('hidden')

})

// document.querySelector('#gscaleoption').addEventListener('click', () => {
//   document.querySelector('#cnotechoice').classList.add('hidden')
//   document.querySelector('#cbuttonchoice').classList.add('hidden')
//   document.querySelector('#c-button1').classList.add('hidden')
//   document.querySelector('#dnotechoice').classList.add('active')
//   document.querySelector('#gnotechoice').classList.add('active')
//   document.querySelector('#bbnotechoice').classList.add('hidden')
//   document.querySelector('#esharpnotechoice').classList.add('add')
//   document.querySelector('#enotechoice').classList.add('active')
//   document.querySelector('#fsharpnotechoice').classList.add('active')
//   document.querySelector('#cscale').classList.add('hidden')
//   document.querySelector('#cscaleoption').classList.add('hidden')
//   document.querySelector('#bb-button1').classList.add('hidden')
//   document.querySelector('#bbbuttonlabel').classList.add('hidden')
// })

// function showThePoints(){

        cbuttonClicked.addEventListener('click', () => {
            // document.querySelector('#c-button1') {
            // console.log('test5')
                // log.innerText = cbuttonClicked.value;
                // var text = '42px';
                // var integer = parseInt(text, 10);
                // returns 42
            document.querySelector('#cnotechoice').classList.remove('active')
            document.querySelector('#cnotechoice').classList.add('hidden')
            document.querySelector('#gscale').classList.add('hidden')
            document.querySelector('#youchoose').classList.add('hidden')
            document.querySelector('#direction').classList.add('hidden')
            document.querySelector('#flask').classList.add('hidden')
            document.querySelector('#cbuttonchoice').classList.remove('active')
            document.querySelector('#dbuttonchoice').classList.remove('active')
            document.querySelector('#dbuttonchoice').classList.add('hidden')
            document.querySelector('#cbuttonchoice').classList.add('hidden')
            document.querySelector('#dnotechoice').classList.remove('active')
            document.querySelector('#dnotechoice').classList.add('hidden')
            document.querySelector('#dbuttonchoice').classList.add('hidden')
            document.querySelector('#gnotechoice').classList.remove('active')
            document.querySelector('#gnotechoice').classList.add('hidden')
            document.querySelector('#gbuttonchoice').classList.add('hidden')
            document.querySelector('#bbnotechoice').classList.remove('active')
            document.querySelector('#bbnotechoice').classList.add('hidden')
            document.querySelector('#bbbuttonlabel').classList.add('hidden')
            document.querySelector('#bbbuttonlabel2').classList.add('hidden')
            document.querySelector('#enotechoice').classList.remove('active')
            document.querySelector('#enotechoice').classList.add('hidden')
            document.querySelector('#ebuttonchoice').classList.add('hidden')
            document.querySelector('#c-button1').classList.add('hidden')
            document.querySelector('#d-button1').classList.remove('active')
            document.querySelector('#d-button1').classList.add('hidden')
            document.querySelector('#g-button1').classList.add('hidden')
            document.querySelector('#e-button1').classList.add('hidden')
            document.querySelector('#bb-button1').classList.add('hidden')
            document.querySelector('#bb-button2').classList.add('hidden')
            document.querySelector('#restart').classList.remove('hidden')
            document.querySelector('#cscale').classList.add('hidden')
            document.querySelector('#escale').classList.remove('active')
            document.querySelector('#escale').classList.add('hidden')

            document.querySelector('#fsharpnotechoice').classList.remove('active')
            document.querySelector('#fsharpnotechoice').classList.add('hidden')
            document.querySelector('#esharpnotechoice').classList.add('hidden')
            document.querySelector('#gscaleoption').classList.remove('active')
            document.querySelector('#gscaleoption').classList.add('hidden')


            document.querySelector('#esharp-button1').classList.add('hidden')
            document.querySelector('#esharpbuttonlabel').classList.add('hidden')
            document.querySelector('#fsharp-button1').classList.add('hidden')
            document.querySelector('#fsharpbuttonlabel').classList.add('hidden')
            document.querySelector('#youlosepic4').classList.add('active')
            document.querySelector('#submitbutton').classList.remove('hidden')
            document.querySelector('#submitbutton').classList.add('active')
            document.querySelector('#restart').classList.remove('hidden')
            document.querySelector('#restart').classList.add('active')
            document.querySelector('#choose4').classList.remove('active')
            document.querySelector('#choose4').classList.add('hidden')





            cButtonValueNumber = ""
            counter.innerText = cButtonValueNumber += "OOPS"

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


            document.querySelector('#cscale').classList.add('hidden')
            document.querySelector('#cscaleoption').classList.add('hidden')
            document.querySelector('#cnotechoice').classList.remove('active')
            document.querySelector('#cnotechoice').classList.add('hidden')
            document.querySelector('#youchoose').classList.add('hidden')
            document.querySelector('#direction').classList.add('hidden')
            document.querySelector('#flask').classList.add('hidden')
            document.querySelector('#cbuttonchoice').classList.remove('active')
            document.querySelector('#cbuttonchoice').classList.add('hidden')
            document.querySelector('#dnotechoice').classList.remove('active')
            document.querySelector('#dnotechoice').classList.add('hidden')
            document.querySelector('#dbuttonchoice').classList.remove('active')
            document.querySelector('#dbuttonchoice').classList.add('hidden')
            document.querySelector('#gnotechoice').classList.remove('active')
            document.querySelector('#gnotechoice').classList.add('hidden')
            document.querySelector('#gbuttonchoice').classList.add('hidden')
            document.querySelector('#bbnotechoice').classList.remove('active')
            document.querySelector('#bbnotechoice').classList.add('hidden')
            document.querySelector('#bbbuttonlabel').classList.add('hidden')
            document.querySelector('#bbbuttonlabel2').classList.add('hidden')
            document.querySelector('#enotechoice').classList.remove('active')
            document.querySelector('#enotechoice').classList.add('hidden')
            document.querySelector('#ebuttonchoice').classList.add('hidden')
            document.querySelector('#c-button1').classList.add('hidden')
            document.querySelector('#d-button1').classList.remove('active')
            document.querySelector('#d-button1').classList.add('hidden')
            document.querySelector('#g-button1').classList.add('hidden')
            document.querySelector('#e-button1').classList.add('hidden')
            document.querySelector('#bb-button1').classList.add('hidden')
            document.querySelector('#esharpbuttonlabel').classList.add('hidden')
            document.querySelector('#fsharpbuttonlabel').classList.add('hidden')
            document.querySelector('#esharp-button1').classList.add('hidden')
            document.querySelector('#fsharp-button1').classList.add('hidden')
            document.querySelector('#fsharpnotechoice').classList.add('hidden')
            document.querySelector('#esharpnotechoice').classList.add('hidden')
            document.querySelector('#gscale').classList.remove('active')
            document.querySelector('#gscale').classList.add('hidden')
            document.querySelector('#gscaleoption').classList.remove('active')
            document.querySelector('#gscaleoption').classList.add('hidden')

            document.querySelector('#restart').classList.remove('hidden')
            document.querySelector('#youlosepic3').classList.add('active')
            document.querySelector('#esharpnotechoice').classList.add('hidden')
            document.querySelector('#fsharpnotechoice').classList.remove('active')
            document.querySelector('#fsharpnotechoice').classList.add('hidden')
            document.querySelector('#choose3').classList.remove('active')
            document.querySelector('#choose3').classList.add('hidden')
            document.querySelector('#submitbutton').classList.remove('hidden')
            document.querySelector('#submitbutton').classList.add('active')
            document.querySelector('#restart').classList.remove('hidden')
            document.querySelector('#restart').classList.add('active')








            dButtonValueNumber = ""
            counter.innerText = dButtonValueNumber += "D'OH"

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

                document.querySelector('#cnotechoice').classList.remove('active')
                document.querySelector('#cnotechoice').classList.add('hidden')
                document.querySelector('#youchoose').classList.add('hidden')
                document.querySelector('#direction').classList.add('hidden')
                document.querySelector('#flask').classList.add('hidden')
                document.querySelector('#cbuttonchoice').classList.add('hidden')
                document.querySelector('#dnotechoice').classList.remove('active')
                document.querySelector('#dnotechoice').classList.add('hidden')
                document.querySelector('#dbuttonchoice').classList.add('hidden')
                document.querySelector('#gnotechoice').classList.remove('active')
                document.querySelector('#gnotechoice').classList.add('hidden')
                document.querySelector('#gbuttonchoice').classList.add('hidden')
                document.querySelector('#bbnotechoice').classList.remove('active')
                document.querySelector('#bbnotechoice').classList.add('hidden')
                document.querySelector('#enotechoice').classList.remove('active')
                document.querySelector('#bbbuttonlabel').classList.add('hidden')
                document.querySelector('#bbbuttonlabel2').classList.add('hidden')
                document.querySelector('#enotechoice').classList.add('hidden')
                document.querySelector('#ebuttonchoice').classList.add('hidden')
                document.querySelector('#c-button1').classList.add('hidden')
                document.querySelector('#d-button1').classList.add('hidden')
                document.querySelector('#g-button1').classList.add('hidden')
                document.querySelector('#e-button1').classList.add('hidden')
                document.querySelector('#bb-button1').classList.add('hidden')
                document.querySelector('#esharpbuttonlabel').classList.add('hidden')
                document.querySelector('#fsharpbuttonlabel').classList.add('hidden')
                document.querySelector('#esharp-button1').classList.add('hidden')
                document.querySelector('#fsharp-button1').classList.add('hidden')
                document.querySelector('#fsharpnotechoice').classList.add('hidden')
                document.querySelector('#esharpnotechoice').classList.add('hidden')
                document.querySelector('#gscale').classList.remove('active')
                document.querySelector('#gscale').classList.add('hidden')
                document.querySelector('#gscaleoption').classList.remove('active')
                document.querySelector('#gscaleoption').classList.add('hidden')
                document.querySelector('#escale').classList.remove('active')
                document.querySelector('#escale').classList.add('hidden')


                document.querySelector('#cscale').classList.add('hidden')
                document.querySelector('#cscaleoption').classList.add('hidden')
                document.querySelector('#restart').classList.remove('hidden')
                document.querySelector('#youlosepic6').classList.add('active')
                document.querySelector('#choose3').classList.add('hidden')
                document.querySelector('#submitbutton').classList.remove('hidden')
                document.querySelector('#submitbutton').classList.add('active')
                document.querySelector('#restart').classList.remove('hidden')
                document.querySelector('#restart').classList.add('active')
                document.querySelector('#choose4').classList.remove('active')
                document.querySelector('#choose4').classList.add('hidden')











            eButtonValueNumber = ""
            counter.innerText = eButtonValueNumber += "GOSH THAT SUCKS"

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


        gbuttonClicked.addEventListener('click', () => {
                // document.querySelector('#d-button1') {
            // console.log('test7')
                // log.innerText = dbuttonClicked.value;

                document.querySelector('#cnotechoice').classList.remove('active')
                document.querySelector('#cnotechoice').classList.add('hidden')
                document.querySelector('#youchoose').classList.add('hidden')
                document.querySelector('#direction').classList.add('hidden')
                document.querySelector('#flask').classList.add('hidden')
                document.querySelector('#cbuttonchoice').classList.remove('active')
                document.querySelector('#cbuttonchoice').classList.add('hidden')
                document.querySelector('#dnotechoice').classList.remove('active')
                document.querySelector('#dnotechoice').classList.add('hidden')
                document.querySelector('#dbuttonchoice').classList.remove('active')
                document.querySelector('#dbuttonchoice').classList.add('hidden')
                document.querySelector('#gnotechoice').classList.remove('active')
                document.querySelector('#gnotechoice').classList.add('hidden')
                document.querySelector('#gbuttonchoice').classList.add('hidden')
                document.querySelector('#bbnotechoice').classList.remove('active')
                document.querySelector('#bbnotechoice').classList.remove('active')
                document.querySelector('#bbnotechoice').classList.add('hidden')
                document.querySelector('#bbbuttonlabel').classList.add('hidden')
                document.querySelector('#bbbuttonlabel2').classList.add('hidden')
                document.querySelector('#enotechoice').classList.remove('active')
                document.querySelector('#enotechoice').classList.add('hidden')
                document.querySelector('#ebuttonchoice').classList.add('hidden')
                document.querySelector('#c-button1').classList.add('hidden')
                document.querySelector('#d-button1').classList.remove('active')
                document.querySelector('#d-button1').classList.add('hidden')
                document.querySelector('#g-button1').classList.add('hidden')
                document.querySelector('#e-button1').classList.add('hidden')
                document.querySelector('#bb-button1').classList.add('hidden')
                document.querySelector('#esharpbuttonlabel').classList.add('hidden')
                document.querySelector('#fsharpbuttonlabel').classList.add('hidden')
                document.querySelector('#esharp-button1').classList.add('hidden')
                document.querySelector('#fsharp-button1').classList.add('hidden')
                document.querySelector('#fsharpnotechoice').classList.remove('active')
                document.querySelector('#fsharpnotechoice').classList.add('hidden')
                document.querySelector('#esharpnotechoice').classList.add('hidden')
                document.querySelector('#gscale').classList.remove('active')
                document.querySelector('#gscale').classList.add('hidden')
                document.querySelector('#gscaleoption').classList.remove('active')
                document.querySelector('#gscaleoption').classList.add('hidden')
                document.querySelector('#escale').classList.remove('active')
                document.querySelector('#escale').classList.add('hidden')


                document.querySelector('#cscale').classList.add('hidden')
                document.querySelector('#cscaleoption').classList.add('hidden')
                document.querySelector('#restart').classList.remove('hidden')
                document.querySelector('#youlosepic3').classList.add('active')
                document.querySelector('#choose3').classList.add('hidden')
                document.querySelector('#submitbutton').classList.remove('hidden')
                document.querySelector('#submitbutton').classList.add('active')
                document.querySelector('#restart').classList.remove('hidden')
                document.querySelector('#restart').classList.add('active')
                document.querySelector('#choose4').classList.remove('active')
                document.querySelector('#choose4').classList.add('hidden')











            gButtonValueNumber = ""
            counter.innerText = gButtonValueNumber += "YIKES!!"

                ///beginning of function code//
            function storedPoints(){
                storedPoints = () => {
                var gButtonPoints = gButtonValueNumber++;
                // console.log(dButtonPoints)
                const callPoints3 = window.localStorage.setItem(storedPoints, JSON.stringify(gButtonPoints));
            // console.log(callPoints);
                const callThePoints3 = window.localStorage.getItem(storedPoints, JSON.parse(gButtonPoints));
                console.log(callThePoints4);
            }

        }
                storedPoints();
        });

        bbbuttonClicked.addEventListener('click', () => {
                // document.querySelector('#d-button1') {
            // console.log('test7')
                // log.innerText = dbuttonClicked.value;

                document.querySelector('#cnotechoice').classList.add('hidden')
                document.querySelector('#youchoose').classList.add('hidden')
                document.querySelector('#direction').classList.add('hidden')
                document.querySelector('#flask').classList.add('hidden')
                document.querySelector('#cbuttonchoice').classList.add('hidden')
                document.querySelector('#dnotechoice').classList.add('hidden')
                document.querySelector('#dbuttonchoice').classList.add('hidden')
                document.querySelector('#gnotechoice').classList.add('hidden')
                document.querySelector('#gbuttonchoice').classList.add('hidden')
                document.querySelector('#bbnotechoice').classList.add('hidden')
                document.querySelector('#bbbuttonlabel').classList.add('hidden')
                document.querySelector('#bbbuttonlabel2').classList.add('hidden')
                document.querySelector('#enotechoice').classList.add('hidden')
                document.querySelector('#ebuttonchoice').classList.add('hidden')
                document.querySelector('#c-button1').classList.add('hidden')
                document.querySelector('#d-button1').classList.add('hidden')
                document.querySelector('#g-button1').classList.add('hidden')
                document.querySelector('#e-button1').classList.add('hidden')
                document.querySelector('#bb-button1').classList.add('hidden')
                document.querySelector('#esharpbuttonlabel').classList.add('hidden')
                document.querySelector('#fsharpbuttonlabel').classList.add('hidden')
                document.querySelector('#esharp-button1').classList.add('hidden')
                document.querySelector('#fsharp-button1').classList.add('hidden')
                document.querySelector('#fsharpnotechoice').classList.add('hidden')
                document.querySelector('#esharpnotechoice').classList.add('hidden')
                document.querySelector('#gscale').classList.add('hidden')
                document.querySelector('#cscale').classList.add('hidden')
                document.querySelector('#cscaleoption').classList.add('hidden')
                document.querySelector('#restart').classList.remove('hidden')
                document.querySelector('#youwinpic2').classList.add('active')
                document.querySelector('#gscaleoption').classList.remove('hidden')
                document.querySelector('#choose3').classList.remove('hidden')
                document.querySelector('#choose3').classList.add('active')
                document.querySelector('#restart').classList.remove('active')
                document.querySelector('#restart').classList.add('hidden')
                document.querySelector('#submitbutton').classList.remove('active')
                document.querySelector('#submitbutton').classList.add('hidden')










            bbButtonValueNumber = ""
            counter.innerText = bbButtonValueNumber += "GOOD JOB!"

                ///beginning of function code//
            function storedPoints(){
                storedPoints = () => {
                var bbButtonPoints = bbButtonValueNumber++;
                // console.log(dButtonPoints)
                const callPoints5 = window.localStorage.setItem(storedPoints, JSON.stringify(bbButtonPoints));
            // console.log(callPoints);
                const callThePoints5 = window.localStorage.getItem(storedPoints, JSON.parse(bbButtonPoints));
                console.log(callThePoints5);
            }

        }
                storedPoints();
        });


        fsharpbuttonClicked.addEventListener('click', () => {
                // document.querySelector('#d-button1') {
            // console.log('test7')
                // log.innerText = dbuttonClicked.value;

                document.querySelector('#cnotechoice').classList.remove('active')
                document.querySelector('#cnotechoice').classList.add('hidden')
                document.querySelector('#youchoose').classList.add('hidden')
                document.querySelector('#direction').classList.add('hidden')
                document.querySelector('#flask').classList.add('hidden')
                document.querySelector('#cbuttonchoice').classList.remove('active')
                document.querySelector('#cbuttonchoice').classList.add('hidden')
                document.querySelector('#dnotechoice').classList.remove('active')
                document.querySelector('#dnotechoice').classList.add('hidden')
                document.querySelector('#dbuttonchoice').classList.remove('active')
                document.querySelector('#dbuttonchoice').classList.add('hidden')
                document.querySelector('#gnotechoice').classList.remove('active')
                document.querySelector('#gnotechoice').classList.add('hidden')
                document.querySelector('#gbuttonchoice').classList.remove('active')
                document.querySelector('#gbuttonchoice').classList.add('hidden')
                document.querySelector('#bbnotechoice').classList.remove('active')
                document.querySelector('#bbnotechoice').classList.add('hidden')
                document.querySelector('#bbbuttonlabel').classList.remove('active')
                document.querySelector('#bbbuttonlabel').classList.add('hidden')
                document.querySelector('#bbbuttonlabel2').classList.remove('active')
                document.querySelector('#bbbuttonlabel2').classList.add('hidden')
                document.querySelector('#enotechoice').classList.remove('active')
                document.querySelector('#enotechoice').classList.add('hidden')
                document.querySelector('#ebuttonchoice').classList.remove('active')
                document.querySelector('#ebuttonchoice').classList.add('hidden')
                document.querySelector('#c-button1').classList.remove('active')
                document.querySelector('#c-button1').classList.add('hidden')
                document.querySelector('#d-button1').classList.remove('active')
                document.querySelector('#d-button1').classList.add('hidden')
                document.querySelector('#g-button1').classList.remove('active')
                document.querySelector('#g-button1').classList.add('hidden')
                document.querySelector('#e-button1').classList.remove('active')
                document.querySelector('#e-button1').classList.add('hidden')
                document.querySelector('#bb-button1').classList.remove('active')
                document.querySelector('#bb-button1').classList.add('hidden')
                document.querySelector('#esharpbuttonlabel').classList.add('hidden')
                document.querySelector('#fsharpbuttonlabel').classList.remove('active')
                document.querySelector('#fsharpbuttonlabel').classList.add('hidden')
                document.querySelector('#esharp-button1').classList.add('hidden')
                document.querySelector('#fsharp-button1').classList.remove('active')
                document.querySelector('#fsharp-button1').classList.add('hidden')
                document.querySelector('#fsharpnotechoice').classList.remove('active')
                document.querySelector('#fsharpnotechoice').classList.add('hidden')
                document.querySelector('#esharpnotechoice').classList.add('hidden')
                document.querySelector('#gscale').classList.remove('active')
                document.querySelector('#gscale').classList.add('hidden')
                document.querySelector('#escale').classList.remove('active')
                document.querySelector('#escale').classList.add('hidden')
                document.querySelector('#gscaleoption').classList.remove('active')
                document.querySelector('#gscaleoption').classList.add('hidden')

                document.querySelector('#cscale').classList.add('hidden')
                document.querySelector('#cscaleoption').classList.add('hidden')
                document.querySelector('#restart').classList.remove('hidden')
                document.querySelector('#youlosepic4').classList.add('active')
                document.querySelector('#choose3').classList.add('hidden')
                document.querySelector('#choose4').classList.remove('active')
                document.querySelector('#choose4').classList.add('hidden')
                document.querySelector('#submitbutton').classList.remove('hidden')
                document.querySelector('#submitbutton').classList.add('active')
                document.querySelector('#restart').classList.remove('active')
                document.querySelector('#restart').classList.add('hidden')










            fsharpButtonValueNumber = ""
            counter.innerText = fsharpButtonValueNumber += "No Baby what is you doin.."

                ///beginning of function code//
            function storedPoints(){
                storedPoints = () => {
                var fsharpButtonPoints = fsharpButtonValueNumber++;
                // console.log(dButtonPoints)
                const callPoints6 = window.localStorage.setItem(storedPoints, JSON.stringify(fsharpButtonPoints));
            // console.log(callPoints);
                const callThePoints6 = window.localStorage.getItem(storedPoints, JSON.parse(fsharpButtonPoints));
                console.log(callThePoints6);
            }

        }
                storedPoints();
        });

        // esharpbuttonClicked.addEventListener('click', () => {
        //         // document.querySelector('#d-button1') {
        //     // console.log('test7')
        //         // log.innerText = dbuttonClicked.value;

        //         document.querySelector('#cnotechoice').classList.remove('active')
        //         document.querySelector('#cnotechoice').classList.add('hidden')
        //         document.querySelector('#youchoose').classList.add('hidden')
        //         document.querySelector('#direction').classList.add('hidden')
        //         document.querySelector('#flask').classList.add('hidden')
        //         document.querySelector('#cbuttonchoice').classList.remove('active')
        //         document.querySelector('#cbuttonchoice').classList.add('hidden')
        //         document.querySelector('#dnotechoice').classList.remove('active')
        //         document.querySelector('#dnotechoice').classList.add('hidden')
        //         document.querySelector('#dbuttonchoice').classList.add('hidden')
        //         document.querySelector('#gnotechoice').classList.add('hidden')
        //         document.querySelector('#gbuttonchoice').classList.add('hidden')
        //         document.querySelector('#bbnotechoice').classList.add('hidden')
        //         document.querySelector('#bbbuttonlabel').classList.add('hidden')
        //         document.querySelector('#enotechoice').classList.add('hidden')
        //         document.querySelector('#ebuttonchoice').classList.add('hidden')
        //         document.querySelector('#c-button1').classList.remove('active')
        //         document.querySelector('#c-button1').classList.add('hidden')
        //         document.querySelector('#d-button1').classList.remove('active')
        //         document.querySelector('#d-button1').classList.add('hidden')
        //         document.querySelector('#g-button1').classList.remove('active')
        //         document.querySelector('#g-button1').classList.add('hidden')
        //         document.querySelector('#e-button1').classList.add('hidden')
        //         document.querySelector('#bb-button1').classList.add('hidden')
        //         document.querySelector('#esharpbuttonlabel').classList.add('hidden')
        //         document.querySelector('#fsharpbuttonlabel').classList.add('hidden')
        //         document.querySelector('#esharp-button1').classList.add('hidden')
        //         document.querySelector('#fsharp-button1').classList.remove('active')
        //         document.querySelector('#fsharp-button1').classList.add('hidden')
        //         document.querySelector('#fsharpnotechoice').classList.add('hidden')
        //         document.querySelector('#esharpnotechoice').classList.add('hidden')
        //         document.querySelector('#gscale').classList.add('hidden')
        //         document.querySelector('#cscale').classList.add('hidden')
        //         document.querySelector('#cscaleoption').classList.add('hidden')
        //         document.querySelector('#restart').classList.remove('hidden')
        //         document.querySelector('#youwinpic2').classList.add('active')
        //         document.querySelector('#choose3').classList.add('hidden')







        //     esharpButtonValueNumber = ""
        //     counter.innerText = esharpButtonValueNumber += "YOU IS SMART.."

        //         ///beginning of function code//
        //     function storedPoints(){
        //         storedPoints = () => {
        //         var esharpButtonPoints = esharpButtonValueNumber++;
        //         // console.log(dButtonPoints)
        //         const callPoints7 = window.localStorage.setItem(storedPoints, JSON.stringify(esharpButtonPoints));
        //     // console.log(callPoints);
        //         const callThePoints7 = window.localStorage.getItem(storedPoints, JSON.parse(esharpButtonPoints));
        //         console.log(callThePoints7);
        //     }

        // }
        //         storedPoints();
        // });




        //////G MAJOR CODE

        document.querySelector('#gscaleoption').addEventListener('click', () => {
            document.querySelector('#cnotechoice').classList.remove('hidden')
            document.querySelector('#cnotechoice').classList.add('active')
            document.querySelector('#cbuttonchoice').classList.remove('hidden')
            document.querySelector('#cbuttonchoice').classList.add('active')
            document.querySelector('#c-button1').classList.add('hidden')
            document.querySelector('#dnotechoice').classList.remove('hidden')
            document.querySelector('#dbuttonchoice').classList.remove('hidden')
            document.querySelector('#d-button1').classList.remove('hidden')
            document.querySelector('#dnotechoice').classList.add('active')
            document.querySelector('#dbuttonchoice').classList.add('active')
            document.querySelector('#d-button1').classList.add('active')
            document.querySelector('#dnotechoice').classList.add('active')
            document.querySelector('#gnotechoice').classList.add('active')
            document.querySelector('#esharpnotechoice').classList.add('add')
            document.querySelector('#enotechoice').classList.add('active')
            document.querySelector('#fsharpnotechoice').classList.add('active')
            document.querySelector('#cscale').classList.add('hidden')
            document.querySelector('#cscaleoption').classList.add('hidden')
            document.querySelector('#bb-button1').classList.remove('active')
            document.querySelector('#bbbuttonlabel').classList.remove('active')
            document.querySelector('#bbbuttonlabel2').classList.remove('active')
            document.querySelector('#bb-button1').classList.add('hidden')
            document.querySelector('#bbbuttonlabel').classList.add('hidden')
            document.querySelector('#bbbuttonlabel2').classList.add('hidden')
            document.querySelector('#bbnotechoice').classList.remove('active')
            document.querySelector('#bbnotechoice').classList.add('hidden')
            document.querySelector('#gscale').classList.remove('hidden')
            document.querySelector('#dnotechoice').classList.add('hidden')
            document.querySelector('#dbuttonchoice').classList.add('hidden')
            document.querySelector('#gnotechoice').classList.remove('hidden')
            document.querySelector('#gbuttonchoice').classList.remove('hidden')
            document.querySelector('#enotechoice').classList.remove('active')
            document.querySelector('#ebuttonchoice').classList.remove('active')
            document.querySelector('#enotechoice').classList.add('hidden')
            document.querySelector('#ebuttonchoice').classList.add('hidden')
            document.querySelector('#c-button1').classList.remove('hidden')
            document.querySelector('#d-button1').classList.remove('hidden')
            document.querySelector('#g-button1').classList.remove('hidden')
            document.querySelector('#fsharpnotechoice').classList.remove('hidden')
            document.querySelector('#esharpnotechoice').classList.remove('hidden')
            document.querySelector('#esharp-button1').classList.remove('hidden')
            document.querySelector('#esharpbuttonlabel').classList.remove('hidden')
            document.querySelector('#fsharp-button1').classList.remove('hidden')
            document.querySelector('#fsharpbuttonlabel').classList.remove('hidden')
            document.querySelector('#youwinpic2').classList.remove('active')
            document.querySelector('#youwinpic2').classList.add('hidden')
            document.querySelector('#choose3').classList.remove('active')
            document.querySelector('#choose3').classList.add('hidden')



            esharpbuttonClicked.addEventListener('click', () => {
                // document.querySelector('#d-button1') {
            // console.log('test7')
                // log.innerText = dbuttonClicked.value;

                document.querySelector('#cnotechoice').classList.remove('active')
                document.querySelector('#cnotechoice').classList.add('hidden')
                document.querySelector('#youchoose').classList.add('hidden')
                document.querySelector('#direction').classList.add('hidden')
                document.querySelector('#flask').classList.add('hidden')
                document.querySelector('#cbuttonchoice').classList.remove('active')
                document.querySelector('#cbuttonchoice').classList.add('hidden')
                document.querySelector('#dnotechoice').classList.remove('active')
                document.querySelector('#dnotechoice').classList.add('hidden')
                document.querySelector('#dbuttonchoice').classList.remove('active')
                document.querySelector('#dbuttonchoice').classList.add('hidden')
                document.querySelector('#gnotechoice').classList.remove('active')
                document.querySelector('#gnotechoice').classList.add('hidden')
                document.querySelector('#gbuttonchoice').classList.add('hidden')
                document.querySelector('#bbnotechoice').classList.remove('active')
                document.querySelector('#bbnotechoice').classList.add('hidden')
                document.querySelector('#bbbuttonlabel').classList.add('hidden')
                document.querySelector('#bbbuttonlabel2').classList.remove('active')
                document.querySelector('#bbbuttonlabel2').classList.add('hidden')
                document.querySelector('#bbbuttonlabel').classList.remove('active')
                document.querySelector('#bbbuttonlabel').classList.add('hidden')
                document.querySelector('#enotechoice').classList.remove('active')
                document.querySelector('#enotechoice').classList.add('hidden')
                document.querySelector('#ebuttonchoice').classList.remove('active')
                document.querySelector('#ebuttonchoice').classList.add('hidden')
                document.querySelector('#c-button1').classList.remove('active')
                document.querySelector('#c-button1').classList.add('hidden')
                document.querySelector('#d-button1').classList.remove('active')
                document.querySelector('#d-button1').classList.add('hidden')
                document.querySelector('#g-button1').classList.remove('active')
                document.querySelector('#g-button1').classList.add('hidden')
                document.querySelector('#e-button1').classList.add('hidden')
                document.querySelector('#bb-button1').classList.remove('active')
                document.querySelector('#bb-button1').classList.add('hidden')
                document.querySelector('#bb-button2').classList.remove('active')
                document.querySelector('#bb-button2').classList.add('hidden')
                document.querySelector('#esharpbuttonlabel').classList.add('hidden')
                document.querySelector('#fsharpbuttonlabel').classList.remove('active')
                document.querySelector('#fsharpbuttonlabel').classList.add('hidden')
                document.querySelector('#esharp-button1').classList.add('hidden')
                document.querySelector('#fsharp-button1').classList.remove('active')
                document.querySelector('#fsharp-button1').classList.add('hidden')
                document.querySelector('#fsharpnotechoice').classList.remove('active')
                document.querySelector('#fsharpnotechoice').classList.add('hidden')
                document.querySelector('#esharpnotechoice').classList.add('hidden')
                document.querySelector('#gscale').classList.remove('active')
                document.querySelector('#gscale').classList.add('hidden')
                document.querySelector('#gscaleoption').classList.remove('active')
                document.querySelector('#gscaleoption').classList.add('hidden')
                document.querySelector('#cscale').classList.add('hidden')
                document.querySelector('#cscaleoption').classList.add('hidden')
                document.querySelector('#restart').classList.remove('hidden')
                document.querySelector('#youwinpic2').classList.add('active')
                document.querySelector('#choose3').classList.add('hidden')
                document.querySelector('#choose4').classList.remove('hidden')
                document.querySelector('#choose4').classList.add('active')
                document.querySelector('#gscaleoption').classList.remove('active')
                document.querySelector('#gscaleoption').classList.add('hidden')
                document.querySelector('#restart').classList.remove('active')
                document.querySelector('#restart').classList.add('hidden')


                // document.querySelector('#escale').classList.remove('hidden')
                // document.querySelector('#escale').classList.add('active')
                document.querySelector('#escaleoption').classList.remove('hidden')
                document.querySelector('#escaleoption').classList.add('active')







            esharpButtonValueNumber = ""
            counter.innerText = esharpButtonValueNumber += "YOU IS SMART.."

                ///beginning of function code//
            // function storedPoints(){
            //     storedPoints = () => {
            //     var esharpButtonPoints = esharpButtonValueNumber++;
            //     // console.log(dButtonPoints)
            //     const callPoints7 = window.localStorage.setItem(storedPoints, JSON.stringify(esharpButtonPoints));
            // // console.log(callPoints);
            //     const callThePoints7 = window.localStorage.getItem(storedPoints, JSON.parse(esharpButtonPoints));
            //     console.log(callThePoints7);

            })
        });


        document.querySelector('#escaleoption').addEventListener('click', () => {
                    document.querySelector('#gnotechoice').classList.remove('hidden')
                    document.querySelector('#gnotechoice').classList.add('active')
                    document.querySelector('#gbuttonchoice').classList.remove('hidden')
                    document.querySelector('#gbuttonchoice').classList.add('active')
                    document.querySelector('#g-button1').classList.remove('hidden')
                    document.querySelector('#g-button1').classList.add('active')
                    document.querySelector('#enotechoice').classList.remove('hidden')
                    document.querySelector('#enotechoice').classList.add('active')
                    document.querySelector('#ebuttonchoice').classList.remove('hidden')
                    document.querySelector('#ebuttonchoice').classList.add('active')
                    document.querySelector('#e-button1').classList.remove('hidden')
                    document.querySelector('#e-button1').classList.add('active')
                    document.querySelector('#fsharpnotechoice').classList.remove('hidden')
                    document.querySelector('#fsharpnotechoice').classList.add('active')
                    document.querySelector('#fsharpbuttonlabel').classList.remove('hidden')
                    document.querySelector('#fsharpbuttonlabel').classList.add('active')
                    document.querySelector('#fsharp-button1').classList.remove('hidden')
                    document.querySelector('#fsharp-button1').classList.add('active')
                    document.querySelector('#cnotechoice').classList.remove('hidden')
                    document.querySelector('#cnotechoice').classList.add('active')
                    document.querySelector('#cbuttonchoice').classList.remove('hidden')
                    document.querySelector('#cbuttonchoice').classList.add('active')
                    document.querySelector('#c-button1').classList.remove('hidden')
                    document.querySelector('#c-button1').classList.add('active')
                    document.querySelector('#bbnotechoice').classList.remove('hidden')
                    document.querySelector('#bbnotechoice').classList.add('active')
                    document.querySelector('#bbbuttonlabel2').classList.remove('hidden')
                    document.querySelector('#bbbuttonlabel2').classList.add('active')
                    document.querySelector('#bb-button2').classList.remove('hidden')
                    document.querySelector('#bb-button2').classList.add('active')
                    document.querySelector('#bbbuttonlabel').classList.remove('active')
                    document.querySelector('#bbbuttonlabel').classList.add('hidden')
                    document.querySelector('#bb-button1').classList.remove('active')
                    document.querySelector('#bb-button1').classList.add('hidden')
                    // document.querySelector('#esharpnotechoice').classList.add('add')
                    // document.querySelector('#enotechoice').classList.add('active')
                    // document.querySelector('#fsharpnotechoice').classList.add('active')
                    document.querySelector('#cscale').classList.remove('active')
                    document.querySelector('#cscale').classList.add('hidden')
                    document.querySelector('#cscaleoption').classList.remove('active')
                    document.querySelector('#cscaleoption').classList.add('hidden')
                    document.querySelector('#escaleoption').classList.remove('active')
                    document.querySelector('#escaleoption').classList.add('hidden')
                    // document.querySelector('#bb-button1').classList.remove('active')
                    document.querySelector('#escale').classList.remove('hidden')
                    document.querySelector('#escale').classList.add('active')
                    // document.querySelector('#enotechoice').classList.remove('active')
                    // document.querySelector('#ebuttonchoice').classList.remove('active')
                    // document.querySelector('#enotechoice').classList.add('hidden')
                    // document.querySelector('#ebuttonchoice').classList.add('hidden')
                    // document.querySelector('#fsharpnotechoice').classList.remove('hidden')
                    // document.querySelector('#fsharp-button1').classList.remove('hidden')
                    // document.querySelector('#fsharpbuttonlabel').classList.remove('hidden')
                    document.querySelector('#youwinpic2').classList.remove('active')
                    document.querySelector('#youwinpic2').classList.add('hidden')
                    document.querySelector('#choose4').classList.remove('hidden')
                    document.querySelector('#choose4').classList.add('active')
                    document.querySelector('#restart').classList.remove('active')
                    document.querySelector('#restart').classList.add('hidden')
                    document.querySelector('#submitbutton').classList.remove('hidden')
                    document.querySelector('#submitbutton').classList.add('active')

                    counter.innerText = ""


            })

        // }
        //         storedPoints();
        // });

        bbbuttonClicked2.addEventListener('click', () => {
            // document.querySelector('#d-button1') {
        // console.log('test7')
            // log.innerText = dbuttonClicked.value;

            document.querySelector('#cnotechoice').classList.remove('active')
            document.querySelector('#cnotechoice').classList.add('hidden')
            document.querySelector('#youchoose').classList.add('hidden')
            document.querySelector('#direction').classList.add('hidden')
            document.querySelector('#flask').classList.add('hidden')
            document.querySelector('#cbuttonchoice').classList.remove('active')
            document.querySelector('#cbuttonchoice').classList.add('hidden')
            document.querySelector('#dnotechoice').classList.add('hidden')
            document.querySelector('#dbuttonchoice').classList.add('hidden')
            document.querySelector('#gnotechoice').classList.remove('active')
            document.querySelector('#gnotechoice').classList.add('hidden')
            document.querySelector('#gbuttonchoice').classList.remove('active')
            document.querySelector('#gbuttonchoice').classList.add('hidden')
            document.querySelector('#bbnotechoice').classList.remove('active')
            document.querySelector('#bbnotechoice').classList.add('hidden')
            document.querySelector('#bbbuttonlabel').classList.add('hidden')
            document.querySelector('#bbbuttonlabel2').classList.remove('active')
            document.querySelector('#bbbuttonlabel2').classList.add('hidden')
            document.querySelector('#enotechoice').classList.remove('active')
            document.querySelector('#enotechoice').classList.add('hidden')
            document.querySelector('#ebuttonchoice').classList.remove('active')
            document.querySelector('#ebuttonchoice').classList.add('hidden')
            document.querySelector('#c-button1').classList.remove('active')
            document.querySelector('#c-button1').classList.add('hidden')
            document.querySelector('#d-button1').classList.add('hidden')
            document.querySelector('#g-button1').classList.remove('active')
            document.querySelector('#g-button1').classList.add('hidden')
            document.querySelector('#e-button1').classList.remove('active')
            document.querySelector('#e-button1').classList.add('hidden')
            document.querySelector('#bb-button1').classList.add('hidden')
            document.querySelector('#bb-button2').classList.remove('active')
            document.querySelector('#bb-button2').classList.add('hidden')
            document.querySelector('#esharpbuttonlabel').classList.add('hidden')
            document.querySelector('#fsharpbuttonlabel').classList.remove('active')
            document.querySelector('#fsharpbuttonlabel').classList.add('hidden')
            document.querySelector('#esharp-button1').classList.add('hidden')
            document.querySelector('#fsharp-button1').classList.remove('active')
            document.querySelector('#fsharp-button1').classList.add('hidden')
            document.querySelector('#fsharpnotechoice').classList.remove('active')
            document.querySelector('#fsharpnotechoice').classList.add('hidden')
            document.querySelector('#esharpnotechoice').classList.add('hidden')

            document.querySelector('#escaleoption').classList.remove('active')
            document.querySelector('#escaleoption').classList.add('hidden')
            document.querySelector('#gscale').classList.remove('active')
            document.querySelector('#gscale').classList.remove('active')
            document.querySelector('#escale').classList.remove('active')
            document.querySelector('#escale').classList.add('hidden')
            document.querySelector('#cscale').classList.add('hidden')
            document.querySelector('#cscaleoption').classList.add('hidden')
            document.querySelector('#restart').classList.remove('active')
            document.querySelector('#restart').classList.add('hidden')

            document.querySelector('#youwinpic1').classList.remove('hidden')
            document.querySelector('#youwinpic1').classList.add('active')
            document.querySelector('#choose4').classList.remove('active')
            document.querySelector('#choose4').classList.add('hidden')
            document.querySelector('#youwon').classList.remove('hidden')
            document.querySelector('#youwon').classList.add('active')
            document.querySelector('#submitbutton').classList.remove('hidden')
            document.querySelector('#submitbutton').classList.add('active')
            document.querySelector('#choose4').classList.remove('active')
            document.querySelector('#choose4').classList.add('hidden')





            bbButtonValueNumber2 = ""
            counter.innerText = bbButtonValueNumber2 += "GOOD JOB!"

//             ///beginning of function code//
            function storedPoints(){
            storedPoints = () => {
            var bbButtonPoints = bbButtonValueNumber++;
            // console.log(dButtonPoints)
            const callPoints8 = window.localStorage.setItem(storedPoints, JSON.stringify(bbButtonPoints));
        // console.log(callPoints);
            const callThePoints8 = window.localStorage.getItem(storedPoints, JSON.parse(bbButtonPoints));
            console.log(callThePoints8);
            }
        }

        })

        // }

        //         storedPoints();
        // });





//     form.addEventListener("submit", function(event) {
//         this.reset
// })



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

    //https://css-tricks.com/almanac/properties/a/animation/
