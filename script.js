const LinksSocialMedia= {
    github: "joaovictor333",
    instagram: "victo_217"
}
function changeSocialMediaLinks(){
    for(let li of SocialLinks.children){
        const social = li.getAttribute('class')

        li.children[0].href = `https://${social}.com/$
        {LinksSocialMedia[social]}`
    }
   /* document.getElementById("userName").
    textContent = 'Oliveira'
    userName.textContent = "Victor"*/
}
changeSocialMediaLinks()

function getGitHubProfileInfos(){
    const url = `https://api.github.com/users/$
    {LinksSocialMedia.github}`

    fetch(url)
    .then(response => response.json())
    .then(data => {
        //userName.textContent = data.name
        //userBio.textContent = data.bio
        //userLink.textContent = data.html_url
    })
}
getGitHubProfileInfos()
//const github = "joaovictor333"
//const instagram = "victo_217"

//function showMeSomething(){
    //alert(link.github)
//}



 //camelCase // linksRedesSocial
 //PascalCase // LinksRedesSocial
 //snake_case // links_redes_social