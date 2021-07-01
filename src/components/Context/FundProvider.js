import {createContext, useContext, useState} from 'react';

const FundContext = createContext({});
export const useFunds = () => useContext(FundContext);

export default function FundProvider({children}){
    const [selectedCard, selectProductCard] = useState(null);
    const [supportModalIsOpen, toggleSupportModal] = useState(false);
    const [thankYouModalIsOpen, toggleThankYouModal] = useState(false);

    return (
        <FundContext.Provider value={{selectedCard, selectProductCard, supportModalIsOpen, toggleSupportModal, thankYouModalIsOpen, toggleThankYouModal}}>
            {children}
        </FundContext.Provider>
    )
}