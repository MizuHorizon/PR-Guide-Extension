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
  console.log(genAI);
  const data = await getData();
  console.log(data);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = `explain me these lines of code with code written above and the explaination of that line of code written below.The explannation should start with "EXPLANATION" written is green color in bold letters and the explanation written is green color.There shoudld be a good spacing between the each explanation. Then write the summary of code above the file with "SUMMARY OF THE CODE" written on above with bold letters with red colors and summary written below the title with details and of 300 words in detail. There should be good spacing between summary and line bu line code explanation ${data}`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  const win = window.open("", "_blank");
  if (typeof text === "string") {
    const textWithLineBreaks = text.replace(/(\r\n|\n|\r)/g, "<br>");
    win.document.write(textWithLineBreaks);
  } else {
    try {
      // If not a string, try converting to JSON (assuming it's an object)
      const jsonResponse = JSON.stringify(text);
      const WithLineBreaks = jsonResponse.replace(/(\r\n|\n|\r)/g, "<br>");
      win.document.write(WithLineBreaks);
    } catch (error) {
      // Handle potential errors during JSON conversion
      console.error("Error converting response to JSON:", error);
      win.document.write("An error occurred while processing the response.");
    }
  }
  console.log("above return",text)
  return text
}
