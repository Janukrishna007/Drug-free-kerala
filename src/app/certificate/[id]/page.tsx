"use client";

import React, { useEffect, useState } from 'react';
import { Certificate } from '@/components/landing/Certificate';
import { useParams } from 'next/navigation';

// Mock data for demonstration - would be replaced with real API call
const mockCertificateData = {
  'test-id': {
    name: 'John Doe',
    date: '2023-05-15',
    status: 'verified'
  },
  // Add more mock certificates as needed
};

export default function CertificatePage() {
  const { id } = useParams();
  const certificateId = Array.isArray(id) ? id[0] : id || '';
  const [certificateData, setCertificateData] = useState<{name: string} | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate API call to fetch certificate data
    const fetchCertificateData = async () => {
      setLoading(true);
      try {
        // In a real application, this would be an API call
        setTimeout(() => {
          // Check if we have mock data for this ID
          if (certificateId && mockCertificateData[certificateId as keyof typeof mockCertificateData]) {
            setCertificateData(mockCertificateData[certificateId as keyof typeof mockCertificateData]);
          } else if (certificateId) {
            // If no mock data but we have an ID, create a demo certificate
            setCertificateData({
              name: `Demo User (${certificateId})`,
            });
          } else {
            setError('Certificate not found');
          }
          setLoading(false);
        }, 1000); // Simulate network delay
      } catch (err) {
        setError('Failed to load certificate');
        setLoading(false);
      }
    };

    fetchCertificateData();
  }, [certificateId]);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Your Certificate</h1>
          <p className="mt-2 text-sm text-gray-600">
            Certificate ID: {certificateId}
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
          </div>
        ) : error ? (
          <div className="bg-red-50 p-4 rounded-md">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-red-800">{error}</p>
              </div>
            </div>
          </div>
        ) : certificateData ? (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <Certificate 
              name={certificateData.name}
              certificateId={certificateId}
              downloadable={true}
            />
          </div>
        ) : null}

        <div className="mt-8 text-center">
          <a
            href="/"
            className="text-emerald-600 hover:text-emerald-500 font-medium"
          >
            Return to Home
          </a>
        </div>
      </div>
    </div>
  );
} 