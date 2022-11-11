import { popUpMessageModel } from '@entities/pop-up-message'
import { IInputArea } from '@ui/input-area/model'
import { applicationsModel } from '@entities/hr-applications'

const SendHrFormHolidayWork = async (
    employeeId: string,
    inputAreas: IInputArea[],
    setLoading: (loading: boolean) => void,
    setCompleted: (loading: boolean) => void,
) => {
    setLoading(true)

    const form = inputAreas
        .map((itemForm) => {
            if (!Array.isArray(itemForm.data[0])) {
                return itemForm.data.map((l) => {
                    const obj = {}
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    if (!!l?.fieldName) obj[l?.fieldName ?? ''] = typeof l.value !== 'object' ? l?.value : l.value.title
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    if (l.type === 'multiselect') {
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        obj[l?.fieldName ?? ''] = JSON.stringify(l?.value.map((itemSelect) => itemSelect.title))
                    }

                    return obj
                })
            } else {
                const r = itemForm.data.map((c) => {
                    return Object.assign(
                        {},
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        ...c?.map((r) => {
                            const obj = {}
                            if (!!r?.fieldName)
                                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                // @ts-ignore
                                obj[r?.fieldName] = !!r?.value?.title ? r?.value?.title : r?.value
                            return obj
                        }),
                    )
                })
                const obj = {} as any

                obj[employeeId] = JSON.stringify(r)

                return obj
            }
        })
        .flat()

    const result = Object.assign({}, ...form)
    try {
        const aaa = {
            Title: result.reason,
            Employee: employeeId,
            WorkDays: [
                {
                    DateOfEmployment: result.holiday_work_date,
                    DayOfRest: result.extra_holiday_date,
                },
            ],
        }
        await applicationsModel.effects.postApplicationFx(aaa)
        setLoading(false)
        setCompleted(true)
    } catch (error) {
        setLoading(false)
        popUpMessageModel.events.evokePopUpMessage({
            message: `Форма отправлена успешно`,
            type: 'success',
            time: 30000,
        })
    }
}

export default SendHrFormHolidayWork
