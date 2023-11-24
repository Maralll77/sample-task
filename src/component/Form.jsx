import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [listItems, setListItems] = useState([]);

  // Handler functions for updating the form data
  const handleChange = async (e) => {
    const { name, value } = e.target;
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);
  };

  // Fake API endpoint to store the form data
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:9000/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData, listItems),
      });
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      alert("Data submitted successfully!");
      setStep(1);
      setFormData({});
      setListItems([]);
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to submit data!");
    }
  }

  // Handler function for going back to the previous step
  const prevStep = (e) => {
    e.preventDefault();
    setStep(step - 1);
  };

  // Handler function for going forward to the next step
  const nextStep = () => {
    setStep(step + 1);
  };

  // Function to determine which step to render
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Step1
            formData={formData}
            handleChange={handleChange}
            nextStep={nextStep}
          />
        );
      case 2:
        return (
          <Step2
            listItems={listItems}
            setListItems={setListItems}
            prevStep={(e) => prevStep(e)}
            onSubmit={(e) => handleSubmit(e)}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="form">
      <h1>سفارش</h1>
      <div className="flex margin">
        <span className={`step ${step >= 1 ? "active" : null}`}>
          مشخصات کاربر
        </span>
        <span className={`step ${step === 2 ? "active" : null}`}>
          {" "}
          لیست خرید
        </span>
      </div>
      {renderStep()}
    </div>
  );
};

export default MultiStepForm;
