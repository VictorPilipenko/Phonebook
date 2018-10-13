const initState = {
    items: [
        {
            id: '1',
            phoneNumber: '123',
            lastName: 'vic',
            firstName: 'mic',
            company: 'best company',
            email: 'vic@mic.com',
            photo: 'https://www.imgworlds.com/wp-content/themes/IMG/img/phase3/welcome/trex.png'
        },
        {
            id: '2',
            phoneNumber: '123',
            lastName: 'vic',
            firstName: 'mic',
            company: 'best company',
            email: 'vic@mic.com',
            photo: 'https://www.imgworlds.com/wp-content/themes/IMG/img/phase3/welcome/trex.png'
        }
    ]
}

const itemReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_ITEM':
        console.log('created item', action.item)
    }
    return state
}

export default itemReducer