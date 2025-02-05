let mainSite = document.querySelector("#mainSite");
let navbar = document.querySelector(".navbar")
let nameNavbar = document.querySelector(".name-navbar")
let navItem1 = document.querySelector(".nav-item:nth-child(1)")
let navItem2 = document.querySelector(".nav-item:nth-child(2)")
let navItem3 = document.querySelector(".nav-item:nth-child(3)")
let navItem4 = document.querySelector(".nav-item:nth-child(4)")
let navItem5 = document.querySelector(".nav-item:nth-child(5)")
let mainCards = document.querySelectorAll(".mainCard .card");

let mainCard1 = mainCards[0];
let mainCard2 = mainCards[1];
let mainCard3 = mainCards[2];
let mainCard4 = mainCards[3];
let mainCard5 = mainCards[4];

nameNavbar.classList.add("hidden");
mainCard2.style.display = "none"
mainCard3.style.display = "none"
mainCard4.style.display = "none"
mainCard5.style.display = "none"

function lunchIntro() {
  setTimeout(() => {
    mainSite.style.display = "block"; 
  }, 3000); 
}

// Lorsque la souris passe sur la navbar ou la description
navbar.addEventListener('mouseover', () => {
  nameNavbar.classList.add("visible"); // Ajoute la classe visible
});

nameNavbar.addEventListener('mouseover', () => {
  nameNavbar.classList.add("visible"); // Reste visible
});

// Lorsque la souris quitte la navbar ou la description
navbar.addEventListener('mouseout', () => {
  nameNavbar.classList.remove("visible"); // Supprime la classe
});

nameNavbar.addEventListener('mouseout', () => {
  nameNavbar.classList.remove("visible");
});

navItem1.addEventListener("click", () => {
  navItem1.classList.add("active")
  navItem2.classList.remove("active")
  navItem3.classList.remove("active")
  navItem4.classList.remove("active")
  navItem5.classList.remove("active")
  mainCard1.style.display = ""
  mainCard2.style.display = "none"
  mainCard3.style.display = "none"
  mainCard4.style.display = "none"
  mainCard5.style.display = "none"
})

navItem2.addEventListener("click", () => {
  navItem1.classList.remove("active")
  navItem2.classList.add("active")
  navItem3.classList.remove("active")
  navItem4.classList.remove("active")
  navItem5.classList.remove("active")
  mainCard1.style.display = "none"
  mainCard2.style.display = ""
  mainCard3.style.display = "none"
  mainCard4.style.display = "none"
  mainCard5.style.display = "none"
})

navItem3.addEventListener("click", () => {
  navItem1.classList.remove("active")
  navItem2.classList.remove("active")
  navItem3.classList.add("active")
  navItem4.classList.remove("active")
  navItem5.classList.remove("active")
  mainCard1.style.display = "none"
  mainCard2.style.display = "none"
  mainCard3.style.display = ""
  mainCard4.style.display = "none"
  mainCard5.style.display = "none"
})

navItem4.addEventListener("click", () => {
  navItem1.classList.remove("active")
  navItem2.classList.remove("active")
  navItem3.classList.remove("active")
  navItem4.classList.add("active")
  navItem5.classList.remove("active")
  mainCard1.style.display = "none"
  mainCard2.style.display = "none"
  mainCard3.style.display = "none"
  mainCard4.style.display = ""
  mainCard5.style.display = "none"
})

navItem5.addEventListener("click", () => {
  navItem1.classList.remove("active")
  navItem2.classList.remove("active")
  navItem3.classList.remove("active")
  navItem4.classList.remove("active")
  navItem5.classList.add("active")
  mainCard1.style.display = "none"
  mainCard2.style.display = "none"
  mainCard3.style.display = "none"
  mainCard4.style.display = "none"
  mainCard5.style.display = ""
})

// Ajout de l'effet d'inclinaison 3D sur les cartes
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Réduction de l'angle maximum à 7 degrés (au lieu de 15)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'none';
  });
});