import React from "react";

const UserDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
        Welcome back 👋
      </h1>
      <p className="text-gray-600 dark:text-gray-400">
        From here, you can view your orders, edit your profile, and manage your addresses.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow">
          <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Recent Orders</h3>
          <p className="text-gray-500">You haven't placed any orders yet.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow">
          <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Wishlist</h3>
          <p className="text-gray-500">Your wishlist is empty.</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow">
          <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Addresses</h3>
          <p className="text-gray-500">No addresses have been added yet.</p>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
