import React, { useState } from 'react';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([
    {
      id: "00001",
      img: "img",
      name: "lorem lorem lorem",
      email: "lorem@gmail.com",
      phno: "+919999999999",
      designation: "HR",
      gender: "Male",
      course: "MCA",
      date: "21/9/2024"
    },
    {
      id: "00002",
      img: "img",
      name: "lorem lorem lorem",
      email: "lorem@gmail.com",
      phno: "+919999999999",
      designation: "HR",
      gender: "Male",
      course: "MCA",
      date: "21/9/2024"
    }
  ]);

  const handleEdit = (id) => {
    const newName = prompt("Enter new name:");
    setEmployees(employees.map(emp => emp.id === id ? { ...emp, name: newName } : emp));
  };

  const handleDelete = (id) => {
    setEmployees(employees.filter(emp => emp.id !== id));
  };

  return (
    <div className='p-4'>
      <p className='text-2xl font-bold my-4 text-[#269CFF]'>Employee List</p>
      <table className='w-full overflow-scroll'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Image</th>
            <th>Employee Name</th>
            <th>Email</th>
            <th>Mobile No.</th>
            <th>Designation</th>
            <th>Gender</th>
            <th>Course</th>
            <th>Create Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.id}</td>
              <td>{employee.img}</td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.phno}</td>
              <td>{employee.designation}</td>
              <td>{employee.gender}</td>
              <td>{employee.course}</td>
              <td>{employee.date}</td>
              <td className='flex gap-2 items-center justify-center border-none'>
                <button onClick={() => handleEdit(employee.id)} className=' bg-green-500 text-white px-2 '>Edit </button>
                
                <button onClick={() => handleDelete(employee.id)} className=' bg-red-500 text-white px-2'> Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;