// 'use client';

// import React, { useState } from 'react';
// import { logDataFromClient, logFormDataFromClient, logMultipleParams } from '../../actions/log-data';

// const ServerActionExample = () => {
//   const [response, setResponse] = useState<string>('');
//   const [isLoading, setIsLoading] = useState(false);

//   // Example 1: Send simple data
//   const handleSendSimpleData = async () => {
//     setIsLoading(true);
//     try {
//       const result = await logDataFromClient({
//         message: 'Hello from client!',
//         userId: 123,
//         timestamp: new Date().toISOString(),
//         metadata: {
//           browser: navigator.userAgent,
//           url: window.location.href
//         }
//       });
      
//       setResponse(`✅ ${result.message} at ${result.timestamp}`);
//     } catch (error) {
//       setResponse(`❌ Error: ${error}`);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Example 2: Send string data
//   const handleSendString = async () => {
//     setIsLoading(true);
//     try {
//       const result = await logDataFromClient('This is a simple string message');
//       setResponse(`✅ ${result.message} at ${result.timestamp}`);
//     } catch (error) {
//       setResponse(`❌ Error: ${error}`);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Example 3: Send array data
//   const handleSendArray = async () => {
//     setIsLoading(true);
//     try {
//       const result = await logDataFromClient([
//         'item1', 
//         'item2', 
//         { nested: 'object' }, 
//         42, 
//         true
//       ]);
//       setResponse(`✅ ${result.message} at ${result.timestamp}`);
//     } catch (error) {
//       setResponse(`❌ Error: ${error}`);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Example 4: Send form data
//   const handleSendFormData = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setIsLoading(true);
    
//     try {
//       const formData = new FormData(event.currentTarget);
//       const result = await logFormDataFromClient(formData);
//       setResponse(`✅ ${result.message}. Fields: ${result.receivedFields.join(', ')}`);
//     } catch (error) {
//       setResponse(`❌ Error: ${error}`);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Example 5: Send multiple parameters
//   const handleSendMultipleParams = async () => {
//     setIsLoading(true);
//     try {
//       const result = await logMultipleParams(
//         'Hello Server!',
//         42,
//         { 
//           user: 'John Doe', 
//           preferences: { theme: 'dark', language: 'en' } 
//         },
//         ['apple', 'banana', 'cherry']
//       );
//       setResponse(`✅ ${result.message} at ${result.timestamp}`);
//     } catch (error) {
//       setResponse(`❌ Error: ${error}`);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '800px' }}>
//       <h2>Server Action Examples</h2>
//       <p>Click the buttons below to send data to server actions. Check your server console to see the logged data.</p>
      
//       {/* Response Display */}
//       {response && (
//         <div style={{ 
//           padding: '10px', 
//           margin: '10px 0', 
//           backgroundColor: response.includes('✅') ? '#d4edda' : '#f8d7da',
//           border: `1px solid ${response.includes('✅') ? '#c3e6cb' : '#f5c6cb'}`,
//           borderRadius: '4px'
//         }}>
//           {response}
//         </div>
//       )}

//       {/* Loading Indicator */}
//       {isLoading && (
//         <div style={{ color: 'blue', margin: '10px 0' }}>
//           🔄 Sending data to server...
//         </div>
//       )}

//       {/* Example Buttons */}
//       <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
        
//         {/* Example 1: Object Data */}
//         <div>
//           <h3>1. Send Object Data</h3>
//           <button 
//             onClick={handleSendSimpleData}
//             disabled={isLoading}
//             style={{ padding: '10px 20px', fontSize: '16px' }}
//           >
//             Send Object to Server
//           </button>
//           <p style={{ fontSize: '14px', color: '#666' }}>
//             Sends: {`{ message, userId, timestamp, metadata }`}
//           </p>
//         </div>

//         {/* Example 2: String Data */}
//         <div>
//           <h3>2. Send String Data</h3>
//           <button 
//             onClick={handleSendString}
//             disabled={isLoading}
//             style={{ padding: '10px 20px', fontSize: '16px' }}
//           >
//             Send String to Server
//           </button>
//           <p style={{ fontSize: '14px', color: '#666' }}>
//             Sends: "This is a simple string message"
//           </p>
//         </div>

//         {/* Example 3: Array Data */}
//         <div>
//           <h3>3. Send Array Data</h3>
//           <button 
//             onClick={handleSendArray}
//             disabled={isLoading}
//             style={{ padding: '10px 20px', fontSize: '16px' }}
//           >
//             Send Array to Server
//           </button>
//           <p style={{ fontSize: '14px', color: '#666' }}>
//             Sends: ['item1', 'item2', {`{ nested: 'object' }`}, 42, true]
//           </p>
//         </div>

//         {/* Example 4: Form Data */}
//         <div>
//           <h3>4. Send Form Data</h3>
//           <form onSubmit={handleSendFormData} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
//             <input 
//               name="username" 
//               placeholder="Username" 
//               required 
//               style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
//             />
//             <input 
//               name="email" 
//               type="email" 
//               placeholder="Email" 
//               required 
//               style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
//             />
//             <textarea 
//               name="message" 
//               placeholder="Message" 
//               rows={3}
//               style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
//             />
//             <button 
//               type="submit" 
//               disabled={isLoading}
//               style={{ padding: '10px 20px', fontSize: '16px' }}
//             >
//               Send Form Data to Server
//             </button>
//           </form>
//           <p style={{ fontSize: '14px', color: '#666' }}>
//             Sends: FormData with username, email, and message fields
//           </p>
//         </div>

//         {/* Example 5: Multiple Parameters */}
//         <div>
//           <h3>5. Send Multiple Parameters</h3>
//           <button 
//             onClick={handleSendMultipleParams}
//             disabled={isLoading}
//             style={{ padding: '10px 20px', fontSize: '16px' }}
//           >
//             Send Multiple Params to Server
//           </button>
//           <p style={{ fontSize: '14px', color: '#666' }}>
//             Sends: string, number, object, and array as separate parameters
//           </p>
//         </div>
//       </div>

//       {/* Usage Instructions */}
//       <div style={{ 
//         marginTop: '30px', 
//         padding: '15px', 
//         backgroundColor: '#fff3cd', 
//         borderRadius: '4px',
//         border: '1px solid #ffeaa7'
//       }}>
//         <h3>How to Use:</h3>
//         <ol>
//           <li>Click any button above to send data to the server</li>
//           <li>Check your <strong>server console</strong> (terminal where you run <code>npm run dev</code>) to see the logged data</li>
//           <li>The response will appear in the box above showing success/failure</li>
//         </ol>
        
//         <h4>Server Action Functions:</h4>
//         <ul>
//           <li><code>logDataFromClient(data)</code> - Accepts any data type</li>
//           <li><code>logFormDataFromClient(formData)</code> - Accepts FormData</li>
//           <li><code>logMultipleParams(string, number, object, array)</code> - Accepts multiple typed parameters</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default ServerActionExample;