function changetheme4() {
    var CheckBox1 = document.getElementById('checkbox');
    var menu4 = document.getElementById('menu');
    var info = document.getElementById('info');
    var head2 = document.getElementsByTagName('h2');
    var container = document.getElementById('containner');
    var footer = document.getElementsByClassName('footer');
    if (CheckBox1.checked == true) {
        menu4.style.backgroundColor = "white";
        info.style.backgroundColor = "white";
        info.style.color = "black";
        head2[0].style.color = "black";
        container.style.backgroundColor = "#e5e5e5";
        footer[0].style.backgroundColor = "white";
        footer[0].style.color="black";
    }
    else{
        menu4.style.backgroundColor = "#073b4c";
        info.style.backgroundColor = "#00060f";
        info.style.color = "white";
        head2[0].style.color = "white";
        container.style.backgroundColor = "#001219";
        footer[0].style.backgroundColor = "#073b4c";
        footer[0].style.color = "white";
    }
}
