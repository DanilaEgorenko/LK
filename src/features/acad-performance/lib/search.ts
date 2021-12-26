import { prepare } from '@entities/acad-performance/lib/prepare'
import { AcadPerformance } from '@entities/acad-performance/model'
import localizeDate from '@utils/localize-date'
import normalizeString from '@utils/normalize-string'

const search = (value: string, subjects: AcadPerformance[]) => {
    return prepare(
        subjects.filter(
            (subject) =>
                normalizeString(subject.name).includes(normalizeString(value)) ||
                normalizeString(subject.teacher).includes(normalizeString(value)) ||
                normalizeString(localizeDate(subject.exam_date)).includes(normalizeString(value)) ||
                normalizeString(subject.bill_num).includes(normalizeString(value)),
        ),
    )
}

export default search
