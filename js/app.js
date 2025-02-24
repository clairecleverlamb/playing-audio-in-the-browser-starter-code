const catImg = document.querySelector('#cat')
const catSays = new Audio('../assets/audio/cat.mp3')
const notCatDiv = document.querySelector("#not-cat")

let currentAudio = null;

catImg.addEventListener("click", (evt) => {
    console.log(evt.target)
})

catImg.addEventListener("click", (evt) => {
    if(currentAudio){
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    catSays.volume = .05
    catSays.play()
    currentAudio = catSays;
})

notCatDiv.addEventListener("click", (evt) => {
    if (evt.target.id !== "cat") {
        if(currentAudio){
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
        const audioElement = new Audio(`../assets/audio/${evt.target.id}.mp3`)
        audioElement.volume = .05
        audioElement.play()

        currentAudio = audioElement;
    }
})


// Add event listener to <element>
// Listen for click on cached <element> and on a click:
// make sure an image has been selected
// Get the element id and use it to create an Audio instance/element!
// Fix its volume
// Play the audio element!

// const sealionImg = document.querySelector('#sealion')
// const sealionSays = new Audio('../assets/audio/sealion.mp3')


// sealionImg.addEventListener("click", (evt) => {
//     console.log(evt.target)
// })

// sealionImg.addEventListener("click", (evt) => {
//     sealionSays.volume = .05
//     sealionSays.play()
// })
