const html = document.querySelector('html');
const waves = document.querySelector('#waves');
const ulContainer = document.querySelector('.ulContainer')

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
    }
}
window.addEventListener('resize', () => {
    resizePage();
})

window.addEventListener("load", resizePage());

waves.addEventListener("click", () => {
    ulContainer.classList.toggle('navactive');
})