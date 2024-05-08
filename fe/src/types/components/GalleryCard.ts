export interface GalleryCardProps {
  id: number;
  issueName: string;
  createdAt: string;
  type: 'SCREEN' | 'PRIVATE';
  imageUrl?: string;
}
