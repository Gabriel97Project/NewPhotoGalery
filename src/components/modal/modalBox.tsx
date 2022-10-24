import { deleteObject, ref } from 'firebase/storage';
import React, { useState } from 'react'
import { setConstantValue } from 'typescript';
import App from '../../App';
import { storage } from '../../FirebaseLibs/firebase';
import { ModalSonStyle, ModalStyle, ModalStyleExport } from './modalBoxStyle'

type PhotoItemProps = {

    url: string;
    setStateModal:React.Dispatch<React.SetStateAction<boolean>>;
   /*  closeModal:  () => void;*/
} 





const ModalBox = ({ url , setStateModal /* , closeModal */}: PhotoItemProps) => {

    return (
        <ModalStyle>
            <div className='styledDiv'>
                
                <button onClick={()=>/* setStateModal(false) */ setStateModal(false)}>
                      <svg xmlns="http://www.w3.org/2000/svg"  viewBox="-8 -2 40 25" strokeWidth={1} stroke="white" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>

                </button>
               
            </div>
            <ModalSonStyle>

                <img src={url} />
            </ModalSonStyle>
        </ModalStyle>
    )


}


export default ModalBox;


