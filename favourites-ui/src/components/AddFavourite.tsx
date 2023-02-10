import React from "react";
import {Tab, Box} from "@mui/material";
import {TabContext, TabPanel, TabList} from "@mui/lab";
import AddFavouriteForm from "./AddFavouriteForm";
import {useMutation, useQueryClient} from "react-query";
import {Favourite} from "../data/model";
import {createFavourite} from "../data/favourite";

const AddFavourite: React.FC<{}> = () => {
    const [value, setValue] = React.useState("1");
    const queryClient = useQueryClient();

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    const sendNewFavourite = useMutation(
        async (favourite: Favourite) => {
            await createFavourite(
                favourite
            );
        },
        {
            onSuccess: () => queryClient.invalidateQueries(["favourites"]),
            onError: (error) => console.log(error),
        }
    );


    return (
        <div>
            <h2>Lisää lempijuomasi alla olevalla lomakkeella</h2>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} centered>
                            <Tab label="Kahvi" value="1" />
                            <Tab label="Tee" value="2" />
                        </TabList>
                    </Box>
                    <TabPanel value="1"><AddFavouriteForm onSubmit={sendNewFavourite.mutate} beverage={"coffee"}/></TabPanel>
                    <TabPanel value="2"><AddFavouriteForm onSubmit={sendNewFavourite.mutate} beverage={"tea"}/></TabPanel>
                </TabContext>
            </Box>
        </div>
    )
}

export default AddFavourite;
