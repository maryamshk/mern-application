import { apiSlice } from './apiSlice';
const USERS_URL = '/api/users';


export const userApiSlice = apiSlice.injectEndpoints({  //allow us to create our own points in this file then inject them in another
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/auth`,
                method: 'POST',
                body: data,
            }),
        }),
    }),
});

export const { useLoginMutation } = userApiSlice;
