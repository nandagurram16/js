// app.js

// Responsive Nav Menu
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('hidden');
});

// Image Slider Logic
let currentSlide = 0;
const slides = document.querySelectorAll('.slides img');
const prevBtn = document.querySelector('.slide-btn.prev');
const nextBtn = document.querySelector('.slide-btn.next');
function showSlide(idx) {
  slides.forEach((img, i) => {
    img.style.display = i === idx ? 'block' : 'none';
  });
}
showSlide(currentSlide);
prevBtn.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});
nextBtn.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

// Shopping Cart Functionality
let cart = [];
const cartBtn = document.querySelector('.nav-links li a[href="#"][1]');
const cartModal = document.getElementById('cart-modal');
const cartCount = document.getElementById('cart-count');
const addToCartBtns = document.querySelectorAll('.add-to-cart');
addToCartBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const card = e.target.closest('.product-card');
    const id = card.dataset.id;
    // In real app, fetch/add product details
    cart.push(id);
    cartCount.textContent = cart.length;
  });
});
// Show/Hide Cart Modal
cartBtn.addEventListener('click', () => {
  cartModal.classList.remove('hidden');
});
cartModal.querySelector('.close-btn').addEventListener('click', () => {
  cartModal.classList.add('hidden');
});

// Simple Authentication Modal (demo)
const authBtn = document.getElementById('auth-button');
const authModal = document.getElementById('auth-modal');
authBtn.addEventListener('click', () => {
  authModal.classList.remove('hidden');
});
authModal.querySelector('.close-btn').addEventListener('click', () => {
  authModal.classList.add('hidden');
});
document.getElementById('login-form').addEventListener('submit', (e) => {
  e.preventDefault();
  // Here you would validate credentials against your backend
  authBtn.textContent = 'Logout';
  authModal.classList.add('hidden');
});