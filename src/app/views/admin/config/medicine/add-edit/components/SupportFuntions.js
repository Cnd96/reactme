export const getCommaSeparatedVales = (dataArray, keyValue) => {
    let stringVales = '';
    dataArray.forEach(element => {
        stringVales = stringVales.concat(element[keyValue]).concat(',');
    });

    return stringVales.slice(0, -1);
};

export const getStringArrayVales = (dataArray, keyValue) => {
    let stringVales = [];
    dataArray.forEach(element => {
        stringVales.push(element[keyValue]);
    });

    return stringVales;
};