let fitnessNoteAppEndpoints = {

    saveOrUpdateFitnessNote: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false,
        },
        url: '/api/fitnessNote/saveOrUpdateFitnessNote',
        type: 'POST'
    },

    getFitnessNoteDTOByID: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/fitnessNote/getFitnessNoteDTOByID',
        type: 'GET'
    },

};

export default fitnessNoteAppEndpoints;