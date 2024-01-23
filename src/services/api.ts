import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface CaughtPokemon {
  uid: string;
  id: any;
  name: string;
  nickname: string;
  sprite: string;
  dateCaught: string;
}

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  tagTypes: ["api"],
  endpoints: (builder) => ({
    getData: builder.query<any, void>({
      query: () => `catchPokemon/readData`,
    }),
    addPokemon: builder.mutation<void, CaughtPokemon>({
      query: (caughtPokemon) => ({
        url: "catchPokemon/addPokemon",
        method: "POST",
        body: caughtPokemon,
        providesTags: ["api"],
      }),
    }),
    updatePokeBalls: builder.mutation<any, Partial<{ pokeBallType: string }>>({
      query: (body) => ({
        url: "/catchPokemon/updatePokeBalls",
        method: "POST",
        body,
        providesTags: ["api"],
        refetchOnMountOrArgChange: true,
        refetchOnReconnect: true,
      }),
    }),
    updateAttempt: builder.mutation<void, void>({
      query: () => ({
        url: "catchPokemon/updateAttempt",
        method: "POST",
        providesTags: ["api"],
        refetchOnMountOrArgChange: true,
        refetchOnReconnect: true,
      }),
    }),
    updateCatched: builder.mutation<void, void>({
      query: () => ({
        url: "catchPokemon/updateCatched",
        method: "POST",
        providesTags: ["api"],
        refetchOnMountOrArgChange: true,
        refetchOnReconnect: true,
      }),
    }),
    updateCoins: builder.mutation<any, Partial<{ theCoins: number }>>({
      query: (body) => ({
        url: "catchPokemon/updateCoins",
        method: "POST",
        body,
        providesTags: ["api"],
        refetchOnMountOrArgChange: true,
        refetchOnReconnect: true,
      }),
    }),
    removePokemon: builder.mutation<any, string>({
      query: (uid) => ({
        url: "catchPokemon/releasePokemon",
        method: "POST",
        body: uid,
        providesTags: ["api"],
      }),
    }),
  }),
});

export const pokemonApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2" }),
  tagTypes: ["theapi"],
  endpoints: (builder) => ({
    getPokemonById: builder.query<any, number>({
      query: (id) => `/pokemon/${id}`,
      providesTags: ["theapi"],
    }),
  }),
});

export const {
  useAddPokemonMutation,
  useUpdatePokeBallsMutation,
  useUpdateAttemptMutation,
  useUpdateCatchedMutation,
  useUpdateCoinsMutation,
  useGetDataQuery,
  useRemovePokemonMutation,
} = api;
export const { useGetPokemonByIdQuery } = pokemonApiSlice;
