//$('#main-slider').slick()

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

                $('.wrapper').css('background', '#212121')

                $('.main-content').fadeIn();
            });

            //            $('.main-content').css('display', 'block');


        }
    }, 1000);
}

stateChange(-1)
