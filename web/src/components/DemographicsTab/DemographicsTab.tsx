import { Box } from '@mui/material'

import { Patient } from 'src/pages/PatientPage/PatientPage'

import PatientContactCard from '../PatientContactCard/PatientContactCard'
import PatientEmergencyContactCard from '../PatientEmergencyContactCard/PatientEmergencyContactCard'
import PersonalInfoCard from '../PersonalInfoCard/PersonalInfoCard'

interface DemoProps {
  patient: Patient
}

const DemographicsTab = ({ patient }: DemoProps) => {
  return (
    <Box display="flex" gap="12px">
      <PersonalInfoCard patient={patient} />
      <PatientContactCard patient={patient} />
      <PatientEmergencyContactCard patient={patient} />
    </Box>
  )
}

export default DemographicsTab
