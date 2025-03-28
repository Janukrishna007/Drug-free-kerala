import React, { useEffect, useRef, useState } from 'react';
import { CertificateTemplate } from './CertificateTemplate';

interface TextCoordinate {
  x: number;
  y: number;
  fontSize: number;
  color: string;
  maxWidth: number;
  maxLines: number;
  value: string;
  hAlign?: 'left' | 'center' | 'right';
}

interface CertificateProps {
  name: string;
  certificateId: string;
  downloadable?: boolean;
  onReady?: () => void;
}

export const drawTextOnCanvas = async (
  canvas: HTMLCanvasElement,
  imageUrl: string,
  textCoordinates: TextCoordinate[],
) => {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // Load the image
  const img = new Image();
  img.onerror = () => {
    console.error('Error loading template image. Using fallback template.');
    // If image fails to load, we'll handle this in the Certificate component
  };
  
  img.onload = () => {
    // Set canvas dimensions to match the image
    canvas.width = img.width;
    canvas.height = img.height;

    // Draw the background image
    ctx.drawImage(img, 0, 0);

    // Draw text on top of the image
    textCoordinates.forEach((textCoord) => {
      const { x, y, fontSize, color, maxWidth, maxLines, value, hAlign } = textCoord;

      // Configure text properties - Changed font to Nunito Sans and added bold
      ctx.font = `bold ${fontSize}px "Nunito Sans", sans-serif`;
      ctx.fillStyle = color;

      // Calculate positions relative to template dimensions
      // Using the template's reference dimensions (1470x1040 as per original code)
      const relativeX = (x / 1470) * canvas.width;
      const relativeY = (y / 1040) * canvas.height;
      const relativeMaxWidth = (maxWidth / 1470) * canvas.width;

      // Fixed line height of 28px, scaled relative to canvas height
      const lineHeight = 28 * (canvas.height / 1040);

      // Convert text to uppercase
      const uppercaseValue = value.toUpperCase();

      // Split text into lines to handle wrapping
      const lines = [];
      let line = '';

      uppercaseValue.split(' ').forEach((word: string) => {
        const testLine: string = line + word + ' ';
        const testLineWidth: number = ctx.measureText(testLine).width;

        if (testLineWidth > relativeMaxWidth) {
          lines.push(line.trim());
          line = word + ' ';
        } else {
          line = testLine;
        }
      });
      lines.push(line.trim());

      // Limit to maxLines
      if (lines.length > maxLines) {
        lines.length = maxLines;
      }

      // Calculate total vertical offset for centering multiple lines
      const totalHeight = lineHeight * (lines.length - 1);
      const startY = relativeY - totalHeight / 2;

      // Draw each line of text
      lines.forEach((line, index) => {
        // Start with the relative X position
        let xPosition = relativeX;

        // Handle text alignment
        if (hAlign === 'center') {
          // For center alignment, calculate the center point and then offset by half the text width
          xPosition = canvas.width / 2 - ctx.measureText(line).width / 2;
        }

        // Y position is relative to the canvas height
        // Move text up by lineYOffset for each line after the first
        const yPosition = startY + index * lineHeight;

        ctx.fillText(line, xPosition, yPosition);
      });
    });
  };
  img.src = imageUrl;
};

export const Certificate: React.FC<CertificateProps> = ({ 
  name, 
  certificateId, 
  downloadable = false,
  onReady 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isReady, setIsReady] = useState(false);
  const [templateUrl, setTemplateUrl] = useState<string | null>(null);
  const [currentDate] = useState(new Date().toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }));

  // Create a programmatic template if needed
  useEffect(() => {
    const checkTemplateImage = () => {
      const img = new Image();
      img.onload = () => {
        setTemplateUrl('/images/certificate-template.png');
      };
      img.onerror = () => {
        // Template image doesn't exist, create a dynamic one
        console.log('Certificate template image not found, generating dynamically');
      };
      img.src = '/images/certificate-template.png';
    };

    checkTemplateImage();
  }, []);

  // Handle programmatically generated template
  const handleTemplateGenerated = (dataUrl: string) => {
    setTemplateUrl(dataUrl);
  };

  // Generate certificate when template is ready
  useEffect(() => {
    if (!templateUrl || !canvasRef.current) return;

    const generateCertificate = async () => {
      if (canvasRef.current) {
        const textCoordinates: TextCoordinate[] = [
          // Name
          {
            x: 735, // center of the certificate
            y: 520, // adjusted position
            fontSize: 42,
            color: '#1E1E1E',
            maxWidth: 900,
            maxLines: 2,
            value: name,
            hAlign: 'center'
          },
          // Certificate ID
          {
            x: 735, // center of the certificate
            y: 650, // adjusted position
            fontSize: 24,
            color: '#525B65',
            maxWidth: 500,
            maxLines: 1,
            value: `Certificate ID: ${certificateId}`,
            hAlign: 'center'
          },
          // Date
          {
            x: 1100, // right side of the certificate
            y: 780, // bottom of the certificate
            fontSize: 18,
            color: '#525B65',
            maxWidth: 300,
            maxLines: 1,
            value: currentDate,
            hAlign: 'center'
          }
        ];

        await drawTextOnCanvas(
          canvasRef.current,
          templateUrl,
          textCoordinates
        );

        setIsReady(true);
        if (onReady) onReady();
      }
    };

    generateCertificate();
  }, [templateUrl, name, certificateId, currentDate, onReady]);

  const handleDownload = () => {
    if (canvasRef.current && isReady) {
      const link = document.createElement('a');
      link.download = `drug-free-pledge-certificate-${certificateId}.png`;
      link.href = canvasRef.current.toDataURL('image/png');
      link.click();
    }
  };

  return (
    <div className="flex flex-col items-center">
      {!templateUrl && (
        <CertificateTemplate onGenerated={handleTemplateGenerated} />
      )}
      
      <div className="w-full max-w-4xl overflow-auto bg-white p-2 rounded-lg shadow-lg">
        <canvas 
          ref={canvasRef} 
          className="w-full h-auto"
        />
      </div>
      
      {downloadable && isReady && (
        <button
          onClick={handleDownload}
          className="mt-6 px-6 py-3 bg-[rgba(92,183,105,1)] text-white rounded-md font-medium hover:bg-[rgba(82,163,95,1)] transition-colors"
        >
          Download Certificate
        </button>
      )}
    </div>
  );
}; 