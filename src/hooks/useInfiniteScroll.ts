import { useCallback, useEffect, useState } from 'react';
import { GetPokemonsParams } from '../domains/pokemon/types';
import useFetchPokemons from './UseFetchPokemons';

const getScrollTop = (el: Document | Element) => {
    if (el === document || el === document.body) {
        return Math.max(
            window.scrollY,
            document.documentElement.scrollTop,
            document.body.scrollTop
        );
    }
    return (el as Element).scrollTop;
};

const getScrollHeight = (el: Document | Element) =>
    (el as Element).scrollHeight ||
    Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);

const getClientHeight = (el: Document | Element) =>
    (el as Element).clientHeight ||
    Math.max(document.documentElement.clientHeight, document.body.clientHeight);

type UseInfiniteScroll = {
    fetchPokemons: (params: GetPokemonsParams) => Promise<void>;
};

/**
 * `useInfiniteScroll` É um hook customizado que viabiliza o uso de scroll infinito.
 */
export function useInfiniteScroll({ fetchPokemons }: UseInfiniteScroll) {
    const { limitOfPokemons } = useFetchPokemons();
    const [isFetching, setIsFetching] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);

    const resetCurrentPage = () => {
        setCurrentPage(0);
    };

    const isScrolling = useCallback(() => {
        const container = document.getElementById('list-items');

        if (container) {
            const scrollTop = getScrollTop(container);
            const scrollHeight = getScrollHeight(container);
            const clientHeight = getClientHeight(container);

            if (scrollHeight - scrollTop <= clientHeight && !isFetching) {
                setIsFetching(true);
                setCurrentPage(currentPage + 1);
            }
        }
    }, [currentPage, isFetching]);

    useEffect(() => {
        if (isFetching) {
            fetchPokemons({
                limit: limitOfPokemons,
                offset: (currentPage + 1) * limitOfPokemons,
            });
            setIsFetching(false);
        }
    }, [
        isFetching,
        fetchPokemons,
        setIsFetching,
        currentPage
    ]);

    useEffect(() => {
        window.addEventListener('scroll', isScrolling, true);

        return () => {
            window.removeEventListener('scroll', isScrolling, true);
        };
    }, [isScrolling]);

    return {
        setIsFetching,
        resetCurrentPage,
        currentPage,
    };
}
