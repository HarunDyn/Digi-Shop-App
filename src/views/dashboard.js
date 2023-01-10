// /* eslint-disable jsx-a11y/alt-text */
import Slider from '../components/Slider/Slider'
import Slide from 'react-reveal/Slide';
import { motion } from "framer-motion";
import Fade from 'react-reveal/Fade';
import Logo from '../assets/bg.png'
import './dashboard.css'

const Dashboard = () => {
    return (
        <motion.div
            className="container text-center  bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3 }}
        >
            <div className='wrapper'  >
                <Slide left>
                    <div className='banner' >
                        <img src={Logo} alt="Logo1" className="banner-img" style={{ width: "100%", height: "100%" }} />
                        <span className='bg-transparent'></span>
                    </div>
                </Slide>

                <Slide right>
                    <div className='slider' >
                        <Fade left big cascade >
                            <h1 className='font-AverGardePro banner-header'>Everyday items, we have something to suit every occasion.</h1>
                        </Fade>
                        <p className='banner-description'>
                            At suspendisse augue lectus arcu, accumsan ut sit posuere vitae sit tincidunt semper eu proin leo gravida cursus.
                        </p>
                        <span className='banner-shop' style={{ fontWeight: "900" }}>Shop All everyday Items</span>
                        <div className='slider-comp'>
                            <Slider />
                        </div>
                    </div>
                </Slide>
            </div >
        </motion.div>
    )
}

export default Dashboard