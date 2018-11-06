



var navBarSlide = {
    duration:2000,
    distance: '80%',
    origin: 'bottom'
};

var showCaseLeft = {
    duration:2000,
    distance: '300px',
    origin: 'top'
};

var showCaseRight = {
    duration:2000,
    distance: '300px',
    origin: 'right'
};
var showCaseBtn = {
    duration:1000,
    distance: '300px',
    origin: 'bottom',
    delay:2000
};
var divTestimonial = {
    duration:2000,
    origin: 'bottom',
};
var infoLeft = {
    duration:2000,
    origin: 'left',
    distance: '300px',
    viewFactor:0.2
};
var infoRight = {
    duration:2000,
    origin: 'right',
    distance: '300px',
    viewFactor:0.2
};



ScrollReveal().reveal('.navbar',navBarSlide);
ScrollReveal().reveal('.showcase-left',showCaseLeft);
ScrollReveal().reveal('.showcase-right',showCaseRight);
ScrollReveal().reveal('.showcase-btn',showCaseBtn);
ScrollReveal().reveal('#testimonial div',divTestimonial);
ScrollReveal().reveal('.info-left',infoLeft);
ScrollReveal().reveal('.info-right',infoRight);








