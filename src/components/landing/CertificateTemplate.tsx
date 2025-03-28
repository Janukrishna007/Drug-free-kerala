import React, { useEffect, useRef } from 'react';

interface CertificateTemplateProps {
  width?: number;
  height?: number;
  onGenerated?: (dataUrl: string) => void;
}

/**
 * This component creates a certificate template background programmatically
 * for development purposes. In a production environment, you would use an actual image.
 */
export const CertificateTemplate: React.FC<CertificateTemplateProps> = ({
  width = 1470,
  height = 1040,
  onGenerated
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    canvas.width = width;
    canvas.height = height;
    
    // Fill background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, width, height);
    
    // Add border
    ctx.strokeStyle = '#5CB769';
    ctx.lineWidth = 15;
    ctx.strokeRect(30, 30, width - 60, height - 60);
    
    // Draw decorative second border
    ctx.strokeStyle = '#333333';
    ctx.lineWidth = 2;
    ctx.strokeRect(50, 50, width - 100, height - 100);
    
    // Add header text
    ctx.fillStyle = '#333333';
    ctx.font = 'bold 60px Nunito Sans, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('CERTIFICATE OF PLEDGE', width / 2, 150);
    
    // Add subtitle
    ctx.font = 'bold 30px Nunito Sans, sans-serif';
    ctx.fillText('DRUG FREE KERALA INITIATIVE', width / 2, 200);
    
    // Add description text
    ctx.font = '24px Nunito Sans, sans-serif';
    ctx.fillText('This certifies that', width / 2, 300);
    
    // Add placeholder for name
    ctx.strokeStyle = '#dddddd';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(width / 2 - 300, 520);
    ctx.lineTo(width / 2 + 300, 520);
    ctx.stroke();
    
    // Add pledge text
    ctx.font = '24px Nunito Sans, sans-serif';
    ctx.fillText('has taken the pledge to support a drug-free society', width / 2, 580);
    ctx.fillText('and commits to the principles of the Drug Free Kerala Initiative.', width / 2, 620);
    
    // Add certificate ID placeholder
    ctx.font = 'italic 20px Nunito Sans, sans-serif';
    ctx.fillText('Certificate ID', width / 2, 690);
    
    // Add signature placeholder
    ctx.font = 'bold 24px Nunito Sans, sans-serif';
    ctx.fillText('Authorized By', width - 200, 750);
    
    // Add signature line
    ctx.strokeStyle = '#333333';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(width - 300, 780);
    ctx.lineTo(width - 100, 780);
    ctx.stroke();
    
    // Add date placeholder
    ctx.font = 'bold 24px Nunito Sans, sans-serif';
    ctx.fillText('Date', width - 200, 830);
    
    // Add logo placeholder
    ctx.strokeStyle = '#5CB769';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(150, 750, 70, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.font = 'bold 20px Nunito Sans, sans-serif';
    ctx.fillText('LOGO', 150, 750);
    
    // Convert canvas to image data URL and return via callback
    if (onGenerated) {
      const dataUrl = canvas.toDataURL('image/png');
      onGenerated(dataUrl);
    }
  }, [width, height, onGenerated]);
  
  return <canvas ref={canvasRef} style={{ display: 'none' }} />;
}; 