<button onclick="togglediv('item')">Toggle div</button>
<div id="item">div</div>

function togglediv(id) {
    var div = document.getElementById(id);
    div.style.display = div.style.display == "none" ? "block" : "none";
}


var sidebar = document.querySelector(".sidebar");
