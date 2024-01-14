import { useState } from 'react';
import DarkImg from '../../assets/website/dark-mode-button.png'
import LightImg from '../../assets/website/light-mode-button.png'

const Darkmode = () => {
    const [isActive, SetActive] = useState(false)
    return (
        <div className='w-[3.3vw] relative' onClick={() => SetActive((prev) => !prev)}>

            {
                isActive ? 
                <img src={DarkImg} className=' object-cover relative top-0 right-0' alt="" /> 
                : <img src={LightImg} className=' object-cover relative left-0' alt="" />
            }


        </div>
    );
};

export default Darkmode;