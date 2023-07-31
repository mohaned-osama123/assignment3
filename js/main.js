const emailInput = document.getElementById('signinemail');
const passwordInput = document.getElementById('signinPassword');
const incorrectMsg = document.getElementById('incorrect');
const loginButton = document.getElementById('loginBtn');
const signupNameInput = document.getElementById('signupName');
const signupEmailInput = document.getElementById('signupEmail');
const signupPasswordInput = document.getElementById('signupPassword');
const existMsg = document.getElementById('exist');
const signupButton = document.getElementById('signupButton');

signupButton.addEventListener('click', signUp);

function signUp() {
  // Get the values entered by the user
  const name = signupNameInput.value;
  const email = signupEmailInput.value;
  const password = signupPasswordInput.value;

  // Get the existing user data from the local storage
  const userData = JSON.parse(localStorage.getItem('users')) || [];

  // Create a new user object
  const newUser = {
    name: name,
    email: email,
    password: password
  };

  // Add the new user object to the array of users
  userData.push(newUser);

  // Save the updated array of users to the local storage
  localStorage.setItem('users', JSON.stringify(userData));

  // Clear the input fields
  signupNameInput.value = '';
  signupEmailInput.value = '';
  signupPasswordInput.value = '';

  // Show a success message
  existMsg.textContent = 'Signup successful!';
}

loginButton.addEventListener('click', login);
function login() {
  // Get the values entered by the user
  const email = emailInput.value;
  const password = passwordInput.value;

  // Get the existing user data from the local storage
  const userData = JSON.parse(localStorage.getItem('users')) || [];

  // Loop through the array of users to check if there is a match
  let matchFound = false;
  for (let i = 0; i < userData.length; i++) {
    if (userData[i].email === email && userData[i].password === password) {
      // If there is a match, set the matchFound flag to true
      matchFound = true;
      break;
    }
  }

  // If a match is found, log in the user
  if (matchFound) {
    alert('Login successful!');
    // Clear the input fields
    emailInput.value = '';
    passwordInput.value = '';
  } else {
    // If no match is found, show an error message
    incorrectMsg.textContent = 'Invalid email or password';
  }
}

