import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { firestore } from "../utils/firebaseConfig";

const getCards = async (lessonId) => {
  const docRef = doc(firestore, "lessons", lessonId);
  try {
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) {
      console.info("No such document exists!");
      return [];
    }

    const collectionRef = collection(docRef, "vocabulary");
    const querySnapshot = await getDocs(collectionRef);
    const vocabularyData = querySnapshot.docs.map((doc) => doc.data());
    return vocabularyData;
  } catch (error) {
    console.error("Error fetching language cards data:", error);
    return [];
  }
};

export { getCards };
