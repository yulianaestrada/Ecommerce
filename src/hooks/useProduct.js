import { useEffect, useState } from "react"
import { collection, doc, getDoc } from "firebase/firestore";
import db from "../db/db.js";

const useProduct = (productId) => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    const getProduct = async () => {
        try {
            const docRef = doc(db, "products", productId);
            const dataDb = await getDoc(docRef);

            const data = { id: dataDb.id, ...dataDb.data() };
            setProduct(data);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProduct();
    }, [])
    return { product, loading };
};

export default useProduct;