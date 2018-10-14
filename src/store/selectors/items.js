import { createSelector } from "reselect";

const getItems = state => state.firestore.ordered.items;
const getFilters = state => state.filter;

export const getVisibleItems = createSelector(
    [getItems, getFilters],
    (items, filter) => {
        if (items) {
            return items.filter(item => {
                const textMatch =
                    item.firstName.toLowerCase().includes(filter.text.toLowerCase()) ||
                    item.lastName.toLowerCase().includes(filter.text.toLowerCase());
                return textMatch;
            });
        } else {
            //blabla
        }
    }
);
