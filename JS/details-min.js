const imgs=document.querySelectorAll(".img-select a"),imgBtns=[...imgs];let imgId=1;imgBtns.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault(),imgId=e.dataset.id;const n=document.querySelector(".img-showcase img:first-child").clientWidth;document.querySelector(".img-showcase").style.transform=`translateX(${-(imgId-1)*n}px)`})});let minus=document.querySelector(".qtyminus"),plus=document.querySelector(".qtyplus");plus.addEventListener("click",()=>{let e=parseInt(document.getElementById("number").value);e=isNaN(e)?0:e,e++,document.getElementById("number").value=e}),minus.addEventListener("click",()=>{let e=parseInt(document.getElementById("number").value);e=isNaN(e)?0:e,e--,document.getElementById("number").value=e});