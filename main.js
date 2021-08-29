// DOM - document object model
// querySelector('.box') - object qaytaradi
// let box = document.querySelector('.box')
// querySelectorAll('.box') - Array qaytaradi
// let items = document.querySelectorAll('.item')
// box.style.background = myRandom()
// console.log(items);


// box.getAttribute('src') - src attributini qiymatini oladi
// let attrBox = box.getAttribute('src')
// let changeAttr = box.hasAttribute('src')

// console.log(changeAttr);

// function myRandom() {
//     let r = Math.round(Math.random() * 255)
//     let g = Math.round(Math.random() * 255)
//     let b = Math.round(Math.random() * 255)
//     return `rgb(${r},${g},${b})`
// }
// for (let i = 0; i < items.length; i++) {
//     const element = items[i];
//     element.style.background = myRandom()
// }

// const box = document.querySelector('.box'),
//     items = document.querySelectorAll('.item');

// if (box.hasAttribute('data-bg')) {
//     let attrBox = box.getAttribute('data-bg')
//     box.style.background = attrBox
// }
// for (let i = 0; i < items.length; i++) {
//     const element = items[i];
//     let attrBox = element.getAttribute('data-bg')
//     element.style.background = attrBox
// }
// box.addEventListener('mouseenter', function (){
//     box.style.width = '300px'
//     box.style.transition = '0.5s'
//     console.log(box);
// })
// box.addEventListener('mouseout', function (){
//     box.style.width = '200px'
//     box.style.transition = '0.5s'
//     console.log(box);
// })



// const box = document.querySelector('.box'),
//     items = document.querySelectorAll('.item');

// if (box.hasAttribute('data-bg')) {
//     let attrBox = box.getAttribute('data-bg')
//     box.style.background = attrBox
// }

// for (let i = 0; i < items.length; i++) {
    
//     items[i].addEventListener('dblclick', function () {
//         for (let k = 0; k < items.length; k++) {
//             const element = items[k];
//             items[k].classList.remove('active')
//         }
//         items[i].classList.add('active')
//     })
// }
// box.setAttribute('data-bg','blue')



const box = document.querySelector('.box'),
    items = document.querySelectorAll('.item'),
    texts = document.querySelector('.text');

if (box.hasAttribute('data-bg')) {
    let attrBox = box.getAttribute('data-bg')
    box.style.background = attrBox
}

for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click' , function () {
        for (let k = 0; k < items.length; k++) {
            const element = items[k];
            items[k].classList.remove('active')
        }
        items[i].classList.add('active')
    })
}



// for (let l = 0; l < text.length; l++) {
//     text[l].addEventListener('click', function () {
//         for (let j = 0; j < text.length; j++) {
//             const element = array[j];
//             text[j].classList.remove('white')
            
//         }
//         text[l].classList.add('.white')
//     })
// }








