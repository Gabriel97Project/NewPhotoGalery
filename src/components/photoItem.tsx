
import { PhotoStyled } from "./photoItemStyled"



export type PhotoItemProps ={
  name:string;
  url:string;
}





const PhotoItem = ({url,name}:PhotoItemProps) => {


 // const [changePhotoSize,setChangePhotoSize] = useState(false)




  return (
    <PhotoStyled >
        
        <img src={url} alt={name}/>
          
        
        {/* {name} */}
     
     
    </PhotoStyled>
  )
}

export default PhotoItem
