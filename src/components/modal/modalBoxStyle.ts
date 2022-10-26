import styled from "styled-components"



export const ModalStyle = styled.div`
    width:100vw;
    height:100vh;
    background-color:rgba(0, 0, 0, 0.8);
    overflow-x:hidden;
    position: absolute;
    left:0;
    top:0;
    display:flex;
    justify-content:center;
    align-items:center;
    .styledDiv{
        background-color:rgba(0, 0, 0, 0.1);
        width:8%;
        height:15%;
        position:absolute;
        right:0;
         top:0;
         button{
            
            width:100%;
            height:100%;
            background-color:rgba(0, 0, 0, 0.1);
         }
    }
`

export const ModalSonStyle = styled.div`
    width:50%;
    height:70%;
    //background-color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:10px;
    img{
    width:100%;
    height:100%;
    display:block;
    border-radius:10px;
    @media (max-width: 500px) {
        width:100%;
        height:70%;
        
    }




}
   

`

export const ModalStyleExport = styled.div`
    width:100%;
    height:250px;
    border-radius:10px;
    padding:10px;
    color: white;
    button{
        width:20%;
        .styledButton{
        width:100%;
        height:100%;
        border-radius:10px;
        margin-bottom:10px;
    }
    }
    
  



   

   

`
