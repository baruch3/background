/*
  Do you see the white box on the top right corner of the screen?
  It should display the number of the section you're currently at.
  Which means, the text should be updated as the user scrolls.
  
  Hint: you can know the location of any DOM element. Do your research.
*/
let indicator = document.getElementById('indicator');
let section1 = document.getElementById("section-1");
let section2 = document.getElementById("section-2");
let section3 = document.getElementById("section-3");
let section4 = document.getElementById("section-4");
function sectionLocation(e){
    if(window.scrollY >= section1.offsetTop && window.scrollY < section2.offsetTop){
        indicator.textContent = 'You are on section: ' + section1.getAttribute('data-id');
    }
    if(window.scrollY >= section2.offsetTop && window.scrollY < section3.offsetTop){
        indicator.textContent = 'You are on section:' + section2.getAttribute('data-id');
    }

    if(window.scrollY >= section3.offsetTop && window.scrollY < section4.offsetTop){
        indicator.textContent = 'You are on section:' + section3.getAttribute('data-id');
    }

    if(window.scrollY >= section4.offsetTop){
        indicator.textContent = 'You are on section:' + section4.getAttribute('data-id');
    }

}
    window.addEventListener('scroll', sectionLocation);