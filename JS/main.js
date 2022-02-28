let load_page = document.createElement("div");
load_page.id = "load";
document.body.appendChild(load_page);

let spinner = document.createElement("div");
spinner.className = "loader";
load_page.appendChild(spinner);

let page = document.getElementById("page");
setTimeout(() => {
    load_page.classList.add("fade");
    load_page.style.display = "none";
    document.body.style.overflowY = "auto";
    document.body.style.overflowX = "hidden";
}, 1000);

/*--------------------------Start---------------------------*/

const hamburger = document.querySelector(".hamburger"),
    navLinks = document.querySelector(".nav-links"),
    links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
    //Animate Links
    navLinks.classList.toggle("open");
    links.forEach((link) => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});

/*-------------------------Change Background Of NavBar When Scroll-----------*/
let navbar = document.querySelector(".nav");
window.addEventListener("scroll", () => {
    if (window.scrollY > 250) {
        navbar.classList.add("nav-active");
    } else {
        navbar.classList.remove("nav-active");
    }
});
/*------------------Add Page Details For All Cards-------------------*/
let cards = document.querySelectorAll(".card");
cards.forEach((card) => {
    card.addEventListener("click", () => {
        location.href = "details.html";
    });
});

/*======================Create Footer===================*/
function createFooter() {
    let footer = document.querySelector(".footer");
    let content = document.createElement("p");
    content.className = "copyright";
    let now = new Date();
    content.innerHTML = `Team MA STORE  &copy; ${now.getFullYear()}, ALL Rights Reserved`;

    footer.appendChild(content);
}

createFooter();

/*-----------------------------------------Add Button Load More---------------------*/
// let buttonLoadMore = document.getElementById("load_more");
// let elementList = [...document.querySelectorAll(".products .row .col-4")];
// let currentItems = 4;
// buttonLoadMore.addEventListener("click", (e) => {
//     for (let i = currentItems; i < currentItems + 4; i++) {
//         if (elementList[i]) {
//             elementList[i].style.display = "block";
//         }
//     }
//     currentItems + 4;
//     // Load more button will be hidden after list fully loaded
//     if (currentItems >= elementList.length) {
//         e.target.style.display = "none";
//     }
// });

/*-------------Scroll To Top----------------*/

function toTop() {
    let buttonUp = document.querySelector(".scroll-to-top img");
    window.onscroll = () => {
        if (window.scrollY > 300 || document.documentElement.scrollTop > 300) {
            buttonUp.style.display = "block";
            buttonUp.classList.add("translate2");
        } else {
            buttonUp.style.display = "none";
        }
    };

    buttonUp.onclick = () => {
        scrollTo(0, 0);
    };
}
toTop();

/*-------------------------Start Treading----------------------------*/

let ProductsContainer = document.querySelector(".trending-container");
let rightBtn = document.querySelector(".next_product");
let leftBtn = document.querySelector(".prev_product");

leftBtn.addEventListener("click", () => {
    ProductsContainer.scrollBy({
        top: 0,
        left: -300,
        behavior: "smooth",
    });
});

rightBtn.addEventListener("click", () => {
    ProductsContainer.scrollBy({
        top: 0,
        left: +300,
        behavior: "smooth",
    });
});

/*--------------------------Filter Products------------------*/
let switcherLis = document.querySelectorAll(".switcher li");
let sections = Array.from(document.querySelectorAll(".products section"));

switcherLis.forEach((li) => {
    li.addEventListener("click", removeActive);
    li.addEventListener("click", filterSections);
});

// Remove Active Class From All Lis And Add To Current
function removeActive() {
    switcherLis.forEach((li) => {
        li.classList.remove("active");
        this.classList.add("active");
    });
}

// Manage Imgs
function filterSections() {
    sections.forEach((sec) => {
        sec.style.display = "none";
    });
    document.querySelectorAll(this.dataset.cat).forEach((el) => {
        el.style.display = "block";
        el.classList.add("rotate");
    });
}

/*----------------------Slider-----------------------------*/

let sliderContainer = Array.from(
    document.querySelectorAll(".slider-container img")
);
let index = 0;

function changeImage() {
    if (index < 0) {
        index = sliderContainer.length - 1;
    } else if (index > sliderContainer.length - 1) {
        index = 0;
    }

    sliderContainer.forEach((img) => {
        img.style.display = "none";
        img.classList.add("translate");
    });

    sliderContainer[index].style.display = "block";
}

let prevButton = document.querySelector(".prev");
prevButton.addEventListener("click", () => {
    index--;
    changeImage();
});

let nextButton = document.querySelector(".next");
nextButton.addEventListener("click", () => {
    index++;
    changeImage();
});

setInterval(() => {
    index++;
    changeImage();
}, 10000);

/*--------------------------------------Start Counter----------------------*/
const countDate = new Date("January  6 , 2022 00:00:00").getTime();
const countdown = setInterval(() => {
    const now = new Date().getTime();

    const gap = countDate - now;
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % hour) / second);

    document.querySelector(".day").innerHTML = textDay;
    document.querySelector(".hour").innerHTML = textHour;
    document.querySelector(".mint").innerHTML = textMinute;
    document.querySelector(".sec").innerHTML = textSecond;

    if (gap < 0) {
        clearInterval(countdown);
    }
}, 1000);

/* ================================================================================= ==================================================*/
let ourImgs = document.querySelectorAll(".gallery img");

ourImgs.forEach((img) => {
    img.addEventListener("click", (e) => {
        let overlay = document.createElement("div");
        overlay.classList.add("overlay_gallery");

        document.body.appendChild(overlay);

        let popupBox = document.createElement("div");
        popupBox.className = "popup-box";
        popupBox.classList.add("opacity");

        let popupImages = document.createElement("img");
        popupImages.src = img.src;

        popupBox.appendChild(popupImages);

        document.body.appendChild(popupBox);

        let closeButton = document.createElement("span");
        closeButton.innerText = "X";
        closeButton.className = "close-button";
        popupBox.appendChild(closeButton);
    });
});

/*-------------Add Event to close_button------------*/
document.addEventListener("click", (e) => {
    if (e.target.className == "close-button") {
        e.target.parentNode.remove();
        document.querySelector(".overlay_gallery").remove();
    }
});