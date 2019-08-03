/*
 * Copyright (c) 2019.  @sharzy
 * https://github.com/SharzyL
 * javascript file loaded for index.html
 */

'use strict';


// tag system
(function f() {
    let cards = document.getElementsByClassName('post-card');
    let all_tags_str = new Set();  // a set including all tags(str)
    let selected_tags_str = new Set();  // a set including all selected tags(str)
    let show_tags_obj = new Set();
    let show_all_tags_obj = document.getElementById('show-tags-a');
    let hint_obj = document.getElementById('content-hint');
    show_all_tags_obj.addEventListener('click', show_all_tags);
    for (let card of cards) {
        card.tags_str = card.getAttribute('tags').split(' ').slice(0, -1);
        card.tags_str.forEach(tag => {
            all_tags_str.add(tag);
        });
    }

    let showcase = document.getElementById('tags-showcase');
    for (let tag_str of all_tags_str) {
        // create show_tag_obj for all tags occurred
        let show_tag_obj = document.createElement('a');
        show_tag_obj.classList.add('tag');
        show_tag_obj.innerText = tag_str;
        showcase.appendChild(show_tag_obj);
        show_tags_obj.add(show_tag_obj);

        // handle click event for show_tag_obj
        show_tag_obj.addEventListener('click', () => {
            if (selected_tags_str.has(tag_str)) {
                show_tag_obj.classList.remove('tag-selected');
                selected_tags_str.delete(tag_str);
            } else {
                show_tag_obj.classList.add('tag-selected');
                selected_tags_str.add(tag_str);
            }
            filter_tags()
        })
    }

    // handle url jumping
    let i = location.href.indexOf('?tags=');
    if (i !== -1) {
        let selected_tags_text = new Set(location.href.slice(i + 6).split('&'));
        show_tags_obj.forEach((tag) => {
            if (selected_tags_text.has(tag.innerText)) {
                tag.classList.add('tag-selected');
                selected_tags_str.add(tag.innerText);
            }
            filter_tags()
        })
    }

    function show_all_tags() {
        for (let card of cards) {
            card.classList.remove('hidden');
        }
        for (let tag of show_tags_obj) {
            tag.classList.remove('tag-selected');
        }
        show_all_tags_obj.classList.add('hidden');
        selected_tags_str.clear();
        hint_obj.innerText = 'All posts';
    }

    function filter_tags() {
        // when no tag is selected, show all post cards.
        if (!selected_tags_str.size) {
            show_all_tags_obj.classList.add('hidden');
            show_all_tags();
            return;
        }

        // for all post cards, test if it should be reserved
        show_all_tags_obj.classList.remove('hidden');
        for (let card of cards) {
            let reserved = false;  // a variable to record if this card should be reserved;
            for (let tag_str of card.tags_str) {
                if (selected_tags_str.has(tag_str)) {
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
        let hint_text = 'Posts involving ';
        for (let tag_str of selected_tags_str) {
            let tag_text = tag_str;
            hint_text += `<a href="/?tags=${tag_text}" class="tag tag-selected">${tag_text}</a>`;
        }
        hint_obj.innerHTML = hint_text;
    }

})();

//TODO: improve tags system on mobile systems