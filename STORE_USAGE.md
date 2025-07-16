# Zustand Session Store Usage Guide

## Basic Usage Patterns

### 1. **Complete Store Access**
```typescript
import { useSessionStore } from '../store/session';

const MyComponent = () => {
  const { 
    ipLocationData, 
    isLoading, 
    error, 
    fetchIpLocationData, 
    clearData, 
    setError 
  } = useSessionStore();

  // Use actions
  const handleFetch = () => fetchIpLocationData();
  const handleClear = () => clearData();
  
  return (
    <div>
      <button onClick={handleFetch}>Fetch Data</button>
      <button onClick={handleClear}>Clear Data</button>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {ipLocationData && <p>IP: {ipLocationData.ip}</p>}
    </div>
  );
};
```

### 2. **Selective Data Access**
```typescript
import { useIpData, useLocationData } from '../store/session';

const IpDisplay = () => {
  const { ip, isLoading, error } = useIpData();
  
  if (isLoading) return <div>Loading IP...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return <div>Your IP: {ip}</div>;
};

const LocationDisplay = () => {
  const { country, city, lat, lon } = useLocationData();
  
  return (
    <div>
      <p>Location: {city}, {country}</p>
      <p>Coordinates: {lat}, {lon}</p>
    </div>
  );
};
```

### 3. **Auto-fetch on Mount**
```typescript
import { useEffect } from 'react';
import { useSessionStore } from '../store/session';

const AutoFetchComponent = () => {
  const { fetchIpLocationData, ipLocationData } = useSessionStore();

  useEffect(() => {
    // Only fetch if data doesn't exist
    if (!ipLocationData) {
      fetchIpLocationData();
    }
  }, [fetchIpLocationData, ipLocationData]);

  return <div>Data will auto-load...</div>;
};
```

### 4. **Error Handling**
```typescript
const ErrorHandlingComponent = () => {
  const { fetchIpLocationData, error, setError } = useSessionStore();

  const handleFetchWithErrorHandling = async () => {
    try {
      await fetchIpLocationData();
    } catch (err) {
      // Additional error handling if needed
      console.error('Failed to fetch data:', err);
    }
  };

  const clearError = () => setError(null);

  return (
    <div>
      <button onClick={handleFetchWithErrorHandling}>Fetch Data</button>
      {error && (
        <div>
          <p>Error: {error}</p>
          <button onClick={clearError}>Clear Error</button>
        </div>
      )}
    </div>
  );
};
```

### 5. **Manual Data Setting**
```typescript
const ManualDataComponent = () => {
  const { setIpLocationData } = useSessionStore();

  const setMockData = () => {
    setIpLocationData({
      ip: '192.168.1.1',
      country: 'United States',
      countryCode: 'US',
      region: 'CA',
      regionName: 'California',
      city: 'San Francisco',
      zip: 94102,
      lat: 37.7749,
      lon: -122.4194,
      timezone: 'America/Los_Angeles',
      isp: 'Mock ISP',
      org: 'Mock Organization',
      as: 'AS12345',
      query: '192.168.1.1'
    });
  };

  return <button onClick={setMockData}>Set Mock Data</button>;
};
```

## Available Actions

| Action | Description | Usage |
|--------|-------------|-------|
| `fetchIpLocationData()` | Fetches IP and location data in parallel | `await fetchIpLocationData()` |
| `setIpLocationData(data)` | Manually set combined data | `setIpLocationData(combinedData)` |
| `clearData()` | Clear all stored data | `clearData()` |
| `setError(message)` | Set error message | `setError('Custom error')` |

## Available Selectors

| Selector | Returns | Usage |
|----------|---------|-------|
| `useSessionStore()` | Complete store state and actions | Full access |
| `useIpData()` | IP data + loading/error states | IP-specific data |
| `useLocationData()` | Location data + loading/error states | Location-specific data |

## Best Practices

1. **Use selective hooks** when you only need specific data
2. **Check loading states** before displaying data
3. **Handle errors gracefully** with proper UI feedback
4. **Avoid unnecessary re-fetches** by checking if data exists
5. **Clear data when appropriate** (e.g., user logout)