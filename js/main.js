document.querySelector("#mobileMenu")?.addEventListener("click",()=>document.querySelector("#mainNav")?.classList.toggle("open"));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll(".reveal,.experience-card,.role-grid article").forEach(el=>observer.observe(el));
