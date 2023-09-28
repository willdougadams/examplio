import { Card, CardHeader } from '@mui/material'

import { Patient } from 'src/pages/PatientPage/PatientPage'

interface PatientContactCardProps {
  patient: Patient
}

const PatientContactCard = ({ patient }: PatientContactCardProps) => {
  return (
    <Card>
      <CardHeader
        title="Personal Information"
        subheader="This is the contact information for the patient"
      />
    </Card>
  )
}

export default PatientContactCard
