import{S as w,a as S,i as f}from"./assets/vendor-bad0427b.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&u(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function u(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const q=document.querySelector(".form-search"),y=document.querySelector(".gallery"),$=document.querySelector(".picture-search-name"),m=document.querySelector(".loader-container"),n=document.querySelector(".load-more-button"),k=new w(".gallery a",{captionsData:"alt",captionDelay:250});let i=1;const d=40;let a="";function E(){m.style.display="block"}function P(){m.style.display="none"}async function g(l,s){const c="https://pixabay.com/api/",e={key:"41511305-1e730bfa7be67778e89c40f75",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:d},t=new URLSearchParams(e);E();try{const o=await S.get(`${c}?${t}`),{hits:p,totalHits:h}=o.data;if(p.length===0){n.style.display="none",f.warning({title:"Warning",message:"No results found for the given query.",position:"topRight"});return}const L=p.reduce((v,r)=>v+`<a class="gallery-link" href="${r.largeImageURL}">
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
        </a>`,"");y.insertAdjacentHTML("beforeend",L),k.refresh(),n.style.display="block";const b=document.querySelector(".gallery-link").getBoundingClientRect().height;window.scrollBy({top:b*2,behavior:"smooth"}),s*d>=h&&(n.style.display="none",f.error({title:"Error",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(o){f.error({title:"Error",message:o.message,position:"topRight"})}finally{P()}}q.addEventListener("submit",l=>{l.preventDefault(),y.innerHTML="",a=$.value.trim(),i=1,n.style.display="none",g(a,i),l.currentTarget.reset()});n.addEventListener("click",()=>{i+=1,g(a,i)});
//# sourceMappingURL=commonHelpers.js.map
