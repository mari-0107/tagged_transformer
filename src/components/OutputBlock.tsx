import React from 'react'

type OutputBlockProps = {
    result?:  string[] | ['Nothing to transform']
    isDef: boolean
}


const defaultValue = ['<- Type something here...']

const OutputBlock: React.FC<OutputBlockProps> = ({result = ['Nothing to transform'], isDef}) => {

  return (
    <div className="p-5
    bg-white text-slate-900 rounded-lg ml-20 min-w-72"
        >
            <ul>
                {result.map((el, index) => (
                    <li key={index}>{el.replace('ь', '')}</li>
                ))}
            </ul>

           
            
    </div>
  )
}

export default OutputBlock