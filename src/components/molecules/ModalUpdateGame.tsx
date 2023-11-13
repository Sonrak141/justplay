
import Modal from '@mui/material/Modal';
import { useModal } from '../../context/modalContext.tsx'
import Box from "@mui/material/Box";
import UpdateGameForm from "../atoms/UpdateGameForm.tsx";

type ModalUpdateGame = {
    idGame: number;
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
const ModalUpdateGame = ({idGame, update}:ModalUpdateGame) => {
    const { updateIsOpen, closeUpdate } = useModal();


    return (
        <div>
            <Modal
                open={updateIsOpen}
                onClose={closeUpdate}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                   <UpdateGameForm id={idGame} updateTable={update} />
                </Box>

            </Modal>
        </div>
    );
};

export default ModalUpdateGame;