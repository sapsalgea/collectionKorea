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

//다국어 사이드바
const navbar__globeBtn = document.querySelector('.navbar__globeBtn');
const lang__sidebar = document.querySelector('#lang__sidebar');
//const navbar__lang = document.querySelector('.navbar__lang');


//메뉴 사이드바
//모바일 화면에서 네비게이션바 햄버거버튼 눌렀을때 처리
const navbar__toggleBtn = document.querySelector('.navbar__toggleBtn');
const menu__sidebar = document.querySelector('#menu__sidebar');
//const navbar__lang = document.querySelector('.navbar__lang');



//메뉴 사이드바 열려있을때, 언어 사이드바 눌리면 닫게 만들기.
navbar__globeBtn.addEventListener('click', () => {
  lang__sidebar.classList.toggle('active');
  menu__sidebar.classList.remove('active');  
});


//언어 사이드바 열려있을때, 메뉴 사이드바 눌리면 닫게 만들기.
navbar__toggleBtn.addEventListener('click', () => {
    menu__sidebar.classList.toggle('active');
    lang__sidebar.classList.remove('active');
    
});

//언어 사이드바 열려있을때, 외부요소 클릭하면 언어 사이드바 사라짐.
document.addEventListener('click', ({ target }) => {
  if (!target.closest('.navbar__globeBtn, #lang__sidebar')) {
    lang__sidebar.classList.remove('active')
  }
})


//메뉴 사이드바 열려있을때, 외부요소 클릭하면 언어 사이드바 사라짐.
document.addEventListener('click', ({ target }) => {
  if (!target.closest('.navbar__toggleBtn, #menu__sidebar')) {
    menu__sidebar.classList.remove('active')
  }
})





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