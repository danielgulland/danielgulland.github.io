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
<<<<<<< Updated upstream
=======
});

function populateState (){
  document.getElementById("stateMenu").h  

}

function populateCountry (){

}

const statesEnum = Object.freeze({
  "Alabama":1,"Alaska":2, "Arizona":3, "Arkansas":4, "California":5,
  "Colorado":6, "Connecticut":7, "Delaware":8, "Florida":9, "Georgia":10,
  "Hawaii":11, "Idaho":12, "Illinois":13, "Indiana":14, "Iowa":15, "Kansas":16, 
  "Kentucky":17, "Lousiana":18, "Maine":19, "Maryland":20, "Massachusetts":21, "Michigan":22,
  "Minnisota":23, "Mississippi":24, "Missouri":25, "Montana":26, "Nebraska":27, "Nevada":28,
  "New Hampshire":29, "New Jersey":30, "New Mexico":31, "New York":32, "North Carolina":33, 
  "North Dakota":34, "Ohio":35, "Oklahoma":36, "Oregon":37, "Pennsylvania":38, "Rhode Island":39,
  "South Carolina":40, "South Dakota":41, "Tennessee":42, "Texas":43, "Utah":44, "Vermont":45,
  "Virginia":46, "Washington":47, "West Virginia":48, "Wisconsin":49, "Wyonming":50;
});

const countryEnum = Object.freeze({


>>>>>>> Stashed changes
});
