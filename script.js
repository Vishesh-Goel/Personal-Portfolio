let nav = document.querySelector("nav")
let navListItems = nav.lastElementChild.querySelectorAll("a")
let themeButton = document.querySelector(".theme").firstElementChild
let mainText1 = document.querySelector('.intro-section')
let mainText2 = document.getElementById('about-me')
let footer = document.querySelector("footer")


function toggleFunction(){
    themeButton.classList.toggle("light-theme")
    themeButton.classList.toggle("dark-theme")
    if (themeButton.classList.contains("dark-theme")){
        themeButton.removeEventListener("click", toggleFunction)
        themeButton.addEventListener("click", lightThemeFunction)
    }
    else if (themeButton.classList.contains("light-theme")){
        themeButton.removeEventListener("click", toggleFunction)
        location.reload()  //to refresh the light-theme effects
    }
}


//THIS WILL RUN FOR LIGHT-THEME
const lightThemeFunction = () => {
    document.body.style.background = "white"
    nav.style.backgroundColor = "var(--dark-color)"
    nav.style.color = "var(--light-color)"
    navListItems.forEach (e => e.style.color = "var(--light-color)")
    footer.style.color = "var(--dark-color)"
    themeButton.innerText = "Click here again  for dark theme"
    themeButton.style.backgroundColor = "black"
    themeButton.style.color = "var(--light-color)"

    //Main
    if (mainText1){
        mainText1.children[0].style.color = "var(--dark-color)"
        mainText1.children[2].style.color = "var(--dark-color)"
    }

    if (mainText2){
        mainText2.childNodes[3].style.color = "var(--dark-color)"
        mainText2.childNodes[5].style.color = "var(--dark-color)"
    }


    //skills
    if(document.getElementById("skills")){
        let skills_h3 = document.querySelector("h3")
        let skillsText = document.getElementById("skills").querySelectorAll("div")

        skills_h3.style.color = "var(--dark-color)"
        for (let i = 0; i < skillsText.length; i++) {
            if (i%2 != 0){
                skillsText.forEach (e => e.style.color = "var(--dark-color)")
            }
        }
    }


    //projects
    if (document.getElementById("projects")){
        let projects_h4 = document.querySelector("h4")
        projects_h4.style.color = "var(--dark-color)"
    }


    //contact
    if (document.querySelector("form")){
        let contactForm = document.querySelector("form").childNodes
        let contact_h3 = document.querySelectorAll("h3") 
        let myDetails = document.getElementById("my-details")

        for (let i = 0; i < contactForm.length; i++) {
            if (i%2 != 0){
                contactForm[i].style.backgroundColor = "var(--dark-color)"
                contactForm[i].style.color = "var(--light-color)"
            }
        }
        contact_h3.forEach (e => e.style.color = "var(--dark-color)")

        myDetails.querySelectorAll("p").forEach (e => e.style.color = "var(--dark-color)")
    }

    //if again the button is click, then: 
    themeButton.removeEventListener("click", lightThemeFunction)
    themeButton.addEventListener("click", toggleFunction)
}

themeButton.addEventListener("click", lightThemeFunction);