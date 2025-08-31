//Get the username and password from the html. DOM
const usernameInput = document.querySelector(".input-username");
const passwordInput = document.querySelector(".input-password");
const loginButton = document.querySelector(".loginButton");
const container = document.querySelector(".container");

//Demo
if (!localStorage.getItem("userDetails")) {
  const demoUser = {
    username: "tefo",
    password: "1234", // plain text for demo
  };
  localStorage.setItem("userDetails", JSON.stringify(demoUser));
  console.log("Demo user created: tefo / 1234");
}

//render login
function renderLoginForm(){
  container.innerHTML =
  ` <p>Log In</p>
  <form>
        <div class="form-group"></div>
        <label for="username">Username:</label>
        <input id="username" type="text" placeholder="username" class="input-username" autocomplete="username">
        
        <div class="form-group"></div>
        <label for="password">Password:</label>
        <input id="password" type="password" class="input-password" placeholder="password">
        
        <button onclick="
        
        " class="loginButton">Login</button>
        <a class="form-link" href="https://github.com/TefoTshehla/Registration-System.git">Register if you don't have an
        account</a>

      </form>`

      const usernameInput = container.querySelector(".input-username");
  const passwordInput = container.querySelector(".input-password");
  const loginButton = container.querySelector(".loginButton");

  // Attach event listeners again
  loginButton.addEventListener("click", function(e){
    handleLogin(e, usernameInput, passwordInput);
  });

  passwordInput.addEventListener("keydown", function(e){
    if(e.key === "Enter") handleLogin(e, usernameInput, passwordInput);
  });
}

//login function
function handleLogin(e,) {
  e.preventDefault();
  const username = usernameInput.value.trim();
  const password = passwordInput.value;

 usernameInput.style.border = "1px solid #ccc";
  passwordInput.style.border = "1px solid #ccc";

  let hasError = false;

  if (username === "") {
    usernameInput.style.border = "2px solid red";
    hasError = true;
  }
  if (password === "") {
    passwordInput.style.border = "2px solid red";
    hasError = true;
  }

  if (hasError) return;
  
  if (username === "" || password === "") {
    alert("Please fill both fields");
    return;
  }

  const storedJson = localStorage.getItem("userDetails");
  const storedUser = JSON.parse(storedJson);

  if (username === storedUser.username && password === storedUser.password) {
    container.innerHTML = `<p style="color:green; font-size:20px;">Login Successful! Welcome ${username}. This is just demo</p>
     <button class="logoutButton" style="padding:10px 15px; border:none; border-radius:6px; background:#dc3545; color:white; cursor:pointer;">Logout</button>
    `;
const logoutButton = container.querySelector(".logoutButton");
logoutButton.addEventListener("click", renderLoginForm);

    usernameInput.value = "";
    passwordInput.value = "";
    loginButton.disabled = true;
    console.log("Login successfully");
  } else {
    alert("Invalid details");
    usernameInput.value = "";
    passwordInput.value = "";
  }
}

loginButton.addEventListener("click", handleLogin);

passwordInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") handleLogin(e);
});

//hashing helper SHA-256
/*async function hashPassword(password) {
  const encorder = new TextEncoder();
  const data = new encorder.encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return hashHex;
} */

//Hash the entered password
/*const hashedEntered = await hashPassword(password);

  if (
    username === storedUser.username &&
    hashedEntered === storedUser.password
  ) {
    console.log("Login successfully");
  } else {
    console.log("Invalid details");
  }
}
*/

/*async function handleLogin() {
  const username = usernameInput.value.trim();
  const password = passwordInput.value;
  //if statement to check if the user entered both fields
  if (username === "" || password.trim() === "") {
    console.log("Please fill both fields");
    return;
  }

  const storedJson = localStorage.getItem("userDetails");
  if (!storedJson) {
    console.log("No demo user, run the helper");
    return;
  }
    */

/*passwordInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") handleLogin();
});*/

/*
(async () => {
  const hashed = await hashPassword("1234");
  localStorage.setItem(
    "userDetails",
    JSON.stringify({ username: "tefo", password: hashed })
  );
  console.log("Demo user created: tefo / 1234");
})();

loginButton.addEventListener("click", function () {
  if (usernameInput.value.trim() === "" || passwordInput.value.trim() === "") {
    console.log("Please fill both fields");
    return;
  }

  const userDetails = {
    username: usernameInput.value,
    password: passwordInput.value,
  };

  localStorage.setItem("userDetails", JSON.stringify(userDetails));

  console.log("user saved", userDetails);
});
}
*/
