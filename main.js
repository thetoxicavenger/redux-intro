

// action creator
const addPlayers = players => {
    return {
        type: 'ADD_PLAYERS',
        players
    }
}

// store initial state
const initialState = {
    players: []
}
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_PLAYERS':
            return {
                ...state,
                players: [
                    ...state.players,
                    action.players
                ]
            }
        default:
            return state;
    }
}

const store = Redux.createStore(reducer)

const addPlayersButton = document.getElementById('addPlayersButton')
addPlayersButton.addEventListener('click', () => {
    store.dispatch(
        addPlayers(players)
    )
})

store.subscribe(() => generatePlayerHTML(players))

function generatePlayerHTML(playersArr) {
    const playersList = document.getElementById('playersList')
    playersArr.forEach(player => {
        const playerListItem = document.createElement('li')
        playerListItem.innerText = `${player.firstName} ${player.lastName}`
        playersList.appendChild(playerListItem)
    });
}



console.log(Redux)