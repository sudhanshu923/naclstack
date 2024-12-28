import React from 'react'

import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

import RegisterForm from './register'

import ResponsiveButton from '../wrappers/button'
import ForgotPasswordForm from './forgotPassword'

const LoginForm = () => {
    return (
        <form className="grid items-start gap-4">
            <div className="grid gap-2">
                <Label htmlFor="email" className=' ml-2'>Email</Label>
                <Input type="email" id="email" defaultValue="example@example.com" />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="password" className=' ml-2'>Username</Label>
                <Input type="password" id="password" defaultValue="example" />
            </div>
            <div className=' flex justify-between items-center px-2'>
                <ResponsiveButton
                    trigger={<Label className=' cursor-pointer Link'>Forgot Password?</Label>}
                    title='Forgot Password'
                    description="Forgot your password? Enter your email address, and we'll send you a link to reset it and regain access to your account."
                    content={<ForgotPasswordForm />}
                />
                <ResponsiveButton
                    trigger={<Label className=' cursor-pointer Link'>Register</Label>}
                    title='Register'
                    description="Create a new account to get started. Fill in your details below to join and enjoy all our features."
                    content={<RegisterForm />}
                />
            </div>
            <Button type="submit">Log In</Button>
        </form>
    )
}

export default LoginForm