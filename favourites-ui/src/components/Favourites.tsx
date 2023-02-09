import React from "react";
import FavouritesTable from './FavouritesTable';
import {useFavourites} from '../data/favourite';

interface Props {
    beverage: string;
}

const Favourites: React.FC<Props> = ({beverage}) => {
    const { data: favourites, error } = useFavourites();

    if (error) return <div>Lataus ei onnistunut</div>;

    return (
        <div>
            <FavouritesTable beverage={beverage} favourites={favourites}/>
        </div>
    )
}

export default Favourites;