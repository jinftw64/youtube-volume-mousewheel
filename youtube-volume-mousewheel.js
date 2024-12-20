const moviePlayer = document.querySelector('#movie_player'); // div to control volume
const playerContent = document.querySelector('.ytp-player-content.ytp-iv-player-content') // div to mouseover

moviePlayer.addEventListener('wheel', (event) => {
  event.preventDefault();

  const volume = moviePlayer.getVolume();

  if (playerContent.matches(':hover')) {
    console.log(`this is the volume: ${volume}`)
    console.log(`this is the delta Y wheel: ${event.deltaY}`)
  }
})

document.body.style.border = "5px solid red";
