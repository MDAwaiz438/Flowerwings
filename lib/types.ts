export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  shortDescription: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  category: ProductCategory;
  occasions: Occasion[];
  inStock: boolean;
  stockCount?: number;
  deliveryEligible: boolean;
  rating: number;
  reviewCount: number;
  tags: string[];
  isBestseller: boolean;
  isFeatured: boolean;
  badge?: string;
  weight?: string;
  flowers?: string[];
}

export type ProductCategory =
  | 'flowers'
  | 'bouquets'
  | 'arrangements'
  | 'plants'
  | 'cakes'
  | 'gift-combos';

export type Occasion =
  | 'birthday'
  | 'anniversary'
  | 'valentines'
  | 'get-well'
  | 'sympathy'
  | 'congratulations'
  | 'mothers-day'
  | 'just-because';

export interface CartItem {
  product: Product;
  quantity: number;
  giftMessage?: string;
  addedAt: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  delivery: DeliveryDetails;
  payment: PaymentDetails;
  status: OrderStatus;
  createdAt: string;
  estimatedDelivery: string;
  trackingSteps: TrackingStep[];
}

export interface DeliveryDetails {
  recipientName: string;
  recipientPhone: string;
  address: string;
  pinCode: string;
  city: string;
  landmark?: string;
  timeSlot: TimeSlot;
  deliveryDate: string;
}

export interface PaymentDetails {
  method: string;
  transactionId?: string;
  status: 'pending' | 'completed' | 'failed';
}

export type TimeSlot =
  | 'morning-9-12'
  | 'afternoon-12-3'
  | 'evening-3-6'
  | 'night-6-9';

export type OrderStatus =
  | 'placed'
  | 'confirmed'
  | 'arranging'
  | 'out-for-delivery'
  | 'delivered';

export interface TrackingStep {
  status: OrderStatus;
  label: string;
  timestamp?: string;
  completed: boolean;
}

export interface Review {
  id: string;
  productId: string;
  authorName: string;
  location: string;
  rating: number;
  body: string;
  date: string;
  verified: boolean;
  occasion?: Occasion;
}
