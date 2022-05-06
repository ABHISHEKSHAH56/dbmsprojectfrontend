import React from 'react'
import { useState } from 'react';
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
//
import { styled } from '@mui/material/styles';
import {
 
  
  OutlinedInput,
  InputAdornment
} from '@mui/material';
// component
import Iconify from '../components/Iconify';
import TableStudent from 'src/components/TableStudent';

export default function CourseStudent() {
    const [filterName, setFilterName] = useState('');
    const handleFilterByName = (event) => {
        setFilterName(event.target.value);
      };
      
  return (
    <>
    <Page title="User | Minimal-UI">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Student 
          </Typography>          
        </Stack>

        <Card>
        

         
         

          <Scrollbar>
            <TableStudent />
          </Scrollbar>

          
        </Card>
      </Container>
    </Page>
    </>


  )
}
