// Votre code ici.

tab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 3, 5, 7, 8, 9, 554, 4, 5, 5645, 67, 8, 67, 8, 54, 3231, 8, 4, 321, 84, 35, 6, 84, 40];


document.write(tab.join(" ,  "));

function display(affichage) {
    alert(affichage);
}

function tableau() {
    document.write(tab);
}

function sum(tab) {
    var tab = this.tab;
    var sum = 0;
    for (var i = 0; i < tab.length; i++) {
        sum += tab[i];
    }
    return sum;
}

function mini(tab) {
    var tab = this.tab;
    var min = tab[0];
    for (var i = 0; i < tab.length; i++) {
        if (min > tab[i]) {
            min = tab[i];
        }
    }
    return min;
}

function maxi(tab) {
    var tab = this.tab;
    var max = tab[0];
    for (var i = 0; i < tab.length; i++) {
        if (max < tab[i]) {
            max = tab[i];
        }
    }
    return max;
}

function moyenne(tab) {
    var tab = this.tab;
    return (sum(tab) / tab.length);
}

function isPrime(entier) {
    var isprime = true;
    if (entier <= 2) {
        isprime = false;
    }
    else {
        for (var i = 2; i < entier; i++) {
            if (entier % i == 0) {
                isprime = false;
                break;
            }
        }
    }
    return isprime;
}

function getPrime(tab) {
    var tab = this.tab;
    var temptab = tab.filter(i => isPrime(i));
    return temptab;
}

function checktitle() {
    var temp = document.forms["myForm"].elements["Text1"];
    var element = document.getElementsByClassName("inputCheck");
    if (isNaN(temp.value) || temp.value.length == 0) {
        element[0].style.visibility = "visible";
        element[0].style.color = "#D00";
        temp.style.border = "1px solid #D00";
        temp.style.color = "#D00";
    }
    else {
        element[0].style.visibility = "hidden";
        temp.style.border = "1px solid #0D0";
        temp.style.color = "#0D0";
    }
}

