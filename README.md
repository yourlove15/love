# Will You Be My Valentine? 💖

A romantic interactive website built with pure HTML, CSS, and Vanilla JavaScript for GitHub Pages deployment.

---

## 🚀 GitHub Pages Deployment Instructions

### Step 1: Create a GitHub Repository
1. Go to [GitHub](https://github.com) and create a new repository
2. Name it: `your-username.github.io` (for user site) or any name (for project site)
3. Make it **Public**

### Step 2: Upload Files
1. Upload all files from this project to your repository:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `assets/` folder (with all subfolders)

### Step 3: Enable GitHub Pages
1. Go to repository **Settings**
2. Scroll to **Pages** section
3. Under **Source**, select `main` branch
4. Click **Save**
5. Your site will be live at: `https://your-username.github.io/repository-name/`

---

## 📁 Asset Folder Structure

```
assets/
├── backgrounds/       → Background images for Page 1
│   ├── bg1.jpg
│   ├── bg2.jpg
│   ├── bg3.jpg
│   └── bg4.jpg
│
├── music/            → Audio files (MP3 format recommended)
│   ├── song1.mp3
│   ├── song2.mp3
│   └── song3.mp3
│
├── stickers/         → Sticker images
│   └── boy-flowers.png
│
├── memories/         → Memory photos for Page 2
│   ├── photo1.jpg    → Stack images (5 images)
│   ├── photo2.jpg
│   ├── photo3.jpg
│   ├── photo4.jpg
│   ├── photo5.jpg
│   ├── final1.jpg    → Final surprise images (6 images)
│   ├── final2.jpg
│   ├── final3.jpg
│   ├── final4.jpg
│   ├── final5.jpg
│   └── final6.jpg
│
└── images/           → UI images
    └── album.png     → Album icon for music player
```

---

## 🎵 Where to Upload Your Assets

### 1. **Background Images** (Page 1 auto-changing backgrounds)
   - **Folder:** `assets/backgrounds/`
   - **Files:** `bg1.jpg`, `bg2.jpg`, `bg3.jpg`, `bg4.jpg`
   - **Format:** JPG, PNG (recommended: 1920x1080px)

### 2. **Music Files** (Background music playlist)
   - **Folder:** `assets/music/`
   - **Files:** `song1.mp3`, `song2.mp3`, `song3.mp3`
   - **Format:** MP3, OGG, WAV (MP3 recommended)

### 3. **Sticker Image** (Boy with flowers on Page 1)
   - **Folder:** `assets/stickers/`
   - **File:** `boy-flowers.png`
   - **Format:** PNG with transparent background

### 4. **Album Icon** (Music player rotating icon)
   - **Folder:** `assets/images/`
   - **File:** `album.png`
   - **Format:** PNG or JPG (square, 500x500px recommended)

### 5. **Memory Photos** (Page 2 image stack)
   - **Folder:** `assets/memories/`
   - **Files:** `photo1.jpg` to `photo5.jpg`
   - **Format:** JPG, PNG

### 6. **Final Surprise Images** (After opening all letters)
   - **Folder:** `assets/memories/`
   - **Files:** `final1.jpg` to `final6.jpg`
   - **Format:** JPG, PNG

---

## ✏️ Customization

### Change Letter Content
Edit `script.js` → Find the `letters` array (around line 15):
```javascript
const letters = [
    "Your first letter text here...",
    "Your second letter text here...",
    "Your third letter text here..."
];
```

### Add More Songs
1. Add more MP3 files to `assets/music/`
2. Edit `script.js` → Update the `songs` array:
```javascript
const songs = [
    'assets/music/song1.mp3',
    'assets/music/song2.mp3',
    'assets/music/song3.mp3',
    'assets/music/song4.mp3'  // Add more
];
```

### Add More Backgrounds
1. Add more images to `assets/backgrounds/`
2. Edit `script.js` → Update the `backgrounds` array:
```javascript
const backgrounds = [
    'assets/backgrounds/bg1.jpg',
    'assets/backgrounds/bg2.jpg',
    'assets/backgrounds/bg3.jpg',
    'assets/backgrounds/bg4.jpg',
    'assets/backgrounds/bg5.jpg'  // Add more
];
```

---

## 📱 Features

✅ Fully responsive (mobile & desktop)  
✅ Auto-changing backgrounds with smooth transitions  
✅ Music player with playlist & volume control  
✅ Floating hearts & teddy emojis  
✅ Interactive "NO" button that moves away  
✅ Image stack with slide animations  
✅ Envelope opening animations  
✅ Romantic letter display  
✅ Final surprise with random image layout  
✅ Pure HTML/CSS/JS (no frameworks)  
✅ GitHub Pages ready  

---

## 🎨 Browser Compatibility

- ✅ Chrome/Edge (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers

---

## 💝 Tips

- Use high-quality images (but compress them for faster loading)
- Keep audio files under 5MB each
- Test locally before deploying (open `index.html` in browser)
- Make sure all file names match exactly (case-sensitive on GitHub Pages)

---

## 🐛 Troubleshooting

**Music not playing?**
- Check file paths in `script.js`
- Ensure MP3 files are in `assets/music/`
- Some browsers block autoplay (user must click album icon)

**Images not showing?**
- Verify file names match exactly
- Check file extensions (.jpg vs .jpeg)
- Ensure files are uploaded to correct folders

**Site not loading on GitHub Pages?**
- Wait 5-10 minutes after enabling Pages
- Check repository is Public
- Verify `index.html` is in root directory

----

Made with ❤️ for Valentine's Day
