import React from "react";
import {Box, Button, FormControl, InputLabel, MenuItem, TextField} from '@mui/material';
import Select from '@mui/material/Select';
import { useForm, Controller } from "react-hook-form";
import {Favourite} from '../data/model';

interface Props {
    onSubmit: (favourite: Favourite) => void;
    beverage: string;
}

const AddFavouriteForm: React.FC<Props> = ({onSubmit, beverage}) => {
    const {
        register,
        handleSubmit,
        control,
        reset,
        formState,
        formState: { isSubmitSuccessful }
    } = useForm<Favourite>();

    React.useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset({ name: "", weight: "", price: "", roast: "" });
        }
    }, [formState, isSubmitSuccessful, reset]);

    return (
        <Box component="form"
             sx={{display: 'flex',
                 flexDirection: 'column',
                 alignItems: 'center',
                 '& > :not(style)': { m: 1, width: '25ch' },
             }} autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <input type="hidden" value={beverage} {...register("beverage")}/>
            <TextField label="Nimi" required {...register("name", { required: true })}/>
            <TextField label="Paino (g)" {...register("weight")}/>
            <TextField label="Hinta (€)" {...register("price")}/>
            {beverage === "coffee" && (<FormControl sx={{ minWidth: 120 }}>
                <InputLabel id="demo-simple-select-label">Paahto</InputLabel>
                <Controller name="roast" control={control} defaultValue={""} render={() => (
                <Select
                    label="Paahto"
                    autoWidth
                    {...register("roast")}
                >
                    <MenuItem value={""} disabled>Valitse</MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                </Select>
                )}
                />
            </FormControl>
            )}
            <Button variant="contained" type="submit" onClick={handleSubmit(onSubmit)}>Lähetä</Button>
        </Box>
    )

}

export default AddFavouriteForm;