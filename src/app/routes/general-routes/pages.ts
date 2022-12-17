import { lazy } from 'react'

export const AllPages = lazy(() => import('@pages/all-pages'))
export const AllStudentsPage = lazy(() => import('@pages/all-students'))
export const AllTeachersPage = lazy(() => import('@pages/all-teachers'))
export const CantAccessPage = lazy(() => import('@pages/cant-access'))
export const ChatPage = lazy(() => import('@pages/chat'))
export const ElectronicInteractionAgreementPage = lazy(() => import('@pages/electronic-interaction-agreement'))
export const FeedbackPage = lazy(() => import('@pages/feedback'))
export const ForgotPasswordPage = lazy(() => import('@pages/forgot-password'))
export const AlertsPage = lazy(() => import('@pages/alerts'))
export const Home = lazy(() => import('@pages/home'))
export const InstructionsPage = lazy(() => import('@pages/instructions'))
export const PaymentsPage = lazy(() => import('@pages/payments'))
export const ProfilePage = lazy(() => import('@pages/profile'))
export const SchedulePage = lazy(() => import('@pages/schedule'))
export const SettingsPage = lazy(() => import('@pages/settings'))
export const Account = lazy(() => import('@pages/settings/pages/account'))
export const Appearance = lazy(() => import('@pages/settings/pages/appearance'))
export const HomeSettings = lazy(() => import('@pages/settings/pages/home'))
export const Security = lazy(() => import('@pages/settings/pages/security'))
export const TeachersSchedule = lazy(() => import('@pages/teachers-schedule'))
export const DecreisDirectivesPage = lazy(() => import('@pages/decreis-directives'))
export const GetYourLoginPage = lazy(() => import('@pages/get-your-login'))
export const MemoFreshmenPage = lazy(() => import('@pages/memo-freshmen'))
export const MemoTeacherPage = lazy(() => import('@pages/memo-teacher'))
export const CustomizeMenu = lazy(() => import('@pages/settings/pages/customize-menu'))
