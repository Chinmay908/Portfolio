function changetheme2(){
    var CheckBox = document.getElementById('checkbox');
    var abt = document.getElementById("about");
    var bdy2 = document.getElementsByTagName('body');
    var menu2 = document.getElementById('menu');
    var head2 = document.getElementsByTagName('h1');
    var head3 = document.getElementsByTagName('h2');
    var head4 = document.getElementsByTagName('h3');
    var footer2 = document.getElementsByClassName('footer');
    if (CheckBox.checked == true) {
        menu2.style.backgroundColor = "white";
        abt.style.backgroundColor="white";
        abt.style.color = "black";
        bdy2[0].style.backgroundColor = "#e5e5e5";
        head2[0].style.color = "black";
        head3[0].style.color = "black";
        head4[0].style.color = "black";
        footer2[0].style.backgroundColor = "white";
        footer2[0].style.color = "black";
    }
    else{
        bdy2[0].style.backgroundColor = "#001219";
        menu2.style.backgroundColor = "#073b4c";
        abt.style.backgroundColor = "#00060f";
        abt.style.color = "white";
        head2[0].style.color = "white";
        head3[0].style.color = "white";
        head4[0].style.color = "white";
        footer2[0].style.backgroundColor = "#073b4c";
        footer2[0].style.color = "white";
    }
}