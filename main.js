let jumboIndex = 0;
const jumboDescTxt = document.getElementById("jumbo-desc");

changeTextIndex()
setInterval(changeTextIndex, 10000);



function changeTextIndex() {
    jumboDescTxt.innerHTML = "";
    if (jumboIndex >= 2) {
        jumboIndex = 0;
    }

    jumboDescTxt.innerHTML = jumboBodyText[jumboIndex];
    jumboIndex++;

}

