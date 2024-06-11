document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const characterName = document.querySelector('input').value
    try{
        const response = await fetch(`https://smash-bros-characters.onrender.com/api/${characterName}`)
        const data = await response.json()

        console.log(data)
        document.getElementsByClassName('name').innerText = data.name
        document.getElementsByClassName('series').innerText = data.gameSeries
        document.getElementsByClassName('move').innerText = data.specialMove
    }catch(error){
        console.log(error)
    }
}