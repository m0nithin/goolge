import {
    a as e
} from "./chunk-PVKMAFVQ-min.js";
var s;
(function(a) {
    a.HighEmphasis = "high-emphasis", a.MediumEmphasis = "medium-emphasis", a.LowEmphasis = "low-emphasis"
})(s || (s = {}));

function n({
    label: i,
    url: l,
    ariaLabel: t,
    onClick: a,
    className: o,
    arrow: r,
    target: g,
    ...m
}) {
    return e("a", {
        className: `custom-button glue-button ${r?"glue-button--icon-right":""} ${o}`,
        href: l,
        "aria-label": t,
        onClick: a,
        target: g || "_self",
        ...m
    }, e("span", {
        className: "button__label"
    }, i), r && e("svg", {
        role: "presentation",
        "aria-hidden": "true",
        class: "glue-icon glue-icon--arrow-forward"
    }, e("use", {
        href: "./static/icons/glue-icons.svg#arrow-forward"
    })))
}
var c = n;
export {
    c as a
};