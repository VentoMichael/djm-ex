let itemMenu=document.querySelectorAll(".item__dropdown");for(let e=0;e<itemMenu.length;e++)itemMenu[e].addEventListener("click",t=>{t.preventDefault(),itemMenu[e].classList.contains("clicked")?itemMenu[e].classList.remove("clicked"):(itemMenu.forEach(e=>e.classList.remove("clicked")),itemMenu[e].classList.add("clicked"))});