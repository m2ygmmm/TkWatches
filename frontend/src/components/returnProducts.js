import React, {useEffect, useState} from "react";

export function ReturnProduct(){

    const { id } = useParams();
    const [data, setData] = useState(null);
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: response } = await axios.get(`http://localhost:4000/products/${id}`, {
                    withCredentials: true //SECURITY CHECK? Include credentials in the request
                });
                setData(response["1"]);
            } catch (error) {
                console.error(error);
            }
            setLoading(false);
        };
        fetchData();
    }, [id]);

        if (!loading) {
            const filteredImages = images.filter(image => image.product_id === id);
            if(filteredImages.length > 0){
                console.log(filteredImages)
                return filteredImages
            }

        }

    return data
}

