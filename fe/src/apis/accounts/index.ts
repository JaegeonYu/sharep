// export async function name(params:type) {

import { instance } from '../instance';

// }
export async function idDuplicateCheck(uid: string) {
  return await instance.get(`/accounts/nickname?nickname=${uid}`);
}
