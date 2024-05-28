import { AxiosResponse } from 'axios';
import { instanceOfEventStream, instanceOfFormData, instanceOfJson } from '../instance';
import * as T from '@types';

export async function getGrass() {
  return await instanceOfJson.get(`/jobs`);
}
export async function getProjectList(): Promise<AxiosResponse<T.API.GetProjectListResponse[], any>> {
  return await instanceOfJson.get(`/projects`);
}

/** 작업 리스트 조회 */
export async function getJobList({
  projectId,
  accountId,
  roleType,
  issueId,
}: {
  projectId: number;
  accountId: number | null;
  roleType: Extract<T.RoleBadgeProps, 'role'> | null;
  issueId: number | null;
}): Promise<AxiosResponse<T.API.GetJobListResponse[], any>> {
  return await instanceOfJson.get(
    `/projects/${projectId}/jobs?accountId=${accountId || ''}&roleType=${roleType || ''}&issueId=${issueId || ''}`,
  );
}

/** 기여도 조회 */
export async function getContributions({
  projectId,
  accountId,
}: {
  projectId: number;
  accountId: number;
}): Promise<AxiosResponse<T.API.GetContributionsResponse, any>> {
  return await instanceOfJson.get(`/projects/${projectId}/accounts/${accountId}/contributions`);
}

/** 칸반 리스트 조회 */
export async function getKanbanList({
  projectId,
  accountId,
}: {
  projectId: number;
  accountId: number | null;
}): Promise<AxiosResponse<T.API.SimpleIssue[], any>> {
  return await instanceOfJson.get(
    `/projects/${projectId}/issues?dataType=${'SIMPLE'}&issueType=&accountId=${accountId}`,
  );
}

/** 팀원들의 진행중인 리스트 조회 */
export async function getNowIssueAboutTeamMembers({
  projectId,
}: {
  projectId: number;
}): Promise<AxiosResponse<T.API.GetNowIssueListResponse[], any>> {
  return instanceOfJson.get(`/projects/${projectId}/now/issues`);
}

/** 본인의 진행중인 리스트 조회 */
export async function getNowIssueAboutMe({
  projectId,
}: {
  projectId: number;
}): Promise<AxiosResponse<T.API.GetNowIssueListResponse[], any>> {
  return instanceOfJson.get(`/projects/${projectId}/own/now/issues`);
}

/** 모든 이슈 리스트 상세 조회 */
export async function getProjectDetailIssueList({
  projectId,
  issueType,
  accountId,
}: {
  projectId: number;
  issueType: 'FEATURE' | 'SCREEN' | 'PRIVATE' | null;
  accountId: number | null;
}): Promise<AxiosResponse<T.API.DetailIssue[], any>> {
  return instanceOfJson.get(
    `/projects/${projectId}/issues?dataType=${'DETAIL'}&issueType=${issueType || ''}&accountId=${accountId || ''}`,
  );
}

/** 모든 이슈 리스트 간단 조회 */
export async function getProjectSimpleIssueList({
  projectId,
  issueType,
  accountId,
}: {
  projectId: number;
  issueType: 'FEATURE' | 'SCREEN' | 'PRIVATE' | null;
  accountId: number | null;
}): Promise<AxiosResponse<T.API.SimpleIssue[], any>> {
  return instanceOfJson.get(
    `/projects/${projectId}/issues?dataType=${'SIMPLE'}&issueType=${issueType || ''}&accountId=${accountId || ''}`,
  );
}

/** 기능 이슈 리스트 조회 */
export async function getFeatureIssuesList({
  projectId,
  dataType,
}: {
  projectId: number;
  dataType: 'SIMPLE' | 'DETAIL' | null;
}): Promise<AxiosResponse<T.API.DetailIssue[], any>> {
  return instanceOfJson.get(`/projects/${projectId}/issues?dataType=${dataType}&issueType=${'FEATURE'}&accountId=`);
}

/** 화면 이슈 리스트 조회 */
export async function getScreenIssueList({
  projectId,
}: {
  projectId: number;
}): Promise<AxiosResponse<T.API.SimpleIssue[], any>> {
  return instanceOfJson.get(`/projects/${projectId}/issues?dataType=${'SIMPLE'}&issueType=${'SCREEN'}&accountId=`);
}

/** 화면 이슈 상세 조회 */
export async function getScreenIssueDetail({
  projectId,
}: {
  projectId: number;
}): Promise<AxiosResponse<T.API.DetailIssue[], any>> {
  return instanceOfJson.get(`/projects/${projectId}/issues?dataType=${'DETAIL'}&issueType=${'SCREEN'}&accountId=`);
}

/** 인프라 이슈 리스트 조회 */
export async function getInfraIssueList({
  projectId,
}: {
  projectId: number;
}): Promise<AxiosResponse<T.API.SimpleIssue[], any>> {
  return instanceOfJson.get(`/projects/${projectId}/issues?dataType=${'SIMPLE'}&issueType=${'INFRA'}&accountId=`);
}

/** API 이슈 리스트 조회 */
export async function getApiIssueList({
  projectId,
}: {
  projectId: number;
}): Promise<AxiosResponse<T.API.DetailApi[], any>> {
  return instanceOfJson.get(`/projects/${projectId}/apis`);
}

/** 새 프로젝트 생성 */
export async function createNewProject(newProject: {
  title: string;
  bio: string;
  members: {
    id: number;
    roles: T.RoleBadgeProps['role'][];
  }[];
}) {
  return await instanceOfJson.post(`/projects`, newProject);
}

