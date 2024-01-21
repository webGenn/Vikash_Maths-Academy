// ----------------------------Preloader-------------------

var Preloader = document.getElementById("preloader");

function load(){
    Preloader.style.display = "none";
}


// -------------------------------Validating Footer Email------------------------------

var mailError = document.getElementById("mailError");

function sendMail(){
    var footmail = document.getElementById("footmail").value;

    if(footmail.length != 0){
        mailError.innerHTML = "This Option Is Temporary Blocked.";
        mailError.style.color = "greenyellow";
        return false;
    }
    return false;
}

function footmailsend(){
    if(!sendMail()){
        return false;
    }
}

// ------------------------------Validating Contact-----------------------------

var nameE = document.getElementById("nameError");
var mailE = document.getElementById("mailError");
var phoneE = document.getElementById("phoneError");
var msgE = document.getElementById("msgError");
var btnE = document.getElementById("subError");

function ValidateName(){
    var name = document.getElementById("name").value;
    if(name.length == 0){
        nameE.innerHTML = "Name Is Required";
        nameE.style.color = "red";
        return false;
    }
    if(name.length <= 3){
        nameE.innerHTML = "Name Is Short";
        nameE.style.color = "red";
        return false;
    }
    if(name.length > 40){
        nameE.innerHTML = "Name Is Long";
        nameE.style.color = "red";
        return false;
    }
        nameE.innerHTML = "Name Is Valid";
        nameE.style.color = "green";
        return true;
}

function ValidateEmail(){
    var Email = document.getElementById("email").value;
    if(Email.length == 0){
        mailE.innerHTML = "Email Is Required";
        mailE.style.color = "red";
        return false;
    }
        mailE.innerHTML = "Email Is Valid";
        mailE.style.color = "green";
        return true;
}

function ValidatePhone(){
    var phone = document.getElementById("phone").value;
    if(phone.length == 0){
        phoneE.innerHTML = "Phone Number Is Required";
        phoneE.style.color = "red";
        return false;
    }
    if(phone.length != 10){
        phoneE.innerHTML = "Phone Number Must Be 10 Digit";
        phoneE.style.color = "red";
        return false;
    }
    if(phone.length != 10){
        phoneE.innerHTML = "Phone Number Must Be 10 Digit";
        phoneE.style.color = "red";
        return false;
    }
    if((phone.charAt(0)!= 9) && (phone.charAt(0)!= 8) && (phone.charAt(0)!= 7) && (phone.charAt(0)!= 6)){
        phoneE.innerHTML = "Phone Number Must Start From 9,8,7,6";
        phoneE.style.color = "red";
        return false;
    }
        phoneE.innerHTML = "Phone Number Is Valid";
        phoneE.style.color = "green";
        return true;
}

function ValidateMsg(){
    var message = document.getElementById("message").value;
    if(message.length == 0){
        msgE.innerHTML = "Message Is Required";
        msgE.style.color = "red";
        return false; 
    }
    if(message.length < 10){
        msgE.innerHTML = "More Characters Required";
        msgE.style.color = "red";
        return false; 
    }
        msgE.innerHTML = "Message Is Valid";
        msgE.style.color = "green";
        return true; 
}

function sendform(){
    if(!ValidateName() || !ValidateEmail() || !ValidatePhone() || !ValidateMsg()){
        btnE.innerHTML = "Please Fill The Form";
        btnE.style.color = "red";
        return false;
    }
    return true;
}


// -----------------------Solution Search Bar--------------------

function searchH2() {
    var input = document.getElementById('search').value.toLowerCase();
    var h2Tags = document.querySelectorAll('h2');
  
    var searchResult = document.getElementById('searchResult');
    searchResult.innerHTML = '';
  
    h2Tags.forEach(function (h2) {
      var h2Text = h2.innerText.toLowerCase();
      if (h2Text.includes(input)) {
        var resultItem = document.createElement('div');
        resultItem.className = 'search-result';
        resultItem.textContent = h2Text;
  
        searchResult.appendChild(resultItem);
        h2.style.color = 'green'; // Highlight matching h2 tags
      } else {
        h2.style.color = '#333'; // Reset color for non-matching h2 tags
      }
    });
  
    if (searchResult.children.length === 0) {
      searchResult.innerHTML = '<p>No matching results found.</p>';
    }
  }
  