/* eslint-disable @typescript-eslint/no-explicit-any */
interface LogInterface {
  location: string;
  message: string;
  stack?: any;
}
type logType = 'log' | 'info' | 'error';
export const logMessage = (log: LogInterface, type: logType = 'log') => {
  const data = {
    location: log.location,
    message: log.message,
    timestamp: new Date().toISOString(),
    stack: null,
  };
  if (log.stack) {
    data.stack = log.stack;
  }
  if (type === 'error') {
    console.error('Error logged successfully', data);
  } else if (type === 'info') {
    console.info('Info logged successfully', data);
  } else {
    console.log('Message logged successfully', data);
  }
};
