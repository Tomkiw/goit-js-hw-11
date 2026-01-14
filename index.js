import{a as f,S as d,i as a}from"./assets/vendor-Cq7ZUixy.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function p(n){const i="54182222-bc9f62244d35838f397753c37",t="https://pixabay.com/api/",s={params:{key:i,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:9}};return f.get(t,s).then(e=>e.data)}let m=new d(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});const c=document.querySelector(".gallery"),u=document.querySelector(".loader");function h(n){const i=n.map(t=>`<li class="gallery-item">
      <a class="gallery-link" href="${t.largeImageURL}">
        <img 
          class="gallery-image" 
          src="${t.webformatURL}" 
          alt="${t.tags}" 
        />
      </a>

      <div class="inf-container">
  <ul class="inf-list">
    <li class="inf-item">
      <h3>Likes</h3>
      <span>${t.likes}</span>
    </li>

     <li class="inf-item">
      <h3>Views</h3>
      <span>${t.views}</span>
    </li>

     <li class="inf-item">
      <h3>Comments</h3>
      <span>${t.comments}</span>
    </li>

     <li class="inf-item">
      <h3>Downloads</h3>
      <span>${t.downloads}</span>
    </li>

  </ul>
</div>
      </li>`).join("");c.insertAdjacentHTML("beforeend",i),m.refresh()}function y(){c.innerHTML=""}const g=()=>{u.classList.remove("is-hidden")},L=()=>{u.classList.add("is-hidden")},l=document.querySelector(".form");l.addEventListener("submit",n=>{n.preventDefault();const t=n.target.querySelector("input").value.trim();if(!t){a.warning({title:"Warning",message:"Please enter a search query!"});return}y(),g(),p(t).then(s=>{if(s.hits.length===0){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(s.hits)}).catch(s=>{console.error(s),a.error({message:"Something went wrong! Please try again later.",position:"topRight"})}).finally(()=>{L(),l.reset()})});
//# sourceMappingURL=index.js.map
