/* =========================
NAV BAR
========================= */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// COUNTER ANIMATION
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");
    counters.forEach(counter => {
        counter.innerText = "0";
        const update = () => {
            const target = +counter.getAttribute("data-target");
            const current = +counter.innerText;
            const increment = target / 200; // speed

            if(current < target){
                counter.innerText = Math.ceil(current + increment);
                setTimeout(update, 20);
            } else {
                counter.innerText = target;
            }
        };
        update();
    });
});
.gallery-img {
  width: 100%;
  cursor: pointer;
}

/* Modal background */
.modal {
  display: none;
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  align-items: center;
  justify-content: center;
}

/* Big image */
.modal img {
  max-width: 95%;
  max-height: 95%;
}


