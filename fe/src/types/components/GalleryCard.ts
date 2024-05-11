import * as T from '@/types';
export interface GalleryCardProps {
  issue: T.API.SimpleIssue;
  type: 'SCREEN' | 'INFRA';
}
