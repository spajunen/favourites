import Axios from "axios";
import {Favourite} from "./model";
import {useQuery, UseQueryResult} from 'react-query';

const basePath = "/api/favourites";
export const FAVOURITES_KEY = "favourites";

export function useFavourites(): UseQueryResult<Favourite[], Error> {
    return useQuery(
        [FAVOURITES_KEY],
        () => getFavourites()
    );
}

export async function getFavourites(): Promise<Favourite[]> {
    const response = await Axios.get<Favourite[]>(
        `${basePath}`
    );
    return response.data;
}

export async function createFavourite(
    favourite: Favourite
): Promise<void> {
    await Axios.post<void>(`${basePath}`, {
        favourite
    });
}
