import React from 'react';
import {  Collapse, Skeleton, Typography } from "@mui/material"
import { RcSesServiceHeader } from '@registrucentras/rc-ses-react-components'
import { useParams } from 'react-router-dom';
import Service from '../api/Service/models/Service';
import env from '../env';

function ServiceHeader() {
  const { serviceId } = useParams()

  const service: Service = {
    id: serviceId,
    externalService: false,
    forContractUsers: false,
    forForeigners: false,
    forLocals: false,
    keywords: '',
    links: [
      {
        title: 'Nekilnojamojo turto registravimo paslaugų įkainiai',
        url: 'https://www.registrucentras.lt/p/1532',
      },
      {
        title: 'Nekilnojamojo turto ir registro išrašų, pažymų ir duomenų kainos',
        url: 'https://www.registrucentras.lt/p/1531',
      },
    ],
    recipientIndividual: false,
    recipientLegal: false,
    relatedServices: [
      {
        id: 'f4a0054b-8170-4b8f-ab98-f033afa06e3e',
        title: 'Vidutinės rinkos vertės nustatymas',
      },
      {
        id: '22a48a2f-144f-469e-b92b-2cd21e2c35bb',
        title: 'Mėgėjų sodo teritorijų ribų pažymėjimas ir įrašo padarymas',
      },
      {
        id: '33d19e74-feca-4a45-8b15-d22782074288',
        title:
          'Nekilnojamojo turto registro duomenų bazės naudojimas ir duomenų pateikimas',
      },
    ],
    resultDescription: '',
    serviceDescription:
      'Registrų centras – pagrindinių nacionalinių duomenų tvarkytojas ir pažangios valstybės bei visuomenės partneris, puoselėjantis šiuolaikišką, pozityvų ir abipusiu bendradarbiavimu grįstą santykį su visuomene ir suinteresuotomis šalimis. Registrų sistemos pagrindą sudaro 6 pagrindiniai valstybės registrai, iš kurių 5 pagrindinių valstybės registrų tvarkytojas yra Registrų centras. Pagrindinės Registrų centro veiklos yra registrų objektų registravimas ir duomenų teikimas.',
    serviceFormUrl: '00000000-0000-0000-0000-000000000000.js',
    systemService: false,
    title: 'Nekilnojamojo turto registro išrašas elektronine forma',
    withoutOrdering: false,
  }

  return (
    <Collapse in={!!serviceId} timeout={{ exit: 300 }} unmountOnExit>
      <RcSesServiceHeader
        breadcrumbsProps={{
          path: [
            { label: 'Savitarna', path: `${env.ENV_PUBLIC_PORTAL_URL}/savitarna` },
            {
              label: 'Paslaugų užsakymo forma',
              path: `${env.ENV_SERVICE_PROVIDER_MFE_BASENAME}/${env.ENV_SERVICE_PROVIDER_SERVICE_PATH}/${service?.id}`,
            },
          ],
        }}
        title={!!service ? service.title : <Skeleton variant='text' width='60%' />}
      >
        <Typography variant='body1'>
          {!!service && service?.serviceDescription}
          {!service && (
            <>
              <Skeleton variant='text' width='90%' />
              <Skeleton variant='text' width='90%' />
              <Skeleton variant='text' width='80%' />
            </>
          )}
        </Typography>
      </RcSesServiceHeader>
    </Collapse>
  )
}

export default ServiceHeader
