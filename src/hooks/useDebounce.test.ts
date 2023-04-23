import { renderHook } from '@testing-library/react-hooks';

import { useDebounce } from './useDebounce';

describe('useDebounce', () => {
    it('should return the debounced value', () => {
        const { result, waitForNextUpdate } = renderHook(() => useDebounce('value', 2000));
        waitForNextUpdate();
        expect(result.current).toBe('value');
    });
});