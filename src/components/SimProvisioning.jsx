import React, { useState } from "react";
import NavBar from "./NavBar";
import SimProvisioning from "./SimProvisioning";
import ProvisioningList from "./ProvisioningList";

const SimProvisioningPage = () => {
  const [simValue, setSimValue] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState(""); // State for error message

  const handleSimSubmit = async (e) => {
    e.preventDefault();

    // Clear previous responses
    setResult(""); // Clear the result
    setError(""); // Clear the error message

    // Check if VIN number is empty
    if (!simValue) {
      setError("VIN must have some input");
      return; // Exit the function early
    }

    // Check if VIN number is between 5 and 20 characters
    if (simValue.length < 9 || simValue.length > 11) {
      setError("VIN must be 10 characters");
      return; // Exit the function early
    }

    // Check if VIN starts with "MM" or "mm"
    if (!simValue.toLowerCase().startsWith("mm")) {
      setError("VIN must start with 'MM' or 'mm'");
      return; // Exit the function early
    }

    try {
      const response = await fetch("https://orbitdev.matter.in/orbit-device-provision/v1/device-provision/esim-provision", {
        method: "POST",
        headers: {
          "accept": "*/*",
          "x-api-key": "0BCoxkmcn9lEjCOf",
          "x-device-id": "2",
          "x-os": "2",
          "x-source": "2",
          "x-os-version": "2",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // sim_No: 0,
          // imei_No: 0,
          // vic_Serial_No: 0,
          vin_No: simValue,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.message) {
          setResult(data.message);
        } else {
          setResult("API Response: Success");
        }
      } else {
        console.error("API Error:", response.status, response.statusText);
    
        const errorMessage = `API Error: ${response.status} - ${response.statusText}`;
        setError(errorMessage);
    
        // Set the result in red
        setResult(errorMessage);
      }
    } catch (error) {
      console.error("API Error:", error);
      const errorMessage = `API Error: ${error.message}`;
      setError(errorMessage);
    
      // Set the result in red
      setResult(errorMessage);
    }
    
  };

  return (
    <div>
      <NavBar />
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-semibold text-center mb-4">E-SIM PROVISIONING</h2>
        <form onSubmit={handleSimSubmit} className="text-center">
          <label htmlFor="simInput" className="block text-gray-700 font-semibold text-lg">
            {/* VIN NO: */}
          </label>
          <input
            type="text"
            id="simInput"
            value={simValue}
            onChange={(e) => {
              setSimValue(e.target.value);
              setError(""); // Clear the error message when input changes
              setResult(""); // Clear the result when input changes
            }}
            className="border-2 border-gray-300 rounded py-2 px-3 text-gray-700 w-full sm:w-1/2 mx-auto"
            placeholder="Enter VIN NO"
          />
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          {!error && result && <p className="text-red-500 text-xl font-semibold mt-4">{result}</p>}
          <button
            type="submit"
            className="bg-blue-500 hover-bg-blue-700 text-white font-semibold py-2 px-4 rounded focus-outline-none focus-shadow-outline mt-4"
          >
            Submit
          </button>
        </form>
      </div>
      <ProvisioningList />
    </div>
  );
};

export default SimProvisioningPage;
