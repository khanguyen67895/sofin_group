export interface Product {
  id: string
  name: string
  description: string
  price: number
  image?: string
  category: string
  stock: number
  createdAt: string
  updatedAt: string
}

export interface CreateProductPayload {
  name: string
  description: string
  price: number
  image?: string
  category: string
  stock: number
}

export type UpdateProductPayload = Partial<CreateProductPayload>
