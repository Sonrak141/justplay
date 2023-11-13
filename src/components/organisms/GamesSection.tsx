import GamesTable from "../molecules/GamesTable.tsx";

const GamesSection = () => {
    return (
        <div className='w-[95%] mx-auto my-20'>
            <h2 className='text-2xl font-bold text-[#ff5a5f] mb-10'>Already have a match? look for it in here!</h2>
            <GamesTable/>
        </div>
    );
};

export default GamesSection;