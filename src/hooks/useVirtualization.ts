import { useCallback, useEffect, useRef, useState } from 'react';

type IUseVirtualScroll<T> = {
    lineHeight: number;
    howManyILinesShouldDisplay: number;
    scrollContainerQuery: string;
    data: Array<T>;
};

/**
 * `useVirtualScroll` É um hook customizado que habilita a renderização de listas de forma virtualizada.
 */
export function useVirtualScroll<T>({
    data,
    howManyILinesShouldDisplay,
    scrollContainerQuery,
    lineHeight,
    }: IUseVirtualScroll<T>) {
    const [scrollYPos, setScrollYPos] = useState(0);
    const [virtualData, setVirtualData] = useState<Array<T>>([]);

    const initialData = data;

    const maxDataIndex = useRef(initialData.length);
    const topOffset = useRef(0);
    const bottomOffset = useRef(maxDataIndex.current * lineHeight);
    const scrollContainerElement = document.querySelector(scrollContainerQuery);

    const getVisibleData = useCallback(
        (offset: number, end: number) => {
        return initialData.slice(offset, end);
        },
        [initialData]
    );


    const updateVisibleData = useCallback(
        (scrollY: number) => {
        const index = Math.floor(scrollY / lineHeight);
        const end = Math.min(index + howManyILinesShouldDisplay - 1, maxDataIndex.current);
        if (index <= end) {
            const visibleData = getVisibleData(index, end);
            topOffset.current = Math.max(index * lineHeight);
            bottomOffset.current = Math.max(
            maxDataIndex.current * lineHeight - topOffset.current - visibleData.length * lineHeight,
            0
            );
            setVirtualData(visibleData);
        } else {
            const visibleData = getVisibleData(lineHeight * maxDataIndex.current, end);
            topOffset.current = Math.max(lineHeight * maxDataIndex.current);
            bottomOffset.current = Math.max(
            maxDataIndex.current * lineHeight - topOffset.current - visibleData.length * lineHeight,
            0
            );
            setVirtualData(visibleData);
        }
        },
        [lineHeight, howManyILinesShouldDisplay, getVisibleData]
    );

    const onScroll = useCallback(() => {
        if (scrollContainerElement?.scrollTop) {
            return setScrollYPos(scrollContainerElement.scrollTop);
        }
    }, [scrollContainerElement]);

    useEffect(() => {
        const handler = setTimeout(() => {
        updateVisibleData(scrollYPos);
        }, 30);
        return () => {
        clearTimeout(handler);
        };
    }, [scrollYPos, updateVisibleData]);

    useEffect(() => {
            if (howManyILinesShouldDisplay && lineHeight && scrollContainerElement) {
                scrollContainerElement.addEventListener('scroll', onScroll, true);
            }
        return () => {
            if (howManyILinesShouldDisplay && lineHeight && scrollContainerElement) {
                scrollContainerElement.removeEventListener('scroll', onScroll);
            }
        };
    }, [howManyILinesShouldDisplay, lineHeight, onScroll, scrollContainerElement]);

    useEffect(() => {
        maxDataIndex.current = initialData.length;
        // if (scrollContainerElement) {
        //     scrollContainerElement.scrollTo(0, initialData.length / 2);
        // }
    }, [initialData, scrollContainerElement]);

    return {
        virtualData,
        topOffset,
        bottomOffset,
    };
}