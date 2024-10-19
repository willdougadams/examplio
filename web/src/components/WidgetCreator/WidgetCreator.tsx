import { FormEvent } from 'react'

import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
  TextField,
} from '@mui/material'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'

import { CreateWidgetInput } from '../../../types/graphql'
import { QUERY as GET_WIDGETS } from '../WidgetsCell'

const CREATE_WIDGET = gql`
  mutation CreateWidgetMutation($input: CreateWidgetInput!) {
    createWidget(input: $input) {
      id
    }
  }
`

const WidgetCreator = () => {
  const { currentUser } = useAuth()

  const [open, setOpen] = React.useState<boolean>(false)

  const [create, { loading, error }] = useMutation<CreateWidgetInput>(
    CREATE_WIDGET,
    {
      onCompleted: () => {
        toast.success('Created new widget!')
      },
      onError: () => {
        toast.error(
          `Oops, there was a problem with your submission: ${error.message}`
        )
      },
      refetchQueries: [{ query: GET_WIDGETS }],
      awaitRefetchQueries: true,
    }
  )

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const formJson = Object.fromEntries(formData.entries())

    create({
      variables: { input: { name: formJson.name, ownerId: currentUser.id } },
    })
      .catch((error) => toast.error(`Error creating widget: ${error}`))
      .finally(() => handleClose())
  }

  return (
    <>
      <Button variant="outlined" onClick={handleOpen}>
        New Widget
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: handleSubmit,
        }}
      >
        <DialogTitle>Fizz new widget</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {"So what're we calling this one?"}
          </DialogContentText>
          <Stack spacing={2}>
            <TextField required name="name" label="Name" type="text" />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Discard</Button>
          <Button
            type="submit"
            disabled={loading}
            endIcon={loading && <CircularProgress size="small" />}
          >
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default WidgetCreator
