import React, { useState } from 'react'; 
import Chat from './components/Chat';
import ProcessStatus from './components/ProcessStatus';
import { ProcessStatus as ProcessStatusType } from './types';
import { Bot } from 'lucide-react';

function App() {
  const [isProcessing, setIsProcessing] = useState(true);
  const [processes] = useState<ProcessStatusType[]>([
    { step: 'Data Integration', progress: 100, status: 'complete' },
    { step: 'Data Extraction', progress: 100, status: 'complete' },
    { step: 'Chunking', progress: 100, status: 'complete' },
    { step: 'Embedding Generation', progress: 100, status: 'complete' },
    { step: 'Semantic Indexing', progress: 100, status: 'complete' },
    { step: 'Knowledge Base Setup', progress: 100, status: 'complete' },
  ]);

  return (
    <div className="min-h-screen bg-gray-100">
      {isProcessing ? (
        <div className="max-w-2xl mx-auto p-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center space-x-2 mb-6">
              <Bot className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-800">
                Medical Assistant Setup
              </h1>
            </div>
            <ProcessStatus processes={processes} />
            <button
              onClick={() => setIsProcessing(false)}
              className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Continue to Chat
            </button>
          </div>
        </div>
      ) : (
        <Chat />
      )}
    </div>
  );
}

export default App;