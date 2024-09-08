import { ENVS } from "./config/envs"
import { genAI } from "./config/gen-ai"
import { generateImagePromptInput } from "./util"

async function run() {
  const model = genAI.getGenerativeModel({ model: ENVS.google.genAI.model })

  const prompt = "Describe everything you can see in this image"

  const imagePrompt = generateImagePromptInput('./tmp/test.webp', "image/webp")

  const imagePromptList = [imagePrompt]

  const result = await model.generateContent([prompt, ...imagePromptList])
  const response = result.response.text()
  console.log(response)
}

run().catch(console.error)