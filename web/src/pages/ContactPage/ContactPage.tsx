import { Box, Divider, Typography } from '@mui/material'
import {
  CreateContactMutation,
  CreateContactMutationVariables,
} from 'types/graphql'

import {
  FieldError,
  Form,
  Label,
  TextField,
  TextAreaField,
  Submit,
  SubmitHandler,
} from '@redwoodjs/forms'
import { MetaTags, useMutation } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

interface FormValues {
  name: string
  email: string
  message: string
}

const ContactPage = () => {
  const [create, { loading, error }] = useMutation<
    CreateContactMutation,
    CreateContactMutationVariables
  >(CREATE_CONTACT, {
    onCompleted: () => {
      toast.success('Thank you for your submission!')
    },
    onError: () => {
      toast.error(`Oops, there was a problem with your submission: ${error}3`)
    },
  })

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    create({ variables: { input: data } })
  }

  return (
    <Box>
      <MetaTags title="Contact" description="Contact page" />

      <Typography variant="h3" textAlign={'center'}>
        Contact
      </Typography>
      <Box display={'flex'} justifyContent={'center'}>
        <Typography variant="body1">Thank you for using</Typography>
        <Typography variant="body1" width="0.25rem" />
        <Typography variant="body1" sx={{ fontFamily: 'Itim' }}>
          Examplio
        </Typography>
        <Typography variant="body1">
          ! We are always looking for ways to improve our service. Contact us
          using the form below!
        </Typography>
      </Box>

      <Toaster />
      <Divider />
      <br />
      <Form
        onSubmit={onSubmit}
        config={{ mode: 'onBlur' }}
        style={{
          display: 'block',
        }}
      >
        <Label name="name" errorClassName="error">
          Name
        </Label>
        <br />
        <TextField
          name="name"
          validation={{ required: true }}
          errorClassName="error"
        />
        <br />
        <FieldError name="name" className="error" />
        <br />

        <Label name="email" errorClassName="error">
          Email
        </Label>
        <br />
        <TextField
          name="email"
          validation={{
            required: true,
            pattern: {
              value: /^[^@]+@[^.]+\..+$/,
              message: 'Please enter a valid email address',
            },
          }}
          errorClassName="error"
        />
        <br />
        <FieldError name="email" className="error" />
        <br />

        <Label name="message" errorClassName="error">
          Message
        </Label>
        <br />
        <TextAreaField
          name="message"
          validation={{ required: true }}
          errorClassName="error"
          rows={35}
          cols={80}
        />
        <br />
        <FieldError name="message" className="error" />
        <br />

        <Submit disabled={loading}>Save</Submit>
      </Form>
    </Box>
  )
}

export default ContactPage
