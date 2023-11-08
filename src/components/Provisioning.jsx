import React, { useState } from "react";
import NavBar from "./NavBar"; 

const Provisioning = () => {
  const [provisionValue, setProvisionValue] = useState("");
  const [result, setResult] = useState("");

  const handleProvisionSubmit = async (e) => {
    e.preventDefault();
    setResult(`Fetching Data for VIN NO: ${provisionValue}`);
    // API calls here
  };

  return (
    <div>
      <NavBar /> {/* Display the NavBar component at the top */}
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-semibold text-center mb-4">Provisioning</h2>
        <form onSubmit={handleProvisionSubmit} className="text-center">
          <label htmlFor="provisionInput" className="block text-gray-700 font-semibold text-lg">
            VIN NO:
          </label>
          <input
            type="text"
            id="provisionInput"
            value={provisionValue}
            onChange={(e) => setProvisionValue(e.target.value)}
            placeholder="Enter VIN NO"
            className="border-2 border-gray-300 rounded py-2 px-3 text-gray-700 w-full sm:w-1/2 mx-auto"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
          >
            Fetch
          </button>
        </form>
        <p className="text-xl font-semibold mt-4">{result}</p>
      </div>
    </div>
  );
};

export default Provisioning;
