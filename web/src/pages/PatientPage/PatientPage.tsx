import { useEffect, useState } from 'react'

import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact'
import ContactPageIcon from '@mui/icons-material/ContactPage'
import MedicationIcon from '@mui/icons-material/Medication'
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle'
import { Box, Tabs, Tab, Typography, LinearProgress } from '@mui/material'

import { useParams } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import DemographicsTab from 'src/components/DemographicsTab/DemographicsTab'
import PatientPageHeader from 'src/components/PatientPageHeader/PatientPageHeader'

export const mockUrl = 'https://6398d8e229930e2bb3c3b149.mockapi.io'

export interface Patient {
  createdAt: string
  firstName: string
  lastName: string
  dateOfBirth: string
  race: string
  gender: string
  socialSecurityNumber: number
  addressStreet: string
  email: string
  phone: string
  contactName: string
  contactRelation: string
  contactEmail: string
  contactPhone: number
  avatar: string
  addressCity: string
  addressState: string
  addressZip: string
  ethnicity: string
  id: number
}

/*
  chatGPT disclosure, sorry copilot!
*/
function calculateAge(dateString: string): number {
  // Parse the date string into a Date object
  const birthDate = new Date(dateString)
  if (isNaN(birthDate.getTime())) {
    return 0
  }

  // Get the current date
  const currentDate = new Date()

  // Calculate the age
  let age = currentDate.getFullYear() - birthDate.getFullYear()
  const monthDifference = currentDate.getMonth() - birthDate.getMonth()

  // If the birth date has not occurred this year yet, subtract 1 from age
  if (
    monthDifference < 0 ||
    (monthDifference === 0 && currentDate.getDate() < birthDate.getDate())
  ) {
    age--
  }

  return age
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

const PatientPage = () => {
  const { patientId } = useParams()
  const [patient, setPatient] = useState<Patient | null>(null)
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  useEffect(() => {
    fetch(`${mockUrl}/Patients/${patientId}`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setPatient(data)
      })
  }, [])

  if (!patient) {
    return <LinearProgress />
  }

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', flexGrow: 1 }}>
        <PatientPageHeader
          fullName={`${patient.firstName} ${patient.lastName}`}
          age={calculateAge(patient.dateOfBirth)}
          gender={patient.gender === 'male' ? 'Male' : 'Female'}
          email={patient.email}
          phone={patient.phone}
          avitarUrl={patient.avatar}
        />
        <Tabs value={value} onChange={handleChange}>
          <Tab
            label="Demographics"
            icon={<ContactPageIcon />}
            iconPosition="start"
          />
          <Tab
            label="Insurance"
            icon={<PersonPinCircleIcon />}
            iconPosition={'start'}
          />
          <Tab
            label="Medication"
            icon={<MedicationIcon />}
            iconPosition={'start'}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <DemographicsTab patient={patient} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Insurance tab here
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Emergency Contact info here
      </CustomTabPanel>
    </>
  )
}

export default PatientPage
