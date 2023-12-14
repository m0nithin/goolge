import {
    a as i
} from "../../chunks/chunk-QME5HD72-min.js";
import "../../chunks/chunk-ML2RVEP3-min.js";
import {
    b as o
} from "../../chunks/chunk-AFKMFZLY-min.js";
import {
    a as l
} from "../../chunks/chunk-ODSL2YY7-min.js";
import {
    a as e
} from "../../chunks/chunk-PVKMAFVQ-min.js";
import "../../chunks/chunk-E27WR637-min.js";
var d = /\.(mp4|webm|ogg|avi|mov|wmv)/i,
    r = o(d);

function c({
    partial: t
}) {
    return e("section", {
        className: "video-chapters",
        "data-section": (t == null ? void 0 : t.sectionId) || !1
    }, t.header && e(i, { ...t.header
    }), e("video-chapters", {
        class: "video-chapters__block",
        "data-playerId": `player-${t.videoId}`,
        "data-videoId": t.videoId,
        id: `video-chapter-${t.videoId}`
    }, e("scale-custom", {
        class: "gemini-grid"
    }, e("div", {
        className: "video-chapters__player js-scale"
    }, e("div", {
        className: "u-abs js-scale-inner"
    }, e("a", {
        class: "button-fallback ",
        title: "Play/Pause Video",
        "aria-label": "Watch Video",
        rel: "noopener noreferrer",
        target: "_blank",
        href: `https://www.youtube.com/watch?v=${t.videoId}`
    }, e("svg", {
        width: "71",
        height: "71",
        viewBox: "0 0 71 71",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        title: "Play icon"
    }, e("path", {
        id: "ic_play_circle_filled_24px",
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M0.8518 35.6269C0.817169 16.3069 16.469 0.598847 35.789 0.564215C55.109 0.529584 70.8171 16.1815 70.8517 35.5014C70.8863 54.8214 55.2345 70.5295 35.9145 70.5641C16.5945 70.5987 0.886431 54.9469 0.8518 35.6269ZM49.8517 35.5391L28.8235 19.8267L28.88 51.3267L49.8517 35.5391Z",
        fill: "white"
    })), r(l(t.chapters[0].poster)) ? e("video", {
        src: l(t.chapters[0].poster),
        muted: !0,
        autoplay: !0,
        loop: !0,
        playsInline: !0,
        loading: "lazy"
    }) : e("img", {
        src: l(t.chapters[0].poster),
        alt: `Chapter: ${t.chapters[0].label}`,
        loading: "lazy"
    })), e("button", {
        class: "play",
        title: "Play/Pause Video",
        "aria-label": "Play or pause video",
        "aria-hidden": !0
    }, e("svg", {
        width: "84",
        height: "84",
        viewBox: "0 0 84 84",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, e("circle", {
        class: "js-circle",
        cx: "42",
        cy: "42",
        r: "36",
        fill: "white"
    }), e("path", {
        d: "M35 57.75V26.25L56 42L35 57.75Z",
        fill: "black"
    })), t.chapters.map((s, a) => r(l(s.poster)) ? e("video", {
        src: l(s.poster),
        muted: !0,
        autoplay: !0,
        className: `button-asset ${a===0?"visible":""}`,
        loop: !0,
        playsInline: !0,
        loading: "lazy"
    }) : e("img", {
        className: `button-asset ${a===0?"visible":""}`,
        src: l(s.poster),
        alt: `Chapter: ${s.label}`,
        loading: "lazy"
    }))), e("div", {
        id: `player-${t.videoId}`
    })))), e("div", {
        className: "video-chapters__gradients"
    }, e("div", {
        className: "video-chapters__chapters"
    }, e("ul", {
        className: "video-chapters__chapters__list",
        "data-in-view": !0
    }, t.chapters.map((s, a) => e("li", {
        key: a,
        className: "chapter",
        style: {
            "--delay": `${a*.1}s`
        }
    }, e("br", null), e("button", {
        "aria-label": `Chapter ${a+1}: ${s.label}`,
        "data-start": s.start
    }, s.label))))))))
}
export {
    c as
    default
};