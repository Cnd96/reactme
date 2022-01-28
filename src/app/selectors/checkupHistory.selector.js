import { createSelector } from 'reselect';

export const selectCheckupHistory = (state) => state.checkupHistory.checkupHistory;

export const selectCheckupHistoryFullData = createSelector(
    [selectCheckupHistory],
    (checkupHistory) => {
        return checkupHistory.checkupHistoryFullData;
    }
);

export const selectTestAllTypes = createSelector(
    [selectCheckupHistory],
    (checkupHistory) => {
        return checkupHistory.testAllTypes;
    }
);

// will return full history array
export const selectAllCheckupHistoryDetails = createSelector(
    [selectCheckupHistoryFullData, selectTestAllTypes],
    (checkupHistoryFullData, testAllTypes) => {
        let newArray = [];
        testAllTypes.map(testType => {
            Object.keys(checkupHistoryFullData[testType]).map(name => {
                checkupHistoryFullData[testType][name].map(checkupData => {
                    newArray.push(checkupData);
                });
            })
        })
        return newArray;
    }
);

// will return unique history years
export const selectAllHistoryYears = createSelector(
    [selectAllCheckupHistoryDetails],
    (allCheckupHistoryDetails) => {
        let historyYears = [];
        allCheckupHistoryDetails.map(checkupHistoryDetail => {
            const checkupYear = new Date(checkupHistoryDetail.checkupDate).getFullYear();
            const found = historyYears.find(year => year === checkupYear);
            if (!found) {
                historyYears.push(checkupYear)
            }
        });
        return historyYears;
    }
);

export const selectCheckupHistoryBycode = code => createSelector(
    [selectAllCheckupHistoryDetails],
    (allCheckupHistoryDetails) => {
        return allCheckupHistoryDetails.filter(checkupHistoryDetail => checkupHistoryDetail.checkupCode === code);
    }
);

export const selectCheckupDatesByYear = year => createSelector(
    [selectAllCheckupHistoryDetails],
    (allCheckupHistoryDetails) => {
        const allDatesByYears =  allCheckupHistoryDetails.filter(checkupHistoryDetail => new Date(checkupHistoryDetail.checkupDate).getFullYear() === year);
        let datesAndCodeByYear = [];
        allDatesByYears.map(dataByDate => {
            const found = datesAndCodeByYear.find(data => data.checkupDate === dataByDate.checkupDate );
            if (!found) {
                datesAndCodeByYear.push({ 'checkupDate': dataByDate.checkupDate, 'checkupCode': dataByDate.checkupCode })
            }
        });
        return datesAndCodeByYear;
    }
);