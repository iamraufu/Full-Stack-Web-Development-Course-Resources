function findUser(){
    fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {
        document.getElementById('name').innerText = 
        `
            Hi My name is ${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}
            I Live in ${data.results[0].location.city} ${data.results[0].location.state} ${data.results[0].location.country}
        `
    })
}
setInterval(()=> findUser(), 3000 )