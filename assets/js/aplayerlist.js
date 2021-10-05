const ap = new APlayer({
    container: document.getElementById('player'),
    fixed: true,
    loop: 'one',
    volume: 0.4,
    audio: [{
        name: '聞こえていますか僕らの声が',
        artist: '煉獄小僧',
        url: '/arima-s-notebook/assets/src/kbk/kbk.mp3',
        cover: '/arima-s-notebook/assets/src/kbk/Cover.jpg',
    }]
});