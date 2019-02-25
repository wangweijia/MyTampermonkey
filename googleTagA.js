// ==UserScript==
// @name         google tag a
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       wangweijia
// @match        https://www.google.co.jp/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    console.log("go");
    let allTagA = document.getElementsByTagName("a");

    if (allTagA.length > 0) {
        for (let i = 0; i < allTagA.length; i ++) {
            let tag = allTagA[i];
            tag.target = '_blank';
        }
    }
    console.log("end");
})();
