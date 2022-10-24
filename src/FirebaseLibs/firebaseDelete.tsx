
import { getStorage, ref, deleteObject } from "firebase/storage";



 
const FirebaseDelete =  (id:string) => {
    

const storage = getStorage();

// Create a reference to the file to delete
const desertRef = ref(storage, `images/${id}`);
console.log('storage', storage)

// Delete the file
deleteObject(desertRef).then(() => {
  // File deleted successfully
  console.log('succsess')
}).catch((error) => {
    console.log('err', error)
  // Uh-oh, an error occurred!
});
   

    // const db = getFirestore();
    
    
    // const docRef = doc(db, "images", id);
    // console.log('collection', firebaseApp)
    
    
    // const result = await deleteDoc(docRef)
    // .then((res) => {
    //     console.log("Entire Document has been deleted successfully.", res)
    // })
    // .catch(error => {
    //     console.log('error', error);
    // })
    // console.log('sssss', result)
}

export default FirebaseDelete
