export interface Product {
  id: string;
  title: string;
  sku: string;
  image: string;
  material_grades?: string[];
  colors?: string[];
  quick_specs?: Record<string, string>;
  technical_specs?: Record<string, string>;
  gallery_images?: string[];
  description: string;
}

export interface Subcategory {
  id: string;
  title: string;
  image: string;
  products: Product[];
}

export interface Category {
  id: string;
  title: string;
  description: string;
  image: string;
  subcategories: Subcategory[];
}
