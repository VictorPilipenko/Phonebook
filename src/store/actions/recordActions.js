export const createRecord = (record) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {

        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;

        firestore.collection('records').add({
            ...record,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({
                type: 'CREATE_RECORD',
                record
            });
        }).catch((err) => {
            dispatch({
                type: 'CREATE_RECORD_ERROR',
                err
            });
        })
    }
};