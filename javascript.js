const container = document.querySelector("#container");



for (let i = 0; i < 256; i++) {
    const gridSqr = document.createElement("div");
    gridSqr.classList.add("sqr");
    container.appendChild(gridSqr);
}

const square = container.querySelectorAll(".sqr");

square.forEach((div) => {
        addEventListener("mouseover", function(e) {
            e.target.style.background = "#2e2e2eff";
        })
    }
);