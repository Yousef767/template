let nav = document.getElementById("navigate");
let btn = document.getElementById("button");

btn.addEventListener('click', () => {
    if (nav.classList.contains("open")) {
        nav.classList.add('close');
        nav.classList.remove('open');
    } else {
        nav.classList.remove('close');
        nav.classList.add('open');
    }/*
    nav.classList.toggle('open');*/
    btn.classList.toggle("active");
});