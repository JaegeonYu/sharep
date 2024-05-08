import { GalleryCardProps } from '..';

export interface GalleryGridWrapperProps {
  issueList: GalleryCardProps[];
  type: 'SCREEN' | 'PRIVATE';
}
