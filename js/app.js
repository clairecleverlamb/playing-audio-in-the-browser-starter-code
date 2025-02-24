const catImg = document.querySelector('#cat')
const catSays = new Audio('../assets/audio/cat.mp3')
const notCatDiv = document.querySelector("#not-cat")

let currentAudio = null;

//----------------------function to change centerImage--------------

function swapImages(clickedImage) {
    // Only swap if the clicked image is not already the cat image
    if (clickedImage !== catImg) {
        // Store the clicked image's src and alt text
        const clickedSrc = clickedImage.src;
        const clickedAlt = clickedImage.alt;

        // Swap the clicked image with the cat image
        clickedImage.src = catImg.src;
        clickedImage.alt = catImg.alt;

        // Update the cat image with the previously clicked image's info
        catImg.src = clickedSrc;
        catImg.alt = clickedAlt;
    }
}
// catImg.addEventListener("click", (evt) => {
//     console.log(evt.target)
// })

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

        swapImages(evt.target);
    }
})

document.querySelectorAll("#not-cat img").forEach(img => {
    img.addEventListener("click", (evt) => {
        swapImages(evt.target);
    });
});



// Add event listener to <element>
// Listen for click on cached <element> and on a click:
// make sure an image has been selected
// Get the element id and use it to create an Audio instance/element!
// Fix its volume
// Play the audio element!
