import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CertificateView } from './CertificateView';

interface CertificateLookupProps {
  onClose?: () => void;
}

export const CertificateLookup: React.FC<CertificateLookupProps> = ({ onClose }) => {
  const [certificateId, setCertificateId] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showCertificate, setShowCertificate] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!certificateId.trim()) {
      setError('Please enter a certificate ID');
      return;
    }
    
    if (!name.trim()) {
      setError('Please enter your name');
      return;
    }
    
    setError(null);
    setIsLoading(true);
    
    // Here you would normally verify the certificate ID and name with your backend
    // For this example, we'll simulate a backend check with a timeout
    setTimeout(() => {
      // Check if the certificate ID is valid
      // In a real application, this would be a server request
      if (certificateId.startsWith('DFK-')) {
        setIsLoading(false);
        setShowCertificate(true);
      } else {
        setIsLoading(false);
        setError('Certificate not found. Please check your ID and try again.');
      }
    }, 1500);
  };
  
  if (showCertificate) {
    return (
      <CertificateView 
        name={name}
        certificateId={certificateId}
        onClose={() => {
          setShowCertificate(false);
          if (onClose) onClose();
        }}
      />
    );
  }
  
  return (
    <div className="bg-zinc-50 rounded-lg w-full">
      <div className="p-5 rounded-2xl w-full">
        <h1 className="mb-5 text-2xl font-medium text-center text-black">
          Look Up Your Certificate
        </h1>
        
        {error && (
          <div className="mb-5 p-3 bg-red-50 border border-red-200 text-red-700 rounded-md text-sm">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-5 mb-8">
            <input
              type="text"
              placeholder="Certificate ID (e.g., DFK-12345678-ABCD)"
              value={certificateId}
              onChange={(e) => setCertificateId(e.target.value)}
              className="px-5 py-2.5 text-sm rounded-md bg-zinc-400 bg-opacity-30 h-[42px] text-neutral-700 text-opacity-70 focus:outline-none focus:ring-2 focus:ring-[rgba(92,183,105,1)]"
              required
            />
            <input
              type="text"
              placeholder="Your Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-5 py-2.5 text-sm rounded-md bg-zinc-400 bg-opacity-30 h-[42px] text-neutral-700 text-opacity-70 focus:outline-none focus:ring-2 focus:ring-[rgba(92,183,105,1)]"
              required
            />
          </div>
          
          <div className="flex justify-center">
            <Button
              type="submit"
              disabled={isLoading}
              className="h-10 text-sm font-medium text-white bg-[rgba(92,183,105,1)] rounded w-full sm:w-[241px] hover:bg-[rgba(82,163,95,1)] focus:outline-none focus:ring-2 focus:ring-[rgba(92,183,105,1)] transition-colors"
            >
              {isLoading ? (
                <div className="flex items-center">
                  <div className="animate-spin mr-2 h-4 w-4 border-t-2 border-b-2 border-white rounded-full"></div>
                  Searching...
                </div>
              ) : (
                'Look Up Certificate'
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}; 