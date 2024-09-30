






let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let scrollPosition = window.scrollY;

    sections.forEach(section => {
        let sectionTop = section.offsetTop - 150;
        let sectionHeight = section.offsetHeight;
        let sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(sectionId)) {
                    link.classList.add('active');
                }
            });
        }
    });
};


navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});




let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY >100 );



let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let menuItems = document.querySelectorAll('.navbar a');
function toggleMenu() {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


function hideMenu() {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}


menuIcon.addEventListener('click', toggleMenu);


menuItems.forEach(item => {
    item.addEventListener('click', hideMenu);
});


document.addEventListener('click', (event) => {
    if (!navbar.contains(event.target) && !menuIcon.contains(event.target)) {
        hideMenu();
    }
});

ScrollReveal({ 
    reset: true,
    distance:'80px',
    duration:2000,
    delay:200
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .skils-container, project-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1,.about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p,.about-content', { origin: 'right' });

const typed = new Typed('.multiple-text', {
    strings: ['Data science student', 'Actuaire', 'fullstack Developer', 'Machine Learning Engineer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function sendEmail(event) { 
    event.preventDefault(); 

    let email = document.getElementById('email').value;

    if (!isValidEmail(email)) {
        Swal.fire({
            icon: 'error',
            title: 'Invalid email address',
            text: 'Please enter a valid email address',
            showConfirmButton: true
        });
        return;
    }

    let parms = {
        name: document.getElementById('name').value,
        email: email,
        message: document.getElementById('message').value,
        subject: document.getElementById('subject').value,
        phonenumber: document.getElementById('number').value
    };

    emailjs.send('service_bh5bli6', 'template_648rmnt', parms)
        .then(() => {
            Swal.fire({
                icon: 'success',
                title: 'Email sent successfully',
                text: 'I will get back to you as soon as possible',
                showConfirmButton: false,
                timer: 1500
            });
            document.querySelector('form').reset(); 
        })
        .catch(err => {
            Swal.fire({
                icon: 'error',
                title: 'Failed to send email',
                text: 'Please try again later',
                showConfirmButton: true
            });
            console.error("Failed to send email:", err);
        });
}


document.getElementById('read-more-btn').addEventListener('click', function(event) {
    event.preventDefault();
    var moreText = document.getElementById('more-text');
    var btnText = document.getElementById('read-more-btn');

    if (moreText.style.display === "none") {
      moreText.style.display = "inline";
      btnText.textContent = "Read Less";
    } else {
      moreText.style.display = "none";
      btnText.textContent = "Read More";
    }
  });

  document.querySelectorAll('.read-more-btn').forEach(button => {
    button.addEventListener('click', function(event) {
      event.preventDefault();
      
      
      var skilsBox = this.closest('.skils-box');
      var moreText = skilsBox.querySelector('.more-text');
      var btnText = this;
  
      
      if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        btnText.textContent = "Read Less";
      } else {
        moreText.style.display = "none";
        btnText.textContent = "Read More";
      }
    });
  });

 
  document.addEventListener('DOMContentLoaded', () => {
    const langEnButton = document.getElementById('lang-en');
    const langFrButton = document.getElementById('lang-fr');
    const enContent = document.querySelectorAll('.en');
    const frContent = document.querySelectorAll('.fr');

    langEnButton.addEventListener('click', () => {
        switchLanguage('en');
    });

    langFrButton.addEventListener('click', () => {
        switchLanguage('fr');
    });

    function switchLanguage(lang) {
        if (lang === 'en') {
            enContent.forEach(el => el.style.display = 'block');
            frContent.forEach(el => el.style.display = 'none');
        } else if (lang === 'fr') {
            enContent.forEach(el => el.style.display = 'none');
            frContent.forEach(el => el.style.display = 'block');
        }
    }
});


