import { NextApiRequest, NextApiResponse } from "next";
import * as deepl from "deepl-node";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const authKey = process.env.AUTH_KEY as string;
  const translator = new deepl.Translator(authKey);

  const targetLang: deepl.TargetLanguageCode = "ja";
  console.log(req.body);
  const result = await translator.translateText(
    req.body["message"],
    null,
    targetLang
  );
  console.log(result);
  res.status(200).json(result);
};

export default handler;
