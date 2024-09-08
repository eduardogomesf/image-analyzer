import * as dotenv from 'dotenv'

dotenv.config()

if(!process.env.GOOGLE_AI_API_KEY) {
  throw new Error('Not API KEY found for GEN AI')
}

export const ENVS = {
  google: {
    genAI: {
      apiKey: process.env.GOOGLE_AI_API_KEY ?? "",
      model: process.env.GOOGLE_AI_MODEL ?? "gemini-pro"
    }
  }
} as const