import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface CertificateLookupProps {
  onClose: () => void;
}

export const CertificateLookup: React.FC<CertificateLookupProps> = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const encodedEmail = encodeURIComponent(email);
      const response = await fetch(
        `https://mulearn.org/api/v1/drugfreekerala/get/?email=${encodedEmail}`,
        {
          method: 'GET',
          mode: 'cors',
          headers: {
            'Accept': 'application/json',
          }
        }
      );

      const data = await response.json();

      if (response.ok) {
        // Redirect to certificate page or handle success
        window.open(`/certificate/${data.id}`, '_blank');
        onClose();
      } else {
        setError(data.message || 'Certificate not found');
      }
    } catch (err) {
      setError('Failed to fetch certificate. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-center">Look up your certificate</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full"
          />
        </div>
        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}
        <Button
          type="submit"
          className="w-full bg-[rgba(92,183,105,1)] hover:bg-[rgba(82,163,95,1)] text-white"
          disabled={loading}
        >
          {loading ? 'Looking up...' : 'Find Certificate'}
        </Button>
      </form>
    </div>
  );
};