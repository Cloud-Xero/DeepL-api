import { NextApiRequest, NextApiResponse } from "next";
import * as deepl from "deepl-node";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const authKey = process.env.AUTH_KEY as string;
  const translator = new deepl.Translator(authKey);

  const targetLang: deepl.TargetLanguageCode = "ja";
  const result = await translator.translateText("Hello", null, targetLang);
  console.log(result);

  res.status(200).json(result.text);
};

export default handler;
