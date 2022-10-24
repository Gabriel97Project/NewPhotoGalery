import {Photo} from "../types/photoTypes";
import {storage} from '../FirebaseLibs/firebase';
import { ref, listAll, getDownloadURL, uploadBytes } from "firebase/storage"
import {v4 as createId} from "uuid"


export const getAll = async () => {
    let list:Photo[] = [];
    /* acima temos uma lista de photos que é uma array, e essa lista vai retornar as fotos
    em uma array */
    
        const imagesFolder = ref(storage, "images/");
        console.log('get items', imagesFolder)
        /* ele recebe 2 parametros, no caso o storage e em  seguida vem o nome da pasta (com "")
        que foi criada dentro de storage (pasta que foi criada no projeto do firebase) */
        const photoList = await listAll(imagesFolder);
        console.log('photolist', photoList)
        /* listAll serve para listar tudo que ele encontrar na referencia dentro de ()
        e entao tudos listads sera enviado para const photoList, o await serve para que
        a funçao espere que tudo seja listado e passado para o photo list, para que so depois
        o processo continua seguindo */
        for(let i in photoList.items) {
            let photoUrl = await getDownloadURL(photoList.items[i]);


            list.push({
                name: photoList.items[i].name,
                url: photoUrl
            })
        }
        /* for é um loop que vai passar dentro da array de photos (items sao os items(dados) armazenados).
        list.push pra inserir dados dentro do array. 
        para pegar o name no push, acessamos o photolist. itens colocamos o [i] do loop . name:
        para pegar a url é preciso gerar a url, pra isso criamos  alet fotourl, colocamos um await pra esperar
        a url ser gerada e usamos o getdownloadurl e passamos o item dentro do parenteses (photoList.items[i]) e
        entaosera gerado um link url e apos gerar a url, o resultado é retornado dentro do push url
        */


    return list;
}
/* async await espera que os dados cheguem para executar a função,
exemplo uma pessoa precisa de algo da padaria, porem nao pode ir comprar,
entao ela pede pra seu filho ir, e espera que ele retorne com a compra,
e quando o filho volta ela faz oque quer com a compra */

/* ******NO FIREBASE, ANTES DE USAR QUALQUER COISA,
É NECESSARIO FAZER REFERENCIA (ref();) AO QUE SERA USASO, E SO DEPOIS DISSO
USAR DA MANEIRA QUE DESEJAR****** */

/* a lista precisa receber os dados do firebase e isso nao é um processo instantaneo,
pra isso usamos uma função async await, para que somente qndo os dados forem pegos, a funçao rodar */

/* Promisse é uma promessa que basicamente diz para sua função que ela vai receber algo, porem esse algo
precisa de um tempo para ser carregado, exemplo: a nossa const getAll vai receber nossa array
de photos (Photo[]) porem essa array de photos precisa ser carregada, entao a funçao recebe uma
promisse de que qndo a photo array for carregada, ela sera mandada para a função */



/* ************EXPLICANDO O PROCESSO******************
1- cria a ref da pasta (const imagesFolder = ref(storage, "PhotoContainer");
2- lê os arquivos da pasta com o listAll  (const photoList = await listAll(imagesFolder);
3- é feito um loop dentro dos arquivos   ( for(let i in photoList.items) )
4- pega o arquivo de download, o link direto pra acessar a ( foto let photoUrl = await getDownloadURL(photoList.items[i]);)
5- montar o array  list.push({
                name: photoList.items[i].name,
                url: photoUrl
            })
6- o array é retornado com todas as fotos que tiver na lista ( return list;)

e por fim esse é o primeiro servico ou utilidade criado com o getAll, e ´podemos utiliza-lo no const App;
*/

export const insertPhoto = async (file : File) =>{

    if (["image/jpeg", "image.jpg", "image/png"].includes(file.type)){
    //criamos um tipo de verificação, que sera filtrado os tipos de arquivos que serão aceitos.
    let randomName = createId();
    let newFile = ref(storage, `images/${randomName}`);
    //acima é feito o processo de upload do arquivo com a referencia e gerando um nome aleatorio usando o uuid
    //
    
    let upload = await uploadBytes(newFile, file);
    //acima é feito o uploado do arquivo e o let upload vai ter dois dados,
    // que é a referencia do arquivo recem upado direto do firebase
    let photoUrl =  await getDownloadURL(upload.ref);

    return{
        name: upload.ref.name,
        url: photoUrl } as Photo;
   
    } else {
        return new Error(`"tipo de arquivo nao permitido!"`);
    }
}