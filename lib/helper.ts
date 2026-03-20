export function geoJsonToWktPolygon(coordinates: number[][][]) {
  const ring = coordinates[0] // outer ring
  const points = ring.map(([lng, lat]) => `${lng} ${lat}`).join(", ")
  return `POLYGON ((${points}))`
}
export interface UserDetails {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  phone_no?: string;
  status?: boolean;
  token: string;
  position: string;
  address: string
  type?: string
  role?: string
}
interface AuthData {
  isAuthenticated: boolean;
  user: UserDetails | null;
  token: string
}

export function encryptAuthData(data: AuthData): string {
  return btoa(JSON.stringify(data));
}

export function decryptAuthData(dataStr: string): AuthData | null {
  try {
    const data = JSON.parse(atob(dataStr));
    return data;
  } catch (error) {
    return null;
  }
}