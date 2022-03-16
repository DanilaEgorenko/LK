import { Colors } from '@consts'
import { popUpMessageModel } from '@entities/pop-up-message'
import { Button } from '@ui/atoms'
import React, { useCallback, useEffect } from 'react'
import { FiX } from 'react-icons/fi'
import styled from 'styled-components'

const PopUpMessages = styled.div``

const PopUpMessageWrapper = styled.div<{
    isOpen: boolean
    color: string
    isClickable: boolean
    position: number
    height: string
}>`
    width: 300px;
    border-radius: var(--brLight);
    background: ${({ color }) => Colors[color].dark};
    position: absolute;
    bottom: 20px;
    right: 20px;
    z-index: 100;
    transition: 0.2s transform, 0.2s opacity, 0.2s visibility;
    transform: translateY(
        ${({ isOpen, position, height }) => (isOpen ? `calc(-${position} * ${height} - ${position * 10}px)` : '-20px')}
    );
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
    padding: 10px;
    padding-right: 30px;
    text-align: left;
    color: ${({ color }) => Colors[color].main};
    font-weight: 600;
    cursor: ${({ isClickable }) => (isClickable ? 'pointer' : 'normal')};

    a {
        color: #fff;
    }

    button {
        position: absolute;
        top: 4px;
        right: 4px;
        background: transparent;
        width: 28px;
        height: 28px;
        border-radius: 6px;
        padding: 5px;
        color: #fff;

        &:hover {
            background: #ffffff5c;
        }
    }

    @media (max-width: 1000px) {
        top: 20px;
        bottom: auto;
        left: 50%;
        transform: translate(${({ isOpen }) => (isOpen ? '-50%, 0px' : '-50%, -20px')});
        font-size: 0.8em;
    }
`

const PopUpMessage = () => {
    const { popUps } = popUpMessageModel.selectors.usePopUpMessage()

    // useEffect(() => {
    //     if (isOpen) {
    //         setTimeout(() => {
    //             popUpMessageModel.events.openPopUpMessage({ isOpen: !isOpen })
    //         }, time)
    //     }
    // }, [isOpen])

    const handleOnClick = useCallback(
        (i: number) => {
            const click = popUps[i].onClick
            if (!!click) {
                click()
                popUpMessageModel.events.openPopUpMessage({ isOpen: !popUps[i].isOpen })
            }
        },
        [popUps],
    )

    return (
        <PopUpMessages>
            {popUps.map((popUp, i) => {
                return (
                    <PopUpMessageWrapper
                        isOpen={popUp.isOpen}
                        isClickable={!!popUp.onClick}
                        color={popUp.type === 'success' ? 'green' : popUp.type === 'info' ? 'darkBlue' : 'red'}
                        onClick={() => handleOnClick(i)}
                        key={i}
                        position={i}
                        height={((popUps[i - 1]?.message?.toString().length ?? 0) * 1.5).toString() + 'px'}
                    >
                        <Button
                            onClick={() => popUpMessageModel.events.openPopUpMessage({ isOpen: false })}
                            icon={<FiX />}
                        />
                        {popUp.message}
                    </PopUpMessageWrapper>
                )
            })}
        </PopUpMessages>
    )
}

export default PopUpMessage
