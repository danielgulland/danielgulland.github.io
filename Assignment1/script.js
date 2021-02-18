const dropBox = document.querySelector(".upload-box");
var countryPicker = document.getElementById("country");
var statePicker = document.getElementById("state-menu");
let file;

//Enum* of states to keep html clean.
const statesEnum = Object.freeze({
  "Alabama":1,"Alaska":2, "Arizona":3, "Arkansas":4, "California":5,
  "Colorado":6, "Connecticut":7, "Delaware":8, "Florida":9, "Georgia":10,
  "Hawaii":11, "Idaho":12, "Illinois":13, "Indiana":14, "Iowa":15, "Kansas":16, 
  "Kentucky":17, "Lousiana":18, "Maine":19, "Maryland":20, "Massachusetts":21, "Michigan":22,
  "Minnisota":23, "Mississippi":24, "Missouri":25, "Montana":26, "Nebraska":27, "Nevada":28,
  "New Hampshire":29, "New Jersey":30, "New Mexico":31, "New York":32, "North Carolina":33, 
  "North Dakota":34, "Ohio":35, "Oklahoma":36, "Oregon":37, "Pennsylvania":38, "Rhode Island":39,
  "South Carolina":40, "South Dakota":41, "Tennessee":42, "Texas":43, "Utah":44, "Vermont":45,
  "Virginia":46, "Washington":47, "West Virginia":48, "Wisconsin":49, "Wyonming":50
})

