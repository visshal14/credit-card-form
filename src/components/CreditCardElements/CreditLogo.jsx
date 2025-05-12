
import visaLogo from '../../assets/visaLogo.png';
import mastercardLogo from '../../assets/mastercardLogo.png';
import rupayLogo from '../../assets/RupayLogo.png';
import discoverLogo from '../../assets/discoverLogo.png';
import { useCard } from '../../CardContext';


const CreditLogo = () => {


    const { cardType: type } = useCard()
    const cardTypeMap = {
        "visa": visaLogo,
        "mastercard": mastercardLogo,
        "rupay": rupayLogo,
        "discover": discoverLogo

    }

    const selectedLogo = cardTypeMap.hasOwnProperty(type) ? cardTypeMap[type] : cardTypeMap["visa"];


    return (
        <img src={selectedLogo} alt="Chip Logo" style={{ borderRadius: "4px", height: "fit-content", objectFit: "contain", width: '60px' }} />
    )
}

export default CreditLogo