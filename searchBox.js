let timer;
const searchBox = document.getElementById("labels");
const labels = ["anything...", "images...", "videos..."];
const css = ["-top-3", "top-2"];

function init() {
    let inputField = document.getElementById("input");
    inputField.placeholder = "Search";
    inputField.addEventListener("input", (e) => {
        clearInterval(timer);
        const searchBox = document.getElementById("labels");
        searchBox.classList.add("hidden");
        console.log(e.target.value);
        if (e.target.value.length === 0) {
            searchBox.classList.remove("hidden");
            startTimer();
        }
    });
    animatePlaceholder();
    startTimer();
}

function animatePlaceholder() {
    searchBox.classList.remove("hidden");
    
    labels.forEach((placeholder, i) => {
        let label = document.createElement("label");
        const commonClasses =
            "absolute left-16 transition-all ease-in duration-500 ";
        label.className =
            i !== 0
                ? commonClasses + `opacity-0 ${css[0]}`
                : commonClasses + `${css[1]}`;
        label.innerText = placeholder;
        searchBox.appendChild(label);
    });
}

function startTimer() {
    let currInx = 1;
    let allLabels = searchBox.querySelectorAll("label");
    clearInterval(timer);
    timer = setInterval(() => {
        allLabels.forEach((label, i) => {
            if (i === currInx % labels.length) {
                label.classList.remove("opacity-0");
                label.classList.remove(css[0]);
                label.classList.add("opacity-1");
                label.classList.add(css[1]);
            } else {
                label.classList.remove("opacity-1");
                label.classList.remove(css[1]);
                label.classList.add("opacity-0");
                label.classList.add(css[0]);
            }
        });
        currInx++;
    }, 2000);
}

init();
