'use client';

import { useState } from "react";
import * as Yup from "yup";

import Button from "@/shared/components/button";
import Input from "@/shared/components/input";
import useYup from "@/shared/hooks/use-yup.hooks";
import Link from "next/link";

type RegisterCredentials = {
    username: string;
    password: string;
    email: string;
}

const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
});


const Register = () => {
    const { validate } = useYup<RegisterCredentials>();
    const [credentials, setCredentials] = useState<RegisterCredentials>({
        username: "",
        password: "",
        email: "",
    })

    const handleRegister = () => {
        validate(validationSchema, credentials);
    }

    return (
        <form className="border-neutral-200 bg-neutral-0 shadow-sm max-w-[350px] w-full rounded-[16px] p-[20px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Input type="email" placeholder="Email" value={credentials.email} onChange={(e) => setCredentials({ ...credentials, email: e.target.value })} />
            <Input type="text" placeholder="Username" value={credentials.username} onChange={(e) => setCredentials({ ...credentials, username: e.target.value })} />
            <Input type="password" placeholder="Password" value={credentials.password} onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} />

            <Button value="Register" clickFunc={handleRegister} />
            <p className="text-center text-neutral-700 text-sm mt-2">
                Don't have an account? <Link href="/auth/login">Login</Link>
            </p>
        </form>
    )
}

export default Register;