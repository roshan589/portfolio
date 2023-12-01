//This is a theme changer.
var Themebtn = document.getElementById('theme-button');
Themebtn.onclick = function switchTheme() {
  const elements = document.querySelectorAll('*');
  if (document.body.classList.contains('light-theme')) {
    // Switch to dark theme
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
    Themebtn.className = "uil uil-sun change-theme"

    for (const element of elements) {
      element.style.transition = 'all 0.5s ease-in';
    }
  } else {
    // Switch to light theme
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
    Themebtn.className = "uil uil-moon change-theme"
    for (const element of elements) {
      element.style.transition = 'all 0.5s ease-in';


    }
  }
}


// Active Scroll
let section = document.querySelectorAll('section')
let navLink = document.querySelectorAll('header nav a')
window.onscroll = ()=>{
  section.forEach(sec=>{
    let top = window.scrollY;
    let offset = sec.offsetTop-150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id')
    if(top>offset && top<offset + height){
      navLink.forEach(links=>{
        links.classList.remove('active')
        document.querySelector('header nav a[href*='+id+']').classList.add('active')
      })
    }
  })
}