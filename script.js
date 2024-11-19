 const menuIcon = document.getElementById("menu-icon");
  const menu = document.querySelector(".menu");
  const iconBars = document.querySelectorAll(".bar1, .bar2, .bar3");
 
  menuIcon.addEventListener("click", () => {
   
    menu.classList.toggle("active");
    
    menuIcon.classList.toggle("change");
  });