
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




(async () => {

    const profileData = await fetchProfileData()
    upDateProfileInfo(profileData)
    updateSoftSkills(profileData)
    
})()