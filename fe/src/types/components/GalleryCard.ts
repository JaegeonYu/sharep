export interface GalleryCardProps {
  issueId: number;
  issueName: string;
  createdAt: string;
  type: 'SCREEN' | 'PRIVATE';
  imageUrl?: string;
}
