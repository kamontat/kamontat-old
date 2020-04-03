import { encrypter, decrypter } from "../transformer";

describe("transformer utils", () => {
  const data = "abc";
  const encryptedData = "386e5aa8c23847fa2ece0b24418d42b3";

  const token = "bB0NAvpurecEwfLmCIOyLeTMlsWZEkMz";
  const salt = "Hway1QXJt2vIMQAl";

  it("can encrypt data with token and salt", () => {
    const secure = encrypter(data, token, salt);
    expect(secure).toEqual(encryptedData);
  });

  it("can decrpty data with token and salt", () => {
    const rawData = decrypter(encryptedData, token, salt);
    expect(rawData).toEqual(data);
  });
});
