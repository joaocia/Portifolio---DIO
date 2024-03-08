
function upDateProfileInfo(profileData) {

    const photo = document.getElementById ('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById("profile.name")
    name.innerText = profileData.name

    const profile = document.getElementById("profile.profile")
    profile.innerText = profileData.profile

    const location = document.getElementById("profile.location")
    location.innerText = profileData.location

    const whatsapp = document.getElementById("profile.whatsapp")
    whatsapp.innerText = profileData.whatsapp
    whatsapp.href = `tel:${profileData.whatsapp}`

    const mail = document.getElementById("profile.mail")
    mail.innerText = profileData.mail
    mail.href = `mail: ${profileData.mail}`

    


}

function updateSoftSkills(profileData) {
    const softSkills = document.getElementById ('profile.skills.softSkills')

    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}`).join('')
}

function updateHardSkills(profileData) {
    const hardSkills = document.getElementById ('profile.skills.hardSkills')

    hardSkills.innerHTML = profileData.skills.hardSkills
    .map(skill => `<li> <img src="${skill.logo}" alt="${skill.name}" title ="${skill.name}"> </li>`).join('')
}

function updateLanguages(profileData) {
    const languages = document.getElementById ('profile.languages')

    languages.innerHTML = profileData.languages
    .map(languages => `<li> ${languages}`).join('')
}

function updatePortfolio(profileData) {
    const portfolio = document.getElementById ('profile.portfolio')

    portfolio.innerHTML = profileData.portfolio.map(project => {
        return `
            <li>
                <h3 ${project.github ? 'class="github"' : ''}> ${project.name}</h3>
                <a href= "${project.url}" target="_blank">${project.url}</a>
            </li>  
        `
    }).join('')
}


(async () => {

    const profileData = await fetchProfileData()
    upDateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    updateLanguages(profileData)
    updatePortfolio(profileData)
    
})()