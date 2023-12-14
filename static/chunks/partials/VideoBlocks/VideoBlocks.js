import {
    a as N
} from "../../chunks/chunk-QME5HD72-min.js";
import "../../chunks/chunk-ML2RVEP3-min.js";
import {
    a as h
} from "../../chunks/chunk-AYOFRO2D-min.js";
import "../../chunks/chunk-WEZX6APY-min.js";
import {
    a as _,
    b as p
} from "../../chunks/chunk-PDMJRETB-min.js";
import {
    b as c
} from "../../chunks/chunk-ODSL2YY7-min.js";
import {
    a as o
} from "../../chunks/chunk-PVKMAFVQ-min.js";
import "../../chunks/chunk-E27WR637-min.js";
var w = ({
        partial: d
    }) => {
        var s;
        return o("section", {
            "data-section": (d == null ? void 0 : d.sectionId) || !1,
            className: "video-blocks",
            id: d.id
        }, d.header && o(N, { ...d.header
        }), o("video-blocks-wrapper", {
            class: "video-blocks__list u-flex-center"
        }, o("ul", {
            class: "video-blocks__list__wrapper"
        }, d.blocks && d.blocks.map((e, t) => {
            var a;
            return o("li", {
                className: "video-blocks__item"
            }, o("video-block", {
                title: `Explore: ${e.title}`,
                role: "button",
                "data-in-view": !0,
                className: `u-abs asset-${e.assets.length}`,
                "data-modal": `#video_block_modal_${t}`
            }, o("div", {
                class: "border"
            }), o("div", {
                className: "video-blocks__content"
            }, e.modal.videoId && o(p, {
                videoId: e.modal.videoId
            }), o("button", {
                class: "play-button-wrapper",
                "aria-hidden": !0,
                "aria-label": `Watch video ${(a=e.assets[0])===null||a===void 0?void 0:a.altText}`
            }, o("svg", {
                width: "71",
                height: "71",
                viewBox: "0 0 71 71",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, o("path", {
                id: "ic_play_circle_filled_24px",
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M0.8518 35.6269C0.817169 16.3069 16.469 0.598847 35.789 0.564215C55.109 0.529584 70.8171 16.1815 70.8517 35.5014C70.8863 54.8214 55.2345 70.5295 35.9145 70.5641C16.5945 70.5987 0.886431 54.9469 0.8518 35.6269ZM49.8517 35.5391L28.8235 19.8267L28.88 51.3267L49.8517 35.5391Z",
                fill: "white"
            }))), o(h, {
                id: `block-gradient-${e.modal.videoId}`,
                width: 100,
                height: 100,
                borderRadius: "6px"
            }), o("div", {
                className: "asset-wrapper"
            }, e.assets.map((i, l) => o("div", {
                className: "asset"
            }, o(c, { ...i
            })))))))
        })), o("button", {
            "data-load": !0,
            className: "video-blocks__list__load custom-button glue-button"
        }, o("span", null, "Load More"))), (s = d.blocks) === null || s === void 0 ? void 0 : s.map((e, t) => {
            var a, i, l, n, v, m, r;
            return o("video-block-modal", {
                className: "video-block-modal-wrapper",
                id: `video_block_modal_${t}`,
                "data-video-id": e.modal.videoId
            }, o("div", {
                className: "video-block-modal__blurry-background"
            }), o("div", {
                className: "video-block-modal-container"
            }, o("div", {
                className: "video-block-modal"
            }, o(_, {
                className: "video-block-modal__close-button"
            }), e.modal.videoId ? o("div", {
                className: "video-block-modal__video-wrapper",
                style: {
                    aspectRatio: ((a = e == null ? void 0 : e.modal) === null || a === void 0 ? void 0 : a.videoDimensions) ? `${(i=e==null?void 0:e.modal)===null||i===void 0?void 0:i.videoDimensions.width}/${(l=e==null?void 0:e.modal)===null||l===void 0?void 0:l.videoDimensions.height}` : "16/9"
                }
            }, o("div", {
                className: "video-block-modal__yt-wrap",
                style: {
                    paddingBottom: ((n = e == null ? void 0 : e.modal) === null || n === void 0 ? void 0 : n.videoDimensions) ? `${((v=e==null?void 0:e.modal)===null||v===void 0?void 0:v.videoDimensions.height)*100/((m=e==null?void 0:e.modal)===null||m===void 0?void 0:m.videoDimensions.width)}%` : "56%"
                }
            }, o("div", {
                className: "video-block-modal__yt-container",
                "data-video-container": !0
            }))) : o("div", {
                className: "video-block-modal__assets-wrapper"
            }, o("div", {
                className: "video-block-modal__assets-container"
            }, e.assets.map((b, u) => o(c, {
                url: b.url,
                altText: "",
                className: `${u===0&&"visible"} video-block-modal__asset`,
                "data-order": u
            })))), ((r = e.modal) === null || r === void 0 ? void 0 : r.content) && o("div", {
                className: "video-block-modal__content-wrapper"
            }, o("p", {
                className: "video-block-modal__caption"
            }, e.modal.content.caption), o("h5", {
                className: "video-block-modal__heading"
            }, e.modal.content.title), o("p", {
                className: "video-block-modal__paragraph"
            }, e.modal.content.paragraph)), e.modal.videoId && o(_, {
                className: "video-block-modal__close-button"
            }))))
        }))
    },
    y = w;
export {
    y as
    default
};