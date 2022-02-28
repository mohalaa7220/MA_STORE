const imgs = document.querySelectorAll(".img-select a");
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener("click", (e) => {
        e.preventDefault();
        imgId = imgItem.dataset.id;
        const displayWidth = document.querySelector(
            ".img-showcase img:first-child"
        ).clientWidth;

        document.querySelector(".img-showcase").style.transform = `translateX(${
      -(imgId - 1) * displayWidth
    }px)`;
    });
});

/*--------------------------Increment and Decrement value------------------*/
let minus = document.querySelector(".qtyminus"),
    plus = document.querySelector(".qtyplus");

plus.addEventListener("click", () => {
    let value = parseInt(document.getElementById("number").value);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById("number").value = value;
});

minus.addEventListener("click", () => {
    let value = parseInt(document.getElementById("number").value);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById("number").value = value;
});