import React, { useCallback } from 'react'
import { IconType } from 'react-icons/lib'
import { CustomizeLeftsideBarWrapper } from '../atoms'
import AddToHomeButton from '../atoms/add-to-home-button'
import AddToMenuButton from '../atoms/add-to-menu-buttom'

interface Props {
    id: string
    title: string
    icon: IconType
    path: string
    chosen: boolean
    shortItemChosen: boolean
    switchMenuItem: (id: string) => void
    switchShortChosen: (id: string) => void
}

const CustomizeLeftside = ({
    id,
    icon: Icon,
    title,
    chosen,
    switchMenuItem,
    shortItemChosen,
    switchShortChosen,
}: Props) => {
    const handleShortChosen = useCallback(
        (e?: React.MouseEvent<HTMLElement, MouseEvent> | undefined) => {
            e?.stopPropagation()
            switchShortChosen(id)
        },
        [id, switchShortChosen],
    )

    return (
        <CustomizeLeftsideBarWrapper chosen={chosen} onClick={() => switchMenuItem(id)}>
            <div className="icon-and-title">
                <Icon />
                <strong>{title}</strong>
            </div>
            <div className="buttons">
                <AddToHomeButton chosen={shortItemChosen} onClick={handleShortChosen} />
                <AddToMenuButton
                    chosen={chosen}
                    onClick={() => {
                        switchMenuItem(id)
                    }}
                />
            </div>
        </CustomizeLeftsideBarWrapper>
    )
}

export default React.memo(CustomizeLeftside)
