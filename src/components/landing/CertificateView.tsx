import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Certificate } from './Certificate';

interface CertificateViewProps {
  name: string;
  certificateId: string;
  onClose: () => void;
}

export const CertificateView: React.FC<CertificateViewProps> = ({
  name,
  certificateId,
  onClose,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleCertificateReady = () => {
    setIsLoading(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 overflow-auto">
      <div className="bg-white rounded-lg w-full max-w-5xl p-6 shadow-xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Your Pledge Certificate</h2>
          <Button 
            variant="ghost" 
            onClick={onClose}
            className="h-10 w-10 p-0 rounded-full"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </Button>
        </div>
        
        {isLoading && (
          <div className="flex items-center justify-center p-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[rgba(92,183,105,1)]"></div>
          </div>
        )}

        <Certificate 
          name={name} 
          certificateId={certificateId} 
          downloadable={true}
          onReady={handleCertificateReady}
        />
      </div>
    </div>
  );
}; 