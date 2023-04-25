// Make navbar transparent when it is on the top
//네비게이션 바 움직이면, 배경에 색상 생기게함.
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if (window.scrollY >= navbarHeight-10) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});


//모바일 화면에서 네비게이션바 햄버거버튼 눌렀을때 처리
const toggleBtn = document.querySelector('.navbar__toggleBtn');
const navbar__menu = document.querySelector('#menu__sidebar');
//const navbar__lang = document.querySelector('.navbar__lang');

toggleBtn.addEventListener('click', () => {
    navbar__menu.classList.toggle('active');
    //navbar__lang.classList.toggle('active');
});



const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});