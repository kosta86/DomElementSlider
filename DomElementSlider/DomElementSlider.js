function slideDomElements(elements) {
    if(elements && elements !== '?') {
        var domElements = Array.from(document.querySelectorAll(elements));
        domElements.forEach((element, index) => {
            index % 2 == 0 ? element.classList.add('slide-from-left') : element.classList.add('slide-from-right');
        });
    } else throw 'You did not pass anything (HTML element, className or id) to slideDomElements() function! Open DomElementSlider.js file and pass an argument to slideDomElements function - at line 15';
}

// replace slideDomElements('?') with HTML element name, id or className you want to slide;
// example1 -> window.addEventListener('DOMContentLoaded', slideDomElements('button'));
// example2 -> window.addEventListener('DOMContentLoaded', slideDomElements('.some-class'));
// example2 -> window.addEventListener('DOMContentLoaded', slideDomElements('#some-id'));

window.addEventListener('DOMContentLoaded', slideDomElements('.wrapper'));




//------------------------------------------------------------------------------------------------------------------------------------------------------
// if you want to slide more of your HTML elements uncomment the line below and pass a class or element name to the slideDomElements() function
// window.addEventListener('DOMContentLoaded', slideDomElements('?'));   

// if you want to slide more of your HTML element uncomment the line below and pass a class or element name to the slideDomElements() function
// window.addEventListener('DOMContentLoaded', slideDomElements('?'));   

// if you want to slide more of your HTML element uncomment the line below and pass a class or element name to the slideDomElements() function
// window.addEventListener('DOMContentLoaded', slideDomElements('?'));   

// if you want to slide more of your HTML element uncomment the line below and pass a class or element name to the slideDomElements() function
// window.addEventListener('DOMContentLoaded', slideDomElements('?'));   

// if you want to slide more of your HTML element uncomment the line below and pass a class or element name to the slideDomElements() function
// window.addEventListener('DOMContentLoaded', slideDomElements('?'));   

// if you want to slide more of your HTML element uncomment the line below and pass a class or element name to the slideDomElements() function
// window.addEventListener('DOMContentLoaded', slideDomElements('?'));   
//-----------------------------------------------------------------------------------------------------------------------------------------------------

    
