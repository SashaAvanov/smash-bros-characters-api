const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')

app.use(cors())

const characters = {
    'captain falcon': {
        'name': 'Captain Falcon',
        'gameSeries': 'F-Zero',
        'specialMove': 'raptor boost'
    },
    'jigglypuff': {
        'name': 'Jigglypuff',
        'gameSeries': 'Pokemon',
        'specialMove': 'rest'
    },
    'fox': {
        'name': 'Fox',
        'gameSeries': 'Starfox',
        'specialMove': 'shine'
    },
    'falco': {
        'name': 'Falco',
        'gameSeries': 'Starfox',
        'specialMove': 'shine'
    },
    'marth': {
        'name': 'Marth',
        'gameSeries': 'Fire Emblem',
        'specialMove': 'dolphin slash'
    },
    'sheik': {
        'name': 'Sheik',
        'gameSeries': 'The Legend of Zelda',
        'specialMove': 'needle'
    },
    'peach': {
        'name': 'Peach',
        'gameSeries': 'Super Mario Bros.',
        'specialMove': 'turnip'
    },
    'unknown': {
        'name': 'unknown',
        'gameSeries': 'unknown',
        'specialMove': 'unknown'
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res) => {
    const characterName = req.params.name.toLowerCase()
    if (characters[characterName]) {
        res.json(characters[characterName])
    } else {
        res.json(characters['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`This api is now running on port ${PORT}`)
})