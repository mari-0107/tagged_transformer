import React, { ChangeEvent } from 'react'

type TextareaProps = {
    handleChangeTable: (e: ChangeEvent<HTMLTextAreaElement>) => void,
    name: string,
    cols?: number,
    rows?: number,
    isLarge?: boolean,
    // setOutputResult?: React.Dispatch<React.SetStateAction<string>>,
    setOutputResult?: (value: string) => void,
    placeholder?: string,
    inputText?: string

}

const Textarea: React.FC<TextareaProps> = ({handleChangeTable, name, cols = 30, rows = 1, isLarge = false, setOutputResult=()=>{}, placeholder, inputText}) => {
    const textareaId = name;
    
  return (
    <textarea name={name} id={textareaId} cols={cols} rows={rows} 
        onChange={(e) => {
            handleChangeTable(e)
            setOutputResult(e.target.value)
        }}
        value={inputText}
        placeholder={placeholder}
        className={`px-5 rounded-lg text-2xl leading-8 ${
            isLarge ? 'py-5' : 'py-2'
        }`}
            
        ></textarea>
  )
}

export default Textarea