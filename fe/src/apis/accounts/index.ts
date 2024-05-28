// export async function name(params:type) {

import { instanceOfFormData, instanceOfJson } from '../instance';

// }
export async function emailDuplicateCheck(email: string) {
  return await instanceOfJson.get(`/accounts/email-check?email=${email}`);
}
export async function signup(email: string, uid: string, password: string) {
  return await instanceOfJson.post(`/accounts/sign-up`, {
    email: `${email}`,
    nickname: `${uid}`,
    password: `${password}`,
  });
}

export async function login(email: string, password: string) {
  return await instanceOfJson.post(`/auth/login`, {
    email: `${email}`,
    password: `${password}`,
  });
}

export async function account() {
  return await instanceOfJson.get(`/accounts`);
}

export async function editImg({
  newJob,
}: {
  newJob: {
    // issueId: number;
    // name: string;
    // description: string;
    imageFile: File | null;
  };
}) {
  const formData = new FormData();
  // const request = JSON.stringify({ name: newJob.name, description: newJob.description });
  // const blob = new Blob([request], { type: 'application/json' });
  // formData.append('request', blob);
  if (newJob.imageFile) formData.append('image', newJob.imageFile);

  return await instanceOfFormData.patch(`/accounts/image`, formData);
}
