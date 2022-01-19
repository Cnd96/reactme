import {v4 as uuidv4, validate as uuidValidate} from 'uuid'

export const getUUID = () => {
    return uuidv4();
};

export const isValidUUID = (str) => {
    return uuidValidate(str);
};