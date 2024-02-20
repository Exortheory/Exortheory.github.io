const tabsContainer = document.querySelector(".grid-container");
const tabsList = tabsContainer.querySelector(".sec-ul");
const tabButtons = tabsList.querySelectorAll(".sec-a");
const tabPanels = tabsContainer.querySelectorAll(".tabs__panels > div");

tabButtons.forEach((tab, index) => {
    if (index === 0) {
        // we'll add something here
    } else {
        tabPanels[index].setAttribute("hidden", "");
    }
});