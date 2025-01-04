

document.addEventListener("DOMContentLoaded", function() {
    // const donateButton = document.getElementById("donatebtn");
    const programButton = document.getElementById("programbtn");
    const eventButton = document.getElementById("eventbtn");
    const volunteerButton = document.getElementById("vnbtn");
    const aboutButton = document.getElementById("aboutUs");
    const donateButtonScroll = document.getElementById('forscroll');
    const donateButtonScroll1 = document.getElementById('forscroll1');

    const container = document.getElementsByClassName('container')[0];
    const news = document.getElementsByClassName('news')[0];
    const volunteer = document.getElementsByClassName('volunteer')[0];
    const about = document.getElementsByClassName('about')[0];
    const about1 = document.getElementsByClassName('about1')[0];
    const footer = document.getElementsByClassName('f1')[0];
  
  
    programButton.addEventListener("click", function() {
      container.scrollIntoView({ behavior: 'smooth' });
    });
  
    eventButton.addEventListener("click", function() {
      news.scrollIntoView({ behavior: 'smooth' });
    });
  
    volunteerButton.addEventListener("click", function() {
      volunteer.scrollIntoView({ behavior: 'smooth' });
    });
  
    aboutButton.addEventListener("click", function() {
      footer.scrollIntoView({ behavior: 'smooth' });
    });
  
    donateButtonScroll.addEventListener("click", function() {
      about.scrollIntoView({ behavior: 'smooth' });
    });
  
    donateButtonScroll1.addEventListener("click", function() {
      about1.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const donateButton = document.getElementById("donatebtn");
  
    const programs = document.getElementsByClassName('container')[0];
  
  
    donateButton.addEventListener("click", function() {
      programs.scrollIntoView({ behavior: 'smooth' });
    });
  
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const about = document.getElementById("about Us");
    const footer = document.getElementsByClassName('f1')[0];
  
    about.addEventListener("click", function() {
      footer.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  
  document.addEventListener("DOMContentLoaded", function() {
    const donateButton = document.getElementById("programbtn");
  
    const programs = document.getElementsByClassName('container')[0];
  
  
    donateButton.addEventListener("click", function() {
      programs.scrollIntoView({ behavior: 'smooth' });
    });
  
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const donateButton = document.getElementById("eventbtn");
  
    const programs = document.getElementsByClassName('news')[0];
  
  
    donateButton.addEventListener("click", function() {
      programs.scrollIntoView({ behavior: 'smooth' });
    });
  
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const donateButton = document.getElementById("vnbtn");
  
    const programs = document.getElementsByClassName('volunteer')[0];
  
    donateButton.addEventListener("click", function() {
      programs.scrollIntoView({ behavior: 'smooth' });
    });
  
  });
  
  
  document.addEventListener("DOMContentLoaded", function() {
    const donateButton = document.getElementById('forscroll');
  
    const programs = document.getElementsByClassName('about')[0];
  
    donateButton.addEventListener("click", function() {
      programs.scrollIntoView({ behavior: 'smooth' });
    });
  
  });
  
  
  document.addEventListener("DOMContentLoaded", function() {
    const donateButton = document.getElementById('forscroll1');
  
    const programs = document.getElementsByClassName('about1')[0];
  
    donateButton.addEventListener("click", function() {
      programs.scrollIntoView({ behavior: 'smooth' });
    });
  
  });
  