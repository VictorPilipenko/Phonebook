const filterReducerDefaultState = {
    text: ''
};

export default (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'FILTER_TEXT':
            return {
                ...state,
                text: action.payload
            };
        default:
            return state;
    }
}