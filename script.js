// ===== CONFIGURATION =====
const backgrounds = [
    'assets/backgrounds/bg1.jpeg',
    'assets/backgrounds/bg2.jpeg',
    'assets/backgrounds/bg3.jpeg',
    'assets/backgrounds/bg4.jpeg',
    'assets/backgrounds/bg5.jpeg',
    'assets/backgrounds/bg6.jpeg',
    'assets/backgrounds/bg7.jpeg',
    'assets/backgrounds/bg8.jpg'
];

const songs = [
    'assets/music/music.mp3'
];

const stickers = [
    'assets/stickers/No/01.gif',
    'assets/stickers/No/02.gif',
    'assets/stickers/No/03.gif',
    'assets/stickers/No/04.gif',
    'assets/stickers/No/05.gif',
    'assets/stickers/No/06.gif',
    'assets/stickers/No/07.gif'
];

const yesStickers = [
    'assets/stickers/yes/01.gif',
    'assets/stickers/yes/02.gif',
    'assets/stickers/yes/03.gif',
    'assets/stickers/yes/RoseCute.gif'
];

const letters = [
    "My Dearest Valentine,\n\nFrom the moment I met you, my world became brighter. Every day with you is a gift, and I cherish every moment we share together. You make me laugh, you make me smile, and you make my heart skip a beat.\n\nI love you more than words can express.\n\nForever yours ❤️",
    
    "To My Love,\n\nYou are my sunshine on cloudy days, my comfort in difficult times, and my joy in every celebration. Your smile lights up my world, and your love fills my heart with warmth.\n\nThank you for being you, and for choosing me.\n\nWith all my love 💕",
    
    "My Sweet Valentine,\n\nEvery memory we've created together is precious to me. From our first conversation to this very moment, you've made my life infinitely better. I can't wait to create countless more memories with you.\n\nYou are my forever and always.\n\nYours eternally 💖"
];

const finalImages = [
    'assets/memories/01.jpeg',
    'assets/memories/02.jpeg',
    'assets/memories/03.jpeg',
    'assets/memories/04.jpeg',
    'assets/memories/05.jpeg',
    'assets/memories/06.jpeg',
    'assets/memories/07.jpeg'
];

// ===== GLOBAL STATE =====
let currentBgIndex = 0;
let currentSongIndex = 0;
let isPlaying = false;
let noClickCount = 0;
let currentStickerIndex = 0;
let currentLetterIndex = 0;
let openedLetters = 0;

const noTexts = ["No", "Are you sure?", "Think again 😶", "Please 🥺", "Last chance 😭", "Really?", "Final answer?"];

const noPositions = [
    { x: -180, y: -100 },
    { x: 180, y: -100 },
    { x: -180, y: 100 },
    { x: 180, y: 100 },
    { x: 0, y: -150 },
    { x: -200, y: 0 },
    { x: 200, y: 0 }
];

// ===== ELEMENTS =====
const audioPlayer = document.getElementById('audioPlayer');
const albumIcon = document.getElementById('albumIcon');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const page0 = document.getElementById('page0');
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const floatingContainer = document.querySelector('.floating-container');
const nameInput = document.getElementById('nameInput');
const nameSubmit = document.getElementById('nameSubmit');
const proposalSticker = document.querySelector('.proposal-box .sticker');

// ===== INITIALIZATION =====
window.addEventListener('DOMContentLoaded', () => {
    initBackgroundSlider();
    initMusicPlayer();
    initFloatingEmojis();
    initNameEntry();
    initButtons();
    initPage2();
});

// ===== NAME ENTRY =====
function initNameEntry() {
    nameSubmit.addEventListener('click', checkName);
    nameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') checkName();
    });
}

function checkName() {
    const name = nameInput.value.trim().toLowerCase();
    if (name === 'baby' || name === 'babe') {
        page0.style.transition = 'opacity 1s';
        page0.style.opacity = '0';
        setTimeout(() => {
            page0.classList.remove('active');
            page1.classList.add('active');
            page1.style.opacity = '0';
            setTimeout(() => {
                page1.style.transition = 'opacity 1s';
                page1.style.opacity = '1';
            }, 50);
        }, 1000);
    } else {
        alert('Think again baby 💕');
        nameInput.value = '';
        nameInput.focus();
    }
}

