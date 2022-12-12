import React, { useEffect, useState } from "react";

export const LatencyComponent = () => {
  // Use the useState hook to store the data from the server in a state variable
  const [latency, setLatency] = useState(null);

  // Use the useEffect hook to establish a connection with the server
  useEffect(() => {
    // Create the websocket instance
    const ws = new WebSocket("ws://localhost:55455");

    // Listen for messages from the server
    ws.onmessage = function (event) {
      setLatency(Date.now() - event.data);
    };
  }, []);

  return <div>{latency === null ? <div>Waiting for a packet...</div> : <p>Packet letency: {latency} ms</p>}</div>;
};
