"use client";

import { useState } from "react";
import Link from "next/link";

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState("account");
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    darkMode: false,
    language: "English",
    timezone: "UTC-5",
    autoSave: true
  });

  const handleSettingChange = (setting: string, value: any) => {
    setSettings({
      ...settings,
      [setting]: value
    });
  };

  const tabs = [
    { id: "account", label: "Account", icon: "👤" },
    { id: "notifications", label: "Notifications", icon: "🔔" },
    { id: "appearance", label: "Appearance", icon: "🎨" },
    { id: "privacy", label: "Privacy", icon: "🔒" },
    { id: "security", label: "Security", icon: "🛡️" }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "account":
        return (
          <div className="space-y-6">
            <div className="bg-[var(--h)] rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-[var(--p)] mb-4">Account Settings</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[var(--p)] mb-2">Language</label>
                  <select
                    value={settings.language}
                    onChange={(e) => handleSettingChange("language", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--heading)] focus:border-transparent transition-all duration-300"
                  >
                    <option value="English">English</option>
                    <option value="Spanish">Spanish</option>
                    <option value="French">French</option>
                    <option value="German">German</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--p)] mb-2">Timezone</label>
                  <select
                    value={settings.timezone}
                    onChange={(e) => handleSettingChange("timezone", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--heading)] focus:border-transparent transition-all duration-300"
                  >
                    <option value="UTC-5">Eastern Time (UTC-5)</option>
                    <option value="UTC-6">Central Time (UTC-6)</option>
                    <option value="UTC-7">Mountain Time (UTC-7)</option>
                    <option value="UTC-8">Pacific Time (UTC-8)</option>
                  </select>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <label className="text-sm font-medium text-[var(--p)]">Auto-save</label>
                    <p className="text-xs text-gray-500">Automatically save your work</p>
                  </div>
                  <button
                    onClick={() => handleSettingChange("autoSave", !settings.autoSave)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${
                      settings.autoSave ? 'bg-[var(--heading)]' : 'bg-gray-300'
                    }`}
                  >
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
                      settings.autoSave ? 'translate-x-6' : 'translate-x-1'
                    }`} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case "notifications":
        return (
          <div className="space-y-6">
            <div className="bg-[var(--h)] rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-[var(--p)] mb-4">Notification Preferences</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <label className="text-sm font-medium text-[var(--p)]">Email Notifications</label>
                    <p className="text-xs text-gray-500">Receive notifications via email</p>
                  </div>
                  <button
                    onClick={() => handleSettingChange("emailNotifications", !settings.emailNotifications)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${
                      settings.emailNotifications ? 'bg-[var(--heading)]' : 'bg-gray-300'
                    }`}
                  >
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
                      settings.emailNotifications ? 'translate-x-6' : 'translate-x-1'
                    }`} />
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <label className="text-sm font-medium text-[var(--p)]">Push Notifications</label>
                    <p className="text-xs text-gray-500">Receive push notifications</p>
                  </div>
                  <button
                    onClick={() => handleSettingChange("pushNotifications", !settings.pushNotifications)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${
                      settings.pushNotifications ? 'bg-[var(--heading)]' : 'bg-gray-300'
                    }`}
                  >
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
                      settings.pushNotifications ? 'translate-x-6' : 'translate-x-1'
                    }`} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case "appearance":
        return (
          <div className="space-y-6">
            <div className="bg-[var(--h)] rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-[var(--p)] mb-4">Appearance Settings</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <label className="text-sm font-medium text-[var(--p)]">Dark Mode</label>
                    <p className="text-xs text-gray-500">Switch to dark theme</p>
                  </div>
                  <button
                    onClick={() => handleSettingChange("darkMode", !settings.darkMode)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${
                      settings.darkMode ? 'bg-[var(--heading)]' : 'bg-gray-300'
                    }`}
                  >
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
                      settings.darkMode ? 'translate-x-6' : 'translate-x-1'
                    }`} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case "privacy":
        return (
          <div className="space-y-6">
            <div className="bg-[var(--h)] rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-[var(--p)] mb-4">Privacy Settings</h3>
              <div className="space-y-4">
                <div className="p-4 bg-[var(--bg)] rounded-lg">
                  <h4 className="font-medium text-[var(--p)] mb-2">Data Usage</h4>
                  <p className="text-sm text-gray-600 mb-3">Control how your data is used and shared</p>
                  <button className="text-sm text-[var(--heading)] hover:text-[var(--extra)] transition-colors duration-300">
                    Manage Data Settings →
                  </button>
                </div>
                <div className="p-4 bg-[var(--bg)] rounded-lg">
                  <h4 className="font-medium text-[var(--p)] mb-2">Cookie Preferences</h4>
                  <p className="text-sm text-gray-600 mb-3">Control cookie usage and tracking</p>
                  <button className="text-sm text-[var(--heading)] hover:text-[var(--extra)] transition-colors duration-300">
                    Manage Cookies →
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case "security":
        return (
          <div className="space-y-6">
            <div className="bg-[var(--h)] rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-[var(--p)] mb-4">Security Settings</h3>
              <div className="space-y-4">
                <div className="p-4 bg-[var(--bg)] rounded-lg">
                  <h4 className="font-medium text-[var(--p)] mb-2">Change Password</h4>
                  <p className="text-sm text-gray-600 mb-3">Update your account password</p>
                  <button className="px-4 py-2 bg-[var(--heading)] text-white rounded-lg hover:bg-[var(--extra)] transition-colors duration-300">
                    Change Password
                  </button>
                </div>
                <div className="p-4 bg-[var(--bg)] rounded-lg">
                  <h4 className="font-medium text-[var(--p)] mb-2">Two-Factor Authentication</h4>
                  <p className="text-sm text-gray-600 mb-3">Add an extra layer of security</p>
                  <button className="px-4 py-2 border border-[var(--heading)] text-[var(--heading)] rounded-lg hover:bg-[var(--heading)] hover:text-white transition-colors duration-300">
                    Enable 2FA
                  </button>
                </div>
                <div className="p-4 bg-[var(--bg)] rounded-lg">
                  <h4 className="font-medium text-[var(--p)] mb-2">Active Sessions</h4>
                  <p className="text-sm text-gray-600 mb-3">Manage your active login sessions</p>
                  <button className="text-sm text-[var(--heading)] hover:text-[var(--extra)] transition-colors duration-300">
                    View Sessions →
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="p-3 flex gap-6 flex-col lg:flex-row">
      {/* Left Sidebar - Navigation */}
      <div className="w-full lg:w-1/4">
        <div className="bg-[var(--h)] rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold text-[var(--p)] mb-6">Settings</h2>
          <nav className="space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-[var(--heading)] text-white'
                    : 'text-[var(--p)] hover:bg-[var(--bg)]'
                }`}
              >
                <span className="text-lg">{tab.icon}</span>
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Right Content */}
      <div className="w-full lg:w-3/4">
        <div className="bg-[var(--h)] rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-[var(--p)]">
              {tabs.find(tab => tab.id === activeTab)?.label}
            </h1>
            <Link
              href="/profile"
              className="px-4 py-2 border border-[var(--heading)] text-[var(--heading)] rounded-lg hover:bg-[var(--heading)] hover:text-white transition-colors duration-300"
            >
              Back to Profile
            </Link>
          </div>
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default SettingsPage; 