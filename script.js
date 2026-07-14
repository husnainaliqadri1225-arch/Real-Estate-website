// ===== Mobile Menu =====

function toggleMenu(){

    document.getElementById("menu").classList.toggle("show");

}


// ===== Smooth Scroll =====

document.querySelectorAll('a[href^="#"]').forEach(link=>{

    link.addEventListener("click",function(e){

        e.preventDefault();

        let target = document.querySelector(
            this.getAttribute("href")
        );

        if(target){

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

        document.getElementById("menu").classList.remove("show");

    });

});


// ===== Contact Form =====

const form = document.querySelector("form");

if(form){

form.addEventListener("submit",function(e){

    e.preventDefault();

    alert("Thank you! Your message has been sent.");

    form.reset();

});

}


// ===== Scroll Animation =====

const cards = document.querySelectorAll(".card");


const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0)";

        }

    });

});


cards.forEach(card=>{

    card.style.opacity="0";

    card.style.transform="translateY(40px)";

    card.style.transition="0.6s";

    observer.observe(card);

});