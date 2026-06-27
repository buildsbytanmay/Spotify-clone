# 🎵 Spotify Clone

A responsive **Spotify Web Player Clone** built with vanilla HTML, CSS, and JavaScript — no frameworks, no dependencies.

🌐 **[View Live Demo](https://your-live-link.com)**

---

## 📌 Features

- 🎧 **Music Playback** — Play, pause, skip to next/previous track
- 📂 **Dynamic Album Loading** — Albums and songs are fetched dynamically from the server
- 📚 **Your Library** — Sidebar listing all songs in the current playlist
- 🔊 **Volume Control** — Adjustable volume slider with mute/unmute toggle
- ⏩ **Seekbar** — Click anywhere on the seekbar to jump to that position
- ⏱️ **Song Timer** — Displays current time and total duration
- 🖥️ **Fullscreen Player** — Tap the playbar on mobile to expand into a fullscreen player
- 🍔 **Hamburger Menu** — Collapsible sidebar for smaller screens
- 🔐 **Login & Signup Pages** — Dedicated login and signup UI pages
- 📱 **Fully Responsive** — Optimized for desktop, tablet, and mobile screens

---

## 🗂️ Project Structure

```
Spotify Clone/
├── Assets/
│   ├── Images/          # Album artwork and other images
│   └── SVG/             # All SVG icons used in the UI
├── Songs/
│   ├── cs/              # Non-copyright songs playlist
│   │   ├── cover.jpg
│   │   ├── info.json
│   │   └── *.m4a
│   └── ncs/             # Copyright songs playlist
│       ├── cover.jpg
│       ├── info.json
│       └── *.m4a
├── index.html           # Main player page
├── login.html           # Login page
├── signup.html          # Signup page
├── style.css            # All styles
├── script.js            # Core player logic
└── favicon.ico
```

---

## 🚀 Getting Started

### Prerequisites

- A local development server (e.g., [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) for VS Code)

> ⚠️ This project uses `fetch()` to load songs and album data, so it **must be served over HTTP** — opening `index.html` directly in a browser will not work.

### Running the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/spotify-clone.git
   cd spotify-clone
   ```

2. Open the project in VS Code and start **Live Server** on port `5500`:
   ```
   Right-click index.html → Open with Live Server
   ```

3. Visit `http://127.0.0.1:5500` in your browser.

---

## 🎵 Adding Your Own Songs

1. Create a new folder inside `Songs/` (e.g., `Songs/myplaylist/`)
2. Add your `.m4a` audio files inside it
3. Add a `cover.jpg` as the album artwork
4. Create an `info.json` with the following format:
   ```json
   {
     "title": "My Playlist",
     "description": "A short description of this playlist"
   }
   ```
5. The album will automatically appear on the homepage on the next load.

---

## 📱 Responsive Breakpoints

| Screen Width  | Behavior                                      |
|---------------|-----------------------------------------------|
| > 1400px      | Full sidebar always visible                   |
| ≤ 1400px      | Sidebar hidden, toggled via hamburger menu    |
| ≤ 950px       | Sidebar width reduced                         |
| ≤ 450px       | Fullscreen player enabled, volume bar hidden  |
| ≤ 375px       | Compact layout for very small screens         |

---

## 🛠️ Built With

| Technology    | Usage                        |
|---------------|------------------------------|
| HTML5         | Structure and layout         |
| CSS3          | Styling and responsiveness   |
| JavaScript    | Player logic and DOM control |
| Web Audio API | Audio playback via `<audio>` |
| Fetch API     | Dynamic song/album loading   |

---

## 📄 License

This project is built for **educational purposes only**.  
Spotify's name, logo, and branding belong to [Spotify AB](https://www.spotify.com).

---

## 🙋♂️ Author

Made with ❤️ by **Tanmay**
