export interface GalleryCardProps {
  issueId: number;
  issueName: string;
  createdAt: string;
  issueType: 'SCREEN' | 'PRIVATE';
  imageUrl?: string;
}
