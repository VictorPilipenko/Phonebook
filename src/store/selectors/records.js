import { createSelector } from "reselect";

const getRecords = state => state.firestore.ordered.records;
const getFilters = state => state.filter;

export const getVisibleRecords = createSelector(
    [getRecords, getFilters],
    (records, filter) => {
        if (records) {
            return records.filter(record => {
                const textMatch =
                    record.firstName.toLowerCase().includes(filter.text.toLowerCase()) ||
                    record.lastName.toLowerCase().includes(filter.text.toLowerCase());
                return textMatch;
            });
        } else {
            //blabla
        }
    }
);
