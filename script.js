
/*===================  menu icon navbar ==========*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    };


/*===================  Activate Link on Scroll ==========*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
        navLinks.forEach(link => {
        link.classList.remove('active');
        });
    let matchingNavLink = document.querySelector(`header nav a[href*=${id}]`);
      // console.log(matchingNavLink);
    if (matchingNavLink) {
        matchingNavLink.classList.add('active');
    }
    }
    });

  // /* =============== sticky navbar=========================== */

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

  // /*=================remove toggle icon and navbar when click navbar link =============*/ 

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};


/*=====================swiper ================================= */

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCurser : true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    });


    var swiper = new Swiper(".slide-content", {
        slidesPerView: 3,
        spaceBetween: 25,
        // loop: true,
        centerSlide: 'true',
        fade : 'true',
        grabCursor : 'true',
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        });

/*=====================dark light mode ================================= */

let darkModeIcon = document.querySelector('#darkMode-icon');
let  body = document.body;

darkModeIcon.onclick = () => {

    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
    
    body.addEventListener('transitionend', () => {
        const isDarkMode = body.classList.contains('dark-mode');
        const transitionDuration = '0.7s'; // Adjust the duration as needed
    
        body.style.transition = 'none'; // Disable transition temporarily
        body.classList.toggle('light-mode', !isDarkMode);
        setTimeout(() => {
            body.style.transition = `background-color ${transitionDuration}, color ${transitionDuration}`;
        });
    });
    }

    // const darkModeIcon = document.getElementById('darkMode-icon');

    

    


/*===================== scroll reveal ==================*/

ScrollReveal({ 
    // reset: true ,
    distance : '80px',
    duration : 2000,
    delay : 200
  });
  ScrollReveal().reveal('.home-content , .heading', { origin: 'top' });
  ScrollReveal().reveal('.home-img img, .services-container , .portfolio-box , .team-wrapper  , .pricing-box', { origin: 'bottom' });
  ScrollReveal().reveal('.home-content h1 , .about-img img ', { origin: 'left' });
  ScrollReveal().reveal('.home-content h3 , .home-content p , .about-content ', { origin: 'right' });
  
  /*============= type js ==========================*/ 
  const typed = new Typed('.multiple-text' ,{
  strings : ['digital Company' , 'Graphic Design' ,'Social Media', 'Software Development' , 'Online Training' ,
    'Content Services' ,'Voiceover Services'],
    typeSpeed : 100 ,
    backSpeed : 100 ,
    backDelay : 1000 ,
    loop : true
  });




  const animatedElements = document.querySelectorAll('.portfolio-layer');
  let currentIndex = 0;
  
  // Function to handle the animation for the current index
  function animateCurrent() {
      if (currentIndex > 0) {
          animatedElements[currentIndex - 1].classList.remove('visible');
      }
      animatedElements[currentIndex].classList.add('visible');
      currentIndex = (currentIndex + 1) % animatedElements.length;
  }
  
  // Function to start the animation loop
  function startAnimation() {
      setInterval(animateCurrent, 2000); // Change the duration as needed
  }
  
  // Start the animation loop
  startAnimation();
  





//   const animatedElements = document.querySelectorAll('.portfolio-layer');

// // Detect when the section comes into view
// const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             animateElementsSequentially(animatedElements);
//             observer.unobserve(entry.target); // Stop observing once animation starts
//         }
//     });
// });

// // Observe the section
// const sectionToObserve = document.querySelector('#portfolio'); // Replace with your section selector
// observer.observe(sectionToObserve);

// // Function to animate elements sequentially
// function animateElementsSequentially(elements) {
//     let delay = 0;
//     elements.forEach(element => {
//         setTimeout(() => {
//             element.classList.add('visible');
//         }, delay);
//         delay += 1000; // Change the delay (in milliseconds) between each element
//     });
// }




//   const animatedElements = document.querySelectorAll('.portfolio-layer');

//   // Detect when the section comes into view
//   const observer = new IntersectionObserver(entries => {
//       entries.forEach(entry => {
//           if (entry.isIntersecting) {
//               animatedElements.forEach((animatedElement, index) => {
//                   setTimeout(() => {
//                       animatedElement.classList.add('visible');
//                   }, index * 1000); // Change the delay (in milliseconds) between each element
//               });
//           }
//       });
//   });
  
//   // Observe the section
//   const sectionToObserve = document.querySelector('#portfolio'); // Replace with your section selector
//   observer.observe(sectionToObserve);
  

//   const animatedElements = document.querySelectorAll('.portfolio-layer');

//   // Detect when the section comes into view
//   const observer = new IntersectionObserver(entries => {
//       entries.forEach(entry => {
//           if (entry.isIntersecting) {
//               animatedElements.forEach(animatedElement => {
//                   animatedElement.classList.add('visible');
//               });
//           }
//       });
//   });
  
//   // Observe the section
//   const sectionToObserve = document.querySelector('#portfolio'); // Replace with your section selector
//   observer.observe(sectionToObserve);
  



//   const animatedElement = document.querySelectorAll('.portfolio-layer');

// // Detect when the section comes into view
// const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             animatedElement.classList.add('visible');
//         }
//     });
// });

// // Observe the section
// const sectionToObserve = document.querySelector('#portfolio'); // Replace with your section selector
// observer.observe(sectionToObserve);