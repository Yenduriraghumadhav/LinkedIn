function changeContent() {
//   document.getElementById("preferences-content").style.display = "block";
  document.querySelector(".right-container").innerHTML = ``;
  document.querySelector(".right-container").innerHTML = `<div class="main-parent">
        <div class="profile">
            <h2>Profile information</h2>
            <hr>
           <div class="Profile-container0"><p>Name, location, and industry</p><i class="fa-solid fa-arrow-right"></i></div>
           <div class="Profile-container0"><p>Personal demographic information</p><i class="fa-solid fa-arrow-right"></i></div>
           <div class="Profile-container0"><p>Verifications</p><i class="fa-solid fa-arrow-right"></i></div>
        </div>

        <div class="profile1">
           <h2>Display</h2> 
           <hr>
           <div class="Profile-container0"><p>Dark Mode</p><i class="fa-solid fa-arrow-right"></i></div>
        </div>
        <div class="general">
              <div>
                <h2>General preferences</h2>
                <hr>
                <div class="preferences"><p>Language</p><i class="fa-solid fa-arrow-right"></i></div>
                 <div class="preferences"><p>Content language</p><i class="fa-solid fa-arrow-right"></i></div>
                  <div class="preferences"><p>Autoplay videos</p><i class="fa-solid fa-arrow-right"></i></div>
                   <div class="preferences"><p>Sound effects</p><i class="fa-solid fa-arrow-right"></i></div>
                    <div class="preferences"><p>Showing profile photos</p><i class="fa-solid fa-arrow-right"></i></div>
                     <div class="preferences"><p>Preferred Feed View</p><i class="fa-solid fa-arrow-right"></i></div>
                      <div class="preferences"><p>People you unfollowed</p><i class="fa-solid fa-arrow-right"></i></div>
              </div>
        </div>


         <div class="Partners1">
           <h2>Partners & services</h2>
           <hr> 
           <div class="Profile-partner"><p>Microsoft</p><i class="fa-solid fa-arrow-right"></i></div>
        </div>
        <div class="account-details">
           <h2>Account management</h2>
           <hr>
           <div class="Hibernate"><p>Hibernate account</p><i class="fa-solid fa-arrow-right"></i></div>
            <div class="Hibernate"><p>Close account</p><i class="fa-solid fa-arrow-right"></i></div>
        </div>
    </div>`;
}


function newcontent(){
   document.querySelector(".right-container").innerHTML = ``;
  document.querySelector(".right-container").innerHTML  =`<div class="signin-security">
    <div class="securitys">
        <h2>Account access</h2>
        <hr>
        <div class="security-details"><p>Email addresses</p><i class="fa-solid fa-arrow-right"></i></div>
         <div class="security-details"><p>Phone numbers</p><i class="fa-solid fa-arrow-right"></i></div>
          <div class="security-details"><p>Change password</p><i class="fa-solid fa-arrow-right"></i></div>
           <div class="security-details"><p>Passkeys</p><i class="fa-solid fa-arrow-right"></i></div>
            <div class="security-details"><p>Where you're signed in</p><i class="fa-solid fa-arrow-right"></i></div>
            <div class="security-details"><p>Devices that remember your password</p><i class="fa-solid fa-arrow-right"></i></div>
            <div class="security-details"><p>Two-step verification</p><i class="fa-solid fa-arrow-right"></i></div>
    </div>
  </div>`;
}


