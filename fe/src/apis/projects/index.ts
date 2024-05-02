import { instance } from '../instance';

// export async function getGrass(email: string) {
//   return await instance.get(`/projects/`);
// }
export async function getProjectList() {
  return await instance.get(`/projects`);
}
