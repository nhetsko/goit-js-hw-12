import{S as w,a as S,i as f}from"./assets/vendor-bad0427b.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&u(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function u(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const q=document.querySelector(".form-search"),d=document.querySelector(".gallery"),$=document.querySelector(".picture-search-name"),m=document.querySelector(".loader-container"),n=document.querySelector(".load-more-button"),k=new w(".gallery a",{captionsData:"alt",captionDelay:250});let a=1;const p=40;let i="";function E(){m.style.display="block"}function P(){m.style.display="none"}async function y(l,s){const c="https://pixabay.com/api/",e={key:"41511305-1e730bfa7be67778e89c40f75",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:p},t=new URLSearchParams(e);E();try{const o=await S.get(`${c}?${t}`),{hits:h,totalHits:g}=o.data,L=h.reduce((v,r)=>v+`<a class="gallery-link" href="${r.largeImageURL}">
            <img
                class="gallery-image"
                src="${r.webformatURL}"
                alt="${r.tags}"
            />
           <ul class="info-list">
              <li class="info-item">
                  <p class="info-title">Likes</p>
                  <p class="info-value">${r.likes}</p>
              </li>
              <li class="info-item">
                  <p class="info-title">Views</p>
                  <p class="info-value">${r.views}</p>
              </li>
              <li class="info-item">
                  <p class="info-title">Comments</p>
                  <p class="info-value">${r.comments}</p>
              </li>
              <li class="info-item">
                  <p class="info-title">Downloads</p>
                  <p class="info-value">${r.downloads}</p>
              </li>
            </ul>
        </a>`,"");d.insertAdjacentHTML("beforeend",L),k.refresh(),s*p>=g&&(n.style.display="none",f.error({title:"Error",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})),n.style.display="block";const b=document.querySelector(".gallery-link").getBoundingClientRect().height;window.scrollBy({top:b*2,behavior:"smooth"})}catch(o){f.error({title:"Error",message:o.message,position:"topRight"})}finally{P()}}q.addEventListener("submit",l=>{l.preventDefault(),d.innerHTML="",i=$.value.trim(),a=1,n.style.display="none",y(i,a),l.currentTarget.reset()});n.addEventListener("click",()=>{a+=1,y(i,a)});
//# sourceMappingURL=commonHelpers.js.map
