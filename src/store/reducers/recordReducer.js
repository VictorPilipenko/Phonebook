const initState = {
    records: [
        {
            id: '0',
            phoneNumber: '+380502712401',
            lastName: 'Pylypenko',
            firstName: 'Viktor',
            company: 'best company',
            email: 'thejustvic@gmail.com',
            photo: 'https://www.imgworlds.com/wp-content/themes/IMG/img/phase3/welcome/trex.png'
        }
    ]
}

const recordReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_RECORD':
            console.log('created record', action.record)
            return state;
        case 'CREATE_RECORD_ERROR':
            console.log('created record error', action.err)
            return state;
        default:
            return state;
    }
}

export default recordReducer