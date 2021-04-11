const ap = new APlayer({
    container: document.getElementById('player'),
    fixed: true,
    loop: 'one',
    volume: 0.4,
    audio: [{
        name: '聞こえていますか僕らの声が',
        artist: '煉獄小僧',
        url: '/assets/src/kbk/kbk.mp3',
        cover: '/assets/src/kbk/Cover.jpg',
    }]
});