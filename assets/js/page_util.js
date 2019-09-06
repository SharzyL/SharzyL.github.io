/*
 * Copyright (c) 2019.  @sharzy
 * https://github.com/SharzyL
 * javascript file loaded for every normal blog pages
 */

const init_toc = (article, toc_obj) => {
    if (!article || !toc_obj) {
        return;
    }
    const createEle = (father, tag, innerHTML, properties=[]) => {
        let ele = document.createElement(tag);
        ele.innerHTML = innerHTML;
        for (let property in properties) {
            ele.setAttribute(property, properties[property])
        }
        father.appendChild(ele);
        return ele;
    };
    const head_tags = ['h1', 'h2', 'h3'];
    const selector = head_tags.join(', ');
    let head_objs = article.querySelectorAll(selector);
    let toc_items = [];
    let head_cnt = head_objs.length;
    for (let node of head_objs) {
        let toc_item = createEle(toc_obj, 'li',
            `<a class="toc-link">${node.innerText}</a>`,
            {'class': `toc-${node.tagName.toLowerCase()}`}
        );
        toc_item.addEventListener('click', () => scroll_to(node.innerText));
        toc_items.push(toc_item);
    }

    // we call a head active, if button of its content is under the top of viewport
    const is_active = (i) => {
        if (i >= head_cnt - 1) {
            return true;
        } else if (i < 0) {
            return false;
        } else {
            return head_objs[i + 1].getBoundingClientRect().top > 1; // allow for a little offset to avoid bias
        }
    };

    const find_active = () => {
        for (let i = 0; i < head_cnt; i ++) {
            if (is_active(i)) return i;
        }
    };

    let current_index = 0;  // representing the index of current active h1/h2/h3
    toc_items[current_index].classList.add('h-active');
    window.addEventListener('scroll', () => {
        if ( !is_active(current_index) || is_active(current_index - 1) ) {
            toc_items[current_index].classList.remove('h-active');
            current_index = find_active();
            toc_items[current_index].classList.add('h-active');
        }
    });

};

const init_sidebar = (sidebar) => {
    if (!sidebar) {
        return;
    }
    window.addEventListener('scroll', () => {
        if (sidebar.getBoundingClientRect().y < 0) { // when toc is down
            sidebar.classList.add('sidebar-detached');
        }
        if (document.querySelector('.header').getBoundingClientRect().bottom > 0) {
            sidebar.classList.remove('sidebar-detached');
        }
    });
};

const init_nav = () => {
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
                window.requestAnimationFrame(display);
            }

            // handle strange performance on Safari
            if (last_scroll_y === 0) {
                window.requestAnimationFrame(undetach);
                window.requestAnimationFrame(display);
            }
        }
        ticking = true;
    });
};

const scroll_to = (title) => {
    let length = document.getElementById(title.toLowerCase()).getBoundingClientRect().top;
    window.scrollBy({
        top: length,
        left: 0,
        behavior: 'smooth'
    })
};

window.addEventListener('DOMContentLoaded', () => {
    init_nav();
    init_sidebar(document.getElementById('sidebar'));
    init_toc(
        document.querySelector('article'),
        document.getElementById('toc')
    );
});
