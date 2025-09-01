import React from "react";
import { Advocate } from "../types";

interface TableCell {
  children: React.ReactNode;
  colSpan?: number;
}

const TableCell: React.FC<TableCell> = ({ children, colSpan }) => (
  <td className="px-3 pt-3 pb-2 text-gray-900 shadow-lg" colSpan={colSpan}>
    {children}
  </td>
);

const SpecialtyCell: React.FC<TableCell> = ({ children, colSpan }) => (
  <td className="border-b-8 border-gray-50" colSpan={colSpan}>
    <div className="text-gray-600 align-top w-full h-48 lg:h-40 xl:h-36 p-3 border-b-8 border-sky-800 border-opacity-15 shadow-lg">
      {children}
    </div>
  </td>
);

const TableHeaderCell: React.FC<TableCell> = ({ children, colSpan }) => (
  <th
    className="px-3 pt-2 pb-3 font-medium text-left bg-slate-500 text-gray-100"
    colSpan={colSpan}
  >
    {children}
  </th>
);

export interface TableProps {
  advocates: Advocate[];
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const AdvocateTable: React.FC<TableProps> = ({
  advocates,
  page,
  totalPages,
  onPageChange,
}) => {
  return (
    <div>
      <table className="w-full">
        <thead>
          <tr>
            <TableHeaderCell>First Name</TableHeaderCell>
            <TableHeaderCell>Last Name</TableHeaderCell>
            <TableHeaderCell>City</TableHeaderCell>
            <TableHeaderCell>Degree</TableHeaderCell>
            <TableHeaderCell>Years of Experience</TableHeaderCell>
            <TableHeaderCell>Phone Number</TableHeaderCell>
          </tr>
        </thead>
        <tbody>
          {advocates.map((advocate, index) => (
            <React.Fragment key={advocate.id}>
              <tr
                className={`border border-gray-300 border-b-sky-300 ${
                  index % 2 ? "bg-sky-50" : "bg-sky-100"
                }`}
              >
                <TableCell>{advocate.firstName}</TableCell>
                <TableCell>{advocate.lastName}</TableCell>
                <TableCell>{advocate.city}</TableCell>
                <TableCell>{advocate.degree}</TableCell>
                <TableCell>{advocate.yearsOfExperience}</TableCell>
                <TableCell>{advocate.phoneNumber}</TableCell>
              </tr>
              <tr
                className={`border-x border-gray-300 ${
                  index % 2 ? "bg-slate-100" : "bg-white"
                }`}
              >
                <SpecialtyCell colSpan={6}>
                  <div className="text-gray-700 font-semibold">
                    Specialties:{" "}
                  </div>
                  <div>{advocate.specialties.join(", ")}</div>
                </SpecialtyCell>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>

      <div className="flex justify-center mt-4 space-x-2">
        <button
          onClick={() => onPageChange(Math.max(page - 1, 1))}
          disabled={page === 1}
          className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="px-3 py-1">
          Page {page} of {totalPages}
        </span>
        <button
          onClick={() => onPageChange(Math.min(page + 1, totalPages))}
          disabled={page === totalPages}
          className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};
