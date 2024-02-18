import React from 'react'

type ButtonProps = {
    label: string,
    onClickEvent: () => void,
    disabledProp?: boolean,
    warning?: boolean
}

const Button: React.FC<ButtonProps> = ({label, onClickEvent, disabledProp = false, warning = false})=> {
  return (
    <button
    onClick={ () => onClickEvent()}
    disabled = {disabledProp}
    // className='flex  text-slate-900'
    className= {`flex text-2xl font-bold px-8 rounded-xl m-10 ${
        disabledProp ?  
            warning? "border-rose-800 text-rose-800 bg-white": "border-sky-800 text-sky-800 bg-white" 
            : 
            warning? "text-white bg-rose-800" : "text-white bg-sky-800"
    }`
}
//     className= {`flex text-2xl font-bold px-8 rounded-xl ${
//         disabledProp ?  
//         "bg-white text-sky-800 border-2 border-sky-800" : 
//         " text-white bg-sky-800"
//     }
//         ${warning && 'bg-red-400'}
//     `
// }

    
    >{label}</button>
  )
}

export default Button