function Lucky9() {
    let firstval;
    let secondval;
    let total;
    let getnum;
    let gettype;

    let randomnum = Math.floor(Math.random() * 13) + 1;
    let randomtype = Math.floor(Math.random() * 4) + 1;
    if (randomnum == 1) {
        firstval = 1;
        getnum = 1;
    }

    else if (randomnum == 2) {
        firstval = 2;
        getnum = 2;
    }

    else if (randomnum == 3) {
        firstval = 3;
        getnum = 3;
    }

    else if (randomnum == 4) {
        firstval = 4;
        getnum = 4;
    }

    else if (randomnum == 5) {
        firstval = 5;
        getnum = 5;
    }

    else if (randomnum == 6) {
        firstval = 6;
        getnum = 6;
    }

    else if (randomnum == 7) {
        firstval = 7;
        getnum = 7;
    }

    else if (randomnum == 8) {
        firstval = 8;
        getnum = 8;
    }

    else if (randomnum == 9) {
        firstval = 9;
        getnum = 9;
    }

    else if (randomnum == 10) {
        firstval = 10;
        getnum = 10;
    }

    else if (randomnum == 11) {
        firstval = 11;
        getnum = 11;
    }

    else if (randomnum == 12) {
        firstval = 12;
        getnum = 12;
    }

    else if (randomnum == 13) {
        firstval = 13;
        getnum = 13;
    }

    if (randomtype == 1) {
        gettype = "c";
    }

    else if (randomtype == 2) {
        gettype = "d";
    }

    else if (randomtype == 3) {
        gettype = "h";
    }

    else if (randomtype == 4) {
        gettype = "s";

    }

    document.getElementById("una").innerHTML = getnum + gettype;
    document.getElementById("una").src = "./assets/" + getnum + gettype + ".png";

    randomnum = Math.floor(Math.random() * 13) + 1;
    randomtype = Math.floor(Math.random() * 4) + 1;

    if (randomnum == 1) {
        secondval = 1;
        getnum = 1;
    }

    else if (randomnum == 2) {
        secondval = 2;
        getnum = 2;
    }

    else if (randomnum == 3) {
        secondval = 3;
        getnum = 3;
    }

    else if (randomnum == 4) {
        secondval = 4;
        getnum = 4;
    }

    else if (randomnum == 5) {
        secondval = 5;
        getnum = 5;
    }

    else if (randomnum == 6) {
        secondval = 6;
        getnum = 6;
    }

    else if (randomnum == 7) {
        secondval = 7;
        getnum = 7;
    }

    else if (randomnum == 8) {
        secondval = 8;
        getnum = 8;
    }

    else if (randomnum == 9) {
        secondval = 9;
        getnum = 9;
    }

    else if (randomnum == 10) {
        secondval = 10;
        getnum = 10;
    }

    else if (randomnum == 11) {
        secondval = 11;
        getnum = 11;
    }

    else if (randomnum == 12) {
        secondval = 12;
        getnum = 12;
    }

    else if (randomnum == 13) {
        secondval = 13;
        getnum = 13;
    }

    if (randomtype == 1) {
        gettype = "c";
    }

    else if (randomtype == 2) {
        gettype = "d";
    }

    else if (randomtype == 3) {
        gettype = "h";
    }

    else if (randomtype == 4) {
        gettype = "s";

    }

    document.getElementById("pangalawa").innerHTML = getnum + gettype;
    document.getElementById("pangalawa").src = "./assets/" + getnum + gettype + ".png";

    total = firstval + secondval;
    if (total == 9) {
        setTimeout(function(){ alert("You win!"); }, 500);
    }

    else if (total > 9) {
        total = total - 10;
        if (total == 9) {
            setTimeout(function(){ alert("You win!"); }, 500);
        }

        else if (total > 9) {
            total = total - 10;
            if (total == 9) {
                setTimeout(function(){ alert("You win!"); }, 500);
            }

            else if (total < 9){
                setTimeout(function(){ alert("Try again!"); }, 500);
            }
        }
    }

    else if (total < 9){
        setTimeout(function(){ alert("Try again!"); }, 500);
    }
}