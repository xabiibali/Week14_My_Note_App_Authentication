import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Cookies from 'js-cookie'
import BASE_URL from './BaseUrl'
  
const getCookies = () =>{
    return Cookies.get("token")
}

export const userSlice = createApi({
    reducerPath: 'userthApi',
    baseQuery: fetchBaseQuery({ 
    baseUrl: BASE_URL,
    prepareHeaders: (Headers) =>{
        const token = getCookies()
        if(token){
            Headers.set("authorization",`Bearer ${token}`);
        }
        return Headers
    }
 }),
    
    endpoints: (builder) => ({

  getUser: builder.query({
                 query: () => ({
                    
                    url:'user',
                    method:'GET',
                 
            })
        }),

    }),
})

export const { useGetUserQuery } = userSlice


export default userSlice.reducer