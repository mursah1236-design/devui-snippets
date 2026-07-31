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
`

};







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