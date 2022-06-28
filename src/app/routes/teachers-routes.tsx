/* eslint-disable no-console */
import ContactInfoActualizationPage from '@pages/contact-info-actualization'
import DataVerificationPage from '@pages/data-verification'
import DownloadAdminFilesPage from '@pages/download-admin-files'
import PageIsNotReady from '@pages/page-is-not-ready'
import PersonalNotificationsPage from '@pages/personal-notifications'
import TeachersApplicationsPage from '@pages/teachers-applications'
import ArbitraryRequestPage from '@pages/teachers-applications/pages/arbitrary-request'
import CertificateFromPlaceOfWorkPage from '@pages/teachers-applications/pages/certificate-from-the-place-of-work'
import CertificateOfWorkExperiencePage from '@pages/teachers-applications/pages/certificate-of-work-experience'
import CertificateTimeParentalLeavePage from '@pages/teachers-applications/pages/certificate-time-parental-leave'
import ConnectingComputerPage from '@pages/teachers-applications/pages/connecting-computer'
import CopiesOfDocumentsFromPersonalFilePage from '@pages/teachers-applications/pages/copies-of-documents-from-the-personal-file'
import CopyOfEmploymentRecordPage from '@pages/teachers-applications/pages/copy-of-the-employment-record'
import CourierPage from '@pages/teachers-applications/pages/courier'
import GettingComputerEquipmentPage from '@pages/teachers-applications/pages/getting-computer-equipment'
import IssuanceOfLicensesPage from '@pages/teachers-applications/pages/issuance-of-licenses'
import NumberOfUnusedVacationDaysPage from '@pages/teachers-applications/pages/number-of-unused-vacation-days'
import OtherItServicesPage from '@pages/teachers-applications/pages/other-it-services'
import PaymentForChildCarePage from '@pages/teachers-applications/pages/payment-for-child-care'
import PaymentOfChildBirthAllowancePage from '@pages/teachers-applications/pages/payment-of-child-birth-allowance'
import PersonaIncomeTaxReferencePage from '@pages/teachers-applications/pages/persona-income-tax-reference'
import PrinterMaintenancePage from '@pages/teachers-applications/pages/printer-maintenance'
import QuestionPersonalAccountPage from '@pages/teachers-applications/pages/question-personal-account'
import QuestionSedPage from '@pages/teachers-applications/pages/question-sed'
import VisaCertificatePage from '@pages/teachers-applications/pages/visa-certificate'
import WorkOnTermsOfExternalConcurrencyPage from '@pages/teachers-applications/pages/work-on-the-terms-of-external-concurrency'
import VacationSchedule from '@pages/vacation-schedule'
import React from 'react'
import { BiBookReader, BiGroup, BiHeadphone, BiIdCard, BiNotification } from 'react-icons/bi'
import { FaRegLightbulb } from 'react-icons/fa'
import {
    FiArrowDownCircle,
    FiBell,
    FiBriefcase,
    FiCalendar,
    FiCheckSquare,
    FiFileText,
    FiMonitor,
    FiStar,
} from 'react-icons/fi'
import { HiOutlineMenuAlt2, HiOutlineUserGroup } from 'react-icons/hi'
import { RiNotificationBadgeLine } from 'react-icons/ri'
import { generalHiddenRoutes, generalRoutes, IRoutes, PROJECT_ACTIVITIES_ROUTE } from './general-routes'

