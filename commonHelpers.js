import{S as v,a as w,i as d}from"./assets/vendor-bad0427b.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const S=document.querySelector(".form-search"),q=document.querySelector(".picture-search-name"),g=document.querySelector(".loader-container"),i=document.querySelector(".load-more-button"),m=new v(".gallery a",{captionsData:"alt",captionDelay:250}),$="https://pixabay.com/api/",k="41511305-1e730bfa7be67778e89c40f75";let a=1;const y=40;let f="";function E(){g.style.display="block"}function h(){g.style.display="none"}async function L(r,o){f=r;const c={key:k,q:f,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:y},n=new URLSearchParams(c);E();try{const e=await w.get(`${$}?${n}`);h();const{hits:t,totalHits:l}=e.data,p=document.querySelector(".gallery");m.refresh(),o===1&&(p.innerHTML="");const b=t.reduce((u,s)=>u+`<a class="gallery-link" href="${s.largeImageURL}">
            <img
                class="gallery-image"
                src="${s.webformatURL}"
                alt="${s.tags}"
            />
           <ul class="info-list">
              <li class="info-item">
                  <p class="info-title">Likes</p>
                  <p class="info-value">${s.likes}</p>
              </li>
              <li class="info-item">
                  <p class="info-title">Views</p>
                  <p class="info-value">${s.views}</p>
              </li>
              <li class="info-item">
                  <p class="info-title">Comments</p>
                  <p class="info-value">${s.comments}</p>
              </li>
              <li class="info-item">
                  <p class="info-title">Downloads</p>
                  <p class="info-value">${s.downloads}</p>
              </li>
            </ul>
        </a>`,"");if(p.insertAdjacentHTML("beforeend",b),m.refresh(),o*y>=l)i.style.display="none",d.error({title:"Error",message:"We're sorry, but you've reached the end of search results.",position:"topRight"});else{i.style.display="block";const u=document.querySelector(".gallery-link").getBoundingClientRect().height;window.scrollBy({top:u*2,behavior:"smooth"})}}catch(e){h(),d.error({title:"Error",message:e.message,position:"topRight"})}}S.addEventListener("submit",r=>{r.preventDefault();const o=q.value.trim();a=1,i.style.display="none",L(o,a),r.currentTarget.reset()});i.addEventListener("click",()=>{a+=1,L(f,a)});
//# sourceMappingURL=commonHelpers.js.map
