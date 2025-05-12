import { useEffect, useRef, useState } from 'react';

const useLastCharacterChange = (value) => {
    const prevValueRef = useRef('');
    const [lastCharChanged, setLastCharChanged] = useState(false);
    const [lastChar, setLastChar] = useState('');

    useEffect(() => {
        const prevValue = prevValueRef.current;
        const prevLastChar = prevValue.slice(-1);
        const newLastChar = value.slice(-1);

        if (prevLastChar !== newLastChar) {
            setLastCharChanged(true);
            setLastChar(newLastChar);
            setTimeout(() => setLastCharChanged(false), 300);
        }

        prevValueRef.current = value;
    }, [value]);
    // < !--ℑ♑︎  亖⌽⎭🂱⎶☀️☀️⌶⍱   -->
    return { lastCharChanged, lastChar };
};
export default useLastCharacterChange