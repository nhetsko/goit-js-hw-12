import{S as v,a as w,i as d}from"./assets/vendor-bad0427b.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&u(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function u(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const S=document.querySelector(".form-search"),p=document.querySelector(".gallery"),q=document.querySelector(".picture-search-name"),m=document.querySelector(".loader-container"),n=document.querySelector(".load-more-button"),$=new v(".gallery a",{captionsData:"alt",captionDelay:250});let i=1;const f=40;let a="";function k(){m.style.display="block"}function E(){m.style.display="none"}async function y(l,s){const c="https://pixabay.com/api/",e={key:"41511305-1e730bfa7be67778e89c40f75",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:f},t=new URLSearchParams(e);k();try{const o=await w.get(`${c}?${t}`),{hits:h,totalHits:g}=o.data,b=h.reduce((L,r)=>L+`<a class="gallery-link" href="${r.largeImageURL}">
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
        </a>`,"");p.insertAdjacentHTML("beforeend",b),$.refresh(),s*f>=g&&(n.style.display="none",d.error({title:"Error",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})),n.style.display="block";const P=document.querySelector(".gallery-link").getBoundingClientRect().height;window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})}catch(o){d.error({title:"Error",message:o.message,position:"topRight"})}finally{E()}}S.addEventListener("submit",l=>{l.preventDefault(),p.innerHTML="",a=q.value.trim(),i=1,n.style.display="none",y(a,i),l.currentTarget.reset()});n.addEventListener("click",()=>{i+=1,y(a,i)});
//# sourceMappingURL=commonHelpers.js.map
