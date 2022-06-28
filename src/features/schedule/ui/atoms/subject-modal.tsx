import { ISubject } from '@api/model'
import { Divider, Title } from '@ui/atoms'
import calcTimeLeft from '@utils/calc-time-left'
import React from 'react'
import styled from 'styled-components'
import { User } from 'widgets'
import { Rooms, SubjectPlaceBlock } from '..'
import { NextSubject, Time } from '../atoms'
import Groups from './groups'

const SubjectModalWrapper = styled.div`
    @media (min-width: 1001px) {
        width: 550px;
    }

    height: 100%;
    overflow-y: auto;

    .date-interval {
        opacity: 0.6;
        font-size: 0.7em;
        font-weight: 600;
    }

    .time-and-next {
        display: flex;
        align-items: center;
        font-size: 0.7em;
        font-weight: bold;
        margin: 10px 0 5px 0;
        column-gap: 3px;
    }

    .teachers {
        & > * + * {
            margin-top: 5px;
        }
    }

    @media (max-width: 1000px) {
        padding: 10px;
    }
`

type Props = ISubject & { isCurrent: boolean; isNext?: boolean }

const SubjectModal = (props: Props) => {
    const { timeInterval, name, place, teachers, dateInterval, link, rooms, groups, isNext = false } = props

    return (
        <SubjectModalWrapper>
            <Groups groups={groups} isCurrent={false} />
            <span className="date-interval">{dateInterval}</span>
            <Title size={3} align="left">
                {name}
            </Title>
            <div className="time-and-next">
                <Time timeInterval={timeInterval} isCurrent={false} />
                <NextSubject timeLeft={calcTimeLeft(timeInterval)} isNext={isNext} />
                <Rooms rooms={rooms} inModal />
            </div>
            <SubjectPlaceBlock place={place} link={link} name={name} />
            <Divider margin="20px auto" />

            {!!teachers[0].length && (
                <>
                    <Title size={4} align="left" bottomGap>
                        Преподаватели
                    </Title>

                    <div className="teachers">
                        {teachers.map((teacher) => {
                            return <User type={'teacher'} name={teacher} key={teacher} />
                        })}
                    </div>
                </>
            )}
        </SubjectModalWrapper>
    )
}

export default SubjectModal
