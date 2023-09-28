import { Card } from '@mui/material'

import { Patient } from 'src/pages/PatientPage/PatientPage'

interface PatientEmergencyContactCardProps {
  patient: Patient
}

const PatientEmergencyContactCard = ({
  patient,
}: PatientEmergencyContactCardProps) => {
  return (
    <Card>
      <h2>{'PatientEmergencyContactCard'}</h2>
    </Card>
  )
}

export default PatientEmergencyContactCard
