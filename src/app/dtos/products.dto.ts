export interface IProductDto {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand?: string;
  sku: string;
  weight: number;
  dimensions: IProductDimensionsDto;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: IProductReviewDto[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: IProductMetaDto;
  images: string[];
  thumbnail: string;
}

export interface IProductDimensionsDto {
  width: number;
  height: number;
  depth: number;
}

export interface IProductReviewDto {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export interface IProductMetaDto {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}

export interface IProductsResponseDto {
  products: IProductDto[];
  total: number;
  skip: number;
  limit: number;
}

export interface ICreateProductDto {
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage?: number;
  stock?: number;
  brand?: string;
  thumbnail?: string;
  images?: string[];
}

export interface IUpdateProductDto {
  title?: string;
  description?: string;
  category?: string;
  price?: number;
  discountPercentage?: number;
  stock?: number;
  brand?: string;
  thumbnail?: string;
  images?: string[];
}