//Enum* of countries to clean up html.
const countryEnum = Object.freeze({
  "Afghanistan":1, "Åland Islands":2,"Albania":3, "Algeria":4, "American Samoa":5,
  "Andorra":6, "Angola":7, "Anguilla":8, "Antarctica":9,"Antigua and Barbuda":10,
  "Argentina":11, "Armenia":12, "Aruba":13, "Australia":14, "Austria":15, "Azerbaijan":16,
  "Bahamas":17, "Bahrain":18, "Bangladesh":19, "Barbados":20, "Belarus":21, "Belgium":22, 
  "Belize":23, "Benin":24, "Bermuda":25, "Bhutan":26, "Bolivia":27, "Bosnia and Herzegovina":28,
  "Botswana":29, "Bouvet Island":30, "Brazil":31, "British Indian Ocean Territory":32, "Brunei Darussalam":33,
  "Bulgaria":34, "Burkina Faso":35, "Burundi":36, "Cambodia":37, "Cameroon":38, "Canada":39, "Cape Verde":40,
  "Cayman Islands":41, "Central African Republic":42, "Chad":43, "Chile":44, "China":45, "Christmas Islands":46,
  "Cocos (Keeling) Islands":47, "Colombia":48, "Comoros":49, "Congo":50, "Congo, The Democratic Republic of The":51,
  "Cook Islands":52, "Costa Rica":53, "Cote D'ivoire":54, "Croatia":55, "Cuba":56, "Cyprus":57, "Czech Republic":58,
  "Denmark":59, "Djibouti":60, "Dominica":61, "Dominican Republic":62, "Ecuador":63, "Egypt":64, "El Salvador":65,
  "Equatorial Guinea":66, "Eritrea":67, "Estonia":68, "Ethiopia":69, "Falkland Islands (Malvinas)":70, "Faroe Islands":71,
  "Fiji":72, "Finland":73, "France":74, "French Guiana":75, "French Polynesia":76, "French Southern Territories":77,
  "Gabon":78, "Gambia":79, "Georgia":80, "Germany":81,"Ghana":82, "Gibraltar":83, "Greece":84, "Greenland":85, "Grenada":86,
  "Guadeloupe":87, "Guam":88, "Guatemala": 89, "Guernsey":90, "Guinea":91, "Guinea-bissau":92, "Guyana":93, "Haiti":94, "Heard Island and Mcdonald Islands":95,
  "Holy See (Vatican City State)":96, "Honduras":97, "Hong Kong":98, "Hungary":99, "Iceland":100, "India":101, "Indonesia":102, "Iran, Islamic Republic of":103,
  "Iraq":104, "Ireland":105, "Isle of Man":106, "Israel":107, "Italy":108, "Jamaica":109, "Japan":110, "Jersey":111, "Jordan":112, "Kazakhstan":113,
  "Kenya":114, "Kiribati":115, "Korea, Democratic People's Republic of":116, "Korea, Republic of":117, "Kuwait":118,"Kyrgyzstan":119,
  "Lao People's Democratic Republic":120, "Latvia": 121, "Lebanon":122, "Lesotho":123, "Liberia": 124, "Libyan Arab Jamahiriya":125,
  "Liechtenstein":126, "Lithuania":127, "Luxembourg":128, "Macao":129, "Macedonia, The Former Yugoslav Republic of":130,
  "Madagascar":131, "Malawi":132, "Malaysia":133, "Maldives":134, "Mali":135,"Malta":136,"Marshall Islands":137,"Martinique":138,  
  "Mauritania":139, "Mauritius":140, "Mayotte":141,"Mexico":142, "Micronesia, Federated States of":143, "Moldova, Republic of":144, "Monaco":145, 
  "Mongolia":146, "Montenegro":147, "Montserrat":148, "Morocco":149, "Mozambique":150, "Myanmar":151, "Namibia":152, "Nauru":153, "Nepal":154,
  "Netherlands":155, "Netherlands Antilles":156, "New Caledonia":157, "New Zealand":158, "Nicaragua":159, "Niger":160, "Nigeria":161,
  "Niue":162, "Norfolk Island":163, "Northern Mariana Islands":164, "Norway":165, "Oman":166, "Pakistan":167, "Palau":168, 
  "Palestinian Territory, Occupied":169, "Panama":170, "Papua New Guinea":171, "Paraguay":172, "Peru":173, "Philippines":174, 
  "Pitcairn":175, "Poland":176, "Portugal":177, "Puerto Rico":178, "Qatar":179, "Reunion":180, "Romania":181, "Russian Federation":182,
  "Rwanda":183, "Saint Helena":184, "Saint Kitts and Nevis":185, "Saint Lucia":186, "Saint Pierre and Miquelon":187, 
  "Saint Vincent and The Grenadines":188, "Samoa":189, "San Marino":190, "Sao Tome and Principe":191, "Saudi Arabia":192,
  "Senegal":193, "Serbia":194, "Seychelles":195, "Sierra Leone":196, "Singapore":197, "Slovakia":198, "Slovenia":199, 
  "Solomon Islands":200, "Somalia":201, "South Africa":202, "South Georgia and The South Sandwich Islands":203, "Spain":204, 
  "Sri Lanka":205, "Sudan":206, "Suriname":207, "Svalbard and Jan Mayen":208, "Swaziland":209, "Sweden":210, 
  "Switzerland":211, "Syrian Arab Republic":212, "Taiwan, Province of China":213, "Tajikistan":214, "Tanzania, United Republic of":215,
  "Thailand":216, "Timor-leste":217, "Togo":218, "Tokelau":219, "Tonga":220, "Trinidad and Tobago":221, "Tunisia":222, 
  "Turkey":223, "Turkmenistan":224, "Turks and Caicos Islands":225, "Tuvalu":226, "Uganda":227, "Ukraine":228, "United Arab Emirates":229,
  "United Kingdom":230,"United States":231, "United States Minor Outlying Islands":232, "Uruguay":233,"Uzbekistan":234,
  "Vanuatu":235, "Venezuela":236, "Vietnam":237, "Virgin Islands, British":238, "Virgin Islands, U.S.":239,"Wallis and Futuna":240, 
  "Western Sahara":241, "Yemen":242, "Zambia":243, "Zimbabwe":244
})

//uses helper function to populate country menu when web page loads.
populateCountryMenu();

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

dropBox.querySelector("input").addEventListener("change", function() {
  file = this.files[0];
  dropBox.classList.add("active");

  displayImage();
});

function displayImage() {
  let fileType = file.type;
  let extensions = ["image/jpeg", "image/jpg", "image/png"];
  if (extensions.includes(fileType)) {
    progressRing();

    setTimeout( () => {
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

    function frames (){
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

/* Param@ country Passes the selected country for comparison.
  If the country is the United States show the states selection menu
  and populate it via the helper mehtod.
  */
function showStateList(country){
  if(country == "United States"){
    statePicker.style.display = "block";
    statePicker.required = true;
    populateStateMenu();
  }
  else{
    statePicker.style.display = "none";
    statePicker.required = false;
  }
}

//Helper that populates the state drop down.
function populateStateMenu(){
  for(var x in statesEnum){
    statePicker.options[statePicker.options.length] = new Option(x,x);
  }
}

//Helper function that populates the country drop down.
function populateCountryMenu(){
  for(var x in countryEnum){
    countryPicker.options[countryPicker.options.length] = new Option(x,x);
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
    dropBox.style.display = "none";
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