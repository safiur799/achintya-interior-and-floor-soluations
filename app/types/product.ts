/** Product Data Types */
export interface Product {
  /** Unique product identifier */
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
  brand?: string;
  customization?: string;
  origin?: string;
  warranty?: string;
  standards?: string[];
  installation_details?: Record<string, string>;
  usage_applications?: string[];
  performance_features?: Record<string, string>;
  dimensions_detailed?: Record<string, string>;
}

export interface Subcategory {
  id: string;
  title: string;
  image: string;
  products: Product[];
}

export interface Category {
  products?: Product[];
  id: string;
  title: string;
  description: string;
  image: string;
  subcategories: Subcategory[];
}
