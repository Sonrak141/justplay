

type ButtonProps ={
    action: ()=>void,
    label: string,
    primary: boolean
}

const Button = ({action, label, primary}:ButtonProps) => {
    return (
        <div>
           <button onClick={action} className={primary?"bg-[#ff5a5f] text-white p-2 rounded-[10px]":"bg-white text-[#ff5a5f] p-2 rounded-[10px]"}>{label}</button>
        </div>
    );
};

export default Button;