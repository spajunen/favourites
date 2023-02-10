import React from "react";
import {Favourite} from "../data/model";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

interface Props {
    beverage: string;
    favourites?: Favourite[];
}

const FavouritesTable: React.FC<Props> = ({beverage, favourites}) =>  {

    const beverages: Favourite[] | undefined = beverage === "coffee" ? favourites?.filter(fav => fav.beverage === "coffee") : favourites?.filter(fav => fav.beverage === "tea");

    if (beverages?.length === 0) {
        if (beverage === "coffee") {
            return <div>Lisää lempikahveja lomakkeella</div>
        } else  if (beverage === "tea") {
            return <div>Lisää lempi teelaatuja lomakkeella</div>
        }
    }

    return (
        <div>
            <TableContainer component={Paper} className="table">
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Nimi</TableCell>
                            <TableCell>Paino (g)</TableCell>
                            <TableCell>Hinta (€)</TableCell>
                            {beverage === "coffee" &&(<TableCell>Paahtoaste</TableCell>)}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {beverages?.map((bev) => (
                            <TableRow
                                key={bev.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {bev.name}
                                </TableCell>
                                <TableCell>{bev.weight}</TableCell>
                                <TableCell>{bev.price}</TableCell>
                                {beverage === "coffee" && (<TableCell>{bev.roast}</TableCell>)}
                            </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default FavouritesTable;
