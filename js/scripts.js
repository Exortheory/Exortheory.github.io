function openTab(tabNro) {
    var i;
    var x = document.getElementsByClassName("tab-content");
    
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }

    document.getElementById(tabNro).style.display = "block";  
}