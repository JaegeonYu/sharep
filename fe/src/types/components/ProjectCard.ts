import * as T from '@/types';
export interface ProjectCardProps extends Pick<T.API.GetProjectListResponse, 'id' | 'title' | 'bio'> {
  accounts?: T.API.GetProjectListResponse['accounts'] | null;
  add: boolean;
}
