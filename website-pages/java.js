function myFunction1() {
    var x = document.getElementById("input-pass");
    var y = document.getElementById("hide1-open-eye");
    var z = document.getElementById("hide1-close-eye");


    if (x.type == 'password') {
        x.type = "text";
        y.style.display = "block"
        z.style.display = "none"
    } else {
        x.type = "password";
        y.style.display = "none"
        z.style.display = "block"
    }

}


function myFunction2() {
    var a = document.getElementById("input-sign");
    var b = document.getElementById("sign-open");
    var c = document.getElementById("sign-close");


    if (a.type == 'password') {
        a.type = "text";
        b.style.display = "block"
        c.style.display = "none"
    } else {
        a.type = "password";
        b.style.display = "none"
        c.style.display = "block"
    }

}

function myFunction3() {
    var a1 = document.getElementById("input-edit");
    var b1 = document.getElementById("edit-open");
    var c1 = document.getElementById("edit-close");


    if (a1.type == 'password') {
        a1.type = "text";
        b1.style.display = "block"
        c1.style.display = "none"
    } else {
        a1.type = "password";
        b1.style.display = "none"
        c1.style.display = "block"
    }

}