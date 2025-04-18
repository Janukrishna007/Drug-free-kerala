import React, { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { drawTextOnCanvas } from '@/utils/canvas';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaWhatsapp } from 'react-icons/fa';

interface CertificateProps {
  name: string;
  certificateId: string;
  onClose?: () => void;
}

export const Certificate: React.FC<CertificateProps> = ({ name, certificateId, onClose }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [error, setError] = useState<string | null>(null);

  // Function to format certificate ID
  const formatCertificateId = (id: string) => {
    // Remove any non-numeric characters
    const numericId = id.replace(/\D/g, '');
    // Convert to number and get the length of padding needed
    const num = parseInt(numericId, 10);
    const paddingLength = num <= 99999 ? 5 : numericId.length;
    // Pad with zeros
    const paddedNum = numericId.padStart(paddingLength, '0');
    return `DKFC${paddedNum}`;
  };

  useEffect(() => {
    const generateCertificate = async () => {
      if (!canvasRef.current) return;

      try {
        const formattedId = formatCertificateId(certificateId);
        
        const textCoordinates = [
          {
            x: 550,
            y: 480,
            fontSize: 48,
            color: '#000000',
            maxWidth: 800,
            maxLines: 2,
            value: name,
            hAlign: 'center' as const
          },
          {
            x: 530,
            y: 850,
            fontSize: 30,
            color: '#5D5D5D',
            maxWidth: 400,
            maxLines: 1,
            value: formattedId,
            hAlign: 'center' as const
          }
        ];

        // First check if the image exists
        const img = new Image();
        img.src = '/images/certificate-template.jpg';
        
        await new Promise((resolve, reject) => {
          img.onload = resolve;
          img.onerror = () => reject(new Error('Failed to load certificate template'));
        });

        await drawTextOnCanvas(
          canvasRef.current,
          '/images/certificate-template.jpg',
          textCoordinates
        );
      } catch (err) {
        console.error('Error generating certificate:', err);
        setError(err instanceof Error ? err.message : 'Failed to generate certificate');
      }
    };

    generateCertificate();
  }, [certificateId, name]);

  const handleDownload = () => {
    if (!canvasRef.current) return;
    
    const formattedId = formatCertificateId(certificateId);
    const link = document.createElement('a');
    link.download = `DrugFreeKerala-Certificate-${formattedId}.png`;
    link.href = canvasRef.current.toDataURL('image/png');
    link.click();
  };

  const handleShare = async (platform: 'twitter' | 'facebook' | 'linkedin' | 'instagram' | 'whatsapp') => {
    if (!canvasRef.current) return;

    const text = `I've taken the pledge to support a drug-free Kerala! Join me in creating positive change. #StrongerWithoutDrugs #DrugFreeKerala`;
    const url = window.location.href;
    
    let shareUrl = '';
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent('Drug Free Kerala Certificate')}&summary=${encodeURIComponent(text)}`;
        break;
      case 'whatsapp':
        shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${text}\n${url}`)}`;
        break;
      case 'instagram':
        alert('To share on Instagram, please download the certificate and share it manually through the Instagram app.');
        return;
    }

    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  if (error) {
    return (
      <div className="flex flex-col items-center gap-4 p-8 bg-white rounded-lg shadow-lg">
        <p className="text-red-500">Error: {error}</p>
        <Button onClick={onClose} variant="outline">
          Close
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-8 p-8 bg-white rounded-lg shadow-lg max-w-4xl mx-auto">
      <canvas 
        ref={canvasRef}
        className="max-w-full h-auto shadow-lg rounded-lg"
        width="1080"
        height="1080"
      />
      
      <div className="flex flex-col gap-6 w-full max-w-md">
        <Button
          onClick={handleDownload}
          className="w-full bg-[rgba(92,183,105,1)] hover:bg-[rgba(82,163,95,1)] text-white h-12 text-sm font-medium"
        >
          Download Certificate
        </Button>
        
        <div className="flex items-center justify-center gap-4">
          <Button
            onClick={() => handleShare('twitter')}
            variant="outline"
            className="p-3 aspect-square rounded-full border-2 border-[rgba(92,183,105,1)] hover:bg-[rgba(92,183,105,0.1)] transition-colors"
            title="Share on Twitter"
          >
            <FaTwitter className="w-5 h-5 text-[#1DA1F2]" />
          </Button>
          
          <Button
            onClick={() => handleShare('facebook')}
            variant="outline"
            className="p-3 aspect-square rounded-full border-2 border-[rgba(92,183,105,1)] hover:bg-[rgba(92,183,105,0.1)] transition-colors"
            title="Share on Facebook"
          >
            <FaFacebookF className="w-5 h-5 text-[#4267B2]" />
          </Button>
          
          <Button
            onClick={() => handleShare('linkedin')}
            variant="outline"
            className="p-3 aspect-square rounded-full border-2 border-[rgba(92,183,105,1)] hover:bg-[rgba(92,183,105,0.1)] transition-colors"
            title="Share on LinkedIn"
          >
            <FaLinkedinIn className="w-5 h-5 text-[#0077B5]" />
          </Button>
          
          <Button
            onClick={() => handleShare('whatsapp')}
            variant="outline"
            className="p-3 aspect-square rounded-full border-2 border-[rgba(92,183,105,1)] hover:bg-[rgba(92,183,105,0.1)] transition-colors"
            title="Share on WhatsApp"
          >
            <FaWhatsapp className="w-5 h-5 text-[#25D366]" />
          </Button>
          
          <Button
            onClick={() => handleShare('instagram')}
            variant="outline"
            className="p-3 aspect-square rounded-full border-2 border-[rgba(92,183,105,1)] hover:bg-[rgba(92,183,105,0.1)] transition-colors"
            title="Share on Instagram"
          >
            <FaInstagram className="w-5 h-5 text-[#E4405F]" />
          </Button>
        </div>
      </div>

      {onClose && (
        <Button
          onClick={onClose}
          variant="ghost"
          className="mt-4 text-gray-500 hover:text-gray-700"
        >
          Close
        </Button>
      )}
    </div>
  );
};