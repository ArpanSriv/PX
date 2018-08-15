var loadingAnimation = bodymovin.loadAnimation({
    container: document.getElementById('animation-container'),
    path: 'data.json',
    renderer: 'svg',
    loop: true,
    autoplay: true,
    playCount: 3,
    playSpeed: 2,
    name: "Loading Animation"
});

function stateChange(newState) {
    setTimeout(function () {
        if (newState == -1) {
            loadingAnimation.pause();
            $('#animation-container').fadeOut('slow', function() {
                $('.logo-container').fadeIn();
            });

        }
    }, 10000);
}

stateChange(-1)
