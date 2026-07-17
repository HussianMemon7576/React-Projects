import React from "react";
import { Link } from "react-router-dom";
import { Images } from "lucide-react";
import Button from "../Components/Button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-indigo-600 text-white">
            <Images size={20} />
          </div>

          <h1 className="text-xl font-bold text-slate-800">
            Media <span className="text-indigo-600">Search</span>
          </h1>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-3">
          <Link to="/">
            <Button
              text="Home"
              className="bg-slate-100 text-slate-700 hover:bg-slate-200"
            />
          </Link>

          <Link to="/collection">
            <Button
              text="Collection"
              className="bg-indigo-600 text-white hover:bg-indigo-700 shadow-md"
            />
          </Link>
        </nav>

      </div>
    </header>
  );
}