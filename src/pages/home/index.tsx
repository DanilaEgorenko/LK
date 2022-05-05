import { scheduleModel } from '@entities/schedule'
import { userModel } from '@entities/user'
import ScheduleAndNotification from '@features/home/ui/organisms/schedule-and-notification'
import ShortCutLinks from '@features/home/ui/organisms/short-cut-links'
import UserInfo from '@features/home/ui/organisms/user-info'
import LinksList from '@features/home/ui/test/links-list'
import PageLink from '@features/home/ui/test/page-link'
import { Wrapper } from '@ui/atoms'
import React, { useEffect } from 'react'
import { FiCalendar, FiCheck, FiCheckSquare } from 'react-icons/fi'
import { Content } from './ui/atoms/content'

const Home = () => {
    const {
        data: { user },
        error,
    } = userModel.selectors.useUser()

    useEffect(() => {
        scheduleModel.effects.getScheduleFx(user)
    }, [])

    return (
        <Wrapper loading={!user} load={() => null} error={error} data={user}>
            <Content>
                {!!user && (
                    <div className="home-page-content-inner">
                        <UserInfo user={user} />
                        <ScheduleAndNotification />
                        <ShortCutLinks />
                        <LinksList
                            title="Разделы"
                            links={[
                                {
                                    icon: <FiCheckSquare />,
                                    title: 'Соглашение об электронном взаимодействии',
                                    color: 'purple',
                                    isNew: true,
                                },
                                {
                                    icon: <FiCheckSquare />,
                                    title: 'Расписание',
                                    color: 'blue',
                                },
                                {
                                    icon: <FiCheckSquare />,
                                    title: 'Соглашение об электронном взаимодействии',
                                    color: 'red',
                                },
                                {
                                    icon: <FiCheckSquare />,
                                    title: 'Соглашение об электронном взаимодействии',
                                    color: 'green',
                                },
                                {
                                    icon: <FiCheckSquare />,
                                    title: 'Соглашение об электронном взаимодействии',
                                    color: 'orange',
                                },
                                {
                                    icon: <FiCheckSquare />,
                                    title: 'Соглашение об электронном взаимодействии',
                                    color: 'lightGreen',
                                },
                            ]}
                        />
                    </div>
                )}
            </Content>
        </Wrapper>
    )
}

export default Home
