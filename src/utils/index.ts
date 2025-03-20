/* eslint-disable @typescript-eslint/no-explicit-any */
import { v4 as uuidv4 } from 'uuid';

// 5. **Check if Object is Empty**
export function isEmpty(obj: object): boolean {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}

// 6. **Capitalize First Letter**
export function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// 7. **Get Query Params from URL**
export function getQueryParams(url: string): { [key: string]: string } {
  const params = new URLSearchParams(url);
  const queryParams: { [key: string]: string } = {};
  for (const [key, value] of params.entries()) {
    queryParams[key] = value;
  }
  return queryParams;
}

// 9. **Random String Generator**
export function generateRandomString(length: number = 8): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

// 10. **Check if a Value is a Number**
export function isNumber(value: any): boolean {
  return !isNaN(value) && typeof value === 'number';
}

// 15. **Generate UUID (v4)**
export function generateUniqueId(): string {
  return uuidv4();
}
