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
    const scroll_to = (title) => {
        let anchor_text = title.toLowerCase().split(' ').join('-');
        let length = document.getElementById(anchor_text).getBoundingClientRect().top;
        window.scrollBy({
            top: length,
            left: 0,
            behavior: 'smooth'
        });
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
        if (sidebar.getBoundingClientRect().y < 0) { // when top of toc is down
            sidebar.classList.add('sidebar-detached');
        }
        if (document.querySelector('.header').getBoundingClientRect().bottom > 0) {
            sidebar.classList.remove('sidebar-detached');
        }
    });
};

const init_nav = () => {
    let navigation = responsiveNav("#nav", {
        animate: true,
        transition: 400,
        label: '',
        init: function () {
            document.getElementsByClassName('nav-toggle')[0].classList.add('fa', 'fa-navicon');
        },
    });

    let navbar = document.getElementById('nav-wrap');
    document.body.addEventListener('click', () => navigation.close());
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
                if (last_scroll_y <= 0) {
                    window.requestAnimationFrame(undetach)
                }
                window.requestAnimationFrame(display);
            }
        }
        ticking = true;
    });
};

const init_search = () => {
    const dispatch_search = () => {
        let search_text = document.getElementById('search-line').value.split(' ').join('+');
        if (search_text) {
            location.href = `https://www.google.com/search?q=site:sharzy.in+${search_text}`;
        }
    };
    let search_line = document.getElementById('search-line');
    document.getElementById('search-btn').addEventListener('click', () => {
        if (search_line.classList.contains('search-line-hidden')) {
            search_line.classList.remove('search-line-hidden');
        } else {
            dispatch_search();
        }
    });
    search_line.addEventListener('keyup', (event) => {
        if (event.code === 'Enter') {
            dispatch_search();
        }
    });
    search_line.addEventListener('focusout', () => {
        search_line.classList.add('search-line-hidden');
    });
};

const init_gitalk = () => {
    String.prototype.hashCode = function() {
        let hash = 0, i, chr;
        if (this.length === 0) return hash;
        for (i = 0; i < this.length; i++) {
            chr   = this.charCodeAt(i);
            hash  = ((hash << 5) - hash) + chr;
            hash |= 0; // Convert to 32bit integer
        }
        return Math.abs(hash);
    };
    const gitalk = new Gitalk({
        clientID: '56fd0766110ee8f26064',
        clientSecret: 'e889ed7c286b99d8c4f5a431733fe06a8af3762a',
        repo: 'SharzyL.github.io',
        owner: 'SharzyL',
        admin: ['SharzyL'],
        id: location.pathname.hashCode().toString(),      // Ensure uniqueness and length less than 50
        distractionFreeMode: true  // Facebook-like distraction free mode
    });

    gitalk.render('gitalk-container');
};

const init_zoomer = () => {
    const zooming = new Zooming({

    });
    zooming.listen('article img');
};

const ie_redirect = () => {
    if ( window.ActiveXObject || "ActiveXObject" in window ) {
        window.location.href = '/ie-redirect.html';
    }
};

window.addEventListener('DOMContentLoaded', () => {
    init_nav();
    init_sidebar(document.getElementById('sidebar'));
    init_toc(
        document.querySelector('article'),
        document.getElementById('toc')
    );
    init_search();
});

window.addEventListener('load', () => {
    ie_redirect();
    try {
        MathJax.Hub.Config({
            tex2jax: {inlineMath: [['$','$']]}
        });
        init_zoomer();
        init_gitalk();
    } catch (e) {
        if (e instanceof ReferenceError) {}
        else {
            throw e;
        }
    }
});