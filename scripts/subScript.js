export const addZero = n => n < 10 ? `0${n}` : n;

export const disabledPlayers = () => {
  if(audioPlayer){
    audioPlayer.pause;
  }
  if(audio){
    audio.pause;
  }
  if(videoPlayer){
    audio.pause;
  }
}