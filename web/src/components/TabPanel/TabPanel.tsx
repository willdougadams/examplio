import { Box, Typography } from '@mui/material'

interface TabPanelProps {
  children?: React.ReactNode
  name: string
  index: number
  value: number
}

const TabPanel = (props: TabPanelProps) => {
  const { name, children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`${name}-${index}`}
      aria-labelledby={`${name}-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

export default TabPanel
