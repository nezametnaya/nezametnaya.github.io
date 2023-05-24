document.addEventListener('DOMContentLoaded', () => {
    var tab1 =  document.querySelector('.tab1');
    var tab2 =  document.querySelector('.tab2');
    var tab3 =  document.querySelector('.tab3');
    var tabData1 = document.getElementById("tab_01");
    var tabData2 = document.getElementById("tab_02");
    var tabData3 = document.getElementById("tab_03");
    
    tab1.onclick = function() {
        tabData1.style.display = "block";
        tabData2.style.display = "none";
        tabData3.style.display = "none";
    }
    tab2.onclick = function() {
        tabData1.style.display = "none";
        tabData2.style.display = "block";
        tabData3.style.display = "none";
    }
    tab3.onclick = function() {
        tabData1.style.display = "none";
        tabData2.style.display = "none";
        tabData3.style.display = "block";
    }

    tabData1.style.display = "block";
    tabData2.style.display = "none";
    tabData3.style.display = "none";
});