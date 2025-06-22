// Navbar js start
let nav = document.querySelector('nav');
let ul = document.querySelector('nav ul')
window.onscroll = function(){
  if(window.scrollY > 0){
    nav.classList.add('scroll')
    ul.classList.add('ul')
  }
  else{
    nav.classList.remove('scroll')
    ul.classList.remove('ul')
  }
}
let openbtn = document.querySelector('.openbtn')
let closebtn = document.querySelector('.closebtn')
let a = document.querySelector('nav ul li a')
openbtn.addEventListener('click', function(){
  ul.style.display = 'block'
  closebtn.style.display = 'block';
  openbtn.style.display = 'none';
})
closebtn.addEventListener('click', function () {
  ul.style.display = 'none';
  closebtn.style.display = 'none';
  openbtn.style.display = 'block';
});
window.addEventListener('resize', function(){
  if(window.innerWidth > 882){
    ul.style.display = 'flex';
    closebtn.style.display = 'none';
    openbtn.style.display = 'none';
  }
  else{
    ul.style.display = 'none'; // Hide menu on smaller screens
    openbtn.style.display = 'block';
  }
})
ul.addEventListener('click', function(e){

if(e.target.tagName === 'A'){
  ul.querySelectorAll('a').forEach(link => link.classList.remove('active') )
}
e.target.classList.add('active');
})
 

// Navbar js end

