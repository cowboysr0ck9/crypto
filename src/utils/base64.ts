/**
 * @description Encodes a string of data into Base64
 * @param data String of ASCII data
 */
export const base64Encode = (data: string) => Buffer.from(data).toString('base64');

/**
 * @description Decodes a string of Base64 encoded data
 * @param data String of Base64 data
 */
export const base64Decode = (data: string) => Buffer.from(data, 'base64').toString('ascii');
