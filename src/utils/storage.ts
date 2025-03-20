/* eslint-disable @typescript-eslint/no-explicit-any */
import { logMessage } from './logger';

interface StorageResponseInterface {
  data?: any;
  error?: any;
}
export function setLocalData(key: string, value: any): StorageResponseInterface {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return { data: value };
  } catch (e) {
    logMessage(
      {
        location: 'setLocalData',
        message: 'Error setting value {' + key + '} to local',
        stack: e,
      },
      'error',
    );
    return { error: e };
  }
}

export function getLocalData(key: string, type = 'object'): StorageResponseInterface {
  try {
    const value = localStorage.getItem(key) ?? (type === 'object' ? '{}' : '');
    return type === 'object' ? { data: JSON.parse(value) } : { data: value };
  } catch (e) {
    logMessage(
      {
        location: 'getLocalData',
        message: 'Error fetching {' + key + '} from local',
        stack: e,
      },
      'error',
    );
    return { error: e };
  }
}
