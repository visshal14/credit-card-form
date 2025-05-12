import { useCard } from '../../CardContext'
import { motion, AnimatePresence } from "framer-motion";
import useLastCharacterChange from '../../hooks/useLastCharacterChange'
import { useEffect, useState } from 'react';
const CardHolder = ({ }) => {
    const { currentFocus, cardHolder, previousFocus } = useCard()

    const upperCaseName = cardHolder.toUpperCase() || 'AD SOYAD';
    const start = upperCaseName.slice(0, -1);
    const last = upperCaseName.slice(-1);
    const [addBorder, setAddBorder] = useState(false)

    const { lastCharChanged, lastChar } = useLastCharacterChange(upperCaseName);


    useEffect(() => {
        if (currentFocus === "cardHolder") {
            setAddBorder(true)

        }
        else if (currentFocus === "expires" && previousFocus === "cardHolder") {
            setTimeout(() => {
                setAddBorder(false)
            }, 600)

        } else {
            setAddBorder(false)
        }
    }, [currentFocus])

    return (
        <div className="flex relative flex-1 flex-col items-start rounded-sm px-2 py-1" >

            <div className={`absolute top-0 right-0 w-full h-full rounded-md ${currentFocus === "expires" && previousFocus === "cardHolder" ? "animate-slide-in-right" : ""} ${currentFocus === "cardHolder" && previousFocus === "expires" ? "animate-slide-in-right-holder" : ""} `} style={{ border: addBorder ? "1px solid #ffffff65" : "1px solid transparent" }}>

            </div>


            <p className="text-[9px] font-mono text-gray-400 ">Card Holder</p>
            <p className="font-medium text-sm uppercase font-mono min-h-[20px] flex ">
                {start}
                <AnimatePresence mode="wait">
                    {lastCharChanged ? (
                        <motion.span
                            key={lastChar}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2 }}
                            style={{ display: 'inline-block', transformStyle: 'preserve-3d', willChange: 'transform', backfaceVisibility: 'hidden' }}>
                            {lastChar}
                        </motion.span>
                    ) : (
                        <span key="static">{last}</span>
                    )}
                </AnimatePresence>
            </p>
        </div>
    )
}

export default CardHolder
//  // < !--ℑ♑︎  亖⌽⎭🂱⎶☀️☀️⌶⍱   -->