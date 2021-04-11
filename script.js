var nav = document.body.querySelector(".nav");
var display = document.body.querySelector(".display");
var text = document.body.querySelector(".text");
var num = document.body.querySelector(".number");
var button = document.body.querySelector(".submit");

var list = [];
var pg = [
  {
    title: "Home",
    content: "Home"
  },
  {
    title: "About",
    content: "About",
  },
  {
    title: "View",
    content: "Notes"
  }
];

function validation() {
  var valEle = document.body.querySelector(".big");
  var username = document.body.querySelector(".username").value;
  if (username === "coolStudent123") {
    valEle.innerHTML = "Logged in";
  } else if (username !== "coolStudent123") {
    valEle.innerHTML = "Error!";
  }
}
 
document.body.querySelector(".login").addEventListener("click", function () {
  validation();
});

function renderList() {
  var listEle = document.body.querySelector(".list");
  listEle.innerHTML = "";
  
  for (var i = 0; i < list.length; i++) {
    var element = document.createElement("div");
    element.innerHTML = list[i];
    listEle.appendChild(element);
  }
}

function submit() {
  var first = document.body.querySelector(".text").value;
  var second = " "
  var third = document.body.querySelector(".number").value;
  var text = third + second + first
  if (first.length > 0) {
    list.push(text);
    document.body.querySelector(".doit").innerHTML=""
  }else{
    document.body.querySelector(".doit").innerHTML = "Enter more letters";
  }
  renderList();
}


for (var i = 0; i < pg.length; i++) {
  pageMaker(pg[i]);
}

function pageMaker(pg) {
  this.button = document.createElement("button");
  this.button.addEventListener("click", function () {
    writeStuff(pg.content, pg.title);
  });
  this.button.innerHTML = pg.title;
  nav.appendChild(button);
}

function home() {
  display.innerHTML="";
  var homeheading = document.createElement("h1");
  homeheading.innerHTML="Home";
  display.appendChild(homeheading);
  button.style.display = "none";
  text.style.display = "none";
  num.style.display = "none";
}

function about() {
  button.style.display = "none";
  text.style.display = "none";
  num.style.display = "none";
  display.innerHTML = "";
  var aboutheader = document.createElement("h1");
  aboutheader.innerHTML="About";
  display.appendChild(aboutheader);
  var aboutname = document.createElement("h3");
  aboutname.innerHTML="Luke Napier";
  display.appendChild(aboutname);
}

function view() {
  display.innerHTML = "";
  var viewheader = document.createElement("h1");
  viewheader.innerHTML = "Notes";
  display.appendChild(viewheader);
  button.style.display = "none";
  text.style.display = "none";
  num.style.display = "none";
  button.addEventListener("click", submit);
}

function writeStuff(stuff, pg) {
  if (pg == "Home") {
    home();
  } else if (pg == "About") {
    about();
  } else if (pg == "View"){
    view();
  }
}
renderList();
writeStuff(pg[0].content, "Home");