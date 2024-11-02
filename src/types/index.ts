export interface Message { 
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

export interface ProcessStatus {
  step: string;
  progress: number;
  status: 'loading' | 'complete' | 'error';
}