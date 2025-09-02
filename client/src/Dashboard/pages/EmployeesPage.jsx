import React, { useEffect, useState } from "react";

const theme = {
  navy: "#0D1B2A",
  yellow: "#F7B500"
};

const EmployeesPage = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await fetch("/api/employees");
        if (res.ok) {
          const data = await res.json();
          setEmployees(data);
        }
      } catch {}
    };
    fetchEmployees();
  }, []);

  return (
    <div className="min-h-screen bg-blue-50 p-6 md:p-10 flex flex-col items-center">
      <div className="w-full max-w-3xl">
        <h2 className="text-3xl font-bold mb-8" style={{ color: theme.navy }}>Employees</h2>
        <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-xl border border-yellow-400">
          <thead>
            <tr className="bg-yellow-400">
              <th className="py-3 px-4 text-black font-bold">Name</th>
              <th className="py-3 px-4 text-black font-bold">Role</th>
              <th className="py-3 px-4 text-black font-bold">Permissions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map(emp => (
              <tr key={emp.id} className="border-t hover:bg-yellow-50 transition">
                <td className="py-3 px-4 font-medium" style={{ color: theme.navy }}>{emp.name}</td>
                <td className="py-3 px-4">{emp.role}</td>
                <td className="py-3 px-4">{emp.permissions}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeesPage;
