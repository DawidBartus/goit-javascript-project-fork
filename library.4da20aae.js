!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},a={},r=t.parcelRequired76b;null==r&&((r=function(t){if(t in e)return e[t].exports;if(t in a){var r=a[t];delete a[t];var n={id:t,exports:{}};return e[t]=n,r.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){a[t]=e},t.parcelRequired76b=r);var n=r("1HCJj"),i=r("2Kvm0");(0,n.setLibraryState)("watched");const o=document.querySelector(".library-actions");o.addEventListener("click",(function(t){if("BUTTON"!==t.target.tagName)return;const e=o.querySelector(".library-actions__button--active");e.classList.remove("library-actions__button--active"),e.classList.add("library-actions__button");const a=t.target;a.classList.remove("library-actions__button"),a.classList.add("library-actions__button--active"),"Watched"===a.textContent?((0,n.setLibraryState)("watched"),(0,n.setPaginationState)("watched"),(0,i.createLibrary)("watched",1)):"Queue"===a.textContent&&((0,n.setLibraryState)("queue"),(0,n.setPaginationState)("queue"),(0,i.createLibrary)("queue",1))}))}();
//# sourceMappingURL=library.4da20aae.js.map
