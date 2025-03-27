function openTab(evt, tabNro) {
    var i, x, tablinks;
    
    x = document.getElementsByClassName("tab-content");
    
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }

    tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

    document.getElementById(tabNro).style.display = "block";
    evt.currentTarget.className += " active";
}