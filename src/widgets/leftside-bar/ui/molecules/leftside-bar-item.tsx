import { IRoute } from '@app/routes/general-routes'
import { menuModel } from '@entities/menu'
import Notification from '@ui/notification'
import React from 'react'
import LeftsideBarItemWrapper from '../atoms/leftside-bar-item-wrapper'

type Props = IRoute & { isCurrent: boolean }

const LeftsideBarItem = ({ path, icon, title, isCurrent, isAdmin, color, notifications }: Props) => {
    // const { isOpen } = menuModel.selectors.useMenu()

    return (
        <LeftsideBarItemWrapper
            to={path}
            className="leftside-bar-item"
            color={color}
            isCurrent={isCurrent}
            onClick={() => {
                menuModel.events.changeOpen({ isOpen: false, currentPage: path.slice(1, path.length) })
            }}
            title={title}
        >
            <Notification className="notification" top="50%" visible={isAdmin} right="-20px" color="pink">
                A
            </Notification>
            <Notification
                className="notification"
                top="50%"
                visible={!!notifications}
                right={isAdmin ? '0px' : '-20px'}
                color="red"
            >
                {notifications}
            </Notification>
            {icon}
            <span className="title">{title}</span>
        </LeftsideBarItemWrapper>
    )
}

export default React.memo(LeftsideBarItem)
