const dropBox = document.querySelector(".upload-box");
let file;

dropBox.querySelector("button").onclick = () => {
  dropBox.querySelector("input").click();
};

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

dropBox.querySelector("input").addEventListener("change", function () {
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
    };
    fileReader.readAsDataURL(file);
  } else {
    alert("The uploaded file is not an image");
    dropBox.classList.remove("active");
  }
}

/*** Form Status Submission Animation ***/

window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above
  var form = document.getElementById("register");
  var button = document.getElementById("register-btn");
  var status = document.getElementById("register-btn");

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    button.classList.add("submit");
    status.classList.add("success");
    status.innerHTML = "Submitted!";
  }

  function error() {
    // status.classList.add("error");
    status.innerHTML = "Oops! There was a problem.";
  }
<<<<<<< Updated upstream
=======
  function myFunction() {
    myVar = setTimeout(showPage, 40000);
  }
>>>>>>> Stashed changes

  // handle the form submission event
  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });

  // helper function for sending an AJAX request

  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }
});
