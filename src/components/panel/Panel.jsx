import React from "react";
import UserSidebar from "./details/UserSidebar";
import UserDashboard from "./details/UserDashboard";

const Panel = () => {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-950">
      <UserSidebar />
      <main className="flex-1">
        <UserDashboard />
      </main>
    </div>
  );
};

export default Panel;

