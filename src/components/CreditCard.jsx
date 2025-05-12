import { motion } from 'framer-motion';
import LeftChip from './CreditCardElements/LeftChip'
import CreditLogo from './CreditCardElements/CreditLogo'
import CardHolder from './CreditCardElements/CardHolder'
import ExpiresDate from './CreditCardElements/ExpiresDate'
import CreditCardNumber from './CreditCardElements/CreditCardNumber'
import { useCard } from '../CardContext';
const CreditCard = ({ }) => {



    const { cvv, currentFocus } = useCard()

    return (
        <div className="w-[337px] h-[210px]  perspective-1000 rounded-lg mx-auto absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ transformStyle: 'preserve-3d' }}>
            <motion.div
                className="w-full h-full relative preserve-3d transition-transform duration-700   ease-out shadow-2xl rounded-lg"
                animate={{ rotateY: currentFocus === "cvv" ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                style={{ transformStyle: 'preserve-3d' }}>
                {/* front */}
                <div className="absolute w-full h-full overflow-hidden rounded-xl shadow-2xl " style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(0deg)',
                }}>
                    <div
                        className="w-full h-full p-6 flex flex-col justify-between bg-[#1a1f36] text-white"
                        style={{
                            backgroundImage: 'linear-gradient(to bottom right, rgba(255,0,0,0.05) 0%, rgba(255,0,0,0.1) 100%)',
                            backgroundSize: 'cover',
                        }}
                    >
                        <div className="flex justify-between items-start">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-red-500/30 to-purple-500/30 backdrop-blur"><LeftChip /></div>
                            <div className="text-right">
                                <CreditLogo type="discover" />
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="text-xl sm:text-2xl font-mono tracking-wider">
                                <CreditCardNumber />
                            </div>

                            <div className="flex gap-4 justify-between items-center">
                                <CardHolder />

                                <ExpiresDate />
                            </div>
                        </div>
                    </div>


                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute -right-12 -top-12 w-40 h-40 border border-red-500/20 rounded-full"></div>
                        <div className="absolute -left-12 -bottom-12 w-40 h-40 border border-red-500/20 rounded-full"></div>
                        <div className="absolute right-20 bottom-20 w-16 h-16 border border-red-500/30 rounded-full"></div>
                        <div className="absolute left-40 top-12 w-8 h-8 border border-red-500/30 rounded-full"></div>
                        <div className="absolute left-12 top-1/2 w-4 h-4 bg-red-500/20 rounded-full"></div>
                    </div>
                </div>

                {/* back */}
                <div className="absolute w-full h-full top-0 rounded-xl shadow-2xl overflow-hidden bg-[#1a1f36] " style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                }}>
                    <div className="w-full h-full flex flex-col " style={{
                        backgroundImage: 'linear-gradient(to bottom right, rgba(255,0,0,0.05) 0%, rgba(255,0,0,0.1) 100%)',
                        backgroundSize: 'cover'
                    }}>
                        {/* black strip */}
                        <div className="h-fit pt-6 w-full ">
                            <div className='h-[40px] w-full bg-black'></div>
                        </div>
                        <div className='flex flex-col items-end w-full p-4 text-white text-right'>
                            <p className='font-mono text-[9px] justify-self-end'>CVV</p>
                            <div className='min-h-[36px] rounded-sm w-full mt-[2px] bg-white p-2 text-sm text-right text-black '>{cvv}</div>
                        </div>
                        <div className=" px-6 text-right flex justify-end">
                            <CreditLogo />
                        </div>

                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default CreditCard