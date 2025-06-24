  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let savedData = JSON.parse(localStorage.getItem("userDetails"));

    if (savedData && savedData.email === email && savedData.password === password) {
      alert("Login Successful!");
      window.location.href = "home.html";
    } else {
      alert("Details are wrong");
    }
  });

