'use strict';

window.onload = () => {
    let clock = document.getElementById('clock');
    function createTime(text, initDeg, tag) {
        let timeWrap = document.createElement('span');
        timeWrap.className = 'time-wrap ' + tag;
        timeWrap.style.transform = `rotate(${initDeg}deg)`;
        clock.appendChild(timeWrap);
        let timeObj = document.createElement('span');
        timeObj.innerHTML = text;
        timeObj.className = 'time';
        timeWrap.appendChild(timeObj);
    }
    let now = new Date();
    let hour = now.getHours(), minute = now.getMinutes(), second = now.getSeconds(), msecond = now.getMilliseconds();
    let hourOffset = (second + 60 * minute + 3600 * hour) / 240;
    let minuteOffset = (second + 60 * minute) / 10;
    let secondOffset = (second + msecond / 1000) * 6;
    for (let i = 0; i < 60; i ++) {
        createTime(i,6 * i - secondOffset,'seconds');
        createTime(i,6 * i - minuteOffset,'minutes');
    }
    for (let i = 0; i < 24; i ++) {
        createTime(i,15 * i - hourOffset,'hours');
    }
};