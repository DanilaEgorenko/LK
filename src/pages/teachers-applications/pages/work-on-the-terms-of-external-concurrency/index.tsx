import React from 'react'
import TemplateFormPage from 'widgets/template-form-page'
import getForm from './lib/get-form'
import { teacherStatementModel } from '@entities/teachers-statement'

const WorkOnTermsOfExternalConcurrencyPage = () => {
    return <TemplateFormPage model={teacherStatementModel} getForm={getForm} />
}

export default WorkOnTermsOfExternalConcurrencyPage
