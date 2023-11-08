import React, { useState, useEffect } from "react";


const ProvisioningList = () => {
  const [provisioningData, setProvisioningData] = useState([]);

  useEffect(() => {
    // Fetch data and update the state when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://orbitdev.matter.in/orbit-device-provision/v1/device-provision/get-esim-provision",
        {
          method: "GET",
          headers: {
            accept: "*/*",
            "x-api-key": "0BCoxkmcn9lEjCOf",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setProvisioningData(data.unifiedData);
      } else {
        console.error("API Error:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  return (
    <div>
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-semibold text-center mb-4">eSim Provisioned</h2>
        <table className="border-collapse w-full mt-4">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="border border-blue-700 py-2 px-3">Order ID</th>
              <th className="border border-blue-700 py-2 px-3">Job ID</th>
              <th className="border border-blue-700 py-2 px-3">VIN NO</th>
              <th className="border border-blue-700 py-2 px-3">Mobile No</th>
              <th className="border border-blue-700 py-2 px-3">SIM No</th>
              <th className="border border-blue-700 py-2 px-3">Job Type</th>
              <th className="border border-blue-700 py-2 px-3">Order Type</th>
              <th className="border border-blue-700 py-2 px-3">Order Status</th>
              <th className="border border-blue-700 py-2 px-3">Order Completed</th>
              <th className="border border-blue-700 py-2 px-3">Order Initiated</th>
              <th className="border border-blue-700 py-2 px-3">Remarks</th>
            </tr>
          </thead>
          <tbody>
            {provisioningData.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                <td className="border border-blue-700 py-2 px-3">{item.orderId}</td>
                <td className="border border-blue-700 py-2 px-3">{item.jobId}</td>
                <td className="border border-blue-700 py-2 px-3">{item.vinNo}</td>
                <td className="border border-blue-700 py-2 px-3">{item.mobileNo}</td>
                <td className="border border-blue-700 py-2 px-3">{item.simNo}</td>
                <td className="border border-blue-700 py-2 px-3">{item.jobType}</td>
                <td className="border border-blue-700 py-2 px-3">{item.orderType}</td>
                <td className="border border-blue-700 py-2 px-3">{item.orderStatus}</td>
                <td className="border border-blue-700 py-2 px-3">{item.orderCompletionTime}</td>
                <td className="border border-blue-700 py-2 px-3">{item.orderInitiateDate}</td>
                <td className="border border-blue-700 py-2 px-3">{item.remarks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProvisioningList;
