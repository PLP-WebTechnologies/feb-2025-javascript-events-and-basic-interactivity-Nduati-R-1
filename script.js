// 1. Event Handling

const colorBtn = document.getElementById('colorBtn');
const hoverPara = document.getElementById('hoverPara');
const keyInput = document.getElementById('keyInput');
const keyPressed = document.getElementById('keyPressed');
const secretBtn = document.getElementById('secretBtn');
const secretMsg = document.getElementById('secretMsg');

// Change button color on click
colorBtn.addEventListener('click', () => {
  const randomColor = `hsl(${Math.floor(Math.random() * 360)}, 70%, 60%)`;
  colorBtn.style.backgroundColor = randomColor;
  colorBtn.textContent = 'Color Changed!';
});

// Show key pressed
keyInput.addEventListener('keypress', (e) => {
  keyPressed.textContent = `You pressed: ${e.key}`;
});

// Secret double-click action
secretBtn.addEventListener('dblclick', () => {
  secretMsg.textContent = '🎉 You found the secret double-click! 🎉';
  secretMsg.style.color = 'green';
});


// 2. Interactive Elements - Slideshow

const images = [
  'https://via.placeholder.com/300x200?text=Image+1',
  'https://via.placeholder.com/300x200?text=Image+2',
  'https://via.placeholder.com/300x200?text=Image+3',
];
let currentIndex = 0;

const slideImg = document.getElementById('slideImg');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function showImage(index) {
  slideImg.src = images[index];
  slideImg.alt = `Image ${index + 1}`;
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});

showImage(currentIndex);


// 3. Form Validation

const signupForm = document.getElementById('signupForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passError = document.getElementById('passError');
const formMsg = document.getElementById('formMsg');

function validateEmail(email) {
  // Simple email regex
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePassword(password) {
  return password.length >= 8;
}

emailInput.addEventListener('input', () => {
  if (!validateEmail(emailInput.value)) {
    emailError.textContent = 'Invalid email format.';
  } else {
    emailError.textContent = '';
  }
});

passwordInput.addEventListener('input', () => {
  if (!validatePassword(passwordInput.value)) {
    passError.textContent = 'Password must be at least 8 characters.';
  } else {
    passError.textContent = '';
  }
});

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const emailValid = validateEmail(emailInput.value);
  const passValid = validatePassword(passwordInput.value);

  if (!emailValid) {
    emailError.textContent = 'Invalid email format.';
  }

  if (!passValid) {
    passError.textContent = 'Password must be at least 8 characters.';
  }

  if (emailValid && passValid) {
    formMsg.style.color = 'green';
    formMsg.textContent = 'Form submitted successfully! 🎉';
    signupForm.reset();
    emailError.textContent = '';
    passError.textContent = '';
  } else {
    formMsg.style.color = 'red';
    formMsg.textContent = 'Please fix errors before submitting.';
  }
});
