document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const characterName = document.querySelector('input').value
    try{
        const response = await fetch(`https://smash-bros-characters.onrender.com/api/${characterName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('span.name').innerText = data.name
        document.querySelector('span.series').innerText = data.gameSeries
        document.querySelector('span.move').innerText = data.specialMove
    }catch(error){
        console.log(error)
    }
}