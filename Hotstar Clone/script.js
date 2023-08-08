let movies = [
    {
        name : "falcon and the winter soldier",
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        image : "images/slider 2.PNG"
    },
    {
        name : "loki",
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        image : "images/slider 1.PNG"
    },
    {
        name : "wanda vision",
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        image : "images/slider 3.PNG"
    },
    {
        name : "raya and the last dragon",
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        image : "images/slider 4.PNG"
    },
    {
        name : "luca",
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        image : "images/slider 5.PNG"
    }
];

const sliderBar = document.querySelector('.slider-bar');
let sliders = [];
let slideIndex = 0;
const createSlide = () => {
    if(slideIndex >= movies.length)
    {
        slideIndex = 0;
    }
    let slide = document.createElement('div');
    var imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].desc));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    sliderBar.appendChild(slide);

    imgElement.src = movies[slideIndex].image;
    slideIndex++;

    slide.className = "slider";
    content.className = "slider-content";
    h1.className = "movie-title";
    p.className = "movie-desc";

    sliders.push(slide);
    
    if(sliders.length)
    {
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
            30 * (sliders.length - 2)
        }px)`;
    }
}
for(let i=0; i<3; i++)
{
    createSlide();
}
setInterval(()=> {
    createSlide();
},3000);



const videoCards = [...document.querySelectorAll('.video-card')];
videoCards.forEach(item => {
    item.addEventListener('mouseover', ()=>{
        let video = item.children[1];
        video.play();
    });
    item.addEventListener('mouseleave', ()=>{
        let video = item.children[1];
        video.pause();
    });
});

let cardContainers = [...document.querySelectorAll('.card-container')];
let preBtn = [...document.querySelectorAll('.pre-btn')];
let nxtBtn = [...document.querySelectorAll('.nxt-btn')];

cardContainers.forEach((item,i)=>{
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth - 200;
    });
    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth + 200;
    });
});