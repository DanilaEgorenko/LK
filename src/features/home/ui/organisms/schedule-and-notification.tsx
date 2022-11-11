import { scheduleModel } from '@entities/schedule'
import getLessons from '@features/home/lib/get-lessons'
import List from '@ui/list'
import React, { useMemo } from 'react'
import { DaySchedule } from '../../../schedule/ui'
import PaymentsWidget from '../molecules/payments-widget'
import { settingsModel } from '@entities/settings'

const ScheduleAndNotification = () => {
    const {
        data: { schedule, currentDayString, error },
    } = scheduleModel.selectors.useSchedule()

    const { widgetSchedule, widgetPayment } =
        settingsModel.selectors.useSettings().settings['settings-home-page'].property

    const lessons = useMemo(() => getLessons(schedule, currentDayString), [schedule, currentDayString])

    return (
        <List direction="horizontal" title="Виджеты" showPages gap={10} visible={!!widgetSchedule || !!widgetPayment}>
            {widgetSchedule && (
                <DaySchedule
                    lessons={!schedule && currentDayString === 'sunday' ? [] : lessons}
                    width={400}
                    height={156}
                    isCurrent
                    topInfo=""
                    error={error}
                />
            )}
            {widgetPayment && <PaymentsWidget />}
        </List>
    )
}

export default ScheduleAndNotification
