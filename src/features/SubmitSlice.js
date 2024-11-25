export function submitReducer(state = resultsInitialState, action) {
    if (action.type === "SUBMIT") {
        return {
            ...state,
            popular: action.payload.popular.results,
            horror: action.payload.horror.results,
            history: action.payload.history.results,
            videos: action.payload.videos?.results || []
        }
    }

    return state;
}

export const resultsInitialState = {
    popular: [

    ],
    horror: [

    ],
    history: [

    ],
    videos: [

    ]
}

export function selectSubmit(state) {
    return state.submit.popular;
}

export function selectSubmitHorror(state) {
    return state.submit.horror;
}

export function selectSubmitHistory(state) {
    return state.submit.history;
}

export function selectSubmitVideos(state) {
    return state.submit.videos;
}