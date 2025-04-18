import React from 'react';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ErrorModalProps {
  name: string;
  certificateId: string;
  onViewCertificate: () => void;
  onClose: () => void;
}

export const ErrorModal: React.FC<ErrorModalProps> = ({
  name,
  certificateId,
  onViewCertificate,
  onClose,
}) => {
  const { toast } = useToast();

  const handleCopy = () => {
    navigator.clipboard.writeText(certificateId);
    toast({
      title: "Copied!",
      description: "Certificate ID copied to clipboard",
      duration: 2000,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70">
      <div className="bg-white rounded-lg w-full max-w-md p-6 shadow-xl">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="32" 
              height="32" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="rgb(239 68 68)" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
          </div>
          
          <h2 className="text-2xl font-bold text-center mb-2">Already Pledged!</h2>
          <p className="text-center text-gray-600 mb-6">
            You have already joined the movement towards a drug-free Kerala.
          </p>
          
          <div className="bg-gray-100 p-4 rounded-lg w-full mb-6">
            <p className="text-sm text-gray-500 mb-1">Your Certificate ID:</p>
            <div className="flex items-center justify-between gap-2">
              <p className="text-lg font-medium text-[rgba(92,183,105,1)] font-mono">{certificateId}</p>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleCopy}
                className="h-8 w-8 hover:bg-[rgba(92,183,105,0.1)]"
                title="Copy to clipboard"
              >
                <Copy className="h-4 w-4 text-[rgba(92,183,105,1)]" />
              </Button>
            </div>
          </div>
          
          <div className="flex gap-4 w-full">
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