import { AppStyled, AppStyledSon, HeaderStyle, LoadedScreenStyle, LoadingScreenStyle, UploadFormStyle } from "./AppStyles";
import * as Photos from "./services/photos"

import { useEffect, useState, FormEvent } from 'react'
import { Photo } from "./types/photoTypes"
import PhotoItem from "./components/photoItem";
import ModalBox from "./components/modal/modalBox";
import FirebaseDelete from "./FirebaseLibs/firebaseDelete";



const App = () => {

  const [loading, setLoading] = useState(false);
  /* como os dados que vamos mandar precisam ser carregados, nos criamos
  um estado de loading para mostrar um loadingo quando estiver carregando */
  const [photosBox, setPhotosBox] = useState<Photo[]>([])
  /* é preciso armazenar a lista de fotos em algum lugar, para isso,
  criamos um estado onde as fotos serao armazenadas, dentro desse state so vao ter fotos,
  uma array de fotos, entao devemos importar os types de photos que criamos, para tipar nosse
  use state de photos */
  const [uploadLoading, setUploadingLoading] = useState(false);
  const getPhotos = async () => {
    setLoading(true);
    let photos = await Photos.getAll();
    setPhotosBox(() => photos);

    /* o setPhotos vai pegar as fotos, e apos pegalas, elas serao armazrenadas dentro o 
    estado que criamos no caso o state photos */
    setLoading(false);
    /* mudar o estado de loading para true, durante o processo,
    as fotos vao ser pegas (carregadas), e depois o estado loading sera retornado
    para false (isso significa um inicio de loading (true) e o final do loading(false)) */

  }

  useEffect(() => {


    getPhotos();

    /* quando carregar a tela é hora de puxar os arquivos;
    tudo que for feito com ref ou precisa de alguma requisiçao externa,
    usamos a funçao async, ou caso precise esperar algum evento acontecer;
    
    dentro do useefect voce precisa criar uma funçao e ja retorna-la, mesmo
    que isso seja feito diretamente dentro do use effect (porque? porque o react recomenda que seja feito dessa forma)*/
  }, [])


  /*   useEffect(()=>{
      console.log("chamou" , photosBox)
    },[photosBox])
     */

  /*  */

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {

    // a função deve ser async, pois é preciso esperar o envio da foto

    e.preventDefault();
    //no tipo do evento alem de colocar como formEvent, tambem colocamos mais um tipo
    // <HTMLFormElement>, dessa fprmapodemos colocar comandos adicionais no "e"
    //preventdefaut previne o envio de dados, nao deixa que dados do form sejam enviados
    const formData = new FormData(e.currentTarget);
    const getFile = formData.get("imageSend") as File;
    // é preciso dizer para a const getFile que "imageSend" se trata de um arquivo, para isso,
    // colocamos as File,
    if (getFile && getFile.size > 0) {
      // aqui criei uma condição para que se o getFile estiver presente, o o arquivo for maior 
      // que 0 (ou seja, o upload tiver sido feito e ao menos 1 foto enviada) siginifica que tenho 1 arquivo
      //e posso seguir em frente co  o upload.
      setUploadingLoading(true);
      //criamos um outro loading para aparecer na tela enquanto é feito o upload do arquivo
      let result = await Photos.insertPhoto(getFile);
      //acima é feito o procecesso de upload

      setUploadingLoading(false)
      //quando o upload é terminado, o estado volta a ser falso, dessa forma o loading é parado
      if (result instanceof Error) {

        alert(`${result.name} - ${result.message}`)
      } else {
        let newPhotoList = [...photosBox]
        //acima foi feito um clne da lista de fotos
        newPhotoList.push(result);
        //ja que nao foi encontrado nenhum Error, acima foi enviado um resultado
        // neste caso o resultado serao nossas imagens (passar o mouse me cima, result foi definido previamente como nossas Photos)
        setPhotosBox(newPhotoList);
        //acima nos atualizamos o state de photos, ou seja, adicionamos uma nova foto no state
      }

    }



  }

  const [currentPhoto, setCurrentPhoto] = useState("")
  /* const [openPhoto, setOpenPhoto] = useState(false) */
  const [modalOpen, setModalOpen] = useState<boolean>(false)




  const deletePhoto = async (id: string) => {
    await FirebaseDelete(id)
    window.location.reload();

  }
  /*  const refreshDelet = () =>{
     window.location.reload();
 
   } */

  const handlePhotoClick = (e: React.MouseEvent<HTMLElement>, url: string) => {
    e.preventDefault();
    setCurrentPhoto(url);
    console.log("chamouu")
    return setModalOpen(true);

  }

  /* const closeModal = () =>{
    return setModalOpen(false)
  } */

  return (

    <AppStyled>


      <AppStyledSon>
        <HeaderStyle>
          <h1>Galeria de fotos</h1>

        </HeaderStyle>


        {/* AREA DO UPLOAD DE FOTOS */}

        <UploadFormStyle method="post" onSubmit={handleFormSubmit}>
          <input type="File" name="imageSend" title="Choose a video please" />
          <input className="inputTextClass" type="submit" value="Enviar" />
          {uploadLoading && "enviando..."}
        </UploadFormStyle>




        {/* LOCAL DE ARMAZENAMENTO DAS FOTOS */}
        {loading &&
          <LoadingScreenStyle>
            <div className="emoji">⏳</div>
            <div><h2>Carregando...</h2></div>
          </LoadingScreenStyle>
        }
        {/* quando tiver loading (loading&&)
        sera mostrado na tela a msg: carregando...*/}

        {!loading && photosBox.length > 0 &&
          <LoadedScreenStyle>

            {photosBox.map((item, index) => (
              <div>
                <a href="" onClick={(e) => handlePhotoClick(e, item.url)}>

                  <PhotoItem key={index} url={item.url} name={item.name} />


                </a>
                <button onClick={() => deletePhoto(item.name)} >Apagar 🗑️</button>
              </div>





            ))}
            {modalOpen && <ModalBox url={currentPhoto} setStateModal={setModalOpen} /* closeModal={closeModal} */ />}


            {/* para mudar o state setModalopen em outro componente, precisamos passalo como props,
           nesse caso criamos um nome aleatorio, no caso criei serStateModal e dentro
           dele colocamos o useState q queremos mudar o estado {setModalOpen} oque eu queria mudar era que nesse component
           qndo eu clicasse na foto o estado seria verdadeiro e seria aberto a foto, quando o estado for falso eu quero
           que o foto feche, porem pra fechar a foto eu preciso clicar no X que esta no component ModalBox, entao 
           eu passo o setState como props e la dentro do componente ModalBox eu coloquei pra qndo clicarem no butao, o 
           estado mudar para falso, nesse caso como o estado esta falso, a imagem sera fechada pois meu estado 
           nao é mais verdadeir */}



          </LoadedScreenStyle>
        }
        {/* quando loading for falso e tiver fotos para mostrar (! loading && photosBox.length > 0 && )
        sera mostrado na tela as imagens disponiveis */}

        {!loading && photosBox.length === 0 &&
          <LoadingScreenStyle>
            <div className="emoji">🙁</div>
            <div><h2>Não há fotos cadastradas</h2></div>
          </LoadingScreenStyle>
        }
        {/* quando NAO tiver loading NEM FOTOS (! loading && photosBox.length === 0)
        sera mostrado na tela a msg :Não há fotos cadastradas */}




      </AppStyledSon>

    </AppStyled>
  )
}

export default App;
