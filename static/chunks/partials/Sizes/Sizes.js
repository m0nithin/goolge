import {
    a as n
} from "../../chunks/chunk-WEZX6APY-min.js";
import {
    a as e
} from "../../chunks/chunk-PVKMAFVQ-min.js";
import "../../chunks/chunk-E27WR637-min.js";

function s({
    id: t,
    width: r,
    height: i,
    colors: l = ["#086FFF", "#FFDDB7"],
    timingAnimation: o = 3,
    children: h
}) {
    return e("div", {
        class: "gradient-border --shape"
    }, e("div", {
        class: "gradient-border__shape"
    }, e("svg", {
        viewBox: `0 0 ${r} ${i}`,
        width: "100%",
        height: "100%",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, e(n, {
        colors: l,
        id: t,
        timingAnimation: o
    }), e("rect", {
        x: "0",
        y: "0",
        width: "100%",
        height: "100%",
        fill: `url(#gradient-${t})`,
        mask: `url(#shape-${t})`
    }), e("mask", {
        id: `shape-${t}`
    }, h))))
}
var d = 2,
    a = 12,
    $ = {
        Circle: e("g", {
            transform: `translate(${50}, ${50})`
        }, e("rect", {
            fill: "black",
            stroke: "white",
            "stroke-width": d,
            x: `${-45}`,
            y: `${-45}`,
            rx: 50,
            ry: 50,
            width: `${90}`,
            height: `${90}`,
            "data-rotation": 0,
            "data-radius-enter": a,
            "data-radius-leave": 50,
            "data-x-enter": `${-35}`,
            "data-x-leave": `${-45}`,
            "data-y-enter": `${-35}`,
            "data-y-leave": `${-45}`,
            "data-width-enter": `${70}`,
            "data-width-leave": `${90}`,
            "data-height-enter": `${70}`,
            "data-height-leave": `${90}`,
            className: "js-rect"
        })),
        Rect: e("g", {
            transform: `translate(${50}, ${50})`
        }, e("rect", {
            fill: "black",
            stroke: "white",
            "stroke-width": d,
            x: `${-35}`,
            y: `${-35}`,
            rx: a,
            ry: a,
            width: `${70}`,
            height: `${70}`,
            "data-rotation": 0,
            "data-radius-enter": a * 2,
            "data-radius-leave": a,
            "data-x-enter": `${-30}`,
            "data-x-leave": `${-35}`,
            "data-y-enter": `${-30}`,
            "data-y-leave": `${-35}`,
            "data-width-enter": `${60}`,
            "data-width-leave": `${70}`,
            "data-height-enter": `${60}`,
            "data-height-leave": `${70}`,
            className: "js-rect"
        })),
        Polygon: e("g", {
            transform: `translate(${50}, ${50})`
        }, e("rect", {
            fill: "black",
            stroke: "white",
            "stroke-width": d,
            x: `${-25}`,
            y: `${-25}`,
            rx: a,
            ry: a,
            width: `${50}`,
            height: `${50}`,
            "data-rotation": 45,
            "data-radius-enter": a * 2,
            "data-radius-leave": a,
            "data-x-enter": `${-25}`,
            "data-x-leave": `${-25}`,
            "data-y-enter": `${-25}`,
            "data-y-leave": `${-25}`,
            "data-width-enter": `${50}`,
            "data-width-leave": `${50}`,
            "data-height-enter": `${50}`,
            "data-height-leave": `${50}`,
            className: "js-rect"
        }))
    };

function c({
    partial: t
}) {
    return e("section", {
        class: "gem-sizes gemini-grid"
    }, e("h2", {
        className: "gem-sizes__title t-h2-alt glue-headline css-in-view",
        "data-in-view": !0
    }, t.title), e("div", {
        class: "gem-sizes__list"
    }, t.items.map((r, i) => e("size-custom", {
        class: "gem-sizes-item css-in-view",
        "data-in-view": !0,
        key: i
    }, e("div", {
        class: "js-hover"
    }, e(s, {
        id: `sizes-${i}`,
        width: 100,
        height: 100,
        timingAnimation: 2 + i * 1.5
    }, $[r.shape]), e("div", {
        className: "content"
    }, e("p", {
        class: "gem-sizes__name"
    }, r.name), r.label && e("p", {
        class: "gem-sizes__label"
    }, r.label))), e("p", {
        class: "gem-sizes__text t-paragraph"
    }, " ", r.text, " ")))))
}
var u = c;
export {
    u as
    default
};