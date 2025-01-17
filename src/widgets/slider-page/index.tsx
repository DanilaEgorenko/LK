import { Error } from '@ui/atoms'
import convertHorizontalAlign from '@ui/list/lib/convert-horizontal-align'
import { Align } from '@ui/types'
import useResize from '@utils/hooks/use-resize'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Slider } from 'widgets'

const SliderPageWrapper = styled.div<{ width?: string; align: Align; maxWidth?: string }>`
    display: flex;
    align-items: ${({ align }) => convertHorizontalAlign(align)};
    flex-direction: column;
    width: ${({ width }) => width ?? '100%'};
    max-width: ${({ maxWidth }) => maxWidth ?? '100%'};
    height: 100%;

    & > div {
        display: flex;
        width: 100%;
        max-width: 100%;
        overflow-x: auto;
        scroll-snap-type: x mandatory;

        &::-webkit-scrollbar {
            display: none;
        }

        & > * + * {
            margin-left: 10px;
        }

        .slider-page {
            min-width: 100%;
            scroll-snap-align: center;
        }
    }

    .slider-content {
        height: 100%;
        overflow-y: auto;
        margin-top: 10px;
        width: 100%;
    }

    @media (max-width: 1000px) {
        & > div {
            scroll-behavior: smooth;

            .slider-page {
                min-width: 100%;
                scroll-snap-align: center;
            }
        }
    }
`

interface Page {
    title: string
    condition?: boolean
    content: React.ReactNode
}

interface Props {
    pages: Page[]
    currentPage?: number
    width?: string
    maxWidth?: string
    className?: string
    sliderWidth?: string
    appearance?: boolean
    align?: Align
}

const SliderPage = ({
    pages,
    currentPage = 0,
    width,
    className,
    maxWidth,
    sliderWidth,
    align = 'center',
    appearance = true,
}: Props) => {
    const [page, setPage] = useState(currentPage)
    const { width: screenWidth } = useResize()
    const sliderContentRef = useRef<HTMLDivElement | null>(null)

    const handleScroll = () => {
        if (sliderContentRef?.current && screenWidth <= 1000) {
            setPage(Math.round(sliderContentRef.current?.scrollLeft / screenWidth))
        }
    }

    const handleChangePage = (page: number) => {
        setPage(page)

        if (sliderContentRef?.current) {
            sliderContentRef.current.scrollLeft = sliderContentRef.current.clientWidth * page
        }
    }

    useEffect(() => {
        handleChangePage(page)
    }, [currentPage, screenWidth])

    return (
        <SliderPageWrapper width={width} align={align} maxWidth={maxWidth}>
            <Slider
                pages={pages.map(({ title, condition }) => ({
                    title,
                    condition,
                }))}
                currentPage={page}
                setCurrentPage={handleChangePage}
                sliderWidth={sliderWidth}
                appearance={appearance}
            />
            <div className={className ?? 'slider-content'} ref={sliderContentRef} onScroll={handleScroll}>
                {pages.map((page) =>
                    (page.condition !== undefined && page.condition) || page.condition === undefined ? (
                        <div className="slider-page" key={page.title}>
                            {page.content}
                        </div>
                    ) : (
                        <div className="slider-page" key={page.title}>
                            <Error text={'Нет данных'} />
                        </div>
                    ),
                )}
            </div>
        </SliderPageWrapper>
    )
}

export default SliderPage
