export const createItem = (item) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {

        const firestore = getFirestore();
        firestore.collection('items').add({
            ...item,
            authorFirstName: '',
            authorLastName:'',
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({
                type: 'CREATE_ITEM',
                item
            });
        }).catch((err) => {
            dispatch({
                type: 'CREATE_ITEM_ERROR',
                err
            });
        })
    }
};