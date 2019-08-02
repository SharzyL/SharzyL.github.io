'use strict';

(function f() {
    let cards = document.getElementsByClassName('post-card');
    let all_tags = new Set();
    let selected_tags = new Set();
    let show_tags = new Set();
    let show_all_tags_a = document.getElementById('show-tags-a');
    show_all_tags_a.addEventListener('click', show_all_tags);
    for (let card of cards) {
        card.tags = card.getAttribute('tags').split(' ').slice(0, -1);
        card.tags.forEach(tag => {
            all_tags.add(tag);
        });
    }

    let showcase = document.getElementById('tags-showcase');
    for (let tag of all_tags) {
        let show_tag = document.createElement('a');
        show_tag.classList.add('tag');
        show_tag.innerText = tag;
        showcase.appendChild(show_tag);
        show_tags.add(show_tag);
        show_tag.addEventListener('click', () => {
            if (selected_tags.has(tag)) {
                show_tag.classList.remove('tag-selected');
                selected_tags.delete(tag);
            } else {
                show_tag.classList.add('tag-selected');
                selected_tags.add(tag);
            }
            filter()
        })
    }

    function show_all_tags() {
        for (let card of cards) {
            card.classList.remove('hidden');
        }
        for (let tag of show_tags) {
            tag.classList.remove('tag-selected');
        }
        show_all_tags_a.classList.add('hidden');
        selected_tags.clear();
    }

    function filter() {
        if (selected_tags) {
            show_all_tags_a.classList.remove('hidden');
        } else {
            show_all_tags_a.classList.add('hidden');
        }
        for (let card of cards) {
            let reserved = false;  // a variable to record if this card should be reserved;
            for (let tag of card.tags) {
                if (selected_tags.has(tag)) {
                    reserved = true;
                    break;
                }
            }
            if (reserved) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden')
            }
        }
    }
})();