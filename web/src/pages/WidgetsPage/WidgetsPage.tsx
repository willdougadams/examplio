import { Box } from '@mui/material'

import { MetaTags } from '@redwoodjs/web'

import WidgetPicker from 'src/components/WidgetPicker/WidgetPicker'
import WidgetsCell from 'src/components/WidgetsCell'

const WidgetsPage = () => {
  const WidgetsPageContext = React.createContext({
    selectedWidgetId: null,
    setSelectedWidgetId: () => {},
  })
  return (
    <WidgetsPageContext.Provider
      value={{
        selectedWidgetId: null,
        setSelectedWidgetId: () => console.log('setting selected widget'),
      }}
    >
      <MetaTags title="Widgets" description="Widgets page" />

      <Box padding="64px">
        <WidgetsCell />
      </Box>
    </WidgetsPageContext.Provider>
  )
}

export default WidgetsPage
