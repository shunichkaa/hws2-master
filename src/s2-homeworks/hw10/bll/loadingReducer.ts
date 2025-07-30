const initState = {
    isLoading: false,
}

type InitStateType = typeof initState

export const loadingReducer = (
    state: InitStateType = initState,
    action: LoadingActionType
): InitStateType => {
    switch (action.type) {
        case 'CHANGE_LOADING':
            return {
                ...state,
                isLoading: action.isLoading,
            }

        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})