import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import BASE_URL from './BaseUrl'
import Cookies from 'js-cookie'

const getToken = () => {
   return Cookies.get('token')
}

export const noteApi = createApi({
    reducerPath: 'noteApi',
    baseQuery: fetchBaseQuery({
         baseUrl: BASE_URL ,
        prepareHeaders: (headers) => {
            const token = getToken()
            if(token) {
              headers.set('Authorization', `Bearer ${token}`)  
            }
            return headers
        }
        
        }),
        tagTypes: ['Note'],
    
    endpoints: (builder) => ({
        getNotes: builder.query({
            query: () => '/notes',
            providesTags: ['Note'],
        }),
        addNote: builder.mutation({
            query: (newNote) => ({
                url: 'create_note',
                method: 'POST',
                body: newNote
            }),
            invalidatesTags: ['Note'],
        }),
        updateNote: builder.mutation({
            query: ({ id, updatedNote }) => ({
                url: `update_note/${id}`,
                method: 'PUT',
                body: updatedNote,
            }),
            invalidatesTags: ['Note'],
        }),
        deleteNote: builder.mutation({
            query: (id) => ({
                url: `delete_note/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Note'],
        }),
    }),
})

export const {
    useGetNotesQuery,
    useAddNoteMutation,
    useUpdateNoteMutation,
    useDeleteNoteMutation,
} = noteApi
