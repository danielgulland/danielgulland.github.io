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
