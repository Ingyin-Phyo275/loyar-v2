export interface TripData {
  userId: string;
  latitude: string;
  longitude: string;
  dropoffLatitude: string;
  dropoffLongitude: string;
  distanceKm?: string;
  promoCode?: string;
}

export interface PaymentProps {
  tradeType: string;
  amount: number;
  paymentType: string;
  userType: string;
  userId: string;
  paymentMethodId: string;
  paymentMethod?: string;
  tripData?: TripData;
}
