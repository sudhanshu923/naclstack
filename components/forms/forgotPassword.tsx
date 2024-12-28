import React from 'react'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Button } from '../ui/button'

const ForgotPasswordForm = () => {
    return (
        <form className="grid items-start gap-4">
            <div className="grid gap-2">
                <Label htmlFor="email" className=' ml-2'>Email</Label>
                <Input type="email" id="email" defaultValue="example@example.com" />
            </div>

            
            <Button type="submit">Reset Password</Button>
        </form>
    )
}

export default ForgotPasswordForm