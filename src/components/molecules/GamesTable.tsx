import {useEffect, useState, useCallback, } from 'react'
import {DataGrid, GridColDef, GridToolbarQuickFilter, } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Axios from 'axios'
import {Host} from '../../utils/contants.ts'
import Moment from 'moment'
import DeleteIcon from '@mui/icons-material/Delete';
import ModalUpdateGame from "./ModalUpdateGame.tsx";
import { useModal } from '../../context/modalContext.tsx'
import EditIcon from '@mui/icons-material/Edit';
import ModalCreateGame from "./ModalCreateGame.tsx";

type GameData={id: number; location: string; date: Date; teamLocalId: number; teamAwayId: number; image: string| null; type:number ;}


function QuickSearchToolbar() {
    return (
        <Box
            sx={{
                p: 0.5,
                pb: 0,
            }}
        >
            <GridToolbarQuickFilter />
        </Box>
    );
}

const GamesTable = () => {
    const [data, setData] = useState<GameData[]>([])
    const [gameId, setGameId] = useState<number>(0)

    const {openUpdate} = useModal()

    const edit = (idTo:number) => {
        setGameId(idTo)
        openUpdate()
    }

    const getGames = useCallback(() =>{

      try {
         Axios
              .get(Host + '/api/games', )
              .then((response)=>{
                  console.log(response.data)
                  setData(response.data)
              })
      } catch(error) {
          console.log(error)
      }
    },[])

    const deleteGame = useCallback((id:number)=>{
        Axios
            .delete(Host+'/api/games/'+id)
            .then((response)=>{
                getGames()
                console.log(response)
            })
    },[getGames])



    useEffect(() => {
      getGames()

    }, [getGames]);

    const columns: GridColDef[] = [
        { field: 'type', headerName: 'Sport', minWidth: 150, flex: 1, valueFormatter: ({value}) => {
            switch (value){
                case 1:
                    return "Soccer"
                case 2:
                    return "Basketball"
            }
            } },
        { field: 'location', headerName: 'Location', minWidth: 150,flex: 1, },
        {
            field: 'date',
            flex: 1,
            headerName: 'Date & Hour',
            minWidth: 150,
            valueFormatter: (({value}) => Moment.utc(value).format('YYYY MMM DD HH:MM'))
        },
        {
            field: 'teamLocal',

            flex: 1,
            headerName: 'Local Team',
            minWidth: 150,

        },
        { field: 'teamAway', headerName: 'Away Team', minWidth:150,flex: 1,},
        { field: 'image', headerName:'Tournament', renderCell: (params) => (
            <img className='mx-auto' src={params.row.image} alt={params.row.location} width={50}/>
            )},
        {field: 'delete', headerName: 'Delete', renderCell: (params) => (
            <button className='text-red-400 mx-auto' onClick={()=>deleteGame(params.row.id)}><DeleteIcon/></button>
            )},
        {field: 'update', headerName: 'Update', renderCell: (params) => (
                <button className='text-green-400 mx-auto' onClick={()=>edit(params.row.id)}><EditIcon/></button>
            )}

    ];
    return (
        <div className='mx-auto mt-4  '>
            <Box sx={{ height: 400, width: 1 }}>
            <DataGrid  rows={data} columns={columns} slots={{ toolbar: QuickSearchToolbar }}   sx={{

                border: 0,
                borderColor: '#ff5a5f',
                '& .MuiDataGrid-cell:hover': {
                    color: 'primary.main',
                },
            }}/>
                <ModalUpdateGame idGame={gameId} update={getGames}/>
                <ModalCreateGame update={getGames}/>
            </Box>
        </div>
    );
};

export default GamesTable;