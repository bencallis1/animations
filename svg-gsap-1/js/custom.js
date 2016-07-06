
// Here we are using gsap to target our DevCircle class.
// We want the animation to last 3 seconds
// We then pass in an object of all the things we want to do. We will scale the svg, then move up and over with the x and y then change the opacity to 1
// and change the color of the svg to blue using the fill property.


// TweenMax.to is the animation that we want to have happen with the settings being the end result
TweenMax.to('.DevCircle',3, {scale:1.1, x:-50, y:-100, ease:Power4.easeIn, opacity:1,fill:'#00D2FC'});// TweenMax.from is the animation that we want to have happen with the settings being the beginning
TweenMax.from('.intro-text',3, {scale:2.4, x:-70, y:-310, ease:Power4.easeIn, opacity:0, fill:'#00D2FC'});


// Here we are going to use the draw svg plugin that is made available to us with tweenmax

// If you only pass in one value then gsap will assume that is the end value and only animate one direction
// If you pass in two arguments then the svg will animate from both ends


// This creates a cool dashed affect on the stroke
//TweenLite.from('.DevCircle-logo', 1, {drawSVG:"50% 50%", delay:0.5, repeat:1});



TweenLite.from('.path', 2, {drawSVG:"50% 50%", delay:0.4, ease:Bounce.easeOut});







