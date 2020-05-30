const html = document.querySelector('html');

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
} 
window.addEventListener('resize', () => {
    resizePage();
})

window.addEventListener("load", resizePage());
