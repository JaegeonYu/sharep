import React, { createContext, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import * as Y from 'yjs';
import { WebsocketProvider } from 'y-websocket';

const WebSocketContext = createContext<WebSocket | null>(null);

export function useWebSocket(): WebSocket | null {
  return useContext(WebSocketContext);
}

export function SocketProvider({ children }: { children: React.ReactNode }) {
  const { projectId } = useParams();
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    const socketInstance = new WebSocket(`${import.meta.env.VITE_DEV_SOKET_SERVER}?projectId=${projectId}`);
    setSocket(socketInstance);
  }, []);

  return <WebSocketContext.Provider value={socket}>{children}</WebSocketContext.Provider>;
}

// const WebSocketContext = createContext<Client | null>(null);

// export function useWebSocket(): Client | null {
//   return useContext(WebSocketContext);
// }

// export function SocketProvider({ children }: { children: React.ReactNode }) {
//   const [stompClient, setStompClient] = useState<Client | null>(null);

//   useEffect(() => {
//     const client = new Client({
//       brokerURL: 'ws://192.168.31.153:8080/ws-chat',
//       onConnect: frame => {
//         client.subscribe('/topic/greetings', message => console.log(`Received: ${message.body}`));
//         client.publish({ destination: '/app/hello', body: 'First Message' });
//       },
//     });

//     setStompClient(client);
//     client.activate();
//   }, []);

//   return <WebSocketContext.Provider value={stompClient}>{children}</WebSocketContext.Provider>;
// }
