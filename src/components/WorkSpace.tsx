import React, { useEffect, useState } from 'react';
import Button from './Button';
import Table from './Table';
import ControlPanel from './ControlPanel';

const WorkSpace: React.FC = () => {
  const [disabledButtonProp, setDisabledButtonProp] = useState<boolean>(true);
  const [needPrefix, setNeedPrefix] = useState<boolean>(true);
  const [prefix, setPrefix] = useState<string>("");
  const [needHash, setNeedHash] = useState<boolean>(true);
  const [sign, setSign] = useState<string>('_');
  const [outputResult, setOutputResult] = useState<string>('');
  const [finalres, setFinalRes] = useState<string[]>([]);
  const [inputText, setInputText] = useState<string>('')

  function transliterate(str: string): string {
    const cyrillicToLatinMap: Record<string, string> = {
      'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'ґ': 'g',
      'д': 'd', 'е': 'e', 'є': 'ye', 'ж': 'zh', 'з': 'z',
      'и': 'i', 'і': 'i', 'ї': 'yi', 'й': 'y', 'к': 'k',
      'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p',
      'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f',
      'х': 'kh', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'shch',
      'ь': '', 'ю': 'yu', 'я': 'ya',
    };

    return str.replace(/[а-яґєії]/gi, (match) => cyrillicToLatinMap[match.toLowerCase()] || match);
  }

  const MakeEvent = () => {
    let resultWord: string = '';
    resultWord += prefix;
    needHash && (resultWord += '#');
    const paragraf: string[] = outputResult.split('\n');
    const modifiedResult: string[] = paragraf.map((p) => {
      const elMod: string = transliterate(p.replace(/\//g, sign)).replace(/ /g, sign);
      return resultWord + elMod + '\n';
    });

    setFinalRes(modifiedResult);
  };
  console.log(prefix)

  return (
    <>
      <div>
        <ControlPanel
          needPrefix={needPrefix}
          setNeedPrefix={setNeedPrefix}
          setPrefix={setPrefix}
          needHash={needHash}
          setNeedHash={setNeedHash}
          setSign={setSign}
          sign={sign}
        />

        <Table setDisabledButtonProp={setDisabledButtonProp}  inputText={inputText} setInputText={setInputText}
        outputResult={outputResult} setOutputResult={setOutputResult} finalres={finalres} />
      </div>
      <div className='flex flex-row justify-center mb-5'>
            <Button label='OK' onClickEvent={MakeEvent} disabledProp={disabledButtonProp} />
            <Button label='Clear' warning={true}
            onClickEvent={() => {
                setInputText('')
                setOutputResult('')
                setFinalRes([])
                setDisabledButtonProp(true)
                
                }
            } 
                disabledProp={disabledButtonProp}/>
      </div>
      
    </>
  );
};

export default WorkSpace;

