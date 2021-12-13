function changetheme3() {
    var CheckBox1 = document.getElementById('checkbox');
    var bdy3 = document.getElementsByTagName('body');
    var menu3 = document.getElementById('menu');
    var head2 = document.getElementsByTagName('h1');
    var footer3 = document.getElementsByClassName('footer');
    var coffee = document.getElementById('coffee');
    var vowel = document.getElementById('vowel');
    var calci = document.getElementById('calci');
    var github = document.getElementById('github');
    var parentdiv1 = document.getElementById('parentdiv1');
    var parentdiv2 = document.getElementById('parentdiv2');
    if (CheckBox1.checked == true) {
        menu3.style.backgroundColor = "white";
        bdy3[0].style.backgroundColor = "#e5e5e5";
        head2[0].style.color = "black";
        footer3[0].style.backgroundColor = "white";
        footer3[0].style.color = "black";
        coffee.style.backgroundColor="white";
        vowel.style.backgroundColor = "white";
        calci.style.backgroundColor = "white";
        github.style.backgroundColor = "white";
        parentdiv1.style.color = "black";
        parentdiv2.style.color = "black";
    }
    else {
        bdy3[0].style.backgroundColor = "#001219";
        menu3.style.backgroundColor = "#073b4c";
        head2[0].style.color = "white";
        footer3[0].style.backgroundColor = "#073b4c";
        footer3[0].style.color = "white";
        coffee.style.backgroundColor = "#00060f";
        vowel.style.backgroundColor = "#00060f";
        calci.style.backgroundColor = "#00060f";
        github.style.backgroundColor = "#00060f";
        parentdiv1.style.color = "white";
        parentdiv2.style.color = "white";
    }
}