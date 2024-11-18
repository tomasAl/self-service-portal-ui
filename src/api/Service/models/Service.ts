type Service = {
  id: string
  forContractUsers: boolean
  forForeigners: boolean
  forLocals: boolean
  keywords: string
  links?: ServiceLink[] | undefined
  recipientIndividual?: boolean | undefined
  recipientLegal: boolean
  relatedServices?: ServiceListItem[] | undefined
  resultDescription: string
  serviceDescription: string
  serviceFormUrl: string
  subthemeIds?: string[]
  systemService: boolean
  title: string
  withoutOrdering: boolean
}

type ServiceLink = Pick<Service, 'title'> & { url: string }

type ServiceListItem = Pick<Service, 'id' | 'title' | 'subthemeIds'>

export type { ServiceLink, ServiceListItem }

export default Service
