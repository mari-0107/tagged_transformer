import React, { ChangeEvent, useState } from 'react'
import Textarea from './Textarea';
import OutputBlock from './OutputBlock';

type TableProps = {
  setDisabledButtonProp: (value: boolean) => void;
  outputResult: string, 
  setOutputResult: (value:string) => void,
  finalres:  string[],
  inputText: string,
  setInputText: (value: string) => void
}

const Table: React.FC<TableProps> = ({setDisabledButtonProp, outputResult, setOutputResult, finalres, inputText, setInputText}) => {
  const [chengedTable, setChengedTable] = useState(false)
  const [isDef, setIsDef] = useState(true)
 

  const handleChangeTable = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setChengedTable(true)
    setDisabledButtonProp(false)
    setInputText(event.target.value)
  }
  

  
  return (
    <>
      <div className='flex p-5 flex-row mt-10'> 
        <Textarea handleChangeTable={handleChangeTable} name="EntryTextArea"  isLarge={true} setOutputResult={setOutputResult} placeholder='Input words for transform here' inputText={inputText} />
        <OutputBlock result={finalres} isDef={isDef} />
      </div>

    </>
  )
}

export default Table