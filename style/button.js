let hamburgerlist = document.querySelector(".navbar-nav")

document.querySelector(".hamburger-btn").onclick = () => {
    hamburgerlist.classList.toggle('active');
}

let hamburger = document.querySelector(".hamburger-btn")

document.addEventListener('click', function (e){ 
    if(!hamburger.contains(e.target) && !hamburgerlist.contains(e.target)){
        hamburgerlist.classList.remove('active');
    }
})