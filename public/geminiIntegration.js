import { GoogleGenerativeAI } from "@google/generative-ai";

async function getData() {
  const result = await chrome.storage.local.get("MainCode");
  if (result.hasOwnProperty("MainCode")) {
    console.log("in get data of if block", result.MainCode);
    return result.MainCode;
  } else {
    console.log("error in getdata in else block");
    return null;
  }
}


export async function run(ApiKey) {
  const genAI = new GoogleGenerativeAI(`${ApiKey}`);
  console.log(genAI)
  const data = await getData()
  console.log(data)
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = `explain this block of codes line by line in detail with the meaning of each line of code and also give the summary of this complete code ${data}`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}
