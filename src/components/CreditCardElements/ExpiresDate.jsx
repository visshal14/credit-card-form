import { useCard } from '../../CardContext';
import { motion } from 'framer-motion';
import useLastCharacterChange from '../../hooks/useLastCharacterChange';

const ExpiresDate = () => {
    const { currentFocus, expiryMonth = '', expiryYear = '', previousFocus } = useCard();

    const { lastCharChanged: monthLastCharChanged } = useLastCharacterChange(expiryMonth);
    const { lastCharChanged: yearLastCharChanged } = useLastCharacterChange(expiryYear);

    const renderAnimChars = (current, prev, isMonth = false) => {
        const padded = current.padEnd(2, isMonth ? 'M' : 'Y');

        return padded.split('').map((char, i) => {
            const changed = char !== (prev[i] || '');

            return (
                <motion.span
                    key={`${char}-${i}`}
                    initial={changed ? { opacity: 0, y: 6, rotateX: 90 } : false}
                    animate={changed ? { opacity: 1, y: 0, rotateX: 0 } : false}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="inline-block"
                    style={{ transformStyle: 'preserve-3d' }} >
                    {char}
                </motion.span>
            );
        });
    };

    return (
        <div className="relative text-right rounded-sm px-3 py-1" >

            {currentFocus === "expires" && <div className={`absolute top-0 left-0 right-0 w-full h-full rounded-md ${currentFocus === "expires" && previousFocus === "cardHolder" ? 'animate-slide-in-left' : ""} delay-700`} style={{ border: currentFocus === "expires" ? "1px solid #ffffff65" : "1px solid transparent" }}>

            </div>}


            <p className="text-[9px] font-mono text-gray-400">Expires</p>
            <p className="font-medium text-sm uppercase font-mono">
                {renderAnimChars(expiryMonth, monthLastCharChanged ? expiryMonth.slice(0, -1) : '', true)}/{renderAnimChars(expiryYear, yearLastCharChanged ? expiryYear.slice(0, -1) : '')}
            </p>
        </div>
    );
};

export default ExpiresDate;
//  // < !--ℑ♑︎  亖⌽⎭🂱⎶☀️☀️⌶⍱   -->

