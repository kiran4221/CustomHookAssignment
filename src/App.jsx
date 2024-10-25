// src/App.js
import { useState } from 'react';
import useLogger from './Hooks/useLogger';
import './App.css'; // You can create this file for additional styling

function App() {
  const { logs, error, warn, log, debug } = useLogger();
  const [message, setMessage] = useState('');
  const [scope, setScope] = useState('LOG');

  const handleLog = () => {
    switch (scope) {
      case 'ERROR':
        error(message);
        break;
      case 'WARN':
        warn(message);
        break;
      case 'LOG':
        log(message);
        break;
      case 'DEBUG':
        debug(message);
        break;
      default:
        log(message);
    }
    setMessage(''); // Clear the message after logging
  };

  return (
    <div className="app-container">
      <div className="input-container">
        <input
          type="text"
          placeholder="Scope"
          value={scope}
          onChange={(e) => setScope(e.target.value)}
        />
        <select value={scope} onChange={(e) => setScope(e.target.value)}>
          <option value="LOG">Log</option>
          <option value="WARN">Warn</option>
          <option value="ERROR">Error</option>
          <option value="DEBUG">Debug</option>
        </select>
        <button onClick={handleLog}>Submit</button>
      </div>
      <div className="message-container">
        <input
          type="text"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <div className="console-container">
        <h3>Console</h3>
        <div className="log-box">
          {logs.map((log, index) => (
            <p key={index}>{log}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
