import { createCipheriv, createDecipheriv } from "crypto";

export const algorithm = "aes-256-cbc";
export const dataEncode = "hex";

export const encrypter = (data: string, accessToken: string, salt: string) => {
  const cipher = createCipheriv(algorithm, accessToken, salt);
  return cipher.update(data, "utf8", dataEncode) + cipher.final(dataEncode);
};

export const decrypter = (data: string, accessToken: string, salt: string) => {
  const decipher = createDecipheriv(algorithm, accessToken, salt);
  let decrypted = decipher.update(Buffer.from(data, dataEncode));

  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
};
