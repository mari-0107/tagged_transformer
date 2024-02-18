import React, { ChangeEvent, useEffect, useState } from 'react'
import Textarea from './Textarea'

type ControlPanelProps = {
    needPrefix: boolean,
    setNeedPrefix: React.Dispatch<React.SetStateAction<boolean>>,
    setPrefix: (value: string) => void,
    needHash: boolean,
    setNeedHash: (value: boolean) => void,
    setSign: (value: string) => void,
    sign: string
}

const ControlPanel = ({needPrefix, setPrefix, setNeedPrefix, needHash, setNeedHash, setSign, sign}: ControlPanelProps) => {
    
    const [savedPrefix, setSavedprefix] = useState("")
    useEffect(()=>{
        try {
            const prefixFromStorage = localStorage.getItem("Prefix_for_tag_transformer") || ""
            prefixFromStorage && setSavedprefix(prefixFromStorage) 
            prefixFromStorage && setPrefix(prefixFromStorage)
            
    } catch {}
        
    }, [])
    const handleChangePrefix = (e: ChangeEvent<HTMLTextAreaElement>) =>{
        setPrefix(e.target.value)
        setSavedprefix(e.target.value)
        localStorage.setItem("Prefix_for_tag_transformer" , savedPrefix)
    }
    return (
    <>
        <div className='flex flex-row items-center justify-left'>
            <input type='checkbox' id='checkPrefix' checked={needPrefix} name="Need some prefix before words?" onChange={() => setNeedPrefix(!needPrefix)}/>
            <h4 className='text-white text-xl p-5'>Need some prefix before tags?</h4>
            {needPrefix && <Textarea handleChangeTable={(e)=>{handleChangePrefix(e)}} name = 'Prefix' rows={3} cols={30} inputText={savedPrefix}/>}
        </div>
        <div className='flex flex-row items-center justify-left'>
            <input type='checkbox' id='checkHash' checked={needHash} name="Need hash before words?" onChange={() => setNeedHash(!needHash)}/>
            <h4 className='text-white text-xl p-5'>Need # ( hash ) before tags?</h4>
        </div>
        <div className='flex flex-row items-center justify-left'>
            <h4 className='text-white text-xl p-5'>Choose a sign to separate the words in the phrase</h4>
            <input type='text' id='chooseSign'  name="sign" onChange={(e) => setSign(e.target.value)} value={sign} className='flex text-3xl px-5 rounded-md w-16 text-center'/>
            
        </div>
    </>
   
    
  )
}

export default ControlPanel