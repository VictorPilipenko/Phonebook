export const filterText = (text = '') => {
    return {
        type: 'FILTER_TEXT',
        payload: text
    }
};