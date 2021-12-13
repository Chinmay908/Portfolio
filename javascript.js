function changetheme() {
  var checkBox = document.getElementById("checkbox");
  var bdy = document.getElementsByTagName("body");
  var menu = document.getElementById("menu");
  var head = document.getElementsByTagName("h1");
  var input = document.getElementById("contact");
  var input1 = document.getElementsByTagName("input");
  var txtarea = document.getElementsByTagName("textarea");
  var footer1 = document.getElementsByClassName("footer");
  var contact = document.getElementById("contact");
  if (checkBox.checked == true) {
    bdy[0].style.backgroundColor = "#e5e5e5";
    menu.style.backgroundColor = "white";
    input.style.color = "black";
    contact.style.color = "black";
    head[0].style.color = "black";
    for (let i = 1; i <= 3; i++) {
      input1[i].style.backgroundColor = "#e5e5e5";
      input1[i].style.color = "black";
    }
    txtarea[0].style.backgroundColor = "#e5e5e5";
    txtarea[0].style.color = "black";
    footer1[0].style.backgroundColor = "white";
    footer1[0].style.color = "black";
  } else {
    bdy[0].style.backgroundColor = "#001219";
    menu.style.backgroundColor = "#073b4c";
    input.style.color = "white";
    head[0].style.color = "white";
    for (let i = 1; i <= 3; i++) {
      input1[i].style.backgroundColor = "#001219";
      input1[i].style.color = "white";
    }
    txtarea[0].style.backgroundColor = "#001219";
    txtarea[0].style.color = "white";
    footer1[0].style.backgroundColor = "#073b4c";
    footer1[0].style.color = "white";
  }
}

function project() {
  window.location = "#project";
}

function submitted() {
  alert("Thank You for your Feedback!!");
}

function showmenu() {
  var x = document.getElementById("navbar").style.display;
  if (x != "none") {
    var x = (document.getElementById("navbar").style.display = "block");
  }
  if (x == "none") {
    document.getElementById("navbar").style.display = "none";
  }
}
