import BlockWrapper from '@ui/block/styles'
import { Align, VerticalAlign } from '@ui/types'
import styled from 'styled-components'
import getTranslate from './lib/get-translate'

export type StyledProps = {
    textAlign?: Align
    color?: string
    align: { horizontal: Align; vertical: VerticalAlign }
    imageAlign?: { horizontal?: Align; vertical?: VerticalAlign }
    background?: string
}

const StoryPageWrapper = styled(BlockWrapper)<StyledProps>`
    overflow: hidden;
    position: relative;
    background: ${({ background }) => background};
    display: flex;
    justify-content: ${({ imageAlign }) =>
        imageAlign?.horizontal === 'left' ? 'flex-start' : imageAlign?.horizontal === 'right' ? 'flex-end' : 'center'};
    align-items: center;
    user-select: none;

    .text-content {
        width: 80%;
        height: fit-content;
        position: absolute;
        left: ${({ align }) => (align.horizontal === 'left' ? '30px' : align.horizontal === 'center' ? '50%' : 'auto')};
        right: ${({ align }) =>
            align.horizontal === 'right' ? '30px' : align.horizontal === 'center' ? '50%' : 'auto'};
        bottom: ${({ align }) => (align.vertical === 'bottom' ? '30px' : align.vertical === 'center' ? '50%' : 'auto')};
        top: ${({ align }) => (align.vertical === 'top' ? '30px' : align.vertical === 'center' ? '50%' : 'auto')};
        display: flex;
        flex-direction: column;
        gap: 7px;
        color: ${({ color }) => color ?? 'var(--text)'};
        transform: ${({ align }) => getTranslate(align)};
        text-align: ${({ textAlign }) => textAlign ?? 'left'};
    }

    @media (max-width: 700px) {
        border-radius: 0px;
    }
`

export default StoryPageWrapper
