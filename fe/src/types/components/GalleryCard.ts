export interface GalleryCardProps {
  id: number;
  issueName: string;
  createdAt: string;
  type: 'SCREEN' | 'INFRA';
  imageUrl?: string;
}
