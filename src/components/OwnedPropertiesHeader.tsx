import React from 'react';

import { Collapse } from "@mui/material"
import { RcSesServiceHeader } from '@registrucentras/rc-ses-react-components'
import { useParams } from 'react-router-dom';

import env from '../env';

function ServiceHeader() {
  const { serviceId } = useParams()

  return (
    <Collapse in={!!serviceId} timeout={{ exit: 300 }} unmountOnExit>
      <RcSesServiceHeader
        breadcrumbsProps={{
          path: [
            { label: 'Savitarna', path: `${env.ENV_PUBLIC_PORTAL_URL}/savitarna` },
            { label: 'Mano turtas', path: `${env.ENV_PUBLIC_PORTAL_URL}/savitarna/mano-turtas` },
            {
              label: 'Hipotekos, įkeitimai',
              path: `${env.ENV_SERVICE_PROVIDER_MFE_BASENAME}/${env.ENV_SERVICE_PROVIDER_OWNED_PROPERTIES_PATH}/${serviceId}`,
            },
          ],
        }}
        title='Hipotekos, įkeitimai'
      />
    </Collapse>
  )
}

export default ServiceHeader
