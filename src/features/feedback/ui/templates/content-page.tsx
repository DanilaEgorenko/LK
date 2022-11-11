import { CenterPage, Title } from '@ui/atoms'
import Block from '@ui/block'
import React from 'react'
import { HelpLinks, OtherContacts } from '../organisms'

export function ContentPage() {
    return (
        <CenterPage alignItems="flex-start">
            <Block orientation="vertical" height="fit-content" maxWidth="650px" gap="10px">
                <Title size={3} align="left" bottomGap>
                    Обратная связь
                </Title>
                <HelpLinks />
                <OtherContacts />
                {/*<AskForm />*/}
            </Block>
        </CenterPage>
    )
}
