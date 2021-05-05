document.addEventListener('DOMContentLoaded', (event) => {
    try{
        if(document.getElementById("progress").innerHTML == "0") {
            document.getElementById("g1").classList.add("unclickable");
            document.getElementById("l2").classList.add("unclickable");
            document.getElementById("g2").classList.add("unclickable");
        }
        if(document.getElementById("progress").innerHTML == "25") {
            document.getElementById("l2").classList.add("unclickable");
            document.getElementById("g2").classList.add("unclickable");
        }
        if(document.getElementById("progress").innerHTML == "50") {
            document.getElementById("g2").classList.add("unclickable");
        }
    } catch {}
});