function changePageTopic (topic) {
  // let menuButton = document.getElementById(topic);
  let pageTopic = document.getElementById("pageTopic");
  if (pageTopic) {
    pageTopic.innerText = topic;
    openMenu("menu-on");
  }
  else {
   let newPage = window.open ("bookshelf.html", "_self");
   let newTopic = newPage.getElementById("pageTopic");
   newTopic.innerText = topic;
   openMenu("menu-on");
  }
}

function openMenu (id) {
  let menuBar = document.getElementById ("menu-bar");
  let button = document.getElementById (id);
  let pageBox = document.getElementById ("page-box");

  if (id == "menu-off") {
    menuBar.style.opacity = "1";
    menuBar.style.transform = "translateY(0)";
    pageBox.style.marginTop = "80px";
    button.id = "menu-on";
  }
  else {
    menuBar.style.opacity = "0";
    menuBar.style.transform = "translateY(-10)";
    pageBox.style.marginTop = "20px";
    button.id = "menu-off";
  }
}