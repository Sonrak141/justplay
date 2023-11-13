import Header from "./components/molecules/Header.tsx";

import { ModalProvider } from './context/modalContext.tsx'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import AboutSection from "./components/organisms/AboutSection.tsx";
import GamesSection from "./components/organisms/GamesSection.tsx";


function App() {




    return (
        <div className="">

            <LocalizationProvider dateAdapter={AdapterMoment}>
            <ModalProvider>
                <Header/>
                <AboutSection/>
               <GamesSection/>

            </ModalProvider>
            </LocalizationProvider>


        </div>
    );
}

export default App;