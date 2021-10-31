var hamburger = document.getElementById("myTopnav");

function myFunction() {
  hamburger.classList.toggle("responsive");
}

hamburger.querySelectorAll(".nav-link").forEach(function (navigation) {
  navigation.addEventListener("click", function () {
    hamburger.classList.toggle("responsive");
  });
});

hamburger.querySelector(".nav-link");

var mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
