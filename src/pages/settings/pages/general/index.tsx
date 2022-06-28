import React, { useState } from 'react'
import { GeneralType, OLD_LK_URL } from '@consts'
import { useSettings } from '@utils/contexts/settings-context'
import ToggleArea, { ToggleItem } from '@ui/organisms/toggle-area'
import { Button, LinkButton } from '@ui/atoms'

const General = () => {
    const { setting, change } = useSettings<GeneralType>('general')

    // const [toggles, setToggles] = useState<ToggleItem[]>([
    //     {
    //         title: 'Push-уведомления',
    //         state: setting?.notifications ?? false,
    //         action: (state: boolean) => change({ notifications: state }),
    //     },
    // ])

    return (
        <>
            <LinkButton
                text={'Перейти к старому дизайну'}
                onClick={() => {
                    localStorage.setItem('useOldVersion', 'true')
                }}
                background="var(--purple)"
                href={`${OLD_LK_URL}/index.php`}
            />
        </>
    )
}

export default General
