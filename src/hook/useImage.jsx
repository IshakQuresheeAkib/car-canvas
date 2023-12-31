import axios from "axios"
import { useEffect, useState } from "react";


const useImage =  (image) => {

    const [success,setSuccess] = useState(false)
    const [imageUrl,setImageUrl] = useState()
    const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
    const imageFile = { image : image[0] }
    
    useEffect(()=>{
        if (!image?.length) {
            return;
        }
        const imageUpload = async () => {
            const res = await axios.post(image_hosting_api,imageFile,{
                headers: {'content-Type':'multipart/form-data'}
            })
            if (res?.data?.success) {
                setImageUrl(res?.data?.data?.display_url)
                setSuccess(true)
            }
    }
    
    imageUpload();
},[image])
return {imageUrl,success};
}
export default useImage;