const URL = 'http://localhost:3001'

//GET
function basiqueGetAll(route) {
    return fetch(URL + '/API/' + route, {
        method: 'GET'
    }).then((res) => {
        if (res.status === 200) return res.json()
        else throw new Error('Invalid response')
    })
}

function basiqueGet(route, id) {
    return fetch(URL + '/API/' + route + '?id=' + id, {
        method: 'GET'
    }).then((res) => {
        if (res.status === 200) return res.json()
        else throw new Error('Invalid response')
    })
}

export function getAwards() {
    return basiqueGetAll('awards')
}

export function getKeywords() {
    return basiqueGetAll('keywords')
}

export function getTypes() {
    return basiqueGetAll('types')
}

export function getUsers() {
    return basiqueGetAll('users')
}

export function getUser(id) {
    return basiqueGet('users/details', id)
}

export function getGames() {
    return basiqueGetAll('games')
}

export function getGame(id) {
    return basiqueGet('games/details', id)
}

//POST
function basiquePost(route, data) {
    return fetch(URL + '/API/' + route, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then((res) => {
        if (res.status === 200) return res.json()
        else throw new Error('Invalid response')
    })
}

export function postNewGame(data) {
    return basiquePost('games', data)
}

export function postNewUser(data) {
    return basiquePost('users', data)
}

export function postNewRental(games, user) {
    const data = {
        games: games,
        user: user
    }
    return basiquePost('rentals', data)
}

//PUT
export function updateGame(data) {
    return fetch(URL + '/API/games', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then((res) => {
        if (res.status === 200) return res.json()
        else throw new Error('Invalid response')
    })
}

export function updateUser(data) {
    return fetch(URL + '/API/users', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then((res) => {
        if (res.status === 200) return res.json()
        else throw new Error('Invalid response')
    })
}