export const DATA_VERIFICATION_ROUTE = '/data-verification'
export const APPLICATIONS_ROUTE = '/applications'
export const JOB_ROUTE = '/job'
export const ORDERS_ROUTE = '/staff_orders'
export const DOCUMENT_BLANKS_ROUTE = '/staff_blanks'
export const STUDENTS_LOGINS_ROUTE = '/ad_logins'
export const ALERTS_ROUTE = '/alerts'
export const VAX_ROUTE = '/vaccination'
export const DOCLIST_ROUTE = '/doclist'
export const PPS_VOTE_ROUTE = '/pps_vote2020'
export const CHILDREN_ROUTE = '/children'
export const PPS_CONTEST_ROUTE = '/pps_contest'
export const VACATION_ROUTE = '/vacation'
export const KPI_PPS_ROUTE = '/kpi_pss'
export const KPI_ADMIN_ROUTE = '/kpi_admin'
export const SC_NEWS_ROUTE = '/sc_news'
export const OOP_ROUTE = '/oop'
export const CENTERS_ROUTE = '/centers'
export const PORTFOLIO_ROUTE = '/portfolio'
export const INFO_ROUTE = '/info'
export const HELP_SERVICE_ROUTE = '/help_service'
export const DOWNLOAD_AGREEMENTS_FILES_ROUTE = '/download-agreements'
export const PERSONAL_NOTIFICATIONS = '/personal-notifications'
export const CONTACT_INFO_ACTUALIZATION = '/contact-info-actualization'

//hidden routes
export const ISSUANCE_OF_LICENSES = APPLICATIONS_ROUTE + '/issuance-of-licenses'
export const GETTING_COMPUTER_EQUIPMENT = APPLICATIONS_ROUTE + '/getting-computer-equipment'
export const CONNECTING_COMPUTER = APPLICATIONS_ROUTE + '/connecting-computer'
export const PRINTER_MAINTENANCE = APPLICATIONS_ROUTE + '/printer-maintenance'
export const QUESTION_SED = APPLICATIONS_ROUTE + '/question-sed'
export const QUESTION_PERSONAL_ACCOUNT = APPLICATIONS_ROUTE + '/question-personal-account'
export const OTHER_IT_SERVICES = APPLICATIONS_ROUTE + '/other-it-services'
export const CERTIFICATE_FROM_PLACE_OF_WORK = APPLICATIONS_ROUTE + '/certificate-from-the-place-of-work'
export const VISA_CERTIFICATE = APPLICATIONS_ROUTE + '/visa-certificate'
export const CERTIFICATE_OF_WORK_EXPERIENCE = APPLICATIONS_ROUTE + '/certificate-of-work-experience'
export const NUMBER_OF_UNUSED_VACATION_DAYS = APPLICATIONS_ROUTE + '/number-of-unused-vacation-days'
export const COPY_OF_EMPLOYMENT_RECORD = APPLICATIONS_ROUTE + '/copy-of-the-employment-record'
export const COPIES_OF_DOCUMENTS_FROM_PERSONAL_FILE = APPLICATIONS_ROUTE + '/copies-of-documents-from-the-personal-file'
export const WORK_ON_TERMS_OF_EXTERNAL_CONCURRENCY = APPLICATIONS_ROUTE + '/work-on-the-terms-of-external-concurrency'
export const CERTIFICATE_TIME_PARENTAL_LEAVE = APPLICATIONS_ROUTE + '/certificate-time-parental-leave'
export const ARBITRARY_REQUEST = APPLICATIONS_ROUTE + '/arbitrary-request'
export const COURIER = APPLICATIONS_ROUTE + '/courier'
export const PERSONA_INCOME_TAX_REFERENCE = APPLICATIONS_ROUTE + '/persona-income-tax-reference'
export const PAYMENT_OF_CHILD_BIRTH_ALLOWANCE = APPLICATIONS_ROUTE + '/payment-of-child-birth-allowance'
export const PAYMENT_FOR_CHILD_CARE = APPLICATIONS_ROUTE + '/payment-for-child-care'