/** 새 작업 생성 */
export async function createNewJob({
  projectId,
  newJob,
}: {
  projectId: number;
  newJob: {
    issueId: number;
    name: string;
    description: string;
    imageFile?: File | null;
  };
}) {
  const formData = new FormData();
  const request = JSON.stringify({ name: newJob.name, description: newJob.description });
  const blob = new Blob([request], { type: 'application/json' });
  formData.append('request', blob);
  if (newJob.imageFile) formData.append('image', newJob.imageFile);

  return await instanceOfFormData.post(`/projects/${projectId}/issues/${newJob.issueId}/jobs`, formData);
}

/** 이슈 상태 변경 */
export async function patchIssueAssigneesState({
  projectId,
  issueId,
  accountId,
  state,
}: {
  projectId: number;
  issueId: number;
  accountId: number;
  state: 'YET' | 'NOW' | 'DONE';
}) {
  return await instanceOfJson.patch(`/projects/${projectId}/issues/${issueId}/accounts/${accountId}/assignees`, {
    state: state,
  });
}

/** 이슈 담당자 삭제 - 칸반 보드에서 내 이슈 삭제  */
export async function deleteIssueAssignees({
  projectId,
  issueId,
  accountId,
}: {
  projectId: number;
  issueId: number;
  accountId: number;
}) {
  return instanceOfJson.delete(`/projects/${projectId}/issues/${issueId}/accounts/${accountId}/assignees`);
}

/** 프로젝트의 맴버 리스트 조회 */
export async function getProjectMemberList({
  projectId,
}: {
  projectId: number;
}): Promise<AxiosResponse<T.API.GetProjectMemberListResponse[], any>> {
  return await instanceOfJson.get(`/projects/${projectId}/members`);
}

/** 이메일 계정 조회 */
export async function searchUserByEmail({
  email,
}: {
  email: string;
}): Promise<AxiosResponse<T.API.SearchUserByEmailResponse[], any>> {
  return await instanceOfJson.get(`/accounts/email?email=${email}`);
}

/** 이슈 생성 */
export async function createNewIssue({
  projectId,
  newIssue,
}: {
  projectId: number;
  newIssue: {
    issueName?: string;
    description?: string;
    type: T.IssueProps['type'];
    epic?: string;
    priority?: T.PriorityBadgeProps['priority'];
  };
}) {
  return await instanceOfJson.post(`/projects/${projectId}/issues`, newIssue);
}

/** 이슈 담당자 생성 */
export async function createIssueAssignee({
  projectId,
  issueId,
  accountId,
}: {
  projectId: number;
  issueId: number;
  accountId: number;
}) {
  return await instanceOfJson.post(
    `/projects/${projectId}/issues/${issueId}/accounts/${accountId}/assignees`,
    accountId,
  );
}

/** 이슈 수정 */
export async function updateIssue({
  projectId,
  issueId,
  updatedIssue,
}: {
  projectId: number;
  issueId: number;
  updatedIssue: {
    issueName: string | null;
    description: string | null;
    epic: string | null;
    priority: T.PriorityBadgeProps['priority'] | null;
  };
}) {
  return await instanceOfJson.put(`/projects/${projectId}/issues/${issueId}`, updatedIssue);
}

/** 이슈 삭제 */
export async function deleteIssue({ projectId, issueId }: { projectId: number; issueId: number }) {
  return instanceOfJson.delete(`/projects/${projectId}/issues/${issueId}`);
}

/** 프로젝트 멤버 초대 - 팀장 권한만 가능 */
export async function inviteMembers({
  projectId,
  members,
}: {
  projectId: number;
  members: {
    id: number;
    roles: T.RoleBadgeProps['role'][];
  }[];
}) {
  return await instanceOfJson.post(`/projects/${projectId}/members`, members);
}

/** API 수정 */
export async function updateApi({
  projectId,
  id,
  reqBody,
}: {
  projectId: number;
  id: number;
  reqBody: {
    request: string | null;
    response: string | null;
    url: string | null;
    description: string | null;
    method: 'GET' | 'PUT' | 'PATCH' | 'POST' | 'DELETE' | null;
  };
}) {
  return instanceOfJson.put(`/projects/${projectId}/apis/${id}`, reqBody);
}

/** 인프라 이슈 알림 전송 */
export async function sendInfraAlarm({
  projectId,
  issueId,
  targetmember,
}: {
  projectId: number;
  issueId: number;
  targetmember: number[];
}) {
  return await instanceOfJson.post(
    `/notifications/projects/${projectId}/issues/${issueId}/send?accountIds=${targetmember}`,
  );
}

/** 알림 확인 */
export async function readNoti({ notificationId }: { notificationId: number }) {
  return instanceOfEventStream.patch(`/notifications/${notificationId}`);
}

/** 이슈 연결 생성 */
export async function createConnectionWithIssue({
  projectId,
  body,
}: {
  projectId: number;
  body: {
    featureIssueId: number;
    screenIssueId: number;
  };
}) {
  return instanceOfJson.post(`/projects/${projectId}/issues/connect`, body);
}

/** 이슈 연결 삭제 */
export async function deleteConnectionWithIssue({
  projectId,
  connectionId,
}: {
  projectId: number;
  connectionId: number;
}) {
  return instanceOfJson.delete(`/projects/${projectId}/issues/disconnect/${connectionId}`);
}

/** 기능 명세서 수정 시 알람 */
export async function sendFeatureManualAlram({ projectId }: { projectId: number }) {
  return instanceOfJson.post(`/notifications/projects/${projectId}`);
}
