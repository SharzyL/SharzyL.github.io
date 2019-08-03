window.addEventListener('load', () => {
    let navbar = document.getElementById('nav-wrap');
    let ticking = false; // record if browser is painting, to avoid frequent repainting
    let display = () => {
        navbar.classList.add('nav-active');
        ticking = false;
    };
    let hide = () => {
        navbar.classList.remove('nav-active');
        ticking = false;
    };
    let detach = () => {
        navbar.classList.add('nav-detach');
        ticking = false;
    };
    let undetach = () => {
        navbar.classList.remove('nav-detach');
        ticking = false;
    };
    let last_scroll_y = 0;

    window.addEventListener('scroll', () => {
        let true_last_scroll_y = last_scroll_y;
        last_scroll_y = window.scrollY;
        if (!ticking) {
            if (true_last_scroll_y < last_scroll_y) { // it is scrolling down
                if (last_scroll_y > 100) {
                    window.requestAnimationFrame(detach);
                }
                window.requestAnimationFrame(hide);
            } else { // it is scrolling up
                if (last_scroll_y === 0) {
                    window.requestAnimationFrame(undetach)
                }
                window.requestAnimationFrame(display);
            }
        }
        ticking = true;
    })
});
