import React, { useState } from "react";
import NavBar from "./NavBar";

const MMIProvisioning = () => {
  const [mmiValue, setMmiValue] = useState("");
  const [result, setResult] = useState("");

  const handleMmiSubmit = async (e) => {
    e.preventDefault();
    setResult(`MMI Value submitted: ${mmiValue}`);
  };

  return (
    <div>
      <NavBar />
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-semibold text-center mb-4">MMI Provisioning</h2>
        <form onSubmit={handleMmiSubmit} className="text-center">
          <label htmlFor="mmiInput" className="block text-gray-700 font-semibold text-lg">
            VIN NO:
          </label>
          <input
            type="text"
            id="mmiInput"
            value={mmiValue}
            onChange={(e) => setMmiValue(e.target.value)}
            className="border-2 border-gray-300 rounded py-2 px-3 text-gray-700 w-full sm:w-1/2 mx-auto"
            placeholder="Enter VIN NO"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
          >
            Submit
          </button>
        </form>
        <p className="text-xl font-semibold mt-4">{result}</p>
      </div>
    </div>
  );
};

export default MMIProvisioning;
