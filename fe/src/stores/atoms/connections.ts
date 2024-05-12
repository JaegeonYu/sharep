import { atom } from 'recoil';

export interface Connections {
  id: string;
  dataChannel: RTCDataChannel;
}

export const connections = atom<Connections[]>({
  key: 'connections',
  default: [],
});
