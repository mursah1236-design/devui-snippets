document.addEventListener("DOMContentLoaded", () => {


/* =====================================
   CODE SNIPPETS DATABASE
===================================== */


const codeSnippets = {


navbar:

`
<header class="dev-header">

<div class="dev-nav-container">

<a href="#" class="dev-logo">
Brand<span>UI</span>
</a>

<nav>

<ul class="dev-nav-list">

<li>
<a href="#" class="dev-nav-link active">
Home
</a>
</li>

<li>
<a href="#" class="dev-nav-link">
Features
</a>
</li>

</ul>

</nav>

</div>

</header>
`,



pricing:

`
<div class="dev-pricing-card">

<span class="dev-pricing-badge">
Most Popular
</span>

<div class="dev-pricing-amount">
$29<span>/mo</span>
</div>

</div>
`,



glassButton:

`
<button class="dev-glass-btn">
Explore Components ✨
</button>
`,



contactForm:

`
<form class="dev-form-container">

<h3>
Get In Touch
</h3>

<button class="dev-form-submit">
Send
</button>

</form>
`,



toggleSwitch:

`
<label class="dev-switch">

<input type="checkbox" checked>

<span class="dev-slider"></span>

</label>
`,



searchBar:

`
<div class="dev-search-box">

<input 
class="dev-search-input"
placeholder="Search...">

<button class="dev-search-btn">
Search
</button>

</div>
`,



accordion:

`
<div class="dev-accordion-item">

<div class="dev-accordion-title">

What is DevUI?

</div>

<div class="dev-accordion-content">

A collection of reusable UI components.

</div>

</div>
`,



socialShare:

`
<div class="dev-social-group">

<a class="dev-soc-btn dev-soc-fb">
Facebook
</a>

<a class="dev-soc-btn dev-soc-tw">
X
</a>

<a class="dev-soc-btn dev-soc-in">
LinkedIn
</a>

</div>
`,



alertBox:

`
<div class="dev-alert-success">

✓ Success Notification

</div>
`,



profileCard:

`
<div class="dev-profile-card">

<div class="dev-profile-avatar"></div>

<h3>
Alex Dev
</h3>

</div>
`,



gradientFooter:

`
<footer class="dev-footer">

© 2026 Your Brand

</footer>
`,



loadingSpinner:

`
<div class="dev-spinner"></div>
`,



navTabs:

`
<div class="dev-tab-container">

<span class="dev-tab-item active">
Overview
</span>

</div>
`,



breadcrumb:

`
<div class="dev-breadcrumb">

Home /
<span>
Components
</span>

</div>
`,



statCard:

`
<div class="dev-stat-card">

<div class="dev-stat-value">
$12,450
</div>

</div>
`,



backToTop:

`
<button class="dev-back-to-top">

↑

</button>
`,

loginForm: `
<div class="login-box">

    <h2>Welcome Back</h2>

    <form>

        <div class="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email">
        </div>

        <div class="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password">
        </div>

        <div class="remember">
            <label>
                <input type="checkbox">
                Remember me
            </label>
        </div>

        <button type="submit">
            Login
        </button>

    </form>

</div>
`,

signupForm: `

<div class="signup-box">

<h2>
Create Account
</h2>


<div class="input-group">

<label>
Username
</label>

<input 
type="text"
placeholder="Enter username">

</div>



<div class="input-group">

<label>
Email
</label>

<input 
type="email"
placeholder="Enter email">

</div>



<div class="input-group">

<label>
Password
</label>

<input 
type="password"
placeholder="Create password">

</div>



<button>
Sign Up
</button>


</div>

`,

forgotPassword: `

<div class="forgot-box">

<h2>
Reset Password
</h2>


<form>


<div class="input-group">

<label>
Email
</label>


<input 
type="email"
placeholder="Enter your email">

</div>



<button type="submit">

Send Reset Link

</button>


</form>


<p class="back-login">

Back to Login

</p>


</div>

`,

newsletterForm: `

<div class="newsletter-box">

    <h2>Subscribe Newsletter</h2>

    <p>
        Get the latest UI components and design updates.
    </p>

    <div class="input-group">

        <input
        type="email"
        placeholder="Enter your email">

    </div>

    <button>
        Subscribe
    </button>

</div>

`,

testimonialCard: `

<div class="testimonial-card">

    <div class="testimonial-avatar">
        JD
    </div>

    <h3>
        John Doe
    </h3>

    <span class="testimonial-role">
        Frontend Developer
    </span>

    <p>
        "DevUI Snippets saved me hours of development time. The components are clean, responsive, and easy to customize."
    </p>

    <div class="testimonial-stars">
        ★★★★★
    </div>

</div>

`,

teamMemberCard: `

<div class="team-card">

    <div class="team-image">
        <img src="https://via.placeholder.com/120" alt="Team Member">
    </div>

    <h3>
        Sarah Williams
    </h3>

    <span class="team-role">
        UI/UX Designer
    </span>

    <p>
        Creative designer focused on building modern and user-friendly interfaces.
    </p>

    <div class="team-social">

        <a href="#">GitHub</a>
        <a href="#">LinkedIn</a>
        <a href="#">Twitter</a>

    </div>

</div>

`,
featureCard: `

<div class="feature-card">

<div class="feature-icon">
⚡
</div>

<h3>
Fast Performance
</h3>

<p>
Optimized components built for modern websites.
</p>

</div>

`,
pricingToggle: `

<div class="pricing-toggle">

<span>
Monthly
</span>


<label class="switch">

<input type="checkbox">


<span class="slider"></span>

</label>


<span>
Yearly
</span>

</div>

`,
modalPopup: `

<button class="modal-demo-btn">
Open Modal
</button>


<div class="modal-overlay">

<div class="modal-box">

<button class="modal-close">
×
</button>


<h3>
Welcome!
</h3>


<p>
This is a simple responsive modal popup component.
</p>


</div>

</div>

`,
toastNotification: `

<button class="toast-demo-btn">
Show Toast
</button>


<div class="toast-box">

✓ Successfully saved!

</div>

`,
progressBar: `

<div class="progress-wrapper">

<div class="progress-label">

<span>
Loading Progress
</span>

<strong>
75%
</strong>

</div>


<div class="progress-container">

<div class="progress-fill">

</div>

</div>


</div>

`,
timeline: `

<div class="timeline">


<div class="timeline-item">

<span class="timeline-dot"></span>


<div class="timeline-content">

<strong>
2026
</strong>

<p>
DevUI Snippets Project Started
</p>

</div>

</div>



<div class="timeline-item">

<span class="timeline-dot"></span>


<div class="timeline-content">

<strong>
2027
</strong>

<p>
New UI Components Added
</p>

</div>

</div>


</div>

`,
dashboardSidebar: `

<aside class="dashboard-sidebar">


<div class="sidebar-logo">
DevUI
</div>


<nav class="sidebar-menu">

<a class="active">
Dashboard
</a>

<a>
Projects
</a>

<a>
Settings
</a>

<a>
Logout
</a>

</nav>


</aside>

`,
heroSection: `

<section class="hero-section">


<div class="hero-content">


<h1>
Build Modern Websites Faster
</h1>


<p>
Reusable UI components for developers.
</p>


<div class="hero-buttons">


<a href="#">
Get Started
</a>


<a href="#">
Learn More
</a>


</div>


</div>


</section>

`,

};

// Modal Popup Dynamic Event

document.addEventListener("click", function(e){


    if(e.target.classList.contains("modal-demo-btn")){

        const preview = e.target.closest(".mini-modal-preview");

        if(preview){

            const overlay = preview.querySelector(".modal-overlay");

            if(overlay){

                overlay.style.display = "flex";

            }

        }

    }
    // Toast Notification Dynamic Event




    if(e.target.classList.contains("toast-demo-btn")){


        const preview =
        e.target.closest(".mini-toast-preview");


        if(preview){


            const toast =
            preview.querySelector(".toast-box");


            if(toast){


                toast.style.display = "block";


                setTimeout(()=>{


                    toast.style.display = "none";


                },3000);


            }


        }


    }





    if(e.target.classList.contains("modal-close")){

        e.stopPropagation();

        const overlay = e.target.closest(".modal-overlay");

        if(overlay){

            overlay.style.display = "none";

        }

    }



});






/* =====================================
   COPY BUTTON SYSTEM
===================================== */

const copyButtons = document.querySelectorAll(".btn-code");


copyButtons.forEach(button => {

button.addEventListener("click", async ()=>{


const code = codeSnippets[button.dataset.code];


if(!code){

console.error(
"No code found:",
button.dataset.code
);

return;

}



try{


if(navigator.clipboard && window.isSecureContext){

await navigator.clipboard.writeText(code);

}

else{


const textarea = document.createElement("textarea");

textarea.value = code;

document.body.appendChild(textarea);

textarea.select();

document.execCommand("copy");

textarea.remove();


}



button.textContent = "Copied ✓";

button.classList.add("copied");



setTimeout(()=>{

button.textContent = "Copy Code";

button.classList.remove("copied");


},2000);



}

catch(error){


console.error(
"Copy failed:",
error
);


button.textContent = "Failed";


setTimeout(()=>{

button.textContent="Copy Code";

},2000);



}



});

});









/* =====================================
   FILTER SYSTEM
===================================== */


const filterButtons =
document.querySelectorAll(".filter-btn");


const cards =
document.querySelectorAll(".snippet-card");



filterButtons.forEach(button=>{


button.addEventListener("click",()=>{


filterButtons.forEach(btn=>{

btn.classList.remove("active");

});



button.classList.add("active");



const category =
button.dataset.category;



cards.forEach(card=>{


if(
category==="all" ||
card.dataset.category===category
){


card.style.display="flex";


}

else{


card.style.display="none";


}



});



});


});









/* =====================================
   DEMO MODAL SYSTEM
===================================== */


const modal =
document.getElementById("demoModal");


const demoArea =
document.getElementById("demoArea");



const closeButton =
document.querySelector(".close-demo");




const demoButtons =
document.querySelectorAll(".btn-secondary");




demoButtons.forEach((button,index)=>{


button.addEventListener("click",()=>{


const card =
button.closest(".snippet-card");



const title =
card.querySelector("h3").textContent;



const preview =
card.querySelector(".card-preview").innerHTML;



if(modal && demoArea){


demoArea.innerHTML = `

<h3>${title}</h3>

<div class="demo-preview-box">

${preview}

</div>

`;



modal.classList.add("show");


}



});

});







if(closeButton){


closeButton.addEventListener("click",()=>{


modal.classList.remove("show");


});


}






if(modal){


modal.addEventListener("click",(e)=>{


if(e.target===modal){

modal.classList.remove("show");

}


});


}









/* =====================================
   SMOOTH NAVIGATION
===================================== */


document.querySelectorAll(
'a[href^="#"]'
)
.forEach(link=>{


link.addEventListener(
"click",
(e)=>{


const target =
document.querySelector(
link.getAttribute("href")
);



if(target){


e.preventDefault();


target.scrollIntoView({

behavior:"smooth"

});


}


});

});





/* ==========================
   MOBILE NAVBAR
========================== */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.querySelector(".nav-menu");

if(menuToggle){

menuToggle.addEventListener("click",()=>{

navMenu.classList.toggle("active");

   });

}
});