// ===== BACKGROUND SLIDER =====
function initBackgroundSlider() {
    const allBackgroundSliders = document.querySelectorAll('.background-slider');
    allBackgroundSliders.forEach(slider => {
        slider.style.backgroundImage = `url('${backgrounds[0]}')`;
    });
    
    setInterval(() => {
        currentBgIndex = (currentBgIndex + 1) % backgrounds.length;
        allBackgroundSliders.forEach(slider => {
            slider.style.opacity = '0';
            setTimeout(() => {
                slider.style.backgroundImage = `url('${backgrounds[currentBgIndex]}')`;
                slider.style.opacity = '1';
            }, 1000);
        });
    }, 6000);
}

// ===== MUSIC PLAYER =====
function initMusicPlayer() {
    audioPlayer.src = songs[0];
    audioPlayer.volume = 0.7;
    audioPlayer.loop = true;
    
    audioPlayer.play().then(() => {
        isPlaying = true;
        albumIcon.classList.add('playing');
    }).catch(() => {
        isPlaying = false;
    });
    
    albumIcon.addEventListener('click', () => {
        if (isPlaying) {
            audioPlayer.pause();
            albumIcon.classList.remove('playing');
            isPlaying = false;
        } else {
            audioPlayer.play();
            albumIcon.classList.add('playing');
            isPlaying = true;
        }
    });
}

// ===== FLOATING EMOJIS =====
function initFloatingEmojis() {
    const emojis = ['❤️', '🧸', '💕', '💖', '🌹'];
    setInterval(() => {
        const emoji = document.createElement('div');
        emoji.className = 'floating-emoji';
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.left = Math.random() * 100 + '%';
        emoji.style.animationDuration = (Math.random() * 3 + 5) + 's';
        floatingContainer.appendChild(emoji);
        
        setTimeout(() => emoji.remove(), 8000);
    }, 500);
}

// ===== BUTTONS =====
function initButtons() {
    yesBtn.addEventListener('click', () => {
        const randomYesSticker = yesStickers[Math.floor(Math.random() * yesStickers.length)];
        proposalSticker.src = randomYesSticker;
        
        yesBtn.style.display = 'none';
        noBtn.style.display = 'none';
        
        document.getElementById('yayText').classList.add('show');
        
        let countdown = 5;
        const countdownEl = document.getElementById('countdownText');
        countdownEl.classList.add('show');
        countdownEl.textContent = countdown;
        
        const countdownInterval = setInterval(() => {
            countdown--;
            if (countdown > 0) {
                countdownEl.textContent = countdown;
            } else {
                clearInterval(countdownInterval);
                page1.style.transition = 'opacity 1s';
                page1.style.opacity = '0';
                setTimeout(() => {
                    page1.classList.remove('active');
                    page2.classList.add('active');
                    page2.style.opacity = '0';
                    setTimeout(() => {
                        page2.style.transition = 'opacity 1s';
                        page2.style.opacity = '1';
                    }, 50);
                }, 1000);
            }
        }, 1000);
    });
    
    noBtn.addEventListener('click', () => {
        if (noClickCount >= 7) {
            noBtn.textContent = "YES ❤️";
            noBtn.style.background = '#E63946';
            noBtn.style.color = '#FFFFFF';
            noBtn.style.position = 'relative';
            noBtn.style.left = '';
            noBtn.style.top = '';
            noBtn.onclick = () => yesBtn.click();
            return;
        }
        
        noBtn.textContent = noTexts[noClickCount];
        proposalSticker.src = stickers[noClickCount];
        
        const boxRect = document.querySelector('.proposal-box').getBoundingClientRect();
        const boxCenterX = boxRect.left + boxRect.width / 2;
        const boxCenterY = boxRect.top + boxRect.height / 2;
        const pos = noPositions[noClickCount];
        
        let newX = boxCenterX + pos.x - noBtn.offsetWidth / 2;
        let newY = boxCenterY + pos.y - noBtn.offsetHeight / 2;
        
        noBtn.style.position = 'fixed';
        noBtn.style.left = newX + 'px';
        noBtn.style.top = newY + 'px';
        
        noClickCount++;
    });
}

// ===== PAGE 2: IMAGE STACK =====
function initPage2() {
    const imageStack = document.getElementById('imageStack');
    const images = document.querySelectorAll('.stack-image');
    const dropZones = document.querySelectorAll('.drop-zone');
    let draggedImages = 0;
    let placedImages = 0;
    let activeImg = null;
    let offsetX = 0;
    let offsetY = 0;
    
    images.forEach((img, index) => {
        img.addEventListener('mousedown', (e) => {
            if (index !== draggedImages) return;
            e.preventDefault();
            activeImg = img;
            const rect = img.getBoundingClientRect();
            offsetX = e.clientX - rect.left;
            offsetY = e.clientY - rect.top;
            img.style.transition = 'none';
            img.style.cursor = 'grabbing';
            img.style.zIndex = '1000';
        });
        
        img.addEventListener('touchstart', (e) => {
            if (index !== draggedImages) return;
            e.preventDefault();
            activeImg = img;
            const rect = img.getBoundingClientRect();
            const touch = e.touches[0];
            offsetX = touch.clientX - rect.left;
            offsetY = touch.clientY - rect.top;
            img.style.transition = 'none';
            img.style.zIndex = '1000';
        });
    });
    
    document.addEventListener('mousemove', (e) => {
        if (!activeImg) return;
        e.preventDefault();
        const containerRect = imageStack.getBoundingClientRect();
        activeImg.style.left = (e.clientX - containerRect.left - offsetX) + 'px';
        activeImg.style.top = (e.clientY - containerRect.top - offsetY) + 'px';
    });
    
    document.addEventListener('touchmove', (e) => {
        if (!activeImg) return;
        e.preventDefault();
        const touch = e.touches[0];
        const containerRect = imageStack.getBoundingClientRect();
        activeImg.style.left = (touch.clientX - containerRect.left - offsetX) + 'px';
        activeImg.style.top = (touch.clientY - containerRect.top - offsetY) + 'px';
    }, { passive: false });
    
    document.addEventListener('mouseup', (e) => {
        if (!activeImg) return;
        
        dropZones.forEach(zone => {
            const zoneRect = zone.getBoundingClientRect();
            if (e.clientX >= zoneRect.left && e.clientX <= zoneRect.right &&
                e.clientY >= zoneRect.top && e.clientY <= zoneRect.bottom &&
                !zone.classList.contains('filled')) {
                activeImg.style.left = (zoneRect.left - imageStack.getBoundingClientRect().left) + 'px';
                activeImg.style.top = (zoneRect.top - imageStack.getBoundingClientRect().top) + 'px';
                activeImg.style.width = '180px';
                activeImg.style.height = '180px';
                activeImg.classList.add('placed');
                zone.classList.add('filled');
                placedImages++;
                draggedImages++;
                
                if (placedImages === images.length) {
                    setTimeout(() => {
                        document.getElementById('dragInstruction').style.display = 'none';
                        document.getElementById('envelopeSection').classList.add('show');
                    }, 300);
                }
            }
        });
        
        activeImg.style.cursor = 'grab';
        activeImg = null;
    });
    
    document.addEventListener('touchend', (e) => {
        if (!activeImg) return;
        const touch = e.changedTouches[0];
        
        dropZones.forEach(zone => {
            const zoneRect = zone.getBoundingClientRect();
            if (touch.clientX >= zoneRect.left && touch.clientX <= zoneRect.right &&
                touch.clientY >= zoneRect.top && touch.clientY <= zoneRect.bottom &&
                !zone.classList.contains('filled')) {
                activeImg.style.left = (zoneRect.left - imageStack.getBoundingClientRect().left) + 'px';
                activeImg.style.top = (zoneRect.top - imageStack.getBoundingClientRect().top) + 'px';
                activeImg.style.width = '180px';
                activeImg.style.height = '180px';
                activeImg.classList.add('placed');
                zone.classList.add('filled');
                placedImages++;
                draggedImages++;
                
                if (placedImages === images.length) {
                    setTimeout(() => {
                        document.getElementById('dragInstruction').style.display = 'none';
                        document.getElementById('envelopeSection').classList.add('show');
                    }, 300);
                }
            }
        });
        
        activeImg = null;
    });
    
    initEnvelopes();
}

// ===== ENVELOPES & LETTERS =====
function initEnvelopes() {
    const envelope = document.getElementById('mainEnvelope');
    const secondEnvelope = document.getElementById('secondEnvelope');
    const thirdEnvelope = document.getElementById('thirdEnvelope');
    const letterModal = document.getElementById('letterModal');
    const letterText = document.getElementById('letterText');
    const closeLetter = document.getElementById('closeLetter');
    let currentEnvelope = 1;
    
    envelope.addEventListener('click', () => {
        if (!envelope.classList.contains('opened')) {
            envelope.classList.add('opened');
            currentEnvelope = 1;
            setTimeout(() => {
                letterModal.classList.add('show');
                document.querySelector('.letter-content').classList.add('show-bg');
                letterText.innerHTML = "<br><br><br>I get a little nervous every time I look into your eyes, because they make my heart feel things I don't quite know how to explain. There's something so soft and warm about them that makes me feel safe without even trying. When our eyes meet, I forget what I was going to say, and all I can do is smile.<br><br>Your eyes have this quiet magic. They don't need words, yet they say everything — kindness, comfort, and a love that feels gentle and real. Sometimes I catch myself hoping you don't notice how long I look at them, because in that moment, I don't want to look away.<br><br>If I'm honest, falling for your eyes was easy… trying not to is the hard part.";
            }, 600);
        }
    });
    
    secondEnvelope.addEventListener('click', () => {
        if (!secondEnvelope.classList.contains('opened')) {
            secondEnvelope.classList.add('opened');
            currentEnvelope = 2;
            setTimeout(() => {
                letterModal.classList.add('show');
                letterText.innerHTML = "<br><br><br><br><br><br><br><br><br>I get a little shy when you're around,<br>like my heart suddenly forgets how to be normal.<br>You don't even try, yet you make everything feel lighter,<br>like the world is softer when you're near.<br><br>There's something about you that feels calm and warm,<br>the kind of warmth that stays, not rushes.<br>In your smile, I find comfort.<br>In your presence, I find peace.<br>And somehow, just being you is enough.<br><br>I don't need big moments or perfect words.<br>I just like the way you exist<br>the way you laugh, the way you care,<br>the way you quietly make my heart feel at home.<br><br>If love is something gentle and patient,<br>then that's how I feel about you.<br>Not loud, not rushed<br>just honest, soft, and real.";
            }, 600);
        }
    });
    
    thirdEnvelope.addEventListener('click', () => {
        if (!thirdEnvelope.classList.contains('opened')) {
            thirdEnvelope.classList.add('opened');
            currentEnvelope = 3;
            setTimeout(() => {
                letterModal.classList.add('show');
                letterText.innerHTML = "<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>I'm really sorry for the things I did wrong. I know I troubled you, and many times I didn't understand you the way I should have. I ignored calls, and I know that hurt you. I truly regret that, and I want you to know that I'm working on myself and trying to do better.<br><br>I'm trying to become the kind of partner you deserve. I genuinely like putting in effort for you, because the moment I see your smile, I forget every bit of tiredness and every effort I've made—it all feels worth it. Your smile has that power over me.<br><br>Your voice is so relaxing that I could listen to it all day without getting tired. It brings me a strange kind of peace that I can't really explain. I really like you, baby.<br><br>I know there are things I should have said, but I feel like the right time hasn't come yet. When we meet, I hope I'll be able to say everything that's in my heart, the way I truly want to say it.<br><br>I don't want to leave you. I just want you to always be happy, keep smiling the way you do, and let me be the one who takes you shopping and makes you laugh.";
            }, 600);
        }
    });
    
    closeLetter.addEventListener('click', () => {
        letterModal.classList.remove('show');
        document.querySelector('.letter-content').classList.remove('show-bg');
        
        if (currentEnvelope === 1) {
            envelope.classList.add('hidden');
        } else if (currentEnvelope === 2) {
            secondEnvelope.classList.add('hidden');
        } else if (currentEnvelope === 3) {
            thirdEnvelope.classList.add('hidden');
            setTimeout(() => {
                document.getElementById('imageStack').style.display = 'none';
                document.querySelector('.drop-zones').style.display = 'none';
                document.getElementById('envelopeSection').style.display = 'none';
                document.getElementById('finalMessage').classList.add('show');
            }, 500);
        }
    });
}

// ===== FINAL SURPRISE =====
function showFinalSurprise() {
    const finalSurprise = document.getElementById('finalSurprise');
    const randomImagesContainer = document.querySelector('.random-images');
    
    finalSurprise.classList.add('show');
    
    finalImages.forEach((imgSrc, index) => {
        setTimeout(() => {
            const img = document.createElement('img');
            img.src = imgSrc;
            img.className = 'random-image';
            const rotation = (Math.random() - 0.5) * 20;
            img.style.setProperty('--rotation', `${rotation}deg`);
            img.style.animationDelay = `${index * 0.2}s`;
            randomImagesContainer.appendChild(img);
        }, index * 200);
    });
}
