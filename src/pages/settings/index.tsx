import { menuModel } from '@entities/menu'
import { settingsModel } from '@entities/settings'
import { ListOfSettings } from '@features/settings'
import ContentWrapper from '@ui/content-wrapper'
import { Route, Switch } from 'react-router'
import styled from 'styled-components'
import React from 'react'

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;

    .settings-page {
        height: 90%;
        width: 100%;
        border-radius: 10px;
        overflow-y: auto;
        margin-top: 10px;
    }

    @media (max-width: 800px) {
        width: 100%;
        .settings-page {
            font-size: 0.8em;
        }
    }
`

const SettingsPage = () => {
    const { allRoutes } = menuModel.selectors.useMenu()
    const { settings } = settingsModel.selectors.useSettings()

    if (!allRoutes) return null

    const renderList = (name: string) => {
        const Wrapper = allRoutes[name].Component
        return (
            <Route path={allRoutes[name].path} key={name}>
                <ContentWrapper>
                    <Wrapper />
                </ContentWrapper>
            </Route>
        )
    }

    if (settings === undefined) {
        return null
    }
    return (
        <Wrapper>
            <ListOfSettings config={Object.keys(settings)} />
            <Switch>{Object.keys(settings).map(renderList)}</Switch>
        </Wrapper>
    )
}

export default SettingsPage
