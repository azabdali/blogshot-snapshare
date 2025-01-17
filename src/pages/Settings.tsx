import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Switch } from '../components/ui/switch';
import EditProfileForm from '../components/EditProfileForm';

const Settings = () => {
  const [activeSection, setActiveSection] = useState('general');
  const [showViews, setShowViews] = useState(true);
  const [showEditProfileForm, setShowEditProfileForm] = useState(false);
  const [isTwoFactorEnabled, setIsTwoFactorEnabled] = useState(false);
  const [isIdentityVerified, setIsIdentityVerified] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const [country, setCountry] = useState('');
  const [legalName, setLegalName] = useState('');
  const [bankName, setBankName] = useState('');
  const [iban, setIban] = useState('');

  const initialProfile = {
    name: 'John Doe',
    description: 'A passionate blogger.',
    avatarUrl: '/placeholder.svg',
    username: '',
    website: '',
    twitter: '',
    github: '',
  };

  const handleProfileSubmit = (profileData: { name: string; description: string; avatarUrl: string }) => {
    console.log('Profile data submitted:', profileData);
    setShowEditProfileForm(false);
  };

  const handleCloseProfileForm = () => {
    setShowEditProfileForm(false);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Here you would typically make an API call to save the data
    console.log('Privacy settings saved:', {
      country,
      legalName,
      bankName,
      iban,
    });
    alert('Privacy settings saved!');
  };

  return (
    <div className="p-6 mx-auto max-w-lg">
      <h1 className="text-2xl font-bold text-center">Settings</h1>
      <nav className="flex justify-around mt-4">
        <button
          onClick={() => setActiveSection('general')}
          className={activeSection === 'general' ? 'font-semibold' : ''}
        >
          General
        </button>
        <button
          onClick={() => setActiveSection('profile')}
          className={activeSection === 'profile' ? 'font-semibold' : ''}
        >
          Profile
        </button>
        <button
          onClick={() => setActiveSection('account')}
          className={activeSection === 'account' ? 'font-semibold' : ''}
        >
          Account
        </button>
        <button
          onClick={() => setActiveSection('privacy')}
          className={activeSection === 'privacy' ? 'font-semibold' : ''}
        >
          Privacy
        </button>
      </nav>

      {activeSection === 'general' && (
        <section className="mt-6">
          <h2 className="text-lg font-semibold">General</h2>
          <div className="mt-4 space-y-4">
            <div>
              <label htmlFor="language" className="block text-sm font-medium text-gray-700">
                Language
              </label>
              <select
                id="language"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
                <option>German</option>
              </select>
            </div>
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <select
                id="location"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>United Kingdom</option>
                <option>Australia</option>
              </select>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="appearance" className="block text-sm font-medium text-gray-700">
                  Appearance
                </label>
                <Switch id="appearance" />
              </div>
              <p className="text-sm text-gray-500">Choose between light and dark mode.</p>
            </div>
          </div>
        </section>
      )}

      {activeSection === 'profile' && (
        <section className="mt-6">
          <h2 className="text-lg font-semibold">Profile</h2>
          <div className="mt-4 space-y-4">
            {!showEditProfileForm && (
              <Button onClick={() => setShowEditProfileForm(true)}>Edit Profile</Button>
            )}
            {showEditProfileForm && (
              <EditProfileForm
                initialProfile={initialProfile}
                onSubmit={handleProfileSubmit}
                onClose={handleCloseProfileForm}
              />
            )}
            <div className="flex items-center justify-between">
              <label htmlFor="showViews" className="block text-sm font-medium text-gray-700">
                Show Views
              </label>
              <Switch id="showViews" checked={showViews} onCheckedChange={setShowViews} />
            </div>

          </div>
        </section>
      )}

      {activeSection === 'account' && (
        <section className="mt-6">
          <h2 className="text-lg font-semibold">Account</h2>
          <div className="mt-4 space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Two-step verification
              </label>
              <p className="mt-1 text-sm text-gray-500">
                {isIdentityVerified ? 'Verified' : 'Not Verified'}
              </p>
            </div>
            <div>
              <Button variant="destructive">Delete Account</Button>
            </div>
          </div>
        </section>
      )}

      {activeSection === 'privacy' && (
        <section className="mt-6">
          <h2 className="text-lg font-semibold">Privacy</h2>
          <div>
              <label className="block text-sm font-medium text-gray-700">
              Profit Status
              </label>
              <p className="mt-1 text-sm text-gray-500">
                {isIdentityVerified ? 'Verified' : 'Not Verified'}
              </p>
            </div>
          {!isFormVisible && (
            <div className="mt-4">
              <Button type="button" onClick={() => setIsFormVisible(true)}>
                Create Form
              </Button>
            </div>
          )}
          {isFormVisible && (
            <div className="flex justify-end">
              <Button type="button" onClick={() => setIsEditMode(!isEditMode)}>
                {isEditMode ? 'Save Changes' : 'Edit Form'}
              </Button>
            </div>
          )}
          {isFormVisible && (
            <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                  Country
                </label>
                <select
                  id="country"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  disabled={!isEditMode}
                >
                  <option value="">Select a country</option>
                  <option>United States</option>
                  <option>Canada</option>
                  <option>United Kingdom</option>
                  <option>Australia</option>
                </select>
              </div>
              <div>
                <label htmlFor="legal-name" className="block text-sm font-medium text-gray-700">
                  Legal name
                </label>
                <input
                  type="text"
                  id="legal-name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  value={legalName}
                  onChange={(e) => setLegalName(e.target.value)}
                  disabled={!isEditMode}
                />
              </div>
              <div>
                <label htmlFor="bank-name" className="block text-sm font-medium text-gray-700">
                  Bank name
                </label>
                <input
                  type="text"
                  id="bank-name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  value={bankName}
                  onChange={(e) => setBankName(e.target.value)}
                  disabled={!isEditMode}
                />
              </div>
              <div>
                <label htmlFor="iban" className="block text-sm font-medium text-gray-700">
                  IBAN
                </label>
                <input
                  type="text"
                  id="iban"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  value={iban}
                  onChange={(e) => setIban(e.target.value)}
                  disabled={!isEditMode}
                />
              </div>
              <div>
                <label htmlFor="identity-proof" className="block text-sm font-medium text-gray-700">
                  Proof of Identity
                </label>
                <input
                  type="file"
                  id="identity-proof"
                  className="mt-1 block w-full text-sm text-slate-500
        file:mr-4 file:py-2 file:px-4
        file:rounded-full file:border-0
        file:text-sm file:font-semibold
        file:bg-violet-50 file:text-violet-700
        hover:file:bg-violet-100
      "
                  disabled={!isEditMode}
                />
              </div>
              <Button type="submit" style={{ display: 'none' }}>Save Changes</Button>
            </form>
          )}
          <div className="mt-4 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Identity Verification Status
              </label>
              <p className="mt-1 text-sm text-gray-500">
                {isIdentityVerified ? 'Verified' : 'Not Verified'}
              </p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Settings;
