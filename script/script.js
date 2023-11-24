// search for make up page by title and text of make up products
function search() {
    const input = document.getElementById('searchInput').value.toLowerCase()
    const cards = document.querySelectorAll('.card')
    const cardContainer = document.querySelector('.card-container')
    
    if (input.trim() !== '') {
        cardContainer.style.flexDirection = 'column'; 
    } else {
        cardContainer.style.flexDirection = 'row'; 
    }

    cards.forEach(function(card) {
        var title = card.querySelector('.card-title').textContent.toLowerCase()
        var text = card.querySelector('.card-text').textContent.toLowerCase()

        if (title.includes(input) || text.includes(input)) {
            card.style.display = 'block'
        } else {
            card.style.display = 'none'
        }
    })
}

var input = document.getElementById('searchInput');
if(input){
    input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        search();
    }
});
}
//modal window for the promocode
const btnModal=document.querySelector('.btnModal')
// to open the modal window 
if(btnModal){
    btnModal.addEventListener('click', () => {
    document.querySelector('.modalWindow').style.display = 'block';
})
}
    if(document.querySelector('.close')){
       // to close the modal window
    document.querySelector('.close').addEventListener('click', () => {
        document.querySelector('.modalWindow').style.display = 'none';
    }) 
    }

 
const btnModal2=document.querySelector('.btnModal2')
// to open the modal window 
if(btnModal2){
    btnModal2.addEventListener('click', () => {
    document.querySelector('.modalWindow2').style.display = 'block';
})
}
    if(document.querySelector('.close2')){
       // to close the modal window
    document.querySelector('.close2').addEventListener('click', () => {
        document.querySelector('.modalWindow2').style.display = 'none';
    }) 
    }

 

///validating
const submitBtn=document.getElementById('submitBtn')
const email=document.querySelector('.form-control-js')
const text=document.querySelector('.textarea-js')
const res=document.querySelector('.result')

//adding event to button
if(submitBtn){
   submitBtn.addEventListener('click', Validate)
 
}

//creating an function that checks if data valid or not
function Validate(){

if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test(email.value) && (text.value)) //for email checking
  {
    res.style.color='blue'
    return document.querySelector('.result').innerText='Thank for providing the information. Your data is valid'

  }
else{
    res.style.color='red'
    return res.innerText='The email or text you provided invalid, the recommendation text can not be empty'

}}

//IN INDEX FUTURE PLANS
const futureImage = document.getElementById('futureImage');
    const futureText = document.getElementById('futureText');

    // Add a click event listener to the image
    if(futureImage){
            futureImage.addEventListener('click', function() {
        // Change the text content of the h5 element
        futureText.textContent = 'We are starting disribution of Dyson products firstly in Kazakhstan! Explore our exclusive Dyson products first. We provide high-quality products at a lower cost, available only for our clients.';
        futureText.style.color='red'
    });
    }



// SCROLL TO TOP BUTTON ON ALL PAGES
var mybutton = document.getElementById("scrollToTopBtn");
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// DRAG-AND-DROP GAME
const rightProducts = ["oil-based", "water-based", "toner", "serum", "moist"];
const wrongProducts = ["lipstick", "gel-based", "retinol", "powder", "foundation"];
let droppedProducts = [];

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
    document.getElementById("drop-here").style.display = "none";
}


document.querySelectorAll(".product").forEach((product) => {
    product.setAttribute("draggable", true);
    product.addEventListener("dragstart", drag);
});

if(document.getElementById("box")){
    document.getElementById("box").addEventListener("dragover", allowDrop);
document.getElementById("box").addEventListener("drop", drop);
}



function showModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
    centerModal(modal);
    setTimeout(function () {
        hideModal(modalId);
    }, 1500);
}

function hideModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "none";
}

function centerModal(modal) {
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;

    const modalHeight = modal.offsetHeight;
    const modalWidth = modal.offsetWidth;

    const topPosition = (windowHeight - modalHeight) / 2;
    const leftPosition = (windowWidth - modalWidth) / 2;

    modal.style.top = `${topPosition}px`;
    modal.style.left = `${leftPosition}px`;
}

if(document.getElementById("success-modal")){
   document.getElementById("success-modal").addEventListener("click", function () {
    showModal("success-modal");
}); 
}

document.getElementById("error-modal").addEventListener("click", function () {
    hideModal("error-modal");
});

window.addEventListener("click", function (event) {
    if (event.target.classList.contains("modal")) {
        hideModal("success-modal");
        hideModal("error-modal");
    }
});

window.addEventListener("resize", function () {
    centerModal(document.getElementById("success-modal"));
    centerModal(document.getElementById("error-modal"));
});
function drop(event) {
    event.preventDefault();
    const productId = event.dataTransfer.getData("text");
    const productElement = document.getElementById(productId);

    if (rightProducts.includes(productId) && !droppedProducts.includes(productId)) {
        const productDiv = document.createElement("div");
        productDiv.classList.add("dropped-product");
        productDiv.textContent = productElement.textContent;
        event.target.appendChild(productDiv);

        droppedProducts.push(productId);

        if (droppedProducts.length === rightProducts.length) {
            showModal("success-modal");
        }
    } else {
        showModal("error-modal");
    }
}

const modalStyles = `
.modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 60%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}`;

const styleElement = document.createElement("style");
styleElement.innerHTML = modalStyles;
document.head.appendChild(styleElement);



// VIDEO 
const videoElement = document.getElementById('video-frame');
if(videoElement){
    videoElement.pause();
}


function openFullscreen() {
    var elem = document.getElementById("video-frame");
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    }
}

// HOVER EFFECTS ON CARDS
document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');

    cards.forEach(function (card) {
        card.addEventListener('mouseover', function () {
            this.style.transform = 'scale(1.1)';
        });

        card.addEventListener('mouseout', function () {
            this.style.transform = 'scale(1)';
        });
    });
});



