import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import SideMenu from '../components/SideMenu';
import CardDetailsTable from '../components/CardDetailsTable';
import { useBlog } from '../contexts/BlogContext';
import { Button } from '../components/ui/button';

function Profits() {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const isOpen = false;
  const onClose = () => {};
  const { posts } = useBlog();
  const estimatedProfits = 1000; // Replace with actual logic
  const pendingPayments = 500; // Replace with actual logic
  const approvedPayments = 250; // Replace with actual logic

  const handleActivate = () => {
    setIsContentVisible(true);
  };

  return (
    <main className="flex">
      <SideMenu isOpen={isOpen} onClose={onClose} />
      <div className="container mx-auto py-10 px-5 flex-grow">
        {!isContentVisible ? (
          <div className="text-center">
            <Button onClick={handleActivate}>Activate</Button>
          </div>
        ) : (
          <>
            <h1 className="text-3xl font-bold mb-6 text-center">Profits</h1>
            <div className="mb-8 flex justify-center gap-8">
              <div>
                <div className="text-xl font-bold">{estimatedProfits}</div>
                <div className="text-gray-500">Estimated Profits</div>
              </div>
              <div>
                <div className="text-xl font-bold">{pendingPayments}</div>
                <div className="text-gray-500">Pending Payments</div>
              </div>
              <div>
                <div className="text-xl font-bold">{approvedPayments}</div>
                <div className="text-gray-500">Approved Payments</div>
              </div>
            </div>
            <input
              type="text"
              placeholder="Search cards..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
            />
            <CardDetailsTable page="profits" />
          </>
        )}
      </div>
    </main>
  );
}

export default Profits;
