const englishButton = document.getElementById("englishBtn");
const myanmarButton = document.getElementById("myanmarBtn");
const toggleButton = document.getElementById("toggleBtn");
const playlistContainerTag = document.querySelector(".playlistContainer");
const audioTag = document.querySelector(".audioTag");
const trackListUl = document.querySelector(".playlist");

const englishTracks = [
    
    { trackList: "track2.mp3", title: "China Song-singer" },
    { trackList: "track9.mp3", title: "Calvin Harris,kCua Lipa-One Kiss" },
    { trackList: "track10.mp3", title: "Fifty Fifty -Cupid" },
    { trackList: "track11.mp3", title: "Selena Gomez-I'm sorry We lied" },
    { trackList: "track12.mp3", title: "Talor Swift -Love Story" },

];

const myanmarTracks = [
    { trackList: "track1.mp3", title: "For my favorite-M Three" },
    { trackList: "track3.mp3", title: "ထားလိုက်ပါ-Anomous" },
    { trackList: "track4.mp3", title: "ဖြစ်ရပ်မှန်-Min Si Thu" },
    { trackList: "track5.mp3", title: "ရန်ကုန်သူ-De Square Wave" },
    { trackList: "track6.mp3", title: "သူငယ်ချင်း-ဥာဏ်လင်းအောင်" },
    { trackList: "track7.mp3", title: "ဒီဇင်ဘာည" },
    { trackList: "track8.mp3", title: "နောက်ဆုံးထားခဲ့တော့မယ်ပေါ့" },
];

let currentTracks = englishTracks;

englishButton.addEventListener("click", () => {
    currentTracks = englishTracks;
    updateTrackList();
    englishButton.classList.add("clicked");
    myanmarButton.classList.remove("clicked");
});

myanmarButton.addEventListener("click", () => {
    currentTracks = myanmarTracks;
    updateTrackList();
    myanmarButton.classList.add("clicked");
    englishButton.classList.remove("clicked");
});

function updateTrackList() {
    trackListUl.innerHTML = "";
    for (let i = 0; i < currentTracks.length; i++) {
        const trackListItem = document.createElement("li");
        trackListItem.textContent = currentTracks[i].title;
        trackListItem.addEventListener("click", () => {
            const trackListId = currentTracks[i].trackList;
            audioTag.src = trackListId;
            audioTag.play();
        });
        trackListItem.classList.add("musicItem");
        trackListUl.appendChild(trackListItem);
    }
}

toggleButton.addEventListener("click", () => {
    if (currentTracks === englishTracks) {
        currentTracks = myanmarTracks;
        myanmarButton.classList.add("clicked");
        englishButton.classList.remove("clicked");
    } else {
        currentTracks = englishTracks;
        englishButton.classList.add("clicked");
        myanmarButton.classList.remove("clicked");
    }
    updateTrackList();
});

updateTrackList();
