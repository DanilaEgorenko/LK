import { CHAT_ROUTE } from '@app/routes/general-routes'
import { Colors } from '@consts'
import { Button } from '@ui/button'
import React from 'react'
import { FiMessageCircle } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import useModal from 'widgets/modal'
import { UserModal } from '../atoms'

interface Props {
    name: string
    avatar?: string
}

const StudentModal = ({ name, avatar }: Props) => {
    const { close } = useModal()

    return (
        <UserModal avatar={avatar} name={name}>
            <Link to={`${CHAT_ROUTE}/${name}`}>
                <Button
                    icon={<FiMessageCircle />}
                    text={'Написать'}
                    onClick={() => close()}
                    width="130px"
                    background={Colors.purple.light}
                    textColor="#fff"
                />
            </Link>
        </UserModal>
    )
}

export default StudentModal
