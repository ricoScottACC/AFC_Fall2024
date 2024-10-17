import * as React from 'react';
import { Box, TextField, Button, Stack } from '@mui/material';
import {useForm} from "react-hook-form";
import {object, string, number} from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

export default function Form() {
    const userSchema = object({
        fname: string().required("Please submit first name.").max(5, "Less than 5 please."),
        lname: string().max(5, "Less than 6").min(2, "More than 1")
        // age: number().positive("Bigger").required("why no age?").lessThan(100, "too big"),
        // email: string().email("fix it").required("it's 2024, come on"),
        // password: string().max(11, "too long").min(8, "too short")
    });
    const {reset, register, handleSubmit, setValue, watch, formState: {errors}} = useForm( {
        resolver: yupResolver(userSchema)
    });
    const handleChange = (e) => {
      setValue(e.target.name, e.target.value);
        console.log(watch('fname'));
    };
    const onSubmit = (data) => {
        console.log(data);
        reset();
    }

    return (
        <Box
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
        >
            <TextField id="outlined-basic" label="First Name" variant="outlined"
                       {...register("fname")} onChange={handleChange}
                       color={"secondary"}
                       helperText={errors.fname && <span>{errors.fname.message}</span>}
                       error={errors.fname !== undefined}
            />
            <TextField id="filled-basic" label="Last Name" variant="filled"
                       {...register("lname")} onChange={handleChange}
                       helperText={errors.lname && <span>{errors.lname.message}</span>}
                       error={errors.lname !== undefined}
            />
            {/*<TextField id="standard-basic" label="Standard" variant="standard" />*/}
            <Stack direction="row" spacing={2}>
                <Button variant="contained" color="success" type="submit">
                    Submit
                </Button>
                <Button onClick={() => reset()} variant="contained" color="error">
                    Reset
                </Button>
            </Stack>
        </Box>
    );
}