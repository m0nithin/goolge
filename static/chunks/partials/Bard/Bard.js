import {
    a as i
} from "../../chunks/chunk-ML2RVEP3-min.js";
import {
    a as t
} from "../../chunks/chunk-PVKMAFVQ-min.js";
import "../../chunks/chunk-E27WR637-min.js";

function n() {
    let e = "#3B94DC",
        r = "#7083D4",
        s = "#A670B7",
        a = "#D66771",
        o = 7;
    return t("svg", {
        class: "gradient",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, t("defs", null, t("linearGradient", {
        id: "find-more-gradient2"
    }, t("stop", {
        offset: "0%",
        "stop-color": e,
        "stop-opacity": "0"
    }, t("animate", {
        attributeName: "stop-opacity",
        values: "1;0;1",
        dur: o * 1.4,
        repeatCount: "indefinite"
    })), t("stop", {
        offset: "50%",
        "stop-color": r
    }), t("stop", {
        offset: "80%",
        "stop-color": a
    }, t("animate", {
        attributeName: "offset",
        values: "80;100;80",
        dur: o * 1.4,
        repeatCount: "indefinite"
    })), t("animateTransform", {
        attributeName: "gradientTransform",
        type: "rotate",
        from: "0 .5 .5",
        to: "360 .5 .5",
        dur: `${o*1.4}s`,
        repeatCount: "indefinite"
    })), t("linearGradient", {
        id: "find-more-gradient"
    }, t("stop", {
        offset: "0",
        "stop-color": e
    }, t("animate", {
        attributeName: "stop-color",
        values: `${e};${r};${e}`,
        dur: `${o}s`,
        repeatCount: "indefinite"
    })), t("stop", {
        offset: "30%",
        "stop-color": r
    }), t("stop", {
        offset: "50%",
        "stop-color": s
    }), t("stop", {
        offset: "100%",
        "stop-color": a
    }), t("animateTransform", {
        attributeName: "gradientTransform",
        type: "rotate",
        from: "360 .5 .5",
        to: "0 .5 .5",
        dur: `${o}s`,
        repeatCount: "indefinite"
    }))), t("rect", {
        x: "0",
        y: "0",
        width: "100%",
        height: "100%",
        fill: "url(#find-more-gradient)"
    }), t("rect", {
        x: "0",
        y: "0",
        width: "100%",
        height: "100%",
        fill: "url(#find-more-gradient2)"
    }))
}

function d({
    partial: e
}) {
    return t("div", {
        "data-section": (e == null ? void 0 : e.sectionId) || !1,
        className: "bard glue-grid"
    }, t("div", {
        className: "bard__content u-flex-center"
    }, t("p", {
        className: "glue-headline t-h2"
    }, e.title), e.paragraph && t("p", {
        className: "t-paragraph",
        "data-in-view": !0,
        dangerouslySetInnerHTML: {
            __html: e.paragraph
        }
    }), e.button && t(i, { ...e.button,
        "data-in-view": !0,
        className: "css-in-view"
    }), t(n, null)))
}
export {
    d as
    default
};