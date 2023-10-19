import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

export interface CustomComponentProps {
    children: ReactNode;
}

export interface FeatureCardProps {
    title: string;
    icon: StaticImageData;
    link: string;
}