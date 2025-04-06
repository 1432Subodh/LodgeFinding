import { error } from "console"
import { resolve } from "path"

export const extractUser = '/api/user/auth/extractcookies'  //GET
export const Api_logout = '/api/user/auth/logout' //GET
export const Api_signup = '/api/user/auth/signup' //POST
export const Api_login = '/api/user/auth/login' //POST
export const Api_getAdminReq = '/api/user/adminrequest' //GET
export const Api_actionAdminReq = '/api/user/adminrequest' //POST
export const Api_addingLodge = '/api/lodge/adding' //POST
export const Api_getAllLodge = '/api/lodge/get' //GET
export const Api_getLodge = '/api/lodge/get' //POST
export const Api_Search = '/api/lodge/search' //POST
export const Api_Popular = '/api/lodge/popular' //GET
export const Api_PopularNearby = '/api/lodge/popular' //POST



export const convertingImgToBase64 = async (imagesArray: any) => {
    try {
       
        const imagePromises = imagesArray.map((file: any) => {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => resolve(reader.result as string);
                reader.onerror = (error) => reject(error);
            });
        });
       

            const result = await Promise.all([ ...imagePromises]);
            const [...imagesBase64] = result;
    
          return imagesBase64
        
    } catch (error) {
        console.error("Error converting images:", error);
        return null;
    }
};


