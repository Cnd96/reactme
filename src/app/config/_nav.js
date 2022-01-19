import Constants from "../../utils/Constants";

export default [
    // {
    //     _tag: 'CSidebarNavItem',
    //     name: 'Dashboard',
    //     to: Constants.PAGES.adminDashboard,
    //     icon: 'cil-speedometer',
    // },
    {
        _tag: 'CSidebarNavTitle',
        _children: ['Patient']
    },

    // {
    //     _tag: 'CSidebarNavItem',
    //     name: 'New Patient Record',
    //     to: Constants.PAGES.newPatient,
    //     icon: 'cil-user-follow',
    // },

    {
        _tag: 'CSidebarNavItem',
        name: 'Patients',
        to: Constants.PAGES.registeredPatient,
        icon: 'cil-people',
    },

    {
        _tag: 'CSidebarNavTitle',
        _children: ['System Config'],
        privileges: [
            'HEALTH.TRACKER.SETTINGS.CONFIG.ADD.EDIT',
            'HEALTH.TRACKER.SETTINGS.CONFIG.VIEW',
            'HEALTH.TRACKER.SETTINGS.ROLE.ADD.EDIT',
            'HEALTH.TRACKER.SETTINGS.ROLE.VIEW',
            'HEALTH.TRACKER.SETTINGS.USER.ADD.EDIT',
            'HEALTH.TRACKER.SETTINGS.USER.VIEW'
        ]
    },

    {
        _tag: 'CSidebarNavItem',
        name: 'Drugs',
        to: Constants.PAGES.medicine,
        icon: 'cil-opacity',
        privileges: ['HEALTH.TRACKER.SETTINGS.CONFIG.VIEW']
    },

    {
        _tag: 'CSidebarNavItem',
        name: 'Prescription Template',
        to: Constants.PAGES.prescriptionTemplate,
        icon: 'cil-blur-linear',
        privileges: ['HEALTH.TRACKER.SETTINGS.CONFIG.VIEW']
    },

    // {
    //     _tag: 'CSidebarNavItem',
    //     name: 'Prescriptions',
    //     to: Constants.PAGES.prescription,
    //     icon: 'cil-tennis-ball',
    //     // privileges: ['HEALTH.TRACKER.SETTINGS.CONFIG.VIEW']
    // },

    {
        _tag: 'CSidebarNavItem',
        name: 'Medical Diseases',
        to: Constants.PAGES.medicalDiseases,
        icon: 'cil-tennis-ball',
        privileges: ['HEALTH.TRACKER.SETTINGS.CONFIG.VIEW']
    },

    {
        _tag: 'CSidebarNavItem',
        name: 'Diagnosis',
        to: Constants.PAGES.diagnosis,
        icon: 'cil-aperture',
        privileges: ['HEALTH.TRACKER.SETTINGS.CONFIG.VIEW']
    },

    {
        _tag: 'CSidebarNavTitle',
        _children: ['Habits'],
    },

    {
        _tag: 'CSidebarNavItem',
        name: 'Social Habit Categories',
        to: Constants.PAGES.socialHabitCategory,
        icon: 'cil-infinity',
        privileges: ['HEALTH.TRACKER.SETTINGS.CONFIG.VIEW']
    },

    {
        _tag: 'CSidebarNavItem',
        name: 'Social Habits',
        to: Constants.PAGES.socialHabits,
        icon: 'cil-recycle',
        privileges: ['HEALTH.TRACKER.SETTINGS.CONFIG.VIEW']
    },

    {
        _tag: 'CSidebarNavTitle',
        _children: ['Report Config'],
    },

    {
        _tag: 'CSidebarNavItem',
        name: 'Medical Report Types',
        to: Constants.PAGES.medicalTestTypes,
        icon: 'cil-description',
        privileges: ['HEALTH.TRACKER.SETTINGS.CONFIG.VIEW']
    },

    {
        _tag: 'CSidebarNavItem',
        name: 'Medical Report Records',
        to: Constants.PAGES.medicalTestRecords,
        icon: 'cil-clear-all',
        privileges: ['HEALTH.TRACKER.SETTINGS.CONFIG.VIEW']
    },

    {
        _tag: 'CSidebarNavTitle',
        _children: ['Dietary Info'],
    },

    {
        _tag: 'CSidebarNavItem',
        name: 'Dietary Categories',
        to: Constants.PAGES.dietaryHabitCategories,
        icon: 'cil-basket',
        privileges: ['HEALTH.TRACKER.SETTINGS.CONFIG.VIEW']
    },

    {
        _tag: 'CSidebarNavItem',
        name: 'Dietary Quizzes',
        to: Constants.PAGES.dietaryHabits,
        icon: 'cil-list',
        privileges: ['HEALTH.TRACKER.SETTINGS.CONFIG.VIEW']
    },

    {
        _tag: 'CSidebarNavTitle',
        _children: ['Activities'],
    },

    {
        _tag: 'CSidebarNavItem',
        name: 'Activity Categories',
        to: Constants.PAGES.physicalActivityCategory,
        icon: 'cil-bike',
        privileges: ['HEALTH.TRACKER.SETTINGS.CONFIG.VIEW']
    },

    {
        _tag: 'CSidebarNavItem',
        name: 'Activity Levels',
        to: Constants.PAGES.physicalActivity,
        icon: 'cil-indent-increase',
        privileges: ['HEALTH.TRACKER.SETTINGS.CONFIG.VIEW']
    },


    {
        _tag: 'CSidebarNavTitle',
        _children: ['Config'],
    },
    {
        _tag: 'CSidebarNavItem',
        name: 'Users',
        to: Constants.PAGES.users,
        icon: 'cil-people',
        privileges: [
            'HEALTH.TRACKER.SETTINGS.CONFIG.VIEW',
            'HEALTH.TRACKER.SETTINGS.USER.ADD.EDIT',
            'HEALTH.TRACKER.SETTINGS.USER.VIEW'
        ]
    },

    {
        _tag: 'CSidebarNavItem',
        name: 'Roles',
        to: Constants.PAGES.roles,
        icon: 'cil-pencil',
        privileges: [
            'HEALTH.TRACKER.SETTINGS.CONFIG.VIEW',
            'HEALTH.TRACKER.SETTINGS.ROLE.VIEW',
            'HEALTH.TRACKER.SETTINGS.ROLE.ADD.EDIT'
        ]
    },

    // {
    //     _tag: 'CSidebarNavTitle',
    //     _children: ['Other'],
    // },

    // {
    //     _tag: 'CSidebarNavItem',
    //     name: 'Follow Ups',
    //     to: Constants.PAGES.followUps,
    //     icon: 'cil-alarm',
    //     // privileges: ['HEALTH.TRACKER.SETTINGS.CONFIG.VIEW']
    // },
    //
    // {
    //     _tag: 'CSidebarNavItem',
    //     name: 'Fit to Work',
    //     to: Constants.PAGES.fitToWork,
    //     icon: 'cil-check-alt',
    //     // privileges: ['HEALTH.TRACKER.SETTINGS.CONFIG.VIEW']
    // },

    {
        _tag: 'CSidebarNavTitle',
        _children: ['Reports'],
        privileges: ['HEALTH.TRACKER.SETTINGS.GENERATE.REPORT']
    },
    {
        _tag: 'CSidebarNavItem',
        name: 'Checkups',
        to: Constants.PAGES.checkupReport,
        icon: 'cil-description',
        privileges: ['HEALTH.TRACKER.SETTINGS.GENERATE.REPORT']
    },
    // {
    //     _tag: 'CSidebarNavItem',
    //     name: 'Patient Records',
    //     // to: Constants.PAGES.medicalDiseases,
    //     icon: 'cil-description',
    // },
    // {
    //     _tag: 'CSidebarNavItem',
    //     name: 'Patients',
    //     // to: Constants.PAGES.medicalDiseases,
    //     icon: 'cil-people',
    // },

]

