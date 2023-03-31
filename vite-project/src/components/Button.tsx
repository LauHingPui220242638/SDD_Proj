interface Props{
    text:string
    color? : 'primary' | 'secondary' | 'dangerous'
}


function Button({text, color}:Props) {

    const cN = 'btn btn-' + color;
    
    return <>
        <button className={cN}>{text}</button>
    </>
}

export default Button