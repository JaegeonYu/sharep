import { instance } from '../instance';

export async function getGrass() {
  return await instance.get(`/job/2022`);
}
export async function getProjectList() {
  return await instance.get(`/projects`);
}
