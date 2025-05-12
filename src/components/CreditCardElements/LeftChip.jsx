import chipLogo from '../../assets/chipLogo.jpg'


const LeftChip = () => {
    return (
        <img src={chipLogo} alt="Chip Logo" style={{ borderRadius: "4px", objectFit: "contain", width: '60px', }} />
    )
}

export default LeftChip