function visiblecontent(){
 document.querySelector(".right-container").innerHTML = ``;
  document.querySelector(".right-container").innerHTML  = 
  `<div class="Visibility-details">
    <div class="profile-network">
         <h2 style="margin-left=15px;">Visibility of your profile & network</h2>
         <hr>
         <div class="sub-profile"><p>Profile viewing options</p><i class="fa-solid fa-arrow-right"></i></div>
          <div class="sub-profile"><p>Page visit visibility</p><i class="fa-solid fa-arrow-right"></i></div>
          <div class="sub-profile"><p>Edit your public profile</p><i class="fa-solid fa-arrow-right"></i></div>
          <div class="sub-profile"><p>Who can see or download your email address</p><i class="fa-solid fa-arrow-right"></i></div>
          <div class="sub-profile"><p>Who can see your connections</p><i class="fa-solid fa-arrow-right"></i></div>
          <div class="sub-profile"><p>Who can see members you follow</p><i class="fa-solid fa-arrow-right"></i></div>
          <div class="sub-profile"><p>Who can see your last name</p><i class="fa-solid fa-arrow-right"></i></div>
          <div class="sub-profile"><p>Representing your organizations and interests</p><i class="fa-solid fa-arrow-right"></i></div>
          <div class="sub-profile"><p>Page owners exporting your data</p><i class="fa-solid fa-arrow-right"></i></div>
          <div class="sub-profile"><p>Profile discovery and visibility off LinkedIn</p><i class="fa-solid fa-arrow-right"></i></div>
          <div class="sub-profile"><p>Profile discovery using email address</p><i class="fa-solid fa-arrow-right"></i></div>
          <div class="sub-profile"><p>Profile discovery using phone number</p><i class="fa-solid fa-arrow-right"></i></div>
          <div class="sub-profile"><p>Blocking</p><i class="fa-solid fa-arrow-right"></i></div>
    </div>
  </div>`;

}

function private(){
  document.querySelector(".right-container").innerHTML = ``;
   document.querySelector(".right-container").innerHTML = `<div class="data-privacy">
    <div class="your-data">
        <h2>How LinkedIn uses your data</h2>
        <div class="dataa"><p>How LinkedIn uses your data</p><i class="fa-solid fa-arrow-right"></i></div>
        <div class="dataa"><p>Get a copy of your data</p><i class="fa-solid fa-arrow-right"></i></div>
        <div class="dataa"><p>Search history</p><i class="fa-solid fa-arrow-right"></i></div>
        <div class="dataa"><p>Personal demographic information</p><i class="fa-solid fa-arrow-right"></i></div>
        <div class="dataa"><p>Social, economic, and workplace research</p><i class="fa-solid fa-arrow-right"></i></div>
        <div class="dataa"><p>Data for Generative AI Improvement</p><i class="fa-solid fa-arrow-right"></i></div>
    </div>
     <hr>
    <div class="Invitationss">
      <h2>Who can reach you</h2>
      <div class="data-reach"><p>Invitations to connect</p><i class="fa-solid fa-arrow-right"></i></div>
      <div class="data-reach"><p>Invitations from your network</p><i class="fa-solid fa-arrow-right"></i></div>
      <div class="data-reach"><p>Messages</p><i class="fa-solid fa-arrow-right"></i></div>
      <div class="data-reach"><p>Research invites</p><i class="fa-solid fa-arrow-right"></i></div>
      <div class="data-reach"><p>LinkedIn promotions</p><i class="fa-solid fa-arrow-right"></i></div>
    </div>
    <hr>
    <div class="experience">
      <h2>Who can reach you</h2>
      <div class="Messaging"><p>Invitations to connect</p><i class="fa-solid fa-arrow-right"></i></div>
      <div class="Messaging"><p>Invitations from your network</p><i class="fa-solid fa-arrow-right"></i></div>
      <div class="Messaging"><p>Messages</p><i class="fa-solid fa-arrow-right"></i></div>
      <div class="Messaging"><p>Research invites</p><i class="fa-solid fa-arrow-right"></i></div>
      <div class="Messaging"><p>LinkedIn promotions</p><i class="fa-solid fa-arrow-right"></i></div>
    </div>
    <hr>
    <div class="applications">
      <h2>Other applications</h2>
      <div class="permitted"><p>Permitted services</p><i class="fa-solid fa-arrow-right"></i></div>
       <div class="permitted"><p>Microsoft Word</p><i class="fa-solid fa-arrow-right"></i></div>
    </div>
  </div>`;
}