(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();function i(){const o=document.body;if(document.querySelector(".mobile-menu-overlay"))return;const n=document.createElement("div");n.className="mobile-menu-overlay",n.innerHTML=`
    <div class="mobile-menu-content">
      <div class="mobile-menu-header">
        <div class="nav-logo-icon"><span></span><span></span><span></span><span></span></div>
        <button class="close-mobile-menu">&times;</button>
      </div>
      <div class="mobile-nav-links">
        <a href="index.html">Home</a>
        <a href="menu.html">Menu</a>
        <a href="about.html">Our Story</a>
        <a href="blog.html">Journal</a>
      </div>
      <div class="mobile-menu-footer">
        <a href="menu.html" class="nav-cta-mobile">Order Now</a>
      </div>
    </div>
  `,o.appendChild(n),n.querySelector(".close-mobile-menu").addEventListener("click",()=>{n.classList.remove("active"),o.style.overflow=""}),n.querySelectorAll(".mobile-nav-links a, .nav-cta-mobile").forEach(e=>{e.addEventListener("click",()=>{n.classList.remove("active"),o.style.overflow=""})}),document.querySelectorAll(".navbar").forEach(e=>{let t=e.querySelector(".nav-hamburger");t||(t=document.createElement("button"),t.className="nav-hamburger",t.innerHTML="<span></span><span></span><span></span>",e.appendChild(t)),t.addEventListener("click",r=>{r.preventDefault(),n.classList.add("active"),o.style.overflow="hidden"})}),window.toggleMobileMenu=function(){n.classList.add("active"),o.style.overflow="hidden"}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",i):i();
