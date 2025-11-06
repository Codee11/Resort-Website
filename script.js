/* -----------------------------------
   Resort Management Website Script
----------------------------------- */

// 🌊 Smooth Scroll for Navbar Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// 🏨 Booking Form Validation
const bookingForm = document.querySelector('form');
if (bookingForm) {
  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form fields
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone') ? document.getElementById('phone').value.trim() : "";
    const checkin = document.getElementById('checkin') ? document.getElementById('checkin').value : "";
    const checkout = document.getElementById('checkout') ? document.getElementById('checkout').value : "";

    // Basic validation
    if (name === "" || email === "") {
      alert("⚠️ Please fill in all required fields.");
      return;
    }

    if (phone && phone.length < 10) {
      alert("⚠️ Please enter a valid phone number.");
      return;
    }

    if (checkin && checkout && new Date(checkout) <= new Date(checkin)) {
      alert("⚠️ Check-out date must be after check-in date.");
      return;
    }

    // Success message
    alert("✅ Thank you, " + name + "! Your booking has been received successfully.");
    bookingForm.reset();
  });
}

// 💬 Contact Form Validation
const contactForm = document.querySelector('.contact-card form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === "" || email === "" || message === "") {
      alert("⚠️ Please fill in all the fields.");
      return;
    }

    alert("📩 Thank you, " + name + "! We’ve received your message and will get back to you soon.");
    contactForm.reset();
  });
}

// ⬆️ Scroll-to-Top Button
const scrollBtn = document.createElement('button');
scrollBtn.textContent = "↑";
scrollBtn.classList.add('scroll-top-btn');
document.body.appendChild(scrollBtn);

window.addEventListener('scroll', () => {
  scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Style for the scroll button
const style = document.createElement('style');
style.innerHTML = `
.scroll-top-btn {
  position: fixed;
  bottom: 25px;
  right: 25px;
  background-color: #003366;
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  font-size: 20px;
  display: none;
  transition: background 0.3s;
  z-index: 999;
}
.scroll-top-btn:hover {
  background-color: #0055a5;
}
`;
document.head.appendChild(style);