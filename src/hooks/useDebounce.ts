import { useEffect, useState } from 'react';

/**
 * `useDebounce` É um hook customizado que espera um intervalo de tempo entre eventos para retornar o estado 'debouncedValue' hidratado.
 */
export const useDebounce = <T,>(value: T, delay: number): T | null => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
};