import { GoogleGenerativeAI } from '@google/generative-ai'
import { ENVS } from './envs'

export const genAI = new GoogleGenerativeAI(ENVS.google.genAI.apiKey)