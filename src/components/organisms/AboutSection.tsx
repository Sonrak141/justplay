import Button from "../atoms/Button.tsx";
import {useModal} from "../../context/modalContext.tsx";

const AboutSection = () => {
    const {openModal} = useModal()
    return (
        <div className='bg-[#ff5a5f] text-white py-32 text-center w-full flex flex-col items-center justify-around md:flex-row'>
            <img src="https://static.wixstatic.com/media/7f2dd5_e01be8e48c2b4373adaf035cbc9aa644~mv2.jpg/v1/fill/w_853,h_440,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/7f2dd5_e01be8e48c2b4373adaf035cbc9aa644~mv2.jpg" alt='jsutPlay' className='md:ml-10 mb-10 md:mb-0'/>
            <div>
                <h1 className='font-bold text-3xl md:text-6xl mb-4'>Pickup games,
                    leagues and tournaments
                    near you.</h1>
                <h3 className='w-[80%] text-center mx-auto mb-10'>
                We believe you should be able to play the sport you love when and where you want to.
                With the Just Play app, you can. No hassle. No commitment. Just Play.
                </h3>
                <Button action={openModal} label={'Reserve your next match'} primary={false}/>
            </div>
        </div>
    );
};

export default AboutSection;