// TopNav.jsx - Matches Figma style top navigation
import React from "react";
import {
  ChevronRight,
  EyeOff,
  ArrowDownUp,
  Filter,
  Expand,
  Download,
  Upload,
  Share2,
  Bell,
  UserCircle,
  Users,
  Plus
} from "lucide-react";

export default function TopNav() {
  return (
    <div className="w-full border-b bg-white text-sm">
      {/* Path and user section */}
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-1 text-gray-500">
          <div className="w-3 h-3 bg-green-700 rounded-sm" />
          Workspace <ChevronRight className="w-4 h-4" /> Folder 2 <ChevronRight className="w-4 h-4" />
          <span className="font-medium text-gray-800">Spreadsheet 3</span>
        </div>

        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search within sheet"
            className="px-3 py-1.5 text-sm border rounded-md bg-gray-100 border-gray-300 placeholder:text-gray-500 focus:outline-none"
          />
          <div className="relative">
            <Bell className="w-5 h-5 text-gray-600" />
            <span className="absolute -top-1 -right-1 bg-green-700 text-white text-xs rounded-full px-1">2</span>
          </div>
          <div className="flex items-center gap-2">
            <img src="https://i.pravatar.cc/24" alt="User" className="w-6 h-6 rounded-full" />
            <div className="text-xs text-right">
              <div className="font-semibold text-gray-700">John Doe</div>
              <div className="text-gray-400">john.doe@email.com</div>
            </div>
          </div>
        </div>
      </div>

      {/* Toolbar section */}
      <div className="flex items-center justify-between px-4 py-2 border-t text-gray-700">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1 cursor-pointer"><span>Tool bar</span> <ChevronRight className="w-4 h-4" /></div>
          <div className="flex items-center gap-1 cursor-pointer"><EyeOff className="w-4 h-4" /> <span>Hide fields</span></div>
          <div className="flex items-center gap-1 cursor-pointer"><ArrowDownUp className="w-4 h-4" /> <span>Sort</span></div>
          <div className="flex items-center gap-1 cursor-pointer"><Filter className="w-4 h-4" /> <span>Filter</span></div>
          <div className="flex items-center gap-1 cursor-pointer"><Expand className="w-4 h-4" /> <span>Cell view</span></div>

          {/* Avatars */}
          <div className="flex -space-x-2 ml-4">
            
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1 px-3 py-1 border border-gray-300 rounded-md text-sm"><Download className="w-4 h-4" /> Import</button>
          <button className="flex items-center gap-1 px-3 py-1 border border-gray-300 rounded-md text-sm"><Upload className="w-4 h-4" /> Export</button>
          <button className="flex items-center gap-1 px-3 py-1 border border-gray-300 rounded-md text-sm"><Share2 className="w-4 h-4" /> Share</button>
          <button className="flex items-center gap-1 px-4 py-1 bg-green-700 text-white rounded-md text-sm font-semibold"><Plus className="w-4 h-4" /> New Action</button>
        </div>
      </div>
    </div>
  );
}