//$('#main-slider').slick()
var videoPlayer = document.getElementById('cover-video');

var page2Text = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."

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
            $('#animation-container').fadeOut('slow', function () {
                $('.cover-video').fadeIn();
                $('.logo-container').fadeIn();
                $('.top-nav').fadeIn();
                $('.wrapper').css('background', '#212121')
                $('.main-content').fadeIn();
                $('.main-content').css('display', 'flex');

            });

            //            $('.main-content').css('display', 'block');


        }
    }, 3000);
}

stateChange(-1)

var $wrapper = $(".wrapper")

$('#mainSlider').on('slide.bs.carousel', function (e) {
    if (e.to == 0) {
        //        $('#cover-video-source').attr('src', 'res/Travaho.mp4');

        //        document.getElementById('cover-video')
        $('#office').fadeOut();
        $('#travaho').fadeOut();
        $('#wanted').fadeIn();

        //        $('#travaho').fadeOut();
        //        
        //        videoPlayer.load();



        //        videoPlayer.play();

        //        $wrapper.removeClass('red-bg');
        //        $wrapper.removeClass('orange-bg');
        //        $wrapper.addClass('blue-bg');
    }

    if (e.to == 1) {
        $('#office').fadeOut();
        $('#wanted').fadeOut();
        $('#travaho').fadeIn();

        //        p2Typer.deleteAll();
        //        p2Typer.type();

        //        $('#cover-video-source').attr('src', 'res/I_Just_Wanted.mp4');
        //
        //        $('#cover-video').fadeOut();
        //        
        //        videoPlayer.load();
        //        
        //        $('#cover-video').fadeIn();


        //        videoPlayer.play();
        //        $wrapper.removeClass('orange-bg');
        //        $wrapper.removeClass('blue-bg');
        //        $wrapper.addClass('red-bg');

    }

    if (e.to == 2) {
        $('#travaho').fadeOut();
        $('#wanted').fadeOut();
        $('#office').fadeIn();
        //        $wrapper.removeClass('red-bg');
        //        $wrapper.removeClass('blue-bg');
        //        $wrapper.addClass('orange-bg')
    }

});

//var typer = new TypeIt('.typer', {
//    speed: 60,
//    startDelay: 4000,
//    autostart: true
//})
