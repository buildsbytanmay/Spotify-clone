# 🎵 Spotify Clone

A responsive **Spotify Web Player Clone** developed using **HTML, CSS, and JavaScript** without any external frameworks or dependencies.

> 🌐 **Live Demo:** https://your-live-link.com

---

# ✨ Highlights

- 🎧 Music playback with play, pause, previous, and next controls
- 📂 Dynamic loading of albums and songs from the server
- 📚 Sidebar library displaying songs from the selected playlist
- 🔊 Volume adjustment with mute and unmute functionality
- ⏩ Interactive seekbar for navigating through songs
- ⏱️ Current playback time and total song duration display
- 🖥️ Mobile fullscreen music player
- 🍔 Responsive hamburger menu for smaller devices
- 🔐 Separate Login and Signup pages
- 📱 Responsive design for desktop, tablet, and mobile

---

# 📂 Directory Structure

```text
Spotify Clone/
│
├── Assets/
│   ├── Images/
│   │   └── Album artwork and UI images
│   └── SVG/
│       └── SVG icons
│
├── Songs/
│   ├── cs/
│   │   ├── cover.jpg
│   │   ├── info.json
│   │   └── *.m4a
│   │
│   └── ncs/
│       ├── cover.jpg
│       ├── info.json
│       └── *.m4a
│
├── index.html
├── login.html
├── signup.html
├── style.css
├── script.js
└── favicon.ico
```

---

# 🚀 Getting Started

## Requirements

Use any local development server.

Example:

- Live Server extension for Visual Studio Code

> **Note:** Since the project uses the `fetch()` API to load songs and album information, it must be served over HTTP. Opening `index.html` directly from the file system will not work.

---

## Run Locally

### Clone the repository

```bash
git clone https://github.com/your-username/spotify-clone.git
cd spotify-clone
```

### Start the project

Open the project in **Visual Studio Code**, then:

```text
Right-click index.html
        ↓
Open with Live Server
```

The application will be available at:

```
http://127.0.0.1:5500
```

---

# 🎵 Add Custom Playlists

To include your own music:

1. Create a new folder inside `Songs/`
2. Place your `.m4a` files inside that folder.
3. Add a `cover.jpg` image.
4. Create an `info.json` file.

Example:

```json
{
  "title": "My Playlist",
  "description": "A short description of this playlist"
}
```

After refreshing the page, the playlist will automatically appear on the homepage.

---

# 📱 Responsive Layout

| Screen Size | Layout |
|-------------|--------|
| Above 1400px | Sidebar always visible |
| 1400px or below | Sidebar toggled using hamburger menu |
| 950px or below | Reduced sidebar width |
| 450px or below | Fullscreen player with hidden volume slider |
| 375px or below | Compact mobile layout |

---

# ⚙️ Technologies Used

| Technology | Purpose |
|------------|---------|
| HTML5 | Page structure |
| CSS3 | Styling and responsive layout |
| JavaScript | Music player functionality |
| Web Audio API | Audio playback using `<audio>` |
| Fetch API | Dynamic loading of albums and songs |

---

# 📄 License

This project is intended **for educational purposes only**.

Spotify's name, logo, and branding are the property of **Spotify AB**.

---

# 👨‍💻 Author

Made with ❤️ by **Tanmay**
