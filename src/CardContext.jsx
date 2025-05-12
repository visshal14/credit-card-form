import { createContext, useState, useContext, useEffect } from 'react';
import valid from 'card-validator';
const CardContext = createContext();

export const CardProvider = ({ children }) => {

    const [cardNumber, setCardNumber] = useState('')

    const [cardHolder, setCardHolder] = useState('')
    const [expiryMonth, setExpiryMonth] = useState('')
    const [expiryYear, setExpiryYear] = useState('')
    const [cvv, setCvv] = useState('')
    const [previousFocus, setPreviousFocus] = useState('')
    const [currentFocus, setCurrentFocus] = useState('')
    const [cardType, setCardType] = useState('')


    const updateCvv = (newData) => {
        if (newData.length <= 3) {
            setCvv(newData)
        }
    }

    const updateMonth = (newData) => {
        if (newData < 10) {
            setExpiryMonth("0" + newData)
        } else {
            setExpiryMonth(newData)
        }
    }
    const updateYear = (newData) => {
        setExpiryYear(newData.toString().slice(-2));
    }


    const updateFocus = (type, value) => {

        setPreviousFocus(currentFocus)

        if (type === 1) {
            setCurrentFocus(value)
        } else {
            // setCurrentFocus("")
        }

    }

    const updateCardNumber = (newData) => {


        let digitsOnly = newData.replace(/\D/g, '');
        if (digitsOnly.length > 16) {
            digitsOnly = digitsOnly.slice(0, 16);
        }

        const formatted = digitsOnly.replace(/(.{4})/g, '$1 ').trim();

        setCardNumber(formatted);

        const numberValidation = valid.number(digitsOnly); // validate raw digits

        if (numberValidation.card) {
            setCardType(numberValidation.card.type);
        } else {
            setCardType(null);
        }
    };


    // < !--ℑ♑︎  亖⌽⎭🂱⎶☀️☀️⌶⍱   -->

    const state = {
        cardNumber,
        setCardNumber,
        updateCardNumber,
        cardHolder,
        cardType,
        setCardHolder,
        expiryMonth,
        updateMonth,
        expiryYear,
        updateYear,
        cvv,
        setCvv,
        updateCvv,
        currentFocus,
        updateFocus,
        previousFocus
    }
    return (
        <CardContext.Provider value={state}>
            {children}
        </CardContext.Provider>
    );
};

export const useCard = () => useContext(CardContext);