export const teachersPrivateRoutes: () => IRoutes = () => ({
    ...generalRoutes,
    doclist: {
        id: 'doclist',
        title: 'Ознакомление с документами',
        icon: <FiFileText />,
        path: DOCLIST_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: DOCLIST_ROUTE }),
        color: 'blue',
        isTemplate: false,
    },
    applications: {
        id: 'applications',
        title: 'Заявления',
        icon: <FiFileText />,
        path: APPLICATIONS_ROUTE,
        Component: TeachersApplicationsPage,
        color: 'red',
        isTemplate: false,
        isNew: true,
    },
    'download-agreements': {
        id: 'download-agreements',
        title: 'Скачать отчеты',
        icon: <FiArrowDownCircle />,
        path: DOWNLOAD_AGREEMENTS_FILES_ROUTE,
        Component: DownloadAdminFilesPage,
        color: 'blue',
        isTemplate: false,
        isAdmin: true,
    },
    alerts: {
        id: 'alerts',
        title: 'Оповещения',
        icon: <FiBell />,
        path: ALERTS_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: ALERTS_ROUTE }),
        color: 'blue',
        isTemplate: false,
    },
    'data-verification': {
        id: 'data-verification',
        title: 'Анкета для сверки данных',
        icon: <HiOutlineMenuAlt2 />,
        path: DATA_VERIFICATION_ROUTE,
        Component: DataVerificationPage,
        color: 'blue',
        isTemplate: false,
    },
    'students-logins': {
        id: 'students-logins',
        title: 'Логины студентов',
        icon: <BiGroup />,
        path: STUDENTS_LOGINS_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: STUDENTS_LOGINS_ROUTE }),
        color: 'blue',
        isTemplate: false,
    },
    'contact-info-actualization': {
        id: 'contact-info-actualization',
        title: 'Актуализация контактных данных',
        icon: <FiCheckSquare />,
        path: CONTACT_INFO_ACTUALIZATION,
        Component: ContactInfoActualizationPage,
        color: 'orange',
        isTemplate: false,
    },
    'children-route': {
        id: 'children-route',
        title: 'Дети и внуки',
        icon: <HiOutlineUserGroup />,
        path: CHILDREN_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: CHILDREN_ROUTE }),
        color: 'green',
        isTemplate: false,
    },
    calendar: {
        id: 'calendar',
        title: 'График отпусков',
        icon: <FiCalendar />,
        path: VACATION_ROUTE,
        Component: VacationSchedule,
        color: 'purple',
        isTemplate: false,
    },
    'kpi-pps': {
        id: 'kpi-pps',
        title: 'Рейтинговая система ППС',
        icon: <FiStar />,
        path: KPI_PPS_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: KPI_PPS_ROUTE }),
        color: 'pink',
        isTemplate: false,
    },
    'kpi-admin': {
        id: 'kpi-admin',
        title: 'Экспертиза рейтинговой системы ППС',
        icon: <FiMonitor />,
        path: KPI_ADMIN_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: KPI_ADMIN_ROUTE }),
        color: 'darkBlue',
        isTemplate: false,
    },
    'sc-news': {
        id: 'sc-news',
        title: 'Анонсы научных мероприятий',
        icon: <RiNotificationBadgeLine />,
        path: SC_NEWS_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: SC_NEWS_ROUTE }),
        color: 'orange',
        isTemplate: false,
    },
    'help-service': {
        id: 'help-service',
        title: 'Цифровые сервисы',
        icon: <FiBriefcase />,
        path: HELP_SERVICE_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: HELP_SERVICE_ROUTE }),
        color: 'blue',
        isTemplate: false,
    },
    orders: {
        id: 'orders',
        title: 'Приказы',
        icon: <FiFileText />,
        path: ORDERS_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: ORDERS_ROUTE }),
        color: 'blue',
        isTemplate: false,
    },
    'document-blanks': {
        id: 'document-blanks',
        title: 'Бланки документов',
        icon: <BiGroup />,
        path: DOCUMENT_BLANKS_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: DOCUMENT_BLANKS_ROUTE }),
        color: 'blue',
        isTemplate: false,
    },
    'personal-notifications': {
        id: 'personal-notifications',
        title: 'Кадровые уведомления',
        icon: <BiNotification />,
        path: PERSONAL_NOTIFICATIONS,
        Component: PersonalNotificationsPage,
        color: 'blue',
        isTemplate: false,
    },
    oop: {
        id: 'oop',
        title: 'Образовательные программы',
        icon: <BiHeadphone />,
        path: OOP_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: OOP_ROUTE }),
        color: 'blue',
        isTemplate: false,
    },
    centers: {
        id: 'centers',
        title: 'Многофункциональный центр',
        icon: <BiHeadphone />,
        path: CENTERS_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: CENTERS_ROUTE }),
        color: 'blue',
        isTemplate: false,
    },
    info: {
        id: 'info',
        title: 'Полезная информация',
        icon: <FiFileText />,
        path: INFO_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: INFO_ROUTE }),
        color: 'blue',
        isTemplate: false,
    },
    vax: {
        id: 'vax',
        title: 'Вакцинация',
        icon: <FiBriefcase />,
        path: VAX_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: VAX_ROUTE }),
        color: 'blue',
        isTemplate: false,
    },
    'pps-contest': {
        id: 'pps-contest',
        title: 'Конкурс ППС',
        icon: <BiIdCard />,
        path: PPS_CONTEST_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: PPS_CONTEST_ROUTE }),
        color: 'blue',
        isTemplate: false,
    },
    'pps-vote': {
        id: 'pps-vote',
        title: 'Опрос для проверки уровня цифровой грамотности',
        icon: <BiBookReader />,
        path: PPS_VOTE_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: PPS_VOTE_ROUTE }),
        color: 'blue',
        isTemplate: false,
    },
    'project-activity': {
        id: 'project-activity',
        title: 'Проектная деятельность',
        icon: <FaRegLightbulb />,
        path: PROJECT_ACTIVITIES_ROUTE,
        Component: () => PageIsNotReady({ oldVersionUrl: '/projects' }),
        color: 'yellow',
        isTemplate: false,
    },
})

export const teachersHiddenRoutes: () => IRoutes = () => ({
    ...generalHiddenRoutes,
    'issuance-of-licenses-page': {
        id: 'issuance-of-licenses-page',
        title: 'Выдача лицензий',
        path: ISSUANCE_OF_LICENSES,
        icon: FiFileText,
        color: 'blue',
        Component: IssuanceOfLicensesPage,
        isTemplate: false,
    },
    'getting-computer-equipment': {
        id: 'getting-computer-equipment',
        title: 'Получение нового компьютерного оборудования',
        icon: FiFileText,
        color: 'blue',
        path: GETTING_COMPUTER_EQUIPMENT,
        Component: GettingComputerEquipmentPage,
        isTemplate: false,
    },
    'connecting-computer': {
        id: 'connecting-computer',
        title: 'Подключение компьютера, МФУ, телефона, WiFi',
        icon: FiFileText,
        color: 'blue',
        path: CONNECTING_COMPUTER,
        Component: ConnectingComputerPage,
        isTemplate: false,
    },
    'printer-maintenance': {
        id: 'printer-maintenance',
        title: 'Обслуживание принтеров, МФУ',
        icon: FiFileText,
        color: 'blue',
        path: PRINTER_MAINTENANCE,
        Component: PrinterMaintenancePage,
        isTemplate: false,
    },
    'question-sed': {
        id: 'question-sed',
        title: 'Вопрос по СЭД Directum и 1С',
        icon: FiFileText,
        color: 'blue',
        path: QUESTION_SED,
        Component: QuestionSedPage,
        isTemplate: false,
    },
    'question-personal-account': {
        id: 'question-personal-account',
        title: 'Вопрос по Личному кабинету',
        icon: FiFileText,
        color: 'blue',
        path: QUESTION_PERSONAL_ACCOUNT,
        Component: QuestionPersonalAccountPage,
        isTemplate: false,
    },
    'other-it-services': {
        id: 'other-it-services',
        title: 'Прочее ИТ-обслуживание',
        icon: FiFileText,
        color: 'blue',
        path: OTHER_IT_SERVICES,
        Component: OtherItServicesPage,
        isTemplate: false,
    },
    'certificate-form-place-of-work': {
        id: 'certificate-form-place-of-work',
        title: 'Справка с места работы',
        icon: FiFileText,
        color: 'blue',
        path: CERTIFICATE_FROM_PLACE_OF_WORK,
        Component: CertificateFromPlaceOfWorkPage,
        isTemplate: false,
    },
    'visa-certificate': {
        id: 'visa-certificate',
        title: 'Справка на визу',
        icon: FiFileText,
        color: 'blue',
        path: VISA_CERTIFICATE,
        Component: VisaCertificatePage,
        isTemplate: false,
    },
    'certificate-of-work-experience': {
        id: 'certificate-of-work-experience',
        title: 'Справка о стаже работы',
        icon: FiFileText,
        color: 'blue',
        path: CERTIFICATE_OF_WORK_EXPERIENCE,
        Component: CertificateOfWorkExperiencePage,
        isTemplate: false,
    },
    'number-of-unused-vacation-days': {
        id: 'number-of-unused-vacation-days',
        title: 'Справка о количестве неиспользованных дней отпуска',
        icon: FiFileText,
        color: 'blue',
        path: NUMBER_OF_UNUSED_VACATION_DAYS,
        Component: NumberOfUnusedVacationDaysPage,
        isTemplate: false,
    },
    'copy-of-employment-record': {
        id: 'copy-of-employment-record',
        title: 'Копия трудовой книжки',
        icon: FiFileText,
        color: 'blue',
        path: COPY_OF_EMPLOYMENT_RECORD,
        Component: CopyOfEmploymentRecordPage,
        isTemplate: false,
    },
    'copies-of-documents-from-personal-file': {
        id: 'copies-of-documents-from-personal-file',
        title: 'Копии документов из личного дела',
        icon: FiFileText,
        color: 'blue',
        path: COPIES_OF_DOCUMENTS_FROM_PERSONAL_FILE,
        Component: CopiesOfDocumentsFromPersonalFilePage,
        isTemplate: false,
    },
    'work-on-terms-of-external-concurrency': {
        id: 'work-on-terms-of-external-concurrency',
        title: 'Справка о работе на условиях внешнего совместительства для внесения стажа в трудовую книжку',
        icon: FiFileText,
        color: 'blue',
        path: WORK_ON_TERMS_OF_EXTERNAL_CONCURRENCY,
        Component: WorkOnTermsOfExternalConcurrencyPage,
        isTemplate: false,
    },
    'certificate-time-parental-leave': {
        id: 'certificate-time-parental-leave',
        title: 'Справка об отпуске по уходу за ребенком до 1,5 и 3 лет',
        icon: FiFileText,
        color: 'blue',
        path: CERTIFICATE_TIME_PARENTAL_LEAVE,
        Component: CertificateTimeParentalLeavePage,
        isTemplate: false,
    },
    'arbitrary-request': {
        id: 'arbitrary-request',
        title: 'Произвольный запрос',
        icon: FiFileText,
        color: 'blue',
        path: ARBITRARY_REQUEST,
        Component: ArbitraryRequestPage,
        isTemplate: false,
    },
    courier: {
        id: 'courier',
        title: 'Курьер',
        icon: FiFileText,
        color: 'blue',
        path: COURIER,
        Component: CourierPage,
        isTemplate: false,
    },
    'personal-income-tax-reference': {
        id: 'personal-income-tax-reference',
        title: 'Справка по форме 2-НДФЛ',
        icon: FiFileText,
        color: 'blue',
        path: PERSONA_INCOME_TAX_REFERENCE,
        Component: PersonaIncomeTaxReferencePage,
        isTemplate: false,
    },
    'payment-of-child-birth-allowance': {
        id: 'payment-of-child-birth-allowance',
        title: 'Справка о выплате (не выплате) единовременного пособия на рождение ребенка',
        icon: FiFileText,
        color: 'blue',
        path: PAYMENT_OF_CHILD_BIRTH_ALLOWANCE,
        Component: PaymentOfChildBirthAllowancePage,
        isTemplate: false,
    },
    'payment-for-child-care': {
        id: 'payment-for-child-care',
        title: 'Справка о ежемесячных выплатах сотрудника, находящегося в отпуске по уходу за ребенком (декрет)',
        icon: FiFileText,
        color: 'blue',
        path: PAYMENT_FOR_CHILD_CARE,
        Component: PaymentForChildCarePage,
        isTemplate: false,
    },
})
