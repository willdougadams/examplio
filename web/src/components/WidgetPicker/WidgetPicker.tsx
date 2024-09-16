import { Inbox } from '@mui/icons-material'
import { Drafts } from '@mui/icons-material'
import {
  Avatar,
  Box,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  List,
} from '@mui/material'
import { WidgetsQuery } from 'types/graphql'

interface WidgetPickerProps {
  widgets: WidgetsQuery['widgets']
}

const WidgetPicker = ({ widgets }: WidgetPickerProps) => {
  const widgetListItems = widgets.map((widget) => {
    return (
      <ListItem key={widget.id}>
        <ListItemButton>
          <ListItemAvatar>
            <Avatar alt={widget.owner.name} />
          </ListItemAvatar>
          <ListItemText primary={widget.name} />
        </ListItemButton>
      </ListItem>
    )
  })

  return (
    <Box>
      <List>{...widgetListItems}</List>
    </Box>
  )
}

export default WidgetPicker
