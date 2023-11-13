import  {useState} from 'react';
import {DateTimePicker} from "@mui/x-date-pickers";
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import moment from 'moment';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Axios from "axios";
import {Host} from "../../utils/contants.ts";
import {useModal} from "../../context/modalContext.tsx";

type CreateGameFormProps ={
    updateTable: () => void;
}
const CreateGameForm = ({updateTable}:CreateGameFormProps) => {
    const [formData, setFormData] = useState({
        location: '',
        teamLocal: '',
        teamAway: '',
        type: 1,
        date: moment.utc('2023-11-17T15:30'),
        image: '',
    });

    const {closeModal} = useModal()
    const handleChange = (e: { target: { name: string; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        Axios
            .post(Host + '/api/games',{
                'location':formData.location,
                'teamLocal': formData.teamLocal,
                'teamAway': formData.teamAway,
                'date': formData.date,
                'type': formData.type,
                'image': formData.image
            })
            .then((response)=>{
                console.log(response.data)
                closeModal()
                updateTable()
            })
        // Handle form submission here, e.g., send data to the server
        console.log(formData);

    };
    return (
        <Container maxWidth="sm">
            <h1 className="text-2xl font-bold mb-4">Create a Game</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <TextField
                        label="Location"
                        variant="outlined"
                        fullWidth
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <TextField
                        label="Local Team"
                        variant="outlined"
                        fullWidth
                        name="teamLocal"
                        value={formData.teamLocal}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <TextField
                        label="Away Team"
                        variant="outlined"
                        fullWidth
                        name="teamAway"
                        value={formData.teamAway}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <Select
                        label="Sport"
                        variant="outlined"
                        fullWidth
                        name="sport"
                        value={formData.type.toString()}
                        onChange={(event: SelectChangeEvent)=>setFormData({ ...formData, type: parseInt(event.target.value) })}
                        required
                    >
                        <MenuItem value={1}>Soccer</MenuItem>
                        <MenuItem value={2}>Basketball</MenuItem>

                    </Select>
                </div>

                <div className="mb-4">
                    <TextField
                        label="Image URL"
                        variant="outlined"
                        fullWidth
                        name="image"
                        type="url"
                        value={formData.image}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-4">


                    <DateTimePicker
                        label="Date and Hour"
                        value={formData.date}
                        onChange={(newValue) =>newValue?setFormData({ ...formData, date: moment.utc(newValue) }):null}
                    />


                </div>
                <div className="mb-4">
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                    >
                        Create Game
                    </Button>
                </div>
            </form>
        </Container>
    );
};

export default CreateGameForm;