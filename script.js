var yt = document.getElementById("iframe");

function show() {
    document.getElementById("show").style.visibility = "hidden";

    document.getElementById("iframe").style.visibility = "visible";
}

function check(form) {

    var four = document.getElementById("demo4");

    // identification so feilds can be filled
    if (form.username.value == "" && form.psw.value == "") {
        four.innerHTML = "Both Feilds Need To Be Filled";
        console.error("Both Feilds Need To Be Filled")
        return false;
    } else if (form.username.value == "") {
        four.innerHTML = "Both Feilds Need To Be Filled";
        console.error("Both Feilds Need To Be Filled")
        return false;
    } else if (form.psw.value == "") {
        four.innerHTML = "Both Feilds Need To Be Filled";
        console.error("Both Feilds Need To Be Filled")
        return false;
    } else if (form.username.value == "Rogan Wido") {
        four.innerHTML = "That Username Is Already Taken";
        return false;
    } else if (form.username.value == "OT7Games") {
        four.innerHTML = "That Username Is Already Taken";
        return false;
    } else if (form.username.value == "Wolf Chicago") {
        four.innerHTML = "That Username Is Already Taken";
        return false;
    } else if (form.username.value == "Dom") {
        four.innerHTML = "That Username Is Already Taken";
        return false;
    }

    // for creating the account and copying text

    var txt;

    var person = username.value;

    if (person == null || person == "") {
        return false;
    } else {
        txt = person;

    }

    document.getElementById("demo2").innerHTML = txt;

    var p = document.getElementById("demo3"); 

    document.getElementById("form").style.display = "none";

    p.innerHTML = "Delete Account";

    document.getElementById("demo5").innerHTML = "Login";
}

function send() {
    window.open('mailto:roganwido@gmail.com')
}

// refresh page for stuff

function signout() {
    location.reload(true);
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function bodyClick() {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    dropdowns.style.display = "block";
}

function link() {
    window.location.replace("account/my-account.html")
}

function hide() {
    var four = document.getElementById("demo4");
    four.style.display = "none";
}