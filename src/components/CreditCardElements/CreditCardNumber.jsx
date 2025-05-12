import React, { useEffect, useRef } from 'react';
import { useCard } from '../../CardContext';
import { motion } from 'framer-motion';

const CreditCardNumber = () => {
    const { currentFocus, cardNumber, previousFocus } = useCard();

    const prevCardNumber = useRef('');

    const cleaned = cardNumber.replace(/\D/g, '').slice(0, 16);
    const padded = cleaned.padEnd(16, '#');


    const chunks = Array.from({ length: 4 }, (_, i) => padded.slice(i * 4, i * 4 + 4));


    useEffect(() => {
        prevCardNumber.current = cleaned;
    }, [cleaned]);

    return (
        <div
            className="flex relative justify-between items-center border gap-4 rounded-md px-2 py-1"
            style={{ border: currentFocus === 'cardNumber' ? '1px solid #ffffff65' : '1px solid transparent' }} >


            {/* <div className={`absolute top-0 left-0 right-0 w-full h-full rounded-md ${currentFocus === "cardHolder" && previousFocus === "cardNumber" ? 'animate-slide-in-bottom' : ""} delay-700`} style={{ border: currentFocus === 'cardNumber' ? '1px solid #ffffff65' : '1px solid transparent' }}>


            </div> */}




            {chunks.map((chunk, i) => (
                <div key={i} className="w-1/4 flex justify-between">

                    {chunk.split('').map((char, j) => {
                        const index = i * 4 + j;
                        const isChanged = char !== (prevCardNumber.current[index] || '#');

                        return (

                            <motion.span
                                key={`${char}-${index}`}
                                className="w-1/4 text-[18px] font-mono text-white text-center"
                                initial={isChanged ? { opacity: 0, y: 8 } : false}
                                animate={isChanged ? { opacity: 1, y: 0 } : false}
                                transition={isChanged ? { duration: 0.3, ease: 'easeOut' } : {}}
                                style={{ display: 'inline-block', transformStyle: 'preserve-3d' }} >
                                {char}
                            </motion.span>
                        );
                    })}
                </div>
            ))}
        </div>
    );
};

export default CreditCardNumber;
// < !--ℑ♑︎  亖⌽⎭🂱⎶☀️☀️⌶⍱   -->