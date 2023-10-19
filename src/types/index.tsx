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

export interface EventCardProps {
    title: string;
    description: string;
    speaker: string;
    category: string;
    banner: string;
    slug: string;
}

export interface EventSectionProps {
    events: EventCardProps[];
}

export interface IndexPageProps {
    events: EventCardProps[];
}

export interface Event extends EventCardProps {
    speakerInfo: string;
    eventInfo: string;
    eventVideo: string;
}