'use client';

import React, { useEffect } from 'react';
import { useSessionStore, useIpData, useLocationData } from '../../store/session';

const IpLocationExample = () => {
  // Method 1: Use the main store hook to access all actions and state
  const { 
    ipLocationData, 
    isLoading, 
    error, 
    fetchIpLocationData, 
    clearData, 
    setError 
  } = useSessionStore();

  // Method 2: Use selective hooks for specific data
  const ipData = useIpData();
  const locationData = useLocationData();

  // Fetch data when component mounts
  useEffect(() => {
    fetchIpLocationData();
  }, [fetchIpLocationData]);

  // Action handlers
  const handleRefresh = () => {
    fetchIpLocationData();
  };

  const handleClear = () => {
    clearData();
  };

  const handleSimulateError = () => {
    setError('This is a simulated error');
  };

  const handleClearError = () => {
    setError(null);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>IP & Location Data Example</h2>
      
      {/* Action Buttons */}
      <div style={{ marginBottom: '20px' }}>
        <button 
          onClick={handleRefresh} 
          disabled={isLoading}
          style={{ marginRight: '10px', padding: '8px 16px' }}
        >
          {isLoading ? 'Loading...' : 'Refresh Data'}
        </button>
        
        <button 
          onClick={handleClear}
          style={{ marginRight: '10px', padding: '8px 16px' }}
        >
          Clear Data
        </button>
        
        <button 
          onClick={handleSimulateError}
          style={{ marginRight: '10px', padding: '8px 16px' }}
        >
          Simulate Error
        </button>
        
        <button 
          onClick={handleClearError}
          style={{ padding: '8px 16px' }}
        >
          Clear Error
        </button>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div style={{ color: 'blue', marginBottom: '10px' }}>
          🔄 Loading IP and location data...
        </div>
      )}

      {/* Error State */}
      {error && (
        <div style={{ 
          color: 'red', 
          backgroundColor: '#ffe6e6', 
          padding: '10px', 
          borderRadius: '4px',
          marginBottom: '10px' 
        }}>
          ❌ Error: {error}
        </div>
      )}

      {/* Data Display - Method 1: Using main store */}
      {ipLocationData && !error && (
        <div style={{ marginBottom: '20px' }}>
          <h3>Complete Data (from main store):</h3>
          <div style={{ 
            backgroundColor: '#f5f5f5', 
            padding: '15px', 
            borderRadius: '4px',
            fontFamily: 'monospace'
          }}>
            <pre>{JSON.stringify(ipLocationData, null, 2)}</pre>
          </div>
        </div>
      )}

      {/* Data Display - Method 2: Using selective hooks */}
      <div style={{ display: 'flex', gap: '20px' }}>
        <div style={{ flex: 1 }}>
          <h3>IP Data (selective hook):</h3>
          <div style={{ 
            backgroundColor: '#e6f3ff', 
            padding: '10px', 
            borderRadius: '4px' 
          }}>
            <p><strong>IP:</strong> {ipData.ip || 'Not loaded'}</p>
            <p><strong>Loading:</strong> {ipData.isLoading ? 'Yes' : 'No'}</p>
            <p><strong>Error:</strong> {ipData.error || 'None'}</p>
          </div>
        </div>

        <div style={{ flex: 1 }}>
          <h3>Location Data (selective hook):</h3>
          <div style={{ 
            backgroundColor: '#e6ffe6', 
            padding: '10px', 
            borderRadius: '4px' 
          }}>
            <p><strong>Country:</strong> {locationData.country || 'Not loaded'}</p>
            <p><strong>City:</strong> {locationData.city || 'Not loaded'}</p>
            <p><strong>Region:</strong> {locationData.regionName || 'Not loaded'}</p>
            <p><strong>ISP:</strong> {locationData.isp || 'Not loaded'}</p>
            <p><strong>Coordinates:</strong> {locationData.lat && locationData.lon ? `${locationData.lat}, ${locationData.lon}` : 'Not loaded'}</p>
          </div>
        </div>
      </div>

      {/* Usage Instructions */}
      <div style={{ marginTop: '30px', padding: '15px', backgroundColor: '#fff3cd', borderRadius: '4px' }}>
        <h3>How to Use the Store Actions:</h3>
        <ul>
          <li><strong>fetchIpLocationData():</strong> Fetches both IP and location data in parallel</li>
          <li><strong>clearData():</strong> Clears all stored data and resets state</li>
          <li><strong>setError():</strong> Manually set an error message</li>
          <li><strong>setIpLocationData():</strong> Manually set the combined data</li>
        </ul>
      </div>
    </div>
  );
};

export default IpLocationExample;