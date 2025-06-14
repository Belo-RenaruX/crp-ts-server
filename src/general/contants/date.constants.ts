export const dateConstants = {
  spanishDate: 'DD-MM-YYYY',
  dbDate: 'YYYY-MM-DD',
  inetumDate: 'YYYYMMDD',
} as const;

export const timeConstants = {
  spanishTime: 'HH:mm:ss',
  dbTime: 'HH:mm:ss',
  inetumTime: 'HHmmss',
} as const;

export const dateTimeConstants = {
  spanishDateTime: 'DD-MM-YYYY HH:mm:ss',
  dbDateTime: 'YYYY-MM-DD HH:mm:ss',
  inetumDateTime: 'YYYYMMDDHHmmss',
} as const;

export const allConstants = {
  ...dateConstants,
  ...timeConstants,
  ...dateTimeConstants,
} as const;
