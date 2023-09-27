import { useState } from 'react'

import { Box, Button, LinearProgress, TextField } from '@mui/material'
import { UpdateUserInput } from 'types/graphql'

import { MetaTags, useMutation } from '@redwoodjs/web'

import { useAuth } from 'src/auth'

const UPDATE_USER = gql`
  mutation updateUser($id: Int!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input) {
      name
      email
    }
  }
`

const SettingsPage = () => {
  const { currentUser } = useAuth()
  const [update] = useMutation<UpdateUserInput>(UPDATE_USER)
  const [values, setValues] = useState({
    name: currentUser.name,
    email: currentUser.email,
  })

  const [saving, setSaving] = useState(false)

  const handleSubmit = async () => {
    setSaving(true)
    await update({
      variables: {
        id: currentUser.id,
        input: {
          name: values.name,
          email: values.email,
        },
      },
    })
    setSaving(false)
  }

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    })
  }

  return (
    <>
      <MetaTags title="Settings" />
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            label="Name"
            name="name"
            defaultValue={values.name}
            variant="standard"
            onChange={handleChange}
          />
        </div>
        <div>
          <TextField
            disabled
            label="Email"
            name="email"
            defaultValue={values.email}
            variant="standard"
            onChange={handleChange}
            helperText="Email change not yet supported."
          />
        </div>
        <Button onClick={handleSubmit}>Submit</Button>
        {saving && <LinearProgress />}
      </Box>
    </>
  )
}

export default SettingsPage
