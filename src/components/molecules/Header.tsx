import Logo from "../atoms/Logo.tsx";
import Button from "../atoms/Button.tsx";
import { useModal } from '../../context/modalContext.tsx'
const Header = () => {
    const {  openModal } = useModal();


    return (
        <div className="flex justify-between mx-10 items-center">
           <Logo/>
           <Button action={openModal} label="Create a new game" primary={true}/>
        </div>
    );
};

export default Header;