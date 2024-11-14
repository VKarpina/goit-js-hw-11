import{i as a,S as f}from"./assets/vendor-BrddEoy-.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const m="46968352-3644d680d7f4886b7770d091e";function p(r){const n=new URLSearchParams({key:m,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`https://pixabay.com/api/?${n}`).then(o=>{if(!o.ok)throw new Error("Failed to fetch images");return o.json()})}function h(r){return r.map(({webformatURL:n,largeImageURL:o,tags:i,likes:e,views:t,comments:s,downloads:u,previewWidth:d})=>`<li class="gallery-card">
      <a class="card-link" href="${o}">
    <img class="card-image" src="${n}" alt="${i}" width="${d}"/>
    <div class="card-info">
    <p class="params-item-value">Likes: ${e}</p>
    <p class="params-item-value">Views: ${t}</p>
    <p class="params-item-value">Comments: ${s}</p>
    <p class="params-item-value">Downloads: ${u}</p>
    </div>
    </a>
    </li> `).join("")}const y=document.querySelector(".gallery"),l=document.querySelector(".form-container"),c=document.querySelector(".loader");l.addEventListener("submit",g);function g(r){r.preventDefault();const n=r.currentTarget.elements.query.value.trim();n!==""&&(v(c),p(n).then(o=>{if(o.hits.length===0){a.info({message:"Photos not found, try another query"});return}y.innerHTML=h(o.hits),L.refresh()}).catch(o=>{console.log(o),a.error({message:"Something went wrong"})}).finally(()=>{w(c),l.reset()}))}const L=new f(".gallery a",{captionsData:"alt",captionDelay:250});function v(r){r.classList.remove("hidden")}function w(r){r.classList.add("hidden")}
//# sourceMappingURL=index.js.map
