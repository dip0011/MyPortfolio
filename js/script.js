const product = document.querySelector('.products');
const img = product.querySelector('img');
const title = product.querySelector('.title');
const description = product.querySelector('.description');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const code = document.querySelector('#code');
const demo = document.querySelector('#demo');

let projectIndex = 0;

window.addEventListener('load', (event) => {
    code.setAttribute('href', projects[projectIndex].code);
    demo.setAttribute('href', projects[projectIndex].demo);
  });


// projects next Btn work 
nextBtn.addEventListener("click", ()=>{
    if(projectIndex != projects.length-1){
        projectIndex++;
    }
    else{
        projectIndex = 0;
    }
    console.log(projectIndex);
    title.innerText = projects[projectIndex].name;
    description.innerText = projects[projectIndex].desc;
    img.setAttribute('src', projects[projectIndex].img);
    code.setAttribute('href', projects[projectIndex].code);
    demo.setAttribute('href', projects[projectIndex].demo);
});

// projects prev Btn work 
prevBtn.addEventListener("click", ()=>{
    if(projectIndex != 0){
        projectIndex--;
    }
    else{
        projectIndex = projects.length-1;
    }
    title.innerText = projects[projectIndex].name;
    description.innerText = projects[projectIndex].desc;
    img.setAttribute('src', projects[projectIndex].img);
});

// typing animation script 
var typed = new Typed('.typing', {
    strings: ['Web Designer', 'FullStack Developer', 'Graphic Designer'],
    typeSpeed: 95,
    backSpeed: 60,
    loop: true
  });




