let totaldata = [
  {
    id: 1,
    img: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Sarah",
    time: { hours: 2, mins: 15 },
    text: "liked your post on AI and Data Science. She found your insights really valuable. Keep sharing such content!",
  },
  {
    id: 2,
    img: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "LinkedIn",
    time: { hours: 4, mins: 30 },
    text: "recommended a new job match for you. Based on your recent activity and skills. Check it out before it expires!",
  },
  {
    id: 3,
    img: "https://randomuser.me/api/portraits/men/3.jpg",
    name: "Daniel",
    time: { hours: 0, mins: 45 },
    text: "commented on your post about startups. He shared some interesting feedback. Join the conversation now.",
  },
  {
    id: 4,
    img: "https://randomuser.me/api/portraits/women/4.jpg",
    name: "Priya",
    time: { hours: 5, mins: 10 },
    text: "endorsed you for Python. Your skills are now more visible. Consider updating your other skills too.",
  },
  {
    id: 5,
    img: "https://randomuser.me/api/portraits/men/5.jpg",
    name: "James",
    time: { hours: 1, mins: 5 },
    text: "viewed your profile. He might be interested in connecting. Reach out to expand your network.",
  },
  {
    id: 6,
    img: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Nina",
    time: { hours: 7, mins: 25 },
    text: "sent you a connection request. She works in your industry. See if you’d like to connect with her.",
  },
  {
    id: 7,
    img: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "LinkedIn News",
    time: { hours: 3, mins: 50 },
    text: "published an article related to your industry. Stay updated with trends. Read and join the discussion.",
  },
  {
    id: 8,
    img: "https://randomuser.me/api/portraits/men/8.jpg",
    name: "Rahul",
    time: { hours: 6, mins: 40 },
    text: "shared a post mentioning you. Your contribution was highlighted. React or comment to increase engagement.",
  },
  {
    id: 9,
    img: "https://randomuser.me/api/portraits/women/9.jpg",
    name: "Ava",
    time: { hours: 0, mins: 20 },
    text: "liked your comment on her update. She appreciated your perspective. Stay active in your network.",
  },
  {
    id: 10,
    img: "https://randomuser.me/api/portraits/men/10.jpg",
    name: "Michael",
    time: { hours: 9, mins: 5 },
    text: "added you to his network. He's a recruiter in your field. It might be a good time to reach out.",
  },
  {
    id: 11,
    img: "https://randomuser.me/api/portraits/women/11.jpg",
    name: "Rebecca",
    time: { hours: 2, mins: 55 },
    text: "posted a new job in your field. It matches your experience well. Apply early for better chances.",
  },
  {
    id: 12,
    img: "https://randomuser.me/api/portraits/men/12.jpg",
    name: "Jason",
    time: { hours: 4, mins: 20 },
    text: "invited you to follow a company page. They're hiring and growing fast. Follow to stay in the loop.",
  },
  {
    id: 13,
    img: "https://randomuser.me/api/portraits/women/13.jpg",
    name: "Sophia",
    time: { hours: 8, mins: 15 },
    text: "reacted to your article. She found it insightful and relevant. Keep writing and sharing ideas.",
  },
  {
    id: 14,
    img: "https://randomuser.me/api/portraits/men/14.jpg",
    name: "LinkedIn Learning",
    time: { hours: 11, mins: 0 },
    text: "suggested a course on Data Visualization. Based on your interests and skills. Enroll to level up!",
  },
  {
    id: 15,
    img: "https://randomuser.me/api/portraits/men/15.jpg",
    name: "Chris",
    time: { hours: 0, mins: 10 },
    text: "sent you a message. He might want to collaborate. Open your inbox to respond now.",
  },
];

function showAll() {
  totaldata.map((i) => {
    document.getElementById("notifications").innerHTML += ` 
              <div class="child-notifications">
                <img style="width: 60px; height: 60px; margin-left: 15px; border-radius: 50px;" src="${i.img}" alt="img">
                <div class='sub-container'>
                   <p style="margin-top: 10px;"><strong>"${i.name}" : </strong>"${i.text}"</p>
                   <div class="sub-child">
                      <span>"${i.time.hours}:${i.time.mins}"</span>
                      <i style="margin-left:9px;" class="fa-solid fa-ellipsis"></i>
                    </div>
                 </div> 

                
              </div>
              <div class="borderLine"></div>
              `;
  });
}
showAll();

function jobportal(prop) {
  if (prop == "jobs") {
    document.querySelector(".parent-notification").innerHTML = ``;
    document.getElementById("for-jobs").innerHTML = ``;
    document.getElementById("for-jobs").innerHTML = `
        <div class="jobs-portal">
            <img style="width: 300px;" src="./notifi.jpg" alt="img">
             <h2>No new job notifications</h2>
             <p style="margin-top:20px;">When you receive new jobs updates, <br>notifications will appear here</p>
             <button style="padding: 10px; border-radius: 10px; font-weight: bold; margin-top:20px;">Explore more jobs</button>
        </div>`;
  } else if (prop == "all") {
    document.getElementById("for-jobs").innerHTML = ``;
    document.querySelector(
      ".parent-notification"
    ).innerHTML = `<div id="notifications"></div> 
 `;
    showAll();
  }
}

