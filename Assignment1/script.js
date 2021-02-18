const dropBox = document.querySelector(".upload-box");
var countryPicker = document.getElementById("country");
var statePicker = document.getElementById("state-menu");
let file;

const statesEnum = Object.freeze({
  "Alabama": 1, "Alaska": 2, "Arizona": 3, "Arkansas": 4, "California": 5,
  "Colorado": 6, "Connecticut": 7, "Delaware": 8, "Florida": 9, "Georgia": 10,
  "Hawaii": 11, "Idaho": 12, "Illinois": 13, "Indiana": 14, "Iowa": 15, "Kansas": 16,
  "Kentucky": 17, "Lousiana": 18, "Maine": 19, "Maryland": 20, "Massachusetts": 21, "Michigan": 22,
  "Minnisota": 23, "Mississippi": 24, "Missouri": 25, "Montana": 26, "Nebraska": 27, "Nevada": 28,
  "New Hampshire": 29, "New Jersey": 30, "New Mexico": 31, "New York": 32, "North Carolina": 33,
  "North Dakota": 34, "Ohio": 35, "Oklahoma": 36, "Oregon": 37, "Pennsylvania": 38, "Rhode Island": 39,
  "South Carolina": 40, "South Dakota": 41, "Tennessee": 42, "Texas": 43, "Utah": 44, "Vermont": 45,
  "Virginia": 46, "Washington": 47, "West Virginia": 48, "Wisconsin": 49, "Wyonming": 50
})

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
    progressRing();

    setTimeout(() => {
      let fileReader = new FileReader();
      fileReader.onload = () => {
        let ulr = fileReader.result;
        let tag = `<img src="${ulr}" alt="">`;
        dropBox.innerHTML = tag;
      }
      fileReader.readAsDataURL(file);
    }, 2000);
  }
  else {
    alert("The uploaded file is not an image");
    dropBox.classList.remove("active");
    dropBox.querySelector("header").textContent = "Drop Your Photo Here";
  }
}

function progressRing() {
  var a = 0;
  var run = setInterval(frames, 20);

  var ring = document.querySelector(".spin");
  ring.style.display = "block";

  function frames() {
    a = a + 1;
    if (a == 101) {
      var counter = document.querySelector(".counter");
      counter.style.display = "none";
      clearInterval(run);
    }
    else {
      var counter = document.querySelector(".counter");
      counter.style.display = "block";
      counter.textContent = a + "%";
    }
  }

  setTimeout(stopPoint, 1999);
  function stopPoint() {
    var stop = document.querySelector(".stop");
    stop.style.display = "block";
  }
}

function showStateList(country) {
  if (country == "United States") {
    statePicker.style.display = "block";
    statePicker.required = true;
    populateStateMenu();
  }
  else {
    statePicker.style.display = "none";
    statePicker.required = false;
  }
}

function populateStateMenu() {
  for (var x in statesEnum) {
    statePicker.options[statePicker.options.length] = new Option(x, x);
  }
}

/*** Form Status Submission Animation ***/

window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above
  var form = document.getElementById("register");
  var button = document.getElementById("register-btn");
  var status = document.getElementById("register-btn");
  var progressBar = document.getElementById("progressBar");
  var subtext = document.getElementById("subtext");

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

  function showProgressBar() {
    button.style.display = "none";
    subtext.style.display = "none";
    progressBar.classList.add("loader");
    setTimeout(() => {
      progressBar.style.display = "none";
      button.style.display = "block";
      progressBar.classList.remove("loader");
    }, 2000)
  }

  // handle the form submission event
  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    showProgressBar();
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