import React from 'react';
import { Button } from '@/components/ui/button';
import { Certificate } from './Certificate';

interface SuccessModalProps {
  name: string;
  certificateId: string;
  onViewCertificate: () => void;
  onClose: () => void;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({
  name,
  certificateId,
  onViewCertificate,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70">
      <div className="bg-white rounded-lg w-full max-w-md p-6 shadow-xl">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-[rgba(92,183,105,0.2)] rounded-full flex items-center justify-center mb-4">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="32" 
              height="32" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="rgba(92,183,105,1)" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          
          <h2 className="text-2xl font-bold text-center mb-2">Pledge Successful!</h2>
          <p className="text-center text-gray-600 mb-6">
            Thank you for joining the movement towards a drug-free Kerala.
          </p>
          
          <div className="bg-gray-100 p-4 rounded-lg w-full mb-6">
            <p className="text-sm text-gray-500 mb-1">Your Certificate ID:</p>
            <p className="text-lg font-medium text-[rgba(92,183,105,1)] font-mono">{certificateId}</p>
          </div>
          
          <p className="text-sm text-gray-500 mb-6 text-center">
            Please save this ID to look up your certificate in the future.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <Button 
              variant="outline"
              className="flex-1"
              onClick={onClose}
            >
              Close
            </Button>
            <Button 
              className="flex-1 bg-[rgba(92,183,105,1)] hover:bg-[rgba(82,163,95,1)]"
              onClick={onViewCertificate}
            >
              View Certificate
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}; 