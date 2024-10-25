// src/hooks/useLogger.js
import { useState } from 'react';

const useLogger = () => {
  const [logs, setLogs] = useState([]);

  const logMessage = (type, message) => {
    const now = new Date();
    const timestamp = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`; // Directly creating timestamp here
    const logEntry = `${timestamp} [${type}] ${message}`;
    setLogs((prevLogs) => [...prevLogs, logEntry]);
  };

  const error = (message) => logMessage('ERROR', message);
  const warn = (message) => logMessage('WARN', message);
  const log = (message) => logMessage('LOG', message);
  const debug = (message) => logMessage('DEBUG', message);

  return { logs, error, warn, log, debug };
};

export default useLogger;
