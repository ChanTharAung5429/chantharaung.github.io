const playlistContainerTag = document.getElementsByClassName("playlistContainer")[0];
const audioTag = document.getElementsByClassName ("audioTag")[0];

const tracks = [
    {trackList:"track1.mp3" , title: "Myanmar Singer"},
    {trackList: "track2.mp3" , title: "China Singer"}
];
  
for ( let i = 0 ; i<tracks.length ; i++){
    const trackListTag = document.createElement("div");
    trackListTag.addEventListener("click" , () =>{
        const trackListId = tracks[i].trackList;
        audioTag.src=trackListId;
        audioTag.play();
    })
    trackListTag.classList.add ("musicItem");
    const title= (i+1).toString()+ tracks[i].title;
    trackListTag.textContent= title;
    playlistContainerTag.append(trackListTag);
}
 
