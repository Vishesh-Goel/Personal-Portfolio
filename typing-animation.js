//for the animation of the my attributes in intro section.

const animatedElement = document.getElementById('type-animation')

const elementAttributes = ['Front-end Web Developer  ', 'Student  ', 'Noob Gamer  ']

function typeAnimation(text){
    for (let i = 0; i < text.length; i++) {
        setTimeout(()=>{
            animatedElement.textContent += text[i]
        }, i*150)
    }

    setTimeout(()=>{
        animatedElement.textContent = ''
        typeAnimation(elementAttributes[(elementAttributes.indexOf(text) + 1) % elementAttributes.length])
    }, text.length*200)
}

typeAnimation(elementAttributes[0])