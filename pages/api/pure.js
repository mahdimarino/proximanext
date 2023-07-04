export default function pure() {
    window.addEventListener('scroll', () => {
        let content = document.querySelector('.part2div');
        let contentPosition = content.getBoundingClientRect().top;
        let screenPostion = window.innerHeight / 1.7;
        if (contentPosition < screenPostion) {
            content.classList.add('active');
        } else {
            content.classList.remove('active');
        }


    });
    window.addEventListener('scroll', () => {
        let content3 = document.querySelector('.pr3r1');
        let contentPosition3 = content3.getBoundingClientRect().top;
        let screenPostion3 = window.innerHeight / 1.7;
        if (contentPosition3 < screenPostion3) {
            content3.classList.add('active2');

        } else {
            content3.classList.remove('active2');

        }


    });

    window.addEventListener('scroll', () => {
        let content2 = document.querySelector('.mora');
        let contentPosition2 = content2.getBoundingClientRect().top;
        let screenPostion2 = window.innerHeight;
        if (contentPosition2 < screenPostion2) {
            content2.classList.add('active3');
        } else {
            content2.classList.remove('active3');
        }


    });
    window.addEventListener('scroll', () => {
        let content4 = document.querySelector('.pr3r2');
        let contentPosition4 = content4.getBoundingClientRect().top;
        let screenPostion4 = window.innerHeight / 1.7;
        if (contentPosition4 < screenPostion4) {
            content4.classList.add('active4');

        } else {
            content4.classList.remove('active4');

        }


    });

}


/* (function ($) {

    var images = ['portf1.jpg', 'hov1.jpg', 'snow.jpg']
    $(document).ready(function () {
        setInterval(() => {
            var image = $(".coror").css("background-image");
            image = image.substr(5, image.length - 7);
            next_image = images[(images.indexOf(image) + 1) % images.length];
            $(".coror").css("background-image", "url('" + next_image + "')");
        }, 1000);
    });
})(jQuery); */



/* $(".taswira").click(function () {

    if ($(this).hasClass("kbira")) {
        $(".taswira").removeClass("kbira");
    }

    else {
        $(".taswira").removeClass("kbira");
        $(this).addClass("kbira");
    }
}); */










