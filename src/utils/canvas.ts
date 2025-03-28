interface TextCoordinate {
  x: number;
  y: number;
  fontSize: number;
  color: string;
  maxWidth: number;
  maxLines: number;
  value: string;
  hAlign: 'left' | 'center' | 'right';
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
  
  return new Promise<void>((resolve, reject) => {
    img.onload = () => {
      // Set canvas dimensions to match the image
      canvas.width = img.width;
      canvas.height = img.height;

      // Draw the background image
      ctx.drawImage(img, 0, 0);

      // Draw text on top of the image
      textCoordinates.forEach((textCoord) => {
        const { x, y, fontSize, color, maxWidth, maxLines, value, hAlign } = textCoord;

        // Configure text properties
        ctx.font = `bold ${fontSize}px "Poppins", sans-serif`;
        ctx.fillStyle = color;
        ctx.textAlign = hAlign;

        // Calculate positions relative to template dimensions
        const relativeX = (x / 1080) * canvas.width;
        const relativeY = (y / 1080) * canvas.height;
        const relativeMaxWidth = (maxWidth / 1080) * canvas.width;

        // Fixed line height, scaled relative to canvas height
        const lineHeight = (fontSize * 1.2) * (canvas.height / 1080);

        // Split text into lines to handle wrapping
        const words = value.split(' ');
        const lines: string[] = [];
        let currentLine = '';

        words.forEach((word) => {
          const testLine = currentLine + (currentLine ? ' ' : '') + word;
          const metrics = ctx.measureText(testLine);
          
          if (metrics.width > relativeMaxWidth && currentLine !== '') {
            lines.push(currentLine);
            currentLine = word;
          } else {
            currentLine = testLine;
          }
        });
        
        if (currentLine) {
          lines.push(currentLine);
        }

        // Limit to maxLines
        if (lines.length > maxLines) {
          lines.length = maxLines;
        }

        // Calculate total height for vertical centering
        const totalHeight = lineHeight * (lines.length - 1);
        const startY = relativeY - totalHeight / 2;

        // Draw each line
        lines.forEach((line, index) => {
          let xPosition = relativeX;
          const yPosition = startY + index * lineHeight;
          ctx.fillText(line, xPosition, yPosition);
        });
      });

      resolve();
    };

    img.onerror = () => {
      reject(new Error('Failed to load certificate template image'));
    };

    img.src = imageUrl;
  });
}; 