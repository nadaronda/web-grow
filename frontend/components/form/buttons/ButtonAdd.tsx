export const ButtonAdd: React.FC = () => {
    return (
        <div className=' flex justify-end '>
            <button
                type='submit'
                className=' text-xl font-medium border-slate-200 px-5 py-3 bg-azul  hover:border-azul hover:bg-rosa hover:text-[22px] duration-500  border-2 rounded-lg '
            >
                Añadir
            </button>
        </div>
    );
};