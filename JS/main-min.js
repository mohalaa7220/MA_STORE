let load_page=document.createElement("div");load_page.id="load",document.body.appendChild(load_page);let spinner=document.createElement("div");spinner.className="loader",load_page.appendChild(spinner);let page=document.getElementById("page");setTimeout(()=>{load_page.classList.add("fade"),load_page.style.display="none",document.body.style.overflowY="auto",document.body.style.overflowX="hidden"},1e3);const hamburger=document.querySelector(".hamburger"),navLinks=document.querySelector(".nav-links"),links=document.querySelectorAll(".nav-links li");hamburger.addEventListener("click",()=>{navLinks.classList.toggle("open"),links.forEach(e=>{e.classList.toggle("fade")}),hamburger.classList.toggle("toggle")});let navbar=document.querySelector(".nav");window.addEventListener("scroll",()=>{window.scrollY>250?navbar.classList.add("nav-active"):navbar.classList.remove("nav-active")});let cards=document.querySelectorAll(".card");function createFooter(){let e=document.querySelector(".footer"),t=document.createElement("p");t.className="copyright";let n=new Date;t.innerHTML=`Team MA STORE  &copy; ${n.getFullYear()}, ALL Rights Reserved`,e.appendChild(t)}function toTop(){let e=document.querySelector(".scroll-to-top img");window.onscroll=(()=>{window.scrollY>300||document.documentElement.scrollTop>300?(e.style.display="block",e.classList.add("translate2")):e.style.display="none"}),e.onclick=(()=>{scrollTo(0,0)})}cards.forEach(e=>{e.addEventListener("click",()=>{location.href="details.html"})}),createFooter(),toTop();let ProductsContainer=document.querySelector(".trending-container"),rightBtn=document.querySelector(".next_product"),leftBtn=document.querySelector(".prev_product");leftBtn.addEventListener("click",()=>{ProductsContainer.scrollBy({top:0,left:-300,behavior:"smooth"})}),rightBtn.addEventListener("click",()=>{ProductsContainer.scrollBy({top:0,left:300,behavior:"smooth"})});let switcherLis=document.querySelectorAll(".switcher li"),sections=Array.from(document.querySelectorAll(".products section"));function removeActive(){switcherLis.forEach(e=>{e.classList.remove("active"),this.classList.add("active")})}function filterSections(){sections.forEach(e=>{e.style.display="none"}),document.querySelectorAll(this.dataset.cat).forEach(e=>{e.style.display="block",e.classList.add("rotate")})}switcherLis.forEach(e=>{e.addEventListener("click",removeActive),e.addEventListener("click",filterSections)});let sliderContainer=Array.from(document.querySelectorAll(".slider-container img")),index=0;function changeImage(){index<0?index=sliderContainer.length-1:index>sliderContainer.length-1&&(index=0),sliderContainer.forEach(e=>{e.style.display="none",e.classList.add("translate")}),sliderContainer[index].style.display="block"}let prevButton=document.querySelector(".prev");prevButton.addEventListener("click",()=>{index--,changeImage()});let nextButton=document.querySelector(".next");nextButton.addEventListener("click",()=>{index++,changeImage()}),setInterval(()=>{index++,changeImage()},1e4);const countDate=new Date("January  6 , 2022 00:00:00").getTime(),countdown=setInterval(()=>{const e=(new Date).getTime(),t=countDate-e,n=Math.floor(t/864e5),o=Math.floor(t%864e5/36e5),l=Math.floor(t%36e5/6e4),r=Math.floor(t%36e5/1e3);document.querySelector(".day").innerHTML=n,document.querySelector(".hour").innerHTML=o,document.querySelector(".mint").innerHTML=l,document.querySelector(".sec").innerHTML=r,t<0&&clearInterval(countdown)},1e3);let ourImgs=document.querySelectorAll(".gallery img");ourImgs.forEach(e=>{e.addEventListener("click",t=>{let n=document.createElement("div");n.classList.add("overlay_gallery"),document.body.appendChild(n);let o=document.createElement("div");o.className="popup-box",o.classList.add("opacity");let l=document.createElement("img");l.src=e.src,o.appendChild(l),document.body.appendChild(o);let r=document.createElement("span");r.innerText="X",r.className="close-button",o.appendChild(r)})}),document.addEventListener("click",e=>{"close-button"==e.target.className&&(e.target.parentNode.remove(),document.querySelector(".overlay_gallery").remove())});