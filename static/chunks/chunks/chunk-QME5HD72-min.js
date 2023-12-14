import {
    a as s
} from "./chunk-ML2RVEP3-min.js";
import {
    a as t
} from "./chunk-PVKMAFVQ-min.js";

function o({
    title: e,
    paragraph: i,
    button: n,
    small: a
}) {
    return t("div", {
        className: "section-title"
    }, e && t("h2", {
        className: `section-title__title ${a?"t-h2-alt":"t-h2"} glue-headline css-in-view`,
        "data-in-view": !0,
        dangerouslySetInnerHTML: {
            __html: e
        }
    }), i && t("p", {
        className: "section-title__text t-paragraph glue-card__description css-in-view",
        "data-in-view": !0,
        dangerouslySetInnerHTML: {
            __html: i
        }
    }), n && t(s, { ...n,
        "data-in-view": !0,
        className: "css-in-view"
    }))
}
export {
    o as a
};