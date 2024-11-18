import React from 'react';
import {  Collapse, Skeleton, Typography } from "@mui/material"
import { RcSesServiceHeader } from '@registrucentras/rc-ses-react-components'
import useServiceApi from '../api/Service/useServiceApi';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

function ServiceHeader() {
  const { serviceId } = useParams()

  const { fetchService } = useServiceApi()
  const { data: service, isError } = useQuery(fetchService(serviceId))

  return (
    <Collapse in={!isError && !!serviceId} timeout={{ exit: 300 }} unmountOnExit>
      <RcSesServiceHeader
        breadcrumbsProps={{
          path: [
            { label: 'Savitarna', path: '/savitarna' },
            { label: 'Paslaugų užsakymo forma', path: `/savitarna/paslaugos/uzsakymas/${service?.id}` },
          ],
        }}
        title={!!service ? service.title : <Skeleton variant='text' width='60%' />}
      ><Typography variant='body1'>
        {!!service && service?.serviceDescription}
        {!service && (
          <>
            <Skeleton variant='text' width='90%' />
            <Skeleton variant='text' width='90%' />
            <Skeleton variant='text' width='80%' />
          </>
        )}</Typography>
      </RcSesServiceHeader>
    </Collapse>
  )
}

export default ServiceHeader
