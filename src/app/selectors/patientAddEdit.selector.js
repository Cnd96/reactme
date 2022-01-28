import { createSelector } from 'reselect';

export const selectPatient = (state) => state.patient.patientAddEdit;

export const selectPatientAddEditFormData = createSelector(
    [selectPatient],
    (patient) => {
        return patient.formData;
    }
);

export const selectPatientAddEditData = createSelector(
    [selectPatient],
    (patient) => {
        return patient.patient;
    }
);

export const selectIsFirstVisit = createSelector(
    [selectPatientAddEditData],
    (patientAddEditData) => {
        return patientAddEditData.isFirstVisit;
    }
);

export const selectIsDeceased = createSelector(
    [selectPatientAddEditData],
    (patientAddEditData) => {
        return patientAddEditData.isDeceased;
    }
);