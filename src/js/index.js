const html = document.querySelector('html');

window.addEventListener('resize', () => {
    if (window.innerWidth > 0) {
        let defaultFontSize = 12;
        let defaultScreenSize = 768;
        let currentScreenSize = window.innerWidth;
        let fontIncreaseRate = defaultFontSize / defaultScreenSize;
        let newFontSize = ((currentScreenSize - defaultScreenSize) * fontIncreaseRate) + defaultFontSize;
        newFontSize += 'px'
        html.style.fontSize = newFontSize;
    }
})
