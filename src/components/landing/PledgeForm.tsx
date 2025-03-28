"use client";

import React, { useState } from "react";
import { generateCertificateId } from "@/lib/utils";
import { SuccessModal } from "./SuccessModal";
import { CertificateView } from "./CertificateView";

interface PledgeItemProps {
  id: string;
  text: string | React.ReactNode;
  checked: boolean;
  onChange: (id: string, checked: boolean) => void;
}

const PledgeItem: React.FC<PledgeItemProps> = ({
  id,
  text,
  checked,
  onChange,
}) => {
  return (
    <div className="flex gap-3 md:gap-5 items-start">
      <label htmlFor={id} className="flex items-center gap-3 md:gap-5 cursor-pointer">
        <div className="relative flex-shrink-0">
          <input
            type="checkbox"
            id={id}
            checked={checked}
            onChange={(e) => onChange(id, e.target.checked)}
            className="absolute opacity-0 w-[27px] h-[27px] cursor-pointer"
            aria-labelledby={`${id}-text`}
          />
          <div className="w-[27px] h-[27px] rounded-full bg-[#D9D9D9] flex items-center justify-center">
            {checked && (
              <svg
                width="14"
                height="10"
                viewBox="0 0 14 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 5L5 9L13 1"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
        </div>
        <span
          id={`${id}-text`}
          className="text-[15px] font-medium font-['Poppins']"
        >
          {text}
        </span>
      </label>
    </div>
  );
};

interface PledgeFormProps {
  onClose: () => void;
}

const PledgeForm: React.FC<PledgeFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [uniqueId, setUniqueId] = useState<string>("");
  const [pledgeItems, setPledgeItems] = useState({
    aware: false,
    commit: false,
    discourage: false,
    report: false,
    support: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);
  const [certificateId, setCertificateId] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePledgeChange = (id: string, checked: boolean) => {
    setPledgeItems((prev) => ({
      ...prev,
      [id]: checked,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if all pledge items are checked
    const allChecked = Object.values(pledgeItems).every(value => value === true);
    
    if (!allChecked) {
      alert("Please accept all pledge conditions before submitting.");
      return;
    }
    
    setIsSubmitting(true);
    
    try {

      const submitButton = e.currentTarget.querySelector('button[type="submit"]') as HTMLButtonElement;
      submitButton.disabled = true;
      submitButton.textContent = 'Submitting...';


      const response = await fetch('https://mulearn.org/api/v1/drugfreekerala/create/', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email
        }),
        redirect: 'follow',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Encode email for URL parameter
      const encodedEmail = encodeURIComponent(formData.email);
      const getResponse = await fetch(`https://mulearn.org/api/v1/drugfreekerala/get/?email=${encodedEmail}`, {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
        }
      });

      if (!getResponse.ok) {
        throw new Error(`HTTP error! status: ${getResponse.status}`);
      }

      const getData = await getResponse.json();
      console.log('Fetched data:', getData);


      const newUniqueId = "DFKC" + Date.now().toString();
      setUniqueId(newUniqueId);

      console.log('Pledge submitted successfully');
      alert(`Thank you for taking the pledge! Your ID: ${newUniqueId}`);
      onClose();

    } catch (error) {
      console.error('Error:', error);
      alert('Failed to submit pledge. Please try again.');
      
    } finally {
      // Reset button state
      const submitButton = e.currentTarget.querySelector('button[type="submit"]') as HTMLButtonElement;
      submitButton.disabled = false;
      submitButton.textContent = 'Take the Pledge';
    }
  };

  return (
    <>
      <section className="bg-zinc-50 rounded-lg w-full">
        <div className="p-5 rounded-2xl w-full">
          <h1 className="mb-5 text-2xl font-medium text-center text-black">
            Join the Movement
          </h1>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-5 mb-8">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className="px-5 py-2.5 text-sm rounded-md bg-zinc-400 bg-opacity-30 h-[42px] text-neutral-700 text-opacity-70 focus:outline-none focus:ring-2 focus:ring-[rgba(92,183,105,1)]"
                aria-label="Your Name"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="px-5 py-2.5 text-sm rounded-md bg-zinc-400 bg-opacity-30 h-[42px] text-neutral-700 text-opacity-70 focus:outline-none focus:ring-2 focus:ring-[rgba(92,183,105,1)]"
                aria-label="Email"
                required
              />
            </div>

            <p className="mb-5 text-base text-zinc-800">
              By pledging to this drug free campaign, I accept the following
              conditions
            </p>

            <div className="flex flex-col gap-4">
              <PledgeItem
                id="aware"
                text="I am aware of the harmful effects that drugs have on our society."
                checked={pledgeItems.aware}
                onChange={handlePledgeChange}
              />

              <PledgeItem
                id="commit"
                text="I commit to not using drugs or any harmful substances."
                checked={pledgeItems.commit}
                onChange={handlePledgeChange}
              />

              <PledgeItem
                id="discourage"
                text="I will not encourage anyone to use drugs and will discourage drug use in my community."
                checked={pledgeItems.discourage}
                onChange={handlePledgeChange}
              />

              <PledgeItem
                id="report"
                text="I will report any instances of drug use or trafficking to the authorities to help fight drug abuse."
                checked={pledgeItems.report}
                onChange={handlePledgeChange}
              />

              <PledgeItem
                id="support"
                text="I will support and help those affected by drugs to recover and lead a healthy, normal life."
                checked={pledgeItems.support}
                onChange={handlePledgeChange}
              />
            </div>

            <div className="flex justify-center mt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className="h-10 text-sm font-medium text-black bg-white rounded border-[rgba(92,183,105,1)] border-[0.5px] w-full sm:w-[241px] hover:bg-[rgba(92,183,105,0.1)] focus:outline-none focus:ring-2 focus:ring-[rgba(92,183,105,1)] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                aria-label="Take the Pledge"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-[rgba(92,183,105,1)]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  "Take the Pledge"
                )}
              </button>
            </div>
          </form>
        </div>
      </section>

      {showSuccessModal && (
        <SuccessModal
          name={formData.name}
          certificateId={certificateId}
          onViewCertificate={handleViewCertificate}
          onClose={handleCloseAll}
        />
      )}

      {showCertificate && (
        <CertificateView
          name={formData.name}
          certificateId={certificateId}
          onClose={handleCloseAll}
        />
      )}
    </>
  );
};

export { PledgeForm };