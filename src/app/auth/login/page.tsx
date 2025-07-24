'use client';

import { useState } from "react";

import Button from "@/shared/components/button";
import Input from "@/shared/components/input";
import * as Yup from "yup";
import useYup from "@/shared/hooks/use-yup.hooks";
import Link from "next/link";

type LoginCredentials = {
    username: string;
    password: string;
}

const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
});


const Login = () => {
    const { validate } = useYup<LoginCredentials>();
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    })

    const handleLogin = () => {
        validate(validationSchema, credentials);
    }

    return (
        <form className="border-neutral-200 bg-neutral-0 shadow-sm max-w-[350px] w-full rounded-[16px] p-[20px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Input type="text" placeholder="Username" value={credentials.username} onChange={(e) => setCredentials({ ...credentials, username: e.target.value })} />
            <Input type="password" placeholder="Password" value={credentials.password} onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} />

            <Button value="Login" clickFunc={handleLogin} />
            <p className="text-center text-neutral-700 text-sm mt-2">
                Don't have an account? <Link href="/auth/register">Register</Link>
            </p>
        </form>
    )
}

export default Login;