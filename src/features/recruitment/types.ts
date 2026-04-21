export interface JobDescriptionBlock {
  heading: string
  items: string[]
}

export interface Job {
  id: string
  title: string
  location: string
  salary: string
  updatedAt: string
  description?: JobDescriptionBlock[]
  requirements?: string[]
}

export interface CoreValue {
  title: string
  description: string
}
