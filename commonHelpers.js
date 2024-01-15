import{S as f,a as c,i as h}from"./assets/vendor-bad0427b.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const u=document.querySelector(".form-search"),y=document.querySelector(".gallery"),n=document.querySelector(".loader"),g=document.querySelector(".btn"),b=new f(".gallery a",{captionsData:"alt",captionDelay:250});c.create({baseURL:" https://pixabay.com/api/",params:{apiKey:"41511305-1e730bfa7be67778e89c40f75",language:"en"}});function v(r=[]){const a=r.reduce((s,{webformatURL:o,largeImageURL:e,tags:t,likes:i,views:d,comments:p,downloads:m})=>s+`<li class="gallery-item">
  <a class="gallery-link" href="${e}">
    <img
      class="gallery-image"
      src="${o}"
      alt="${t}"
      width="360"
    />
  </a>
  <div class="thumb-block">
    <div class="block">
      <h2 class="tittle">Likes</h2>
      <p class="amount">${i}</p>
    </div>
    <div class="block">
      <h2 class="tittle">Views</h2>
      <p class="amount">${d}</p>
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
</li>`,"");y.insertAdjacentHTML("beforeend",a)}let l=1,L=40;u.addEventListener("submit",k);async function k(r){r.preventDefault();const a=r.target.elements.search.value.trim();n.style.display="block";try{const s=await S(a),o=Math.ceil(s.totalHits/limit);if(l>o)return n.style.display="none",h.error({position:"topRight",message:"We're sorry, but you've reached the end of search results"});v(s),l+=1,l>1&&(g.textContent="Loading images, please wait..."),b.refresh()}catch(s){n.style.display="none",console.log(s)}u.reset()}async function S(r){const a="https://pixabay.com/api/",s="41511305-1e730bfa7be67778e89c40f75",o=new URLSearchParams({key:s,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:L,page:l});return(await c.get(`${a}?${o}`)).data}
//# sourceMappingURL=commonHelpers.js.map
