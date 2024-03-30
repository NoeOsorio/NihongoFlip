import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../utils/firebaseConfig";

const getLessons = async () => {
  const lessonsCollectionRef = collection(firestore, "lessons");
  try {
    const querySnapshot = await getDocs(lessonsCollectionRef);
    const lessonsData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return lessonsData;
  } catch (error) {
    console.error("Error fetching lessons:", error);
    return [];
  }
};

export { getLessons };
