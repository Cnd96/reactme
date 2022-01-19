const Constants = {

    MAXIMUM_TAX_PERCENTAGE: 100,

    GRID_RESULT_ROW_DEFAULT_SIZE: 20,

    DEFAULT_DECIMAL_PLACES: 3,

    STEPPER_PAGES_SIZE: 10,

    MASTER_DATA: {},

    MAX_ROW_COUNT: 1,

    HOSPITAL_ID: 1,

    DOCTOR_ID: 1,
    //Doctor siwakumarn

    MASTER_DATA_KEYS: {
        ALL_CURRENCIES: 'uheir398409*(&'
    },

    PUBLIC_KEY: `MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC5OZkfeUXv7lc5rexCCclfgkqv
9OmPgaoG6I4BE9KNeLt4ARGjtlUKTduMg7q0TYoPYzhD2drTgj9akJEDdsv0wots
lOvYsBlAAPPdnUuUsJrYuNFLW1n0TFNQhF0h916oUflK9BLDAKJ0k36Jem4uGvK4
6PAxGS7XQ+8Nls8DMwIDAQAB`,

    ACCESS_TOKEN: null,
    REFRESH_TOKEN: null,
    LOGGED_IN_USER: null,
    BASE_URL: "https://s3.ap-south-1.amazonaws.com/iharvest-demo/",
    REPORT_BASE_URL: "https://health-tracker-dev.s3.ap-south-1.amazonaws.com//reports/",

    IMAGE_OUTPUT_TYPE: {
        DATA_URL: 'DATA_URL',
        BLOB: 'BLOB'
    },

    VALIDATION_CHECK_CONST: {
        STARTED: 'STARTED',
        ENDED: 'ENDED'
    },

    PAGES: {
        checkupReport: '/checkup-report',
        newPatient: '/patients/new-patient',
        registeredPatient: '/patients',
        event: '/event',
        eventAddEdit: '/event/add-edit',
        registeredPatientDetails: '/patients/patient-details',
        patientCheckupSummeryDetails: '/patients/patient-details/checkup-summery',
        diagnosisAddEdit: '/config/diagnosis/add-edit',
        diagnosis: '/config/diagnosis',
        medicalDiseasesAddEdit: '/config/medicalDiseases/add-edit',
        medicalDiseases: '/config/medicalDiseases',
        socialHabitCategory: '/config/socialHabitCategory',
        socialHabitCategoryAddEdit: '/config/socialHabitCategory/add-edit',
        physicalActivityCategory: '/config/physicalActivityCategory',
        physicalActivityCategoryAddEdit: '/config/physicalActivityCategory/add-edit',
        physicalActivity: '/config/physicalActivity',
        physicalActivityAddEdit: '/config/physicalActivity/add-edit',
        dietaryHabits: '/config/dietaryHabits',
        dietaryHabitsAddEdit: '/config/dietaryHabits/add-edit',
        dietaryHabitCategories: '/config/dietaryCategories',
        dietaryHabitCategoriesAddEdit: '/config/dietaryCategories/add-edit',
        socialHabits: '/config/socialHabits',
        socialHabitsAddEdit: '/config/socialHabits/add-edit',
        medicalTestTypes: '/config/medicalReportTypes',
        medicalTestTypesAddEdit: '/config/medicalReportTypes/add-edit',
        medicalTestRecords: '/config/medicalTestRecords',
        medicalTestRecordsAddEdit: '/config/medicalTestRecords/add-edit',
        followUps: '/config/followUps',
        followUpsAddEdit: '/config/followUps/add-edit',
        fitToWork: '/config/fitToWork',
        fitToWorkAddEdit: '/config/fitToWork/add-edit',
        medicineAddEdit: '/config/medicine/add-edit',
        medicine: '/config/medicine',
        prescriptionTemplate: '/config/prescriptionTemplate',
        prescriptionTemplateAddEdit: '/config/prescriptionTemplate/add-edit',
        roles: '/config/roles',
        roleAddEdit: '/config/roles/add-edit',
        users: '/config/users',
        userAddEdit: '/config/users/add-edit',
        public: '/public',
        adminDashboard: '/dashboard',
        login: '/login',

    },

    STATUS_CONST: {
        ACT: 'ACT',
        INA: 'INA',
    },

    STATUS: {
        ACT: 'Active',
        INA: 'Inactive',
    },

    TITLE: {
        MR: 'Mr',
        MRS: 'Mrs',
        MISS: 'Miss',
        MS: 'Ms',
        DR: 'Dr',
    },
    TITLE_CONST: {
        MR: 'MR',
        MRS: 'MRS',
        MISS: 'MISS',
        MS: 'MS',
        DR: 'DR',
    },

    USER_TYPE: {
        ADMIN: 'Admin',
        READER: 'Reader'
    },

    USER_TYPE_CONST: {
        ADMIN: 'ADMIN',
        READER: 'READER'
    },

    BARCODE_TYPE: {
        SUPPLIER: 'Supplier',
        INTERNAL: 'Internal',
    },

    ITEM_TAX_FUNCTION: {
        ADDITION: 'Addition',
        DEDUCTION: 'Deduction'
    },

    PAGE_INDEXES: {
        RegisterPatientBase: 0,
        PatientComplainBase: 1,
        SelectFamilyHistory: 2,
        SelectSocialHabits: 3,
        CreateCheckUpBase: 4,
        MedicalTest: 5,
        SelectDiagnosis: 6,
        CreateInstructionNote: 7,
        SelectPrescription: 8,
        SelectDietaryHabit: 9,
        SelectPhysicalActivities: 10,
        OtherLettersBase: 11,
        AllergyHistoryBase: 12,
    },


    STORAGE: {
        ACCESS_TOKEN: 'HT_FrE#4_#s',
        REFRESH_TOKEN: 'HT_LOpo#$d',
        LOGGED_USER_ENC: 'HT_LpP#dTede',
        SELECTED_ROLE_ID: 'HT_SRipETgdc',
        SELECTED_USER_ID: 'HT_wer%23#Tg32c',
        SELECTED_MEDICAL_DISEASE_ID: 'HT_SMdi$5&#ui',
        SELECTED_DIAGNOSIS_ID: 'HT_SMdu6shA$5&#ui',
        PATIENT_ID: 'HT_Htb%4_Ptn_tui',
        PATIENT_ID_FOR_DETAIL: 'HT_Htb%4_Ptn_dtailID',
        CHECKUP_ID: 'HT_cHtSK_Che_U&s%ui',
        DIET_NOTE_ID: 'HT_cHtasdYb$$2ui',
        FITNESS_NOTE_ID: 'HT_cH*744%&GF$$2ui',
        INSTRUCTION_NOTE_ID: 'HT_cH*744%&8972ui',
        PATIENT_COMPLAIN_ID: 'HT_cH*PT%6628972ui',
        ALLERGY_HISTORY_ID: 'HT_cH*PT%7GgT5',
        SELECTED_SOCIAL_HABIT_ID: 'HT_cHtSuA5&s%ui',
        SELECTED_MEDICAL_TEST_TYPE_ID: 'HT_cH*7%6suA5&(0ui',
        SELECTED_MEDICAL_TEST_RECORD_ID: 'HT_cH*^t%hsuA5&(0ui',
        SELECTED_FOLLOW_UP_ID: 'HT_cH*^t%hsFpUiFpii',
        SELECTED_FIT_TO_WORK_ID: 'HT_c^7st%hsFitUifitui',
        SELECTED_EVENT_ID: 'HT_c^yhs%hsFitEnvntui',
        SELECTED_EVENT_RESULT_ID: 'HT_c)mj^hs%hsFitEnvRStui',
        SELECTED_DIETARY_HABIT_CATEGORY_ID: 'HT_c)mj^hs^hG7HbCatIdUid',
        SELECTED_DIETARY_HABIT_ID: 'HT_c)mj^hs^hG7HbIdUW88id',
        SELECTED_MEDICINE_ID: 'HT_c)mj^hs^hG8^HT%488id',
        SELECTED_PHYSICAL_ACTIVITY_CATEGORY_ID: 'HT_c)mj^hs^&672PactCatIdui',
        SELECTED_PHYSICAL_ACTIVITY_ID: 'HT_c)mj^hsi&u&72Pactidui',
        SELECTED_SOCIAL_HABIT_CATEGORY_ID: 'HT_c)mjhs&JHSSuidui',
        SELECTED_PRESCRIPTION_TEMPLATE_ID: 'HT_c)yHYS5654$#HSSuidui'

    },

    BLOOD_GROUP: [
        {key: "", value: ''},
        {key: "A+", value: 'A+'},
        {key: "A-", value: 'A-'},
        {key: "B+", value: 'B+'},
        {key: "B-", value: 'B-'},
        {key: "O+", value: 'O+'},
        {key: "O-", value: 'O-'},
        {key: "AB+", value: 'AB+'},
        {key: "AB-", value: 'AB-'},
    ],

	QUALIFICATIONS:[
        {key: "", value: ''},
        {key: "Primary", value: 'Primary School'},
        {key: "Higher", value: 'Higher School'},
        {key: "Degree", value: 'Degree'},
        {key: "PostGraduate", value: 'PostGraduate'},
    ],


    CIVIL_STATUS_CONST: {
        UNKNOWN: 'UNKNOWN',
        MARRIED: 'MARRIED',
        WIDOWED: 'WIDOWED',
        DIVORCED: 'DIVORCED',
        SEPARATED: 'SEPARATED',
        SINGLE: 'SINGLE',
    },

    CIVIL_STATUS: {
        UNKNOWN: 'Unknown',
        MARRIED: 'Married',
        WIDOWED: 'Widowed',
        DIVORCED: 'Divorced',
        SEPARATED: 'Separated',
        SINGLE: 'Single',
    },


    DAYS_OF_WEEK_LIST: [
        {label: "Sunday", value: 'Su'},
        {label: "Monday", value: 'Mo'},
        {label: "Tuesday", value: 'Tu'},
        {label: "Wednesday", value: 'We'},
        {label: "Thursday", value: 'Th'},
        {label: "Friday", value: 'Fr'},
        {label: "Saturday", value: 'Sa'},
    ],
    DAYS_OF_WEEK: {
        Su: "Sunday",
        Mo: "Monday",
        Tu: "Tuesday",
        We: "Wednesday",
        Th: "Thursday",
        Fr: "Friday",
        Sa: "Saturday"
    },
    DAYS_OF_WEEK_CONST: {
        Su: "Su",
        Mo: "Mo",
        Tu: "Tu",
        We: "We",
        Th: "Th",
        Fr: "Fr",
        Sa: "Sa"
    },

    TO_STATUS: {
        PLANNING: "Planning",
        DELIVERED: "Delivered",
        CLOSED: "Closed"
    },
    SO_STATUS_CONST: {
        DRAFTED: 'DRAFTED',
        PLANNING: 'PLANNING',
        RELEASED: 'RELEASED',
        CANCELED: 'CANCELED'
    },
    SO_STATUS: {
        DRAFTED: "Drafted",
        RELEASED: "Released",
        PLANNING: "Planning",
        CANCELED: "Cancel"
    },
    PAYMENT_TYPES: {
        CREDIT: "Credit"
    },

    DATE_TIME_FORMAT: "DD/MM/YYYY HH:mm:ss",
    DATE_TIME_FORMAT_NO_SECONDS: "DD/MM/YYYY HH:mm",
    DATE_FORMAT: "DD/MM/YYYY",
    TIME_FORMAT: "HH:mm:ss",
    TIME_FORMAT_NO_SECONDS: "HH:mm",
    YEAR_FORMAT: "YYYY",

    SHORT_CUT_COMBINATIONS: {
        CTRL_LEFT: 'CTRL_LEFT',
        CTRL_RIGHT: 'CTRL_RIGHT',
        CTRL_UP: 'CTRL_UP',
        CTRL_DOWN: 'CTRL_DOWN',
        CTRL_F: 'CTRL_F',
        CTRL_ESC: 'CTRL_ESC',
    },


    GENDER: {
        M: 'Male',
        F: 'Female'
    },
    GENDER_CONST: {
        M: 'M',
        F: 'F'
    },

    CUSTOMER_IDENTIFICATION_TYPE: {
        NIC: 'NIC',
        PASSPORT: 'Passport',
        BR: 'BR'
    },

    CUSTOMER_IDENTIFICATION_TYPE_CONST: {
        NIC: 'NIC',
        PASSPORT: 'PASSPORT',
        BR: 'BR'
    },
    YES_NO: {
        Y: 'Yes',
        N: 'No'
    },

    YES_NO_CONST: {
        Y: 'Y',
        N: 'N'
    },

    PRIVILEGE_CODES: {

        HEALTH_TRACKER_SETTINGS_ROLE_ADD_EDIT: "HEALTH.TRACKER.SETTINGS.ROLE.ADD.EDIT",
        HEALTH_TRACKER_SETTINGS_ROLE_VIEW: "HEALTH.TRACKER.SETTINGS.ROLE.VIEW",

        HEALTH_TRACKER_SETTINGS_USER_ADD_EDIT: "HEALTH.TRACKER.SETTINGS.USER.ADD.EDIT",
        HEALTH_TRACKER_SETTINGS_USER_VIEW: "HEALTH.TRACKER.SETTINGS.USER.VIEW",

        HEALTH_TRACKER_SETTINGS_CONFIG_EDIT: "HEALTH.TRACKER.SETTINGS.CONFIG.ADD.EDIT",
        HEALTH_TRACKER_SETTINGS_CONFIG_VIEW: "HEALTH.TRACKER.SETTINGS.CONFIG.VIEW",

        HEALTH_TRACKER_SETTINGS_EVENT_ADD_EDIT: "HEALTH.TRACKER.SETTINGS.EVENT.ADD.EDIT",
        HEALTH_TRACKER_SETTINGS_EVENT_VIEW: "HEALTH.TRACKER.SETTINGS.EVENT.VIEW",

        HEALTH_TRACKER_SETTINGS_REGISTER_PATIENT_AND_CREATE_CHECKUP: "HEALTH.TRACKER.SETTINGS.REGISTER.PATIENT.CREATE.CHECKUP",

        HEALTH_TRACKER_SETTINGS_REGISTERED_PATIENT_VIEW: "HEALTH.TRACKER.SETTINGS.REGISTERED.PATIENT.ADD.EDIT",

        HEALTH_TRACKER_SETTINGS_GENERATE_REPORT: "HEALTH.TRACKER.SETTINGS.GENERATE.REPORT",

        HEALTH_TRACKER_SETTINGS_USER_PASSWORD_RESET: "HEALTH.TRACKER.SETTINGS.USER.PASSWORD.RESET",
    },

    OTHER_LETTERS: [
        {ID: 1, TYPE: 'PRESCRIPTION', LABEL: 'Prescription'},
        {ID: 2, TYPE: 'DIAGNOSIS_CARD', LABEL: 'Diagnosis Card'},
        {ID: 3, TYPE: 'PHYSIOTHERAPY_REQUEST', LABEL: 'Physiotherapy Request'},
    ]


};


export default Constants;
