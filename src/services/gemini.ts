import { sendChatMessage } from './api'; 

export async function getChatResponse(message: string): Promise<string> {
  try {
    return await sendChatMessage(message);
  } catch (error) {
    console.error('Chat Error:', error);
    throw error;
  }
}