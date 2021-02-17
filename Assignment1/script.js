const dropBox = document.querySelector(".upload-box");
let file;

dropBox.querySelector("button").onclick = () => {
    dropBox.querySelector("input").click();
}

dropBox.addEventListener("dragover", (event) => {
    event.preventDefault();
    dropBox.classList.add("active");
    dropBox.querySelector("header").textContent = "Release it...";
});

dropBox.addEventListener("dragleave", () => {
    dropBox.classList.remove("active");
    dropBox.querySelector("header").textContent = "Drop Your Photo Here";
});

dropBox.addEventListener("drop", (event) => {
    event.preventDefault();
    file = event.dataTransfer.files[0];
    displayImage();
});

dropBox.querySelector("input").addEventListener("change", function() {
    file = this.files[0];
    dropBox.classList.add("active");
    displayImage();
});

function displayImage() {
    let fileType = file.type;
    let extensions = ["image/jpeg", "image/jpg", "image/png"];
    if (extensions.includes(fileType)) {
        let fileReader = new FileReader();
        fileReader.onload = () => {
            let ulr = fileReader.result;
            let tag = `<img src="${ulr}" alt="">`; 
            dropBox.innerHTML = tag;
        }
        fileReader.readAsDataURL(file);
    }
    else {
        alert("The uploaded file is not an image");
        dropBox.classList.remove("active");
    }
}

var a = 0;
var run = setInterval(frames, 20);
function frames (){
    a = a + 1;
    if (a == 101) {
        clearInterval(run);
    }
    else {
        var counter = document.querySelector(".counter");
        counter.textContent = a + "%";
    }
}

setTimeout(stopPoint, 2000);
function stopPoint() {
    var stop = document.querySelector(".stop");
    stop.style.display = "block";
}
