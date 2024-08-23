const playSound = (id) => {
    const audioElement = document.getElementById(id);
    audioElement.currentTime = 0;
    audioElement.play();
}

document.getElementById("A").addEventListener('click', () => playSound("clap"));
document.getElementById("S").addEventListener('click', () => playSound("hihat"));
document.getElementById("D").addEventListener('click', () => playSound("kick"));
document.getElementById("F").addEventListener('click', () => playSound("openhat"));
document.getElementById("G").addEventListener('click', () => playSound("boom"));
document.getElementById("H").addEventListener('click', () => playSound("ride"));
document.getElementById("J").addEventListener('click', () => playSound("snare"));
document.getElementById("K").addEventListener('click', () => playSound("tom"));
document.getElementById("L").addEventListener('click', () => playSound("tink"));


const keySoundMap = {
    'a' : 'clap',
    's' : 'hihat',
    'd' : 'kick',
    'f' : 'openhat',
    'g' : 'boom',
    'h' : 'ride',
    'j' : 'snare',
    'k' : 'tom',
    'l' : 'tink'
}

document.addEventListener('keydown', (event) => {
    const soundId = keySoundMap[event.key.toLowerCase()];
    if (soundId) {
        playSound(soundId);
    }
});