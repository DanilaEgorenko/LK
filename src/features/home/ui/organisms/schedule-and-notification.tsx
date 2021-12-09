import React, { useMemo } from 'react'
import { scheduleModel } from '../../../../entities/schedule'
import { IWeekSchedule } from '../../../../shared/api/model'
import { DaySchedule } from '../../../schedule/ui'
import { Section } from '../atoms/section'

const ScheduleAndNotification = () => {
    const { currentModule, schedule, currentDay } = scheduleModel.selectors.useSchedule()
    const currentStringDay = useMemo(
        () => Object.keys(schedule[currentModule]).find((_, index) => index + 1 === currentDay) ?? 'monday',
        [currentDay],
    )

    return (
        <Section>
            <DaySchedule
                subjects={schedule[currentModule][currentStringDay as keyof IWeekSchedule].subjects}
                width={400}
                height={156}
                isCurrent
                index={0}
            />
        </Section>
    )
}

export default ScheduleAndNotification
