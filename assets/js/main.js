const navMenu = document.getElementById("nav-menu"),
navToggle = document.getElementById("nav-toggle"),
navClose = document.getElementById("nav-close")

/*=============== SHOW MENU ===============*/
if (navToggle)
{
    navToggle.addEventListener('click',() => {
        navMenu.classList.add("show-menu")
    })
}

/*============== MENU HIDDEN ===============*/
if (navClose)
{
    navClose.addEventListener('click',() => {
        navMenu.classList.remove("show-menu")
    })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLinks  = document.querySelectorAll(".nav-link")

function linkAction(){
    const navMenu = document.getElementById("nav-menu")
    // when we click  on each nav link, we remove the show menu
    navMenu.classList.remove("show-menu")
}
navLinks.forEach(n => n.addEventListener('click', linkAction))




/*=============== CHANGE BACKGROUND HEADER ===============*/

function scrollHeader(){

    const header = document.getElementById("header")
    // when the scroll is greater that 80 vh , add the class header to the tag header
    if (this.scrollY >= 80) header.classList.add("scroll-header"); else header.classList.remove("scroll-header");
}
window.addEventListener("scroll" , scrollHeader )






/*=============== TESTIMONIAL SWIPER ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


//get all sections that have an id defined
const section =  document.querySelectorAll("section[id");

// add an event listenre listening for scroll
window.addEventListener("scroll" , navHighLighter);

function navHighLighter()
{
    // get current scroll position
    let scrollY = window.pageYOffset;

    // now we loop through section to get height , top and  value for each
    section.forEach( current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50,
        sectionID = current.getAttribute("id");
        
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight )
        {
            document.querySelector('.nav-menu a[href*=' + sectionID+']').classList.add("active-link");
        }
        else{
            document.querySelector('.nav-menu a[href*=' + sectionID+']').classList.remove("active-link");
        }
    })
}

/*=============== PORTFOLIO ITEM FILTER ===============*/

/*=============== THEME/DISPLAY CUSTOMIZATION ===============*/
const theme = document.querySelector("#theme-button");
const themeModal = document.querySelector(".customize-theme");
const fontSizes = document.querySelectorAll('.choose-size span');
const colorPalette = document.querySelectorAll(".choose-color span");
var root = document.querySelector(":root");
const Bg1 = document.querySelector(".bg-1");
const Bg2 = document.querySelector(".bg-2");
const Bg3 = document.querySelector(".bg-3");

//open modal
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

//close modal
const closeThemeModal = (e) => {
    if( e.target.classList.contains('customize-theme'))
    {
        themeModal.style.display = 'none';
    }
}
theme.addEventListener("click" ,openThemeModal );
themeModal.addEventListener("click" , closeThemeModal);




/*===== FONTS =====*/

// remove active classes from spans or font size selectors
const  removeSizeSelector = () => {
    fontSizes.forEach( size => {
        size.classList.remove("active");
    })
}
fontSizes.forEach( size => {
    size.addEventListener('click' ,() => {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');
        if( size.classList.contains('font-size-1'))
        {
            fontSize = '12px';
        }
        else if( size.classList.contains('font-size-2'))
        {
            fontSize = '14px';
        }
        else if( size.classList.contains('font-size-3'))
        {
            fontSize = '16px';
        }
        else if( size.classList.contains('font-size-4'))
        {
            fontSize = '18px';
        }
        // change font size of the root html element
        document.querySelector('html').style.fontSize = fontSize;
    })
})

/*===== PRIMARY COLORS =====*/

//remove action class
const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}


colorPalette.forEach( color => {
    color.addEventListener('click',() => {
        let primaryHue;
        changeActiveColorClass();
        if( color.classList.contains('color-1'))
        {
          primaryHue = 252;  
        }
        else  if( color.classList.contains('color-2'))
        {
          primaryHue = 52;  
        }
        else  if( color.classList.contains('color-3'))
        {
          primaryHue = 352;  
        }
        else  if( color.classList.contains('color-4'))
        {
          primaryHue = 152;  
        }
        else  if( color.classList.contains('color-5'))
        {
          primaryHue = 202;  
        }
        color.classList.add("active");
        root.style.setProperty('--primary-color-hue' , primaryHue);
    })
})

/*===== THEME BACKGROUNDS =====*/

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;


// change background color
const changeBG =() => {
   root.style.setProperty('--light-color-lightness', lightColorLightness); 
   root.style.setProperty('--white-color-lightness', whiteColorLightness);
   root.style.setProperty('--dark-color-lightness', darkColorLightness);
}
Bg1.addEventListener('click',() => {
    //add active class
    Bg1.classList.add('active');
    // remove from other classes 
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    //remove customized change
    window.location.reload();
})
 Bg2.addEventListener('click' , () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';


    // add active class;
    Bg2.classList.add('active');

    // active class from others
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
 })

 Bg3.addEventListener('click' , () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';


    // add active class;
    Bg3.classList.add('active');

    // active class from others
    Bg2.classList.remove('active');
    Bg1.classList.remove('active');
    changeBG();
 })

     // Initialize Email.js with your user ID
     emailjs.init("YOUR_USER_ID");

     // Function to send email
     function sendEmail() {
         // Get form data
         const userEmail = document.querySelector(".contact-input[type='email']").value;
         const subject = document.querySelector(".contact-input[type='text']").value;
         const message = document.querySelector(".contact-input[type='textarea']").value;
 
         // Send email using Email.js
         emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
             to_email: "iamshivammishra49@gmail.com", // Your email address
             from_email: userEmail,
             subject: subject,
             message: message
         })
         .then(function(response) {
             console.log("Email sent successfully!", response);
             // You can add any success message or redirect user to a thank you page here
         }, function(error) {
             console.error("Email sending failed!", error);
             // You can display an error message to the user if the email sending fails
         });
     }
 
     // Add event listener to the send button
     document.querySelector(".btn-default").addEventListener("click", function(event) {
         event.preventDefault(); // Prevent the default form submission
         sendEmail(); // Call the function to send email
     });
 