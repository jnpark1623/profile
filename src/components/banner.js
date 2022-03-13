
import '../css/banner.css'
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting/dist/splitting.min.js";
import React, { Component, useEffect, useState, useCallback } from 'react';

import { gsap } from "gsap";

let wrappers, tl;

let config = {
  isDebug: false,
  speed: 1
};

function init() {
  const split = Splitting({
    target: ".featured-text",
    by: "chars"
  });

  split.forEach(splitInstance => {
    wrappers = duplicateChars(splitInstance.chars);
    anim(wrappers);
  });
}

function randRange(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function duplicateChars(chars) {
  let wrappers = [];
  chars.forEach(el => {
    const wrapper = document.createElement("span");
    wrapper.setAttribute("class", "char-wrapper");
    el.parentNode.insertBefore(wrapper, el);
    wrapper.appendChild(el);

    let clone = el.cloneNode(true);
    clone.setAttribute("class", "char char--clone");
    wrapper.appendChild(clone);
    wrappers.push(wrapper);
  });

  return wrappers;
}

function anim(letters) {
  if (tl) {
    tl.kill();
  }
  tl = new gsap.timeline({
    paused: true,
    onComplete: anim,
    onCompleteParams: [letters]
  });

  letters.forEach((letter, index) => {
    const gotoY = `-${randRange(0, 3) * 2}0vw`;
    const speed = config.speed + Math.random();
    tl.to(
      letter,
      speed,
      {
        y: gotoY,
        ease: "power1.inOut",
        onComplete: () => {
            gsap.to(letter, {duration: 0, y: "0" });
        }
      },
      0
    );
  });

  tl.play();
}


function Banner () {

  const [cn, setCN] = useState("featured-text");
    useEffect(() => {
        init();
        setCN("");
      },[]);
    return (
        <div class="banner_container">
            <hgroup>
                <h1 className={cn}>jnpark</h1>
                <h2>CAN NOT SEE THE WOOD FOR THE TREES</h2>
            </hgroup>
        </div>
    )
}
export default Banner;