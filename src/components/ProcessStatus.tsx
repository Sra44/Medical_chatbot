import React from 'react'; 
import { ProcessStatus } from '../types';
import { CheckCircle2, Loader2, XCircle } from 'lucide-react';

interface ProcessStatusProps {
  processes: ProcessStatus[];
}

export default function ProcessStatus({ processes }: ProcessStatusProps) {
  return (
    <div className="space-y-4">
      {processes.map((process, index) => (
        <div key={index} className="flex items-center space-x-3">
          {process.status === 'loading' && (
            <Loader2 className="w-5 h-5 text-blue-600 animate-spin" />
          )}
          {process.status === 'complete' && (
            <CheckCircle2 className="w-5 h-5 text-green-600" />
          )}
          {process.status === 'error' && (
            <XCircle className="w-5 h-5 text-red-600" />
          )}
          <div className="flex-1">
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">
                {process.step}
              </span>
              <span className="text-sm text-gray-600">
                {process.progress}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${
                  process.status === 'error'
                    ? 'bg-red-600'
                    : process.status === 'complete'
                    ? 'bg-green-600'
                    : 'bg-blue-600'
                }`}
                style={{ width: `${process.progress}%` }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}