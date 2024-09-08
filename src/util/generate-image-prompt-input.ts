import { InlineDataPart } from '@google/generative-ai'
import { readFileSync } from 'node:fs'

export function generateImagePromptInput(path: string, mimeType: string): InlineDataPart {
  return {
    inlineData: {
      data: Buffer.from(readFileSync(path)).toString('base64'),
      mimeType
    }
  }
}