import * as React from "react";

export const Card: React.FC<{ className?: string; children: React.ReactNode }> = ({ className = "", children }) => (
  <div className={`bg-white rounded-xl shadow-md ${className}`}>{children}</div>
);

export const CardContent: React.FC<{ className?: string; children: React.ReactNode }> = ({ className = "", children }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);
