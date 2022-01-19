import {DashboardAppConfig} from "./admin/dashboard/DashboardAppConfig";
import {PublicAppConfig} from "./public/PublicAppConfig";
import {RolesAppConfig} from "./admin/config/role/RolesAppConfig";
import {UserAppConfig} from "./admin/config/user/UserAppConfig";
import {MedicalDiseasesAppConfig} from "./admin/config/medicalDiseases/MedicalDiseasesAppConfig";
import {DiagnosisAppConfig} from "./admin/config/diagnosis/DiagnosisAppConfig";
import {RegisteredPatientAppConfig} from "./admin/patient/registeredPatient/RegisteredPatientAppConfig";
import {MedicalTestTypesAppConfig} from "./admin/config/medicalTestTypes/MedicalTestTypesAppConfig";
import {SocialHabitsAppConfig} from "./admin/config/socialHabits/SocialHabitsAppConfig";
import {FollowUpAppConfig} from "./admin/config/followUps/FollowUpAppConfig";
import {FitToWorkAppConfig} from "./admin/config/fitToWork/FitToWorkAppConfig";
import {MedicalTestRecordAppConfig} from "./admin/config/medicalTestRecords/MedicalTestRecordAppConfig";
import {CheckupReportAppConfig} from "./admin/reports/checkup/CheckupReportAppConfig";
import {DietaryHabitCategoryAppConfig} from "./admin/config/dietaryHabitCategory/DietaryHabitCategoryAppConfig";
import {DietaryHabitAppConfig} from "./admin/config/dietaryHabit/DietaryHabitAppConfig";
import {PhysicalActivityCategoryAppConfig} from "./admin/config/physicalActivityCategories/PhysicalActivityCategoryAppConfig";
import {PhysicalActivitiesAppConfig} from "./admin/config/physicalActivities/PhysicalActivitiesAppConfig";
import {SocialHabitCategoryAppConfig} from "./admin/config/socialHabitCategory/SocialHabitCategoryAppConfig";
import {MedicineAppConfig} from "./admin/config/medicine/MedicineAppConfig";
import {PrescriptionTemplateAppConfig} from "./admin/config/prescriptionTemplate/PrescriptionTemplateAppConfig";

export const appsConfig = [
    PublicAppConfig,
    DashboardAppConfig,
    RolesAppConfig,
    UserAppConfig,
    MedicalDiseasesAppConfig,
    DiagnosisAppConfig,
    RegisteredPatientAppConfig,
    MedicalTestTypesAppConfig,
    SocialHabitsAppConfig,
    FollowUpAppConfig,
    FitToWorkAppConfig,
    MedicalTestRecordAppConfig,
    CheckupReportAppConfig,
    DietaryHabitCategoryAppConfig,
    DietaryHabitAppConfig,
    PhysicalActivityCategoryAppConfig,
    PhysicalActivitiesAppConfig,
    SocialHabitCategoryAppConfig,
    MedicineAppConfig,
    PrescriptionTemplateAppConfig
];
