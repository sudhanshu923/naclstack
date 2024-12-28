import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

const RegisterForm = () => {
    return (
        <form className="grid items-start gap-4">
            <div className="grid gap-2">
                <Label htmlFor="username" className=' ml-2'>Username</Label>
                <Input type="text" id="username" defaultValue="example" />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="email" className=' ml-2'>Email</Label>
                <Input type="email" id="email" defaultValue="example@example.com" />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="password" className=' ml-2'>Password</Label>
                <Input type="password" id="password" defaultValue="example" />
            </div>
            
            <Button type="submit">Register</Button>
        </form>
    )
}

export default RegisterForm