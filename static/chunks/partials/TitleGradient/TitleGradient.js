import {
    a as t
} from "../../chunks/chunk-PVKMAFVQ-min.js";
import "../../chunks/chunk-E27WR637-min.js";

function s({
    partial: e
}) {
    return t("section", {
        "data-section": (e == null ? void 0 : e.sectionId) || !1,
        className: `title-gradient title-gradient--${e.size}`
    }, t("div", {
        className: "title-gradient__sticky js-sticky"
    }, t("h2", {
        className: "title-gradient__title t-h2-alt glue-headline"
    }, e.text, t("span", {
        class: "title-gradient__gradient"
    }, " ", e.gradientText, " "), t("span", {
        className: "js-stagger",
        dangerouslySetInnerHTML: {
            __html: e.textAfter
        }
    }))))
}
var n = s;
export {
    n as
    default
};