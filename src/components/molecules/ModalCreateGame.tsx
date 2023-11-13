
import Modal from '@mui/material/Modal';
import CreateGameForm from "../atoms/CreateGameForm.tsx";
import { useModal } from '../../context/modalContext.tsx'
import Box from "@mui/material/Box";

type ModalCreateGame = {
    update: ()=> void;
}

const style = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const ModalCreateGame = ({update}:ModalCreateGame) => {
    const { isOpen, closeModal } = useModal();


    return (
        <div>
            <Modal
                open={isOpen}
                onClose={closeModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <CreateGameForm updateTable={update}/>
                </Box>

            </Modal>
        </div>
    );
};

export default ModalCreateGame;