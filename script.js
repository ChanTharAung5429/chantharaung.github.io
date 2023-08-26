const playlistContainerTag = document.getElementsByClassName("playlistContainer")[0];
const audioTag = document.getElementsByClassName("audioTag")[0];

const tracks = [
    { trackList: "track1.mp3", title: "For my favorite-M Three" },
    { trackList: "track2.mp3", title: "China Song-singer" },
    { trackList: "track3.mp3", title: "ထားလိုက်ပါ-Anomous" },
    { trackList: "track4.mp3", title: "ဖြစ်ရပ်မှန်-Min Si Thu" },
    { trackList: "track5.mp3", title: "ရန်ကုန်သူ-De Square Wave" },
    { trackList: "track6.mp3", title: "သူငယ်ချင်း-ဥာဏ်လင်းအောင်" },
    { trackList: "track7.mp3", title: "ဒီဇင်ဘာည" },
    { trackList: "track8.mp3", title: "နောက်ဆုံးထားခဲ့တော့မယ်ပေါ့" },
];

for (let i = 0; i < tracks.length; i++) {
    const trackListTag = document.createElement("div");
    trackListTag.addEventListener("click", () => {
        const trackListId = tracks[i].trackList;
        audioTag.src = trackListId;
        audioTag.play();
    });
    trackListTag.classList.add("musicItem");
    const title = (i + 1).toString() + ". " + tracks[i].title;
    trackListTag.textContent = title;
    playlistContainerTag.append(trackListTag);
}
