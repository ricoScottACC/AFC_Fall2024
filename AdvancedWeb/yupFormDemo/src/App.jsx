import {useState} from 'react'
import {useForm} from "react-hook-form";
import './App.css'
import {object, string, number} from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

function App() {
    const userSchema = object({
        fname: string().required("Please submit first name.").max(5, "Less than 5 please."),
        lname: string().max(5, "Less than 6").min(2, "More than 1"),
        age: number().positive("Bigger").required("why no age?").lessThan(100, "too big"),
        email: string().email("fix it").required("it's 2024, come on"),
        password: string().max(11, "too long").min(8, "too short")
    });
    const {register, handleSubmit, setValue, reset, formState: {errors}} = useForm({
        resolver: yupResolver(userSchema)
    });

    const handleChange = (event) => {
        console.log(`${event.target.name}: ${event.target.value}`);
        setValue(event.target.name, event.target.value)
    }

    const onSubmit = (data) => {
        console.log(data);
        reset();
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor='fname'>First</label>
                <input type='text' {...register("fname")} id='fname' onChange={handleChange}/>
                {errors.fname && <span>{errors.fname.message}</span>}
                <br/>
                <label htmlFor='lname'>Last</label>
                <input type='text' {...register("lname")} id='lname' onChange={handleChange}/>
                {errors.lname && <span>{errors.lname.message}</span>}
                <br/>
                <label htmlFor='age'>Age</label>
                <input type='number' {...register("age")} id='age' onChange={handleChange}/>
                {errors.age && <span>{errors.age.message}</span>}
                <br/>
                <label htmlFor='email'>Email</label>
                <input type='email' {...register("email")} id='email' onChange={handleChange}/>
                {errors.email && <span>{errors.email.message}</span>}
                <br/>
                <label htmlFor='password'>Password</label>
                <input type='password' {...register("password")} id='password' onChange={handleChange}/>
                {errors.password && <span>{errors.password.message}</span>}
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default App
