const t=document.getElementsByClassName("backdrop")[0],e=document.getElementsByClassName("movie-details-modal")[0],n=()=>{t.style.display="block"},a=n=>{"none"!==t.style.display&n.target!==e&&(t.style.display="none")},o=document.querySelector(".gallery__box"),s=document.querySelector(".pagination"),i="cd99a2449e6daaffb205ea92bac682a0";let r,c,l,d=1;const{log:g}=console,p=t=>fetch(t).then((t=>t.json())).catch((t=>g(t))),u=()=>(c=`\n    https://api.themoviedb.org/3/trending/movie/week?api_key=${i}&page=${d}`,p(c).then((t=>{r=t.total_pages,l=t.results,_(l),function(t,e){let n,a="",o=e-1,i=e+1;e>1&&(a+='<button class="pagination__button--arrow-left">\n    <svg class="pagination__icon--arrow-left" style="pointer-events: none;"><use href="/src/images/icons.svg#arrow"" style="pointer-events: none;"></use></svg>\n  </button>');e>2&&(a+='<button class="pagination__button" type="button" data-page="1">1</button>',e>3&&(a+='<span class="pagination__hidden-results">&middot&middot&middot</span>'));e===t?o-=2:e===t-1&&(o-=1);1===e?i+=2:e===t+1&&(i+=1);for(let s=o;s<=i;s++)s>t||(0===s&&(s+=1),n=e==s?"pagination__button--current":"",a+=`<button class="${n} pagination__button" type="button" data-page="${s}">${s}</button>`);e<t-1&&(e<t-2&&(a+='<span class="pagination__hidden-results">&middot&middot&middot</span>'),a+=`<button class="pagination__button" type="button" data-page="${t}">${t}</button>`);e<t&&(a+='<button class="pagination__button--arrow-right">\n    <svg class="pagination__icon--arrow-right" style="pointer-events: none;"><use href="/src/images/icons.svg#arrow" style="pointer-events: none;"></use></svg>\n  </button>');s.innerHTML=a}(r,d)})));u();const _=t=>{o.innerHTML="",t.map((async t=>{let e,n,a=t.title,s=t.poster_path,r=t.id,l=t.release_date.slice(0,4)||"Sorry. No relase date yet.",d=await(async t=>(c=`https://api.themoviedb.org/3/movie/${t}?api_key=${i}`,await p(c).then((t=>t))))(t.id).then((t=>t.genres.map((t=>t.name))));d.length>2?(n=d.slice(0,2).join(", "),e=", Other"):d.length<=2&&d.length>1?(n=d,e="",2===d.length&&(n=d.join(", "),e="")):(n="Sorry. No genre added yet.",e="");const g=`<figure class="card" data-id="${r}">\n<img class="card__image" src="https://image.tmdb.org/t/p/w500${s}" alt="${a} movie poster" />\n<figcaption class="card__caption">\n  <p class="card__title">${a}</p>\n  <p class="card__description">${n+e} | ${l}</p>\n</figcaption>\n</figure>`;o.innerHTML=o.innerHTML+g}))};s.addEventListener("click",(t=>{const e=document.querySelector(".pagination__button--arrow-left"),n=document.querySelector(".pagination__button--arrow-right");t.target===e&&(d--,u()),t.target===n&&(d++,u()),"button"===t.target.type&&(d=Number(t.target.dataset.page),u())}));[...document.querySelectorAll("figure")].forEach((t=>t.addEventListener("click",n)));const m=document.getElementsByClassName("movie-details-modal__close-btn")[0];window.addEventListener("click",a),m.addEventListener("click",a);
//# sourceMappingURL=index.6dfcea9e.js.map
