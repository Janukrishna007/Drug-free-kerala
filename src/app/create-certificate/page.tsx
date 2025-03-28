"use client";

import React, { useState } from 'react';
import { Certificate } from '@/components/landing/Certificate';
import { Button } from '@/components/ui/button';

export default function CreateCertificatePage() {
  const [name, setName] = useState('');
  const [certificateId, setCertificateId] = useState('');
  const [generatedCertificate, setGeneratedCertificate] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateCertificateId = () => {
    // Generate a unique ID with DFK prefix, timestamp, and random string
    const timestamp = new Date().getTime().toString(36).toUpperCase();
    const randomStr = Math.random().toString(36).substring(2, 6).toUpperCase();
    return `DFK-${timestamp}-${randomStr}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    setIsGenerating(true);
    // Generate a unique certificate ID
    const newCertificateId = generateCertificateId();
    setCertificateId(newCertificateId);

    // Simulate certificate generation process
    setTimeout(() => {
      setGeneratedCertificate(true);
      setIsGenerating(false);
    }, 1500);
  };

  const handleReset = () => {
    setName('');
    setCertificateId('');
    setGeneratedCertificate(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Drug-Free Kerala Pledge Certificate</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Create your pledge certificate by entering your information below. Once generated, you can download it to share your commitment.
          </p>
        </div>

        {!generatedCertificate ? (
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="px-6 py-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <Button
                    type="submit"
                    disabled={isGenerating || !name.trim()}
                    className="w-full sm:w-auto px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[rgba(92,183,105,1)] hover:bg-[rgba(82,163,95,1)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                  >
                    {isGenerating ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Generating...
                      </div>
                    ) : (
                      'Generate Certificate'
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="p-6">
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Certificate Generated!</h2>
                <p className="text-gray-600">
                  Your certificate ID is: <span className="font-medium">{certificateId}</span>
                </p>
                <p className="text-gray-600 text-sm mt-1">
                  Save this ID for future reference. You can use it to look up your certificate later.
                </p>
              </div>

              <Certificate 
                name={name}
                certificateId={certificateId}
                downloadable={true}
              />

              <div className="mt-6 flex justify-center">
                <Button
                  onClick={handleReset}
                  variant="outline"
                  className="mr-4 w-full sm:w-auto px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                >
                  Create Another
                </Button>
                <a href="/" className="w-full sm:w-auto inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-[rgba(92,183,105,1)] border border-transparent rounded-md shadow-sm hover:bg-[rgba(82,163,95,1)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500">
                  Return to Home
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}