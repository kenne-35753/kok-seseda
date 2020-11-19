if (!NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function(callback) {
        for(var i = 0; i < this.length; i++) {
            callback(this[i]);
        }
    };
}

function preload(urls, oncomplete) {

    var left = 0;
    
    function onload() {
        left--;

        if (left < 0) {
            console.error(left);
        }
        if (left === 0 && oncomplete) {
            oncomplete(urls);
        }
    }

    for(var i = 0; i < urls.length; i++) {
        var url = urls[i];

        left++;

        var img = new Image();

        img.addEventListener('load', onload);
        img.addEventListener('error', onload);
        img.setAttribute("src", url);
    }
}

function switchVisible(root, show, hide) {
    root.querySelectorAll(hide).forEach(function(e) {
        e.style.display = 'none';
    });
    root.querySelectorAll(show).forEach(function(e) {
        e.style.display = '';
    });
}

function slideShowPlayer(slideImage, slideUrls, playButton) {

    if (slideUrls.length === 0) {
        return;
    }

    var coverUrl = slideImage.getAttribute("src");
    var slideShowIndex = null;

    function playSlideShow() {
        slideShowIndex = null;

        var slideSwitcherInterval;
        
        switchVisible(playButton, ".playing", ".idle,.loading");
        
        function tick() {
            if (slideShowIndex === null) {
                slideShowIndex = 0;
            } else {
                slideShowIndex++;
            }

            if (slideShowIndex >= slideUrls.length) {
                clearInterval(slideSwitcherInterval);

                slideImage.setAttribute("src", coverUrl);
                
                switchVisible(playButton, ".idle", ".loading,.playing");

                return;
            }

            slideImage.setAttribute("src", slideUrls[slideShowIndex]);
        }

        slideSwitcherInterval = setInterval(tick, 600);
        tick();
    }

    playButton.addEventListener("click", function (event) {
        switchVisible(playButton, ".loading", ".idle,.playing");
        preload(slideUrls, function() {
            playSlideShow();
        });
        event.preventDefault();
    });
}