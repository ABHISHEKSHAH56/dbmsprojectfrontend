import React from 'react'

// material
import {
  Card,  
  Stack, 
  Container,
  Typography,
 
} from '@mui/material';
// components
import Page from '../components/Page';
import Scrollbar from '../components/Scrollbar';


import TableAssigmentStudent from 'src/components/TableAssigmentStudent';

export default function AssigmentStudentTable() {
    
  return (
    <>
    <Page title="User | Minimal-UI">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Assigment-01 
          </Typography>          
        </Stack>

        <Card>
        

         
         

          <Scrollbar>
            <TableAssigmentStudent />
          </Scrollbar>

          
        </Card>
      </Container>
    </Page>
    </>


  )
}
