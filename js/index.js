const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo

//HEADER CODE

//nav code
const nav = document.querySelector('nav');
const links = document.querySelectorAll('a');
links[0].textContent = "Services";
links[1].textContent = "Product";
links[2].textContent = "Vision";
links[3].textContent = "Features";
links[4].textContent = "About";
links[5].textContent = "Contact";

//styling uses .forEach method here

links.forEach( element => {
  element.style.color = "#006400";
})

//new nav links here plus styling

const newNavLinkOne = document.createElement('a');
const newNavLinkTwo = document.createElement('a');

newNavLinkOne.textContent = "Careers";
newNavLinkTwo.textContent = "Who We Are";

nav.append(newNavLinkOne);
nav.prepend(newNavLinkTwo);

newNavLinkOne.style.color = "#006400";
newNavLinkTwo.style.color = "#006400";

//logo code
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


//CTA CODE

//text
const title = document.querySelector('h1');
title.textContent = "DOM is Awesome";


// button
const ctaBtn = document.querySelector('button');
ctaBtn.textContent = "Get Started";
ctaBtn.style.color = "#8B0000";

// Image
const codeSnippet = document.querySelector('#cta-img');
codeSnippet.src = "img/header-img.png";

//MAIN CONTENT CODE

const mainContent = document.querySelector('.main-content');

const topContent = document.querySelector('.top-content');

const topHeading = document.querySelectorAll('.top-content .text-content h4');

// topHeading.forEach( element => {
//   element.style.color = "##0000FF";
// })

topHeading[0].textContent = "Features";
topHeading[1].textContent = "About";

const topPara = document.querySelectorAll('.top-content .text-content p');
topPara[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
topPara[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

// middle Image
const middleImg = document.querySelector('#middle-img');
middleImg.src = "img/mid-page-accent.jpg";

const bottomContent = document.querySelector('.bottom-content');

const bottomHeading = document.querySelectorAll('.bottom-content .text-content h4');

// bottomHeading.forEach( element => {
//   element.style.color = "##0000FF";
// })

bottomHeading[0].textContent = "Services";
bottomHeading[1].textContent = "Product";
bottomHeading[2].textContent = "Vision";

const bottomPara = document.querySelectorAll('.bottom-content .text-content p');
bottomPara[0].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
bottomPara[1].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
bottomPara[2].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";


// bottomPara.forEach(element =>{
//   element.italics();
// })

// Contact code

const contact = document.querySelector(".contact");

const contactHeading = document.querySelector(".contact h4");
contactHeading.textContent = "Contact";

contactHeading.style.color = "#006400";

const contactPara = document.querySelectorAll('.contact p');
contactPara[0].textContent = "123 Way 456 Street Somewhere, USA";
contactPara[1].textContent = "1 (888) 888-8888";
contactPara[2].textContent = "sales@greatidea.io";

const footer = document.getElementsByTagName('footer');
const footerPara = document.querySelector('footer p');
footerPara.textContent = "Copyright Great Idea! 2018";
