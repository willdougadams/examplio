import { Stack } from '@mui/material'

import { MetaTags } from '@redwoodjs/web'
import { Toaster } from '@redwoodjs/web/toast'

import WidgetCreator from 'src/components/WidgetCreator/WidgetCreator'
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

      <Stack width="25rem">
        <WidgetCreator />
        <WidgetsCell />
      </Stack>
      <Toaster />
    </WidgetsPageContext.Provider>
  )
}

export default WidgetsPage
