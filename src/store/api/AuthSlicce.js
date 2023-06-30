import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Cookies from 'js-cookie'
import BASE_URL from './BaseUrl'
  
const setToken  = (token)=>{
    Cookies.set('token', token, {expires: 1})
    
}

export const authSlice = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ 
    baseUrl: BASE_URL }),
    
    endpoints: (builder) => ({

        register: builder.mutation({
                 query: (newUSER) => ({
                    
                    url:'register',
                    method:'POST',
                    body: newUSER,
                 
            })
        }),



 login: builder.mutation({
                query: (User) => ({
                url: 'login',
                method: 'POST',
                body:  User,
            }),
            onQueryStarted:async (erg,{queryFulfilled} ) =>{
             try{
                const Result = await queryFulfilled;
                setToken(Result.data.token)
             }catch(error){
                console.log(error);
                
             }
            }
        }),  
    }),
})

export const { useRegisterMutation, useLoginMutation } = authSlice


export default authSlice.reducer