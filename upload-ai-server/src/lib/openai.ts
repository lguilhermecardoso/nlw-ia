import 'dotenv/config'
import { OpenAI } from 'openai'

export const openai = new OpenAI({
  organization: 'org-aNDQheh4Lo5qspVwA4uZKSpH',
  apiKey: process.env.OPENAI_KEY
})