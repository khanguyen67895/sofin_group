export interface JobDescriptionBlock {
  heading: string
  items: string[]
}

export interface Job {
  id: string
  documentId?: string
  title: string
  location: string
  salary: string
  updatedAt: string
  description?: JobDescriptionBlock[]
  requirements?: string[]
  descriptionText?: string
  requirementsText?: string
  benefitsText?: string
}

export interface CoreValue {
  title: string
  description: string
}
