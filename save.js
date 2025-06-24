let savedContainer = document.getElementById("box");
let savedData = JSON.parse(localStorage.getItem("savedPosts")) || [];

function showSaved() {
  savedData.forEach((i) => {
    savedContainer.innerHTML += `
      <div class="linkedin-card">
        <div class="card-header">
          <img src="${i.img}" alt="Profile" class="profile-img">
          <div class="user-info">
            <h3>${i.company}</h3>
            <p>${i.title}</p>
          </div>
        </div>
        <div class="card-body">
          <p>${i.description}</p>
        </div>
        <div class="center-img">
          <img src="${i.images}" alt="main-img" style="width:450px; margin-top: 10px; margin-left: 20px;" class="main-img">
        </div>
      </div>
    `;
  });
}

showSaved();
