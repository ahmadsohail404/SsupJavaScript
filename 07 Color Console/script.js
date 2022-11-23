const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");
const center = document.querySelector(".center");

// console.log(window.getComputedStyle(red).backgroundColor);

const getBGColor = (selectedColor) => {
    return (window.getComputedStyle(selectedColor).backgroundColor);
}

// var color = getBGColor(pink);

// pink.addEventListener('mouseenter', () => {
//     center.style.background = color;
// })

const magicColorChanger = (element, color) => {
    return element.addEventListener('mouseenter', () => {
        center.style.background = color;
    })
}

magicColorChanger(orange, getBGColor(orange));
magicColorChanger(cyan, getBGColor(cyan));
magicColorChanger(violet, getBGColor(violet));
magicColorChanger(red, getBGColor(red));
magicColorChanger(pink, getBGColor(pink));