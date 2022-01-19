let instructionNoteAppEndpoints = {

    saveOrUpdateInstructionNote: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false,
        },
        url: '/api/instructionNote/saveOrUpdateInstructionNote',
        type: 'POST'
    },

    getInstructionNoteDTOByID: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/instructionNote/getInstructionNoteDTOByID',
        type: 'GET'
    },

    getInstructionNoteDTOByCheckupID: {
        headerParam: {
            showLoading: true,
            showToast: true,
            skipAuth: false
        },
        url: '/api/instructionNote/getInstructionNoteDTOByCheckupID',
        type: 'GET'
    },

};

export default instructionNoteAppEndpoints;