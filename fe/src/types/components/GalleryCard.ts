export interface GalleryCardProps {
  issueName: string;
  createdAt: string;
  issueType: 'SCREEN' | 'PRIVATE';
  imageUrl?: string;
}
