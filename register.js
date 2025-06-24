  function register() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let age = document.getElementById("age").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let errorList = document.getElementById("errorList");
    errorList.innerHTML = "";

    let errors = [];

    if (!name) errors.push("Name is required");
    if (!email) errors.push("Email is required");
    if (!age) errors.push("age is required");
    if (!password) errors.push("Password is required");
    if (password !== confirmPassword) errors.push("Passwords do not match");

    if (errors.length > 0) {
      errors.forEach((err) => {
        let li = document.createElement("li");
        li.textContent = err;
        errorList.appendChild(li);
      });
    } else {
      let userData = {
        name,
        email,
        age,
        password,
      };
      localStorage.setItem("userDetails", JSON.stringify(userData));
      alert("Registered Successfully!");
      window.location.href = "login.html"; 
    }
  }
