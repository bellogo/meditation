const html = document.querySelector('html');
const waves = document.querySelector('#waves');
const ulContainer = document.querySelector('.ulContainer');
const thirdSection = document.querySelector('.thirdSection');

const resizePage = () => {
    if (window.innerWidth > 768) {
        let defaultFontSize = 12;
        let defaultScreenSize = 768;
        let currentScreenSize = window.innerWidth;
        let fontIncreaseRate = defaultFontSize / defaultScreenSize;
        let newFontSize = ((currentScreenSize - defaultScreenSize) * fontIncreaseRate) + defaultFontSize;
        newFontSize += 'px'
        html.style.fontSize = newFontSize;
    }
    if (window.innerWidth < 768) {
        html.style.fontSize = "15px";
        let defaultFontSize = 15;
        let defaultScreenSize = 768;
        let currentScreenSize = window.innerWidth;
        let fontdecreaseRate = defaultFontSize / defaultScreenSize;
        let newFontSize = defaultFontSize - ((defaultScreenSize - currentScreenSize) * fontdecreaseRate);
        newFontSize += 'px'
        thirdSection.style.fontSize = newFontSize;
    }
}
window.addEventListener('resize', () => {
    resizePage();
})

window.addEventListener("load", resizePage());

waves.addEventListener("click", () => {
    ulContainer.classList.toggle('navactive');
})