import { useRef } from 'react'
import { useEffect } from 'react'

import {
  Form,
  Label,
  TextField,
  PasswordField,
  Submit,
  FieldError,
} from '@redwoodjs/forms'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
const SignUp = () => {
  const { signUp } = useAuth()

  const usernameRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    usernameRef.current?.focus()
  }, [])

  const onSubmit = async (data: Record<string, string>) => {
    const response = await signUp({
      username: data.email,
      password: data.password,
      name: data.name,
    })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      toast.success('Welcome!')
    }
  }

  return (
    <>
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />

      <Form
        onSubmit={onSubmit}
        className="rw-form-wrapper"
        config={{ mode: 'onBlur' }}
      >
        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Username
        </Label>
        <TextField
          name="name"
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          ref={usernameRef}
          validation={{
            required: {
              value: true,
              message: 'Username is required',
            },
          }}
        />
        <FieldError name="name" className="rw-field-error" />

        <Label
          name="email"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Email
        </Label>
        <TextField
          name="email"
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{
            required: {
              value: true,
              message: 'Email is required',
            },
            pattern: {
              value: /[^@]+@[^.]+\..+/,
              message: 'Please enter a valid email address',
            },
          }}
        />
        <FieldError name="email" className="rw-field-error" />

        <Label
          name="password"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Password
        </Label>
        <PasswordField
          name="password"
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          autoComplete="current-password"
          validation={{
            required: {
              value: true,
              message: 'Password is required',
            },
          }}
        />
        <FieldError name="password" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit className="rw-button rw-button-blue">Sign Up</Submit>
        </div>
      </Form>
    </>
  )
}

export default SignUp
