let acc = document.querySelectorAll(".accordion_bnt");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let description = this.nextElementSibling;
        if (description.style.maxHeight) {
            description.style.maxHeight = null;
        } else {
            description.style.maxHeight = description.scrollHeight + "px";
        }
    });
}

/*----------------------Test-----------------------------*/

let testContainer = Array.from(
    document.querySelectorAll(".test-container .client")
);
let current = 0;

function changeTest() {
    if (current < 0) {
        current = testContainer.length - 1;
    } else if (current > testContainer.length - 1) {
        current = 0;
    }

    testContainer.forEach((client) => {
        client.style.display = "none";
        client.classList.add("rotate");
    });

    testContainer[current].style.display = "flex";
}

let prevButtonTest = document.querySelector(".prev_test");
prevButtonTest.addEventListener("click", () => {
    current--;
    changeTest();
});

let nextButtonTest = document.querySelector(".next_test");
nextButtonTest.addEventListener("click", () => {
    current++;
    changeTest();
});