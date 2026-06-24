// src/scripts/TeamMemberInterfaces.ts
import type { ImageMetadata } from 'astro';

interface Avatar {
  title: string;
  imageRef: ImageMetadata;
}

export interface teamProps {
  name: string;
  title: string;
  avatar: Avatar; 
}