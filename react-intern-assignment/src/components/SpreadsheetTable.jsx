// SpreadsheetTable.jsx - Pixel-perfect clone with two-row headers
import React from "react";
import clsx from "clsx";
import {
  RefreshCw,
  Upload,
  FileText,
  Calendar,
  User,
  Globe,
  UserCheck,
  PlusCircle
} from "lucide-react";

const data = [
  {
    job: "Launch social media campaign for product",
    submitted: "15-11-2024",
    status: "In-process",
    submitter: "Aisha Patel",
    url: "www.aishapatel.com",
    assigned: "Sophie Choudhury",
    priority: "Medium",
    due: "20-11-2024",
    value: "₹6,200,000"
  },
  {
    job: "Update press kit for company redesign",
    submitted: "28-10-2024",
    status: "Need to start",
    submitter: "Irfan Khan",
    url: "www.irfankhan.com",
    assigned: "Tejas Pandey",
    priority: "High",
    due: "30-10-2024",
    value: "₹3,500,000"
  },
  {
    job: "Finalize user testing feedback for app...",
    submitted: "05-12-2024",
    status: "In-process",
    submitter: "Mark Johnson",
    url: "www.markjohnson.com",
    assigned: "Rachel Lee",
    priority: "Medium",
    due: "10-12-2024",
    value: "₹4,750,000"
  },
  {
    job: "Design new features for the website",
    submitted: "20-01-2025",
    status: "Complete",
    submitter: "Emily Green",
    url: "www.emilygreen.com",
    assigned: "Tom Wright",
    priority: "Low",
    due: "15-01-2025",
    value: "₹5,800,000"
  },
  {
    job: "Prepare financial report for Q4",
    submitted: "25-01-2025",
    status: "Blocked",
    submitter: "Jessica Brown",
    url: "www.jessicabrown.com",
    assigned: "Kevin Smith",
    priority: "Low",
    due: "30-01-2025",
    value: "₹2,800,000"
  }
];

const blankRows = Array.from({ length: 24 }, () => ({
  job: "", submitted: "", status: "", submitter: "",
  url: "", assigned: "", priority: "", due: "", value: ""
}));

const allRows = [...data, ...blankRows];

export default function SpreadsheetTable() {
  return (
    <div className="bg-white px-4 py-3 text-sm text-gray-800">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-blue-600 text-xs font-medium px-2 py-1 bg-blue-50 rounded flex items-center gap-1">
          <Upload className="w-4 h-4 rotate-90" /> Q3 Financial Overview
        </span>
        <RefreshCw className="w-3 h-3 text-orange-500 animate-spin" />
      </div>

      <div className="overflow-x-auto border rounded">
        <table className="min-w-full table-fixed border-collapse">
          <thead className="text-left text-xs">
            
            <tr>
              <th className="bg-green-50 border px-3 py-2 font-medium text-green-700 text-left"><UserCheck className="w-3 h-3 inline mr-1" /> Assigned</th>
              <th className="bg-purple-100 border px-3 py-2 font-medium text-purple-700 text-left">Priority</th>
              <th className="bg-purple-100 border px-3 py-2 font-medium text-purple-700 text-left">Due Date</th>
              <th className="bg-red-100 border px-3 py-2 font-medium text-red-600 text-left">Est. Value</th>
            </tr>
          </thead>
          <tbody>
            {allRows.map((row, i) => (
              <tr key={i} className="hover:bg-gray-50">
                <td className="border px-3 py-2 text-center text-gray-400">{i + 1}</td>
                <td className="border px-3 py-2">{row.job}</td>
                <td className="border px-3 py-2">{row.submitted}</td>
                <td className="border px-3 py-2">
                  <span className={clsx(
                    "px-2 py-1 rounded-full text-xs font-medium",
                    row.status === "In-process" && "bg-yellow-100 text-yellow-800",
                    row.status === "Complete" && "bg-green-100 text-green-800",
                    row.status === "Blocked" && "bg-red-100 text-red-800",
                    row.status === "Need to start" && "bg-blue-100 text-blue-800"
                  )}>
                    {row.status}
                  </span>
                </td>
                <td className="border px-3 py-2">{row.submitter}</td>
                <td className="border px-3 py-2 text-blue-600 underline">{row.url}</td>
                <td className="border px-3 py-2">{row.assigned}</td>
                <td className="border px-3 py-2">
                  <span className={clsx(
                    "text-xs font-semibold",
                    row.priority === "High" && "text-red-500",
                    row.priority === "Medium" && "text-yellow-500",
                    row.priority === "Low" && "text-blue-500"
                  )}>
                    {row.priority}
                  </span>
                </td>
                <td className="border px-3 py-2">{row.due}</td>
                <td className="border px-3 py-2">{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}