// Required Declaration
let currentSong = new Audio();
let songLink = [];
let currFolder = "Songs/ncs";
let playSvg = document.querySelector(".play").innerHTML;

let pauseSvg =  `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 7C4 5.58579 4 4.87868 4.43934 4.43934C4.87868 4 5.58579 4 7 4C8.41421 4 9.12132 4 9.56066 4.43934C10 4.87868 10 5.58579 10 7V17C10 18.4142 10 19.1213 9.56066 19.5607C9.12132 20 8.41421 20 7 20C5.58579 20 4.87868 20 4.43934 19.5607C4 19.1213 4 18.4142 4 17V7Z" stroke="currentColor" stroke-width="1.5"/>
                    <path d="M14 7C14 5.58579 14 4.87868 14.4393 4.43934C14.8787 4 15.5858 4 17 4C18.4142 4 19.1213 4 19.5607 4.43934C20 4.87868 20 5.58579 20 7V17C20 18.4142 20 19.1213 19.5607 19.5607C19.1213 20 18.4142 20 17 20C15.5858 20 14.8787 20 14.4393 19.5607C14 19.1213 14 18.4142 14 17V7Z" stroke="currentColor" stroke-width="1.5"/>
                </svg>`;

let muteSvg =   `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.9993 4H14.7493C14.7493 3.72564 14.5995 3.47317 14.3587 3.34171C14.1179 3.21024 13.8245 3.22076 13.5937 3.36913L13.9993 4ZM13.9993 20L13.5937 20.6309C13.8245 20.7792 14.1179 20.7898 14.3587 20.6583C14.5995 20.5268 14.7493 20.2744 14.7493 20H13.9993ZM2 8.5V7.75C1.58579 7.75 1.25 8.08579 1.25 8.5H2ZM2 15.5H1.25C1.25 15.9142 1.58579 16.25 2 16.25V15.5ZM7 8.5V9.25H7.2203L7.4056 9.13087L7 8.5ZM7 15.5L7.4056 14.8691L7.2203 14.75H7V15.5ZM13.2493 4V20H14.7493V4H13.2493ZM1.25 8.5V15.5H2.75V8.5H1.25ZM2 9.25H7V7.75H2V9.25ZM2 16.25H7V14.75H2V16.25ZM7.4056 9.13087L14.4049 4.63087L13.5937 3.36913L6.5944 7.86913L7.4056 9.13087ZM6.5944 16.1309L13.5937 20.6309L14.4049 19.3691L7.4056 14.8691L6.5944 16.1309Z" fill="currentColor"/>
                    <path d="M17 9.5L22 14.5M17 14.5L22 9.5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
                </svg>`;

let downChevronSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                    </svg>`

let volumeSvg = document.querySelector(".sound").innerHTML;

// Function for getting all songs from /Songs directory
async function getSongs(currFolder) {
    let response = await fetch(`http://127.0.0.1:5500/${currFolder}/`);
    let Songs = await response.text();
    let div = document.createElement("div");
    div.innerHTML = Songs;

    // Listing all songs in Your Library
    let songNames = div.getElementsByClassName("name");
    let songUL = document.querySelector(".libraryList").firstElementChild;
    songUL.innerHTML = "";
    for (let i = 3; i < songNames.length; i++) {
        songUL.innerHTML = songUL.innerHTML + `<li>
                                                    <img src="/Assets/SVG/music.svg" alt="">
                                                    <!-- color of svg #141B34 -->
                                                    <div class="songNameArtist">
                                                        <div class="name">${songNames[i].innerText.replace(".m4a", "")}</div>
                                                        <div class="artist">Tanmay</div>
                                                    </div>
                                                    <div class="playNow">Play Now</div>
                                                    <img src="/Assets/SVG/play.svg" alt="">
                                               </li>`;
    }

    // Returning all songs links by storing them in songHref Array
    let as = div.getElementsByTagName("a");
    let songHref = [];
    for (let i = 0; i < as.length; i++) {
        if (as[i].href.endsWith("m4a")) {
            songHref.push(as[i].href);
        }
    }
    
    // Playing the songs which are listed in Your Library by clicking on their name
    Array.from(document.querySelector(".libraryList").getElementsByTagName("li")).forEach((e, index) => {
        e.addEventListener("click", () => {
            playMusic(e.querySelector(".songNameArtist").firstElementChild.innerText + ".m4a");
        })
    })
    return (songHref);
}

// function for displaying all albums in Card Container
async function displayAlbums() {
    let response = await fetch("http://127.0.0.1:5500/Songs/");
    let albums = await response.text();
    let div = document.createElement("div");
    div.innerHTML = albums;
    let anchors = div.getElementsByTagName("a")
    let folderLinks = [];
    for(let i = 0; i < anchors.length; i++){
        if(anchors[i].href.includes("/Songs/")){
            folderLinks.push(anchors[i].href);
        }
    }
    folderNames = [];
    for(let i = 0; i < folderLinks.length; i++){
        folderNames.push(folderLinks[i].split("/Songs/")[1].replaceAll("%20", " "));
    }
    for(let i = 0; i < folderLinks.length; i++){
        let response = await fetch(folderLinks[i].concat("/info.json"));
        let jsons = await response.json();
        document.querySelector(".cardContainer").insertAdjacentHTML("beforeend", 
            `<div class="card" data-folder="${folderNames[i]}">
                <div class="cardImage" style="background-image: url(${folderLinks[i]}/cover.jpg);">
                    <div class="playIcon">
                        <button>
                            <svg data-encore-id="icon" width="24px" height="24px" fill="#000000" role="img" aria-hidden="true" class="e-91000-icon e-91000-baseline" viewBox="0 0 24 24">
                                <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="cardInfo">
                    <div class="songName"><a href="#">${jsons.title}</a></div>
                    <div class="songDetail">${jsons.description}</div>
                </div>
            </div>`);
    }
    Array.from(document.getElementsByClassName("card")).forEach((e) => {
        e.addEventListener("click", async (e) => {
            currFolder = `Songs/${e.currentTarget.dataset.folder}`;
            songLink = await getSongs(currFolder);
            let firstSong = `${document.querySelector(".songNameArtist").firstElementChild.innerText}.m4a`;
            playMusic(firstSong, true);
            document.querySelector(".play").innerHTML = playSvg;
            document.querySelector(".circle").style.left = "0%";
        })
    })
}

// Main Function
async function main() {
    // Getting all songs in songList Array
    songLink = await getSongs(currFolder);

    // Displaying all available albums
    displayAlbums();

    // Setting first song 
    let firstSong = document.querySelector(".songNameArtist").firstElementChild.innerText;
    playMusic(firstSong + ".m4a", true);

    // Setting Play/Pause Buttons & Song
    document.querySelector(".play").addEventListener("click", (e) => {
        if (currentSong.paused) {
            currentSong.play();
            document.querySelector(".play").innerHTML = pauseSvg;
        }
        else {
            currentSong.pause();
            document.querySelector(".play").innerHTML = playSvg;
        }
        e.stopPropagation();
    })

    // Setting CurrentTime & Duration of Song 
    currentSong.addEventListener("timeupdate", () => {
        document.querySelector(".songTime").innerText = formatTime(currentSong.currentTime) + " / " + formatTime(currentSong.duration);
        document.querySelector(".currTime").innerText = formatTime(currentSong.currentTime);
        document.querySelector(".totalTime").innerText = formatTime(currentSong.duration);
        // Moving circle in playbar
        document.querySelector(".circle").style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%";

        if(currentSong.currentTime == currentSong.duration){
            nextSong();
        }
    })

    // Making seekbar functional
    document.querySelector(".seekbar").addEventListener("click", (e) => {
        let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
        document.querySelector(".circle").style.left = percent + "%";
        currentSong.currentTime = (currentSong.duration * percent) / 100;
        e.stopPropagation();
    })

    // Making previous button
    document.querySelector(".previous").addEventListener("click", (e) => {
        previousSong();
        e.stopPropagation();
    })

    // Making next button
    document.querySelector(".next").addEventListener("click", (e) => {
        nextSong();
        e.stopPropagation();
    });
}

// function for playing previous Song
function previousSong() {
    currentSong.pause();
    currentSong.currentTime = "0";
    let index = songLink.indexOf(currentSong.src);
    index--;
    if(index < 0){
        index = songLink.length - 1
    }
    playMusic(songLink[index].split(`/${currFolder}/`)[1].replaceAll("%20", " "));
}

// function for playing next song
function nextSong() {
    currentSong.pause();
    currentSong.currentTime = "0";
    index = songLink.indexOf(currentSong.src);
    index++;
    if(index >= songLink.length){
        index = 0;
    }
    playMusic(songLink[index].split(`/${currFolder}/`)[1].replaceAll("%20", " "));
}

// Function for Playing Song, Displaying Song Name, Song Time & Duration
const playMusic = (musicName, pause = false) => {
    currentSong.src = `/${currFolder}/` + musicName;
    if (!pause) {
        currentSong.play();
        document.querySelector(".play").innerHTML = pauseSvg;
    }
    document.querySelector(".songInfo").innerText = musicName.replace(".m4a", "");
    document.querySelector(".songTime").innerText = "00:00 / 00:00";
}

// Function for converting seconds into mm:ss format
function formatTime(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00";
    }
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
}

// Making Hamburger functionality
document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".left").style.left = "0%";
})

// Making Close button for hamburger
document.querySelector(".close").addEventListener("click", () => {
    document.querySelector(".left").style.left = "-100%";
})

// Making Signup button
document.querySelector(".signbtn").addEventListener("click", () => {
    location.href = "signup.html";
})

// Making login button
document.querySelector(".logbtn").addEventListener("click", () => {
    location.href = "login.html";
})

// Making Sound bar functional
document.querySelector(".range").children[1].addEventListener("change", (e) => {
    currentSong.volume = e.target.value / 100;
    if(currentSong.volume > 0){
        document.querySelector(".sound").innerHTML = volumeSvg;
    }
    else if(currentSong.volume == 0){
        document.querySelector(".sound").innerHTML = muteSvg;
    }
})