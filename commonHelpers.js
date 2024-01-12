import{S as f,i as h,a as y}from"./assets/vendor-bad0427b.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const c=document.querySelector(".form-search"),u=document.querySelector(".gallery"),n=document.querySelector(".loader"),g=document.querySelector(".btn"),b=new f(".gallery a",{captionsData:"alt",captionDelay:250});let l=1,d=40;c.addEventListener("submit",v);async function v(r){r.preventDefault(),u.innerHTML=" ";const o=r.target.elements.search.value;n.style.display="block";try{const s=await L(o),a=Math.ceil(s.totalHits/d);if(l>a)return n.style.display="none",h.error({position:"topRight",message:"We're sorry, but you've reached the end of search results"});k(s),l+=1,l>1&&(g.textContent="Loading images, please wait..."),b.refresh()}catch(s){n.style.display="none",console.log(s)}c.reset()}async function L(r){const o="https://pixabay.com/api/",s="41511305-1e730bfa7be67778e89c40f75",a=new URLSearchParams({key:s,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:d,page:l});return(await y.get(`${o}?${a}`)).data}function k(r){const o=r.hits.map(({webformatURL:s,largeImageURL:a,tags:e,likes:t,views:i,comments:p,downloads:m})=>`<li class="gallery-item">
              <a class="gallery-link" href="${a}">
                <img
                  class="gallery-image"
                  src="${s}"
                  alt="${e}"
                  width="360"
                />
              </a>
              <div class="thumb-block">
                <div class="block">
                  <h2 class="tittle">Likes</h2>
                  <p class="amount">${t}</p>
                </div>
                <div class="block">
                  <h2 class="tittle">Views</h2>
                  <p class="amount">${i}</p>
                </div>
                <div class="block">
                  <h2 class="tittle">Comments</h2>
                  <p class="amount">${p}</p>
                </div>
                <div class="block">
                  <h2 class="tittle">Downloads</h2>
                  <p class="amount">${m}</p>
                </div>
              </div>
            </li>`).join("");u.insertAdjacentHTML("beforeend",o)}
//# sourceMappingURL=commonHelpers.js.map
