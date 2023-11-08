import React, { useState } from "react";
import NavBar from "./NavBar"; 

const DeviceProvisioning = () => {
  const [deviceValue, setDeviceValue] = useState("");
  const [result, setResult] = useState("");

  const handleDeviceSubmit = async (e) => {
    e.preventDefault();
    setResult(`Device Value submitted: ${deviceValue}`);
  };

  return (
    <div>
      <NavBar /> 
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-semibold text-center mb-4">CLOUD GALAXY PROVISIONING</h2>
        <form onSubmit={handleDeviceSubmit} className="text-center">
          <label htmlFor="deviceInput" className="block text-gray-700 font-semibold text-lg">
            Device No:
          </label>
          <input
            type="text"
            id="deviceInput"
            value={deviceValue}
            onChange={(e) => setDeviceValue(e.target.value)}
            className="border-2 border-gray-300 rounded py-2 px-3 text-gray-700 w-full sm:w-1/2 mx-auto"
            placeholder="Enter Device No"
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

export default DeviceProvisioning;
