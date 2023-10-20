import { StaticImageData } from 'next/image';
import { Dispatch, ReactNode, SetStateAction } from 'react';

export interface CustomComponentProps {
    children: ReactNode;
}

export interface NavBarItem {
    title: string;
    icon: ReactNode;
    route: string;
}

export interface Headerprops {
    setIsDrawerOpen: Dispatch<SetStateAction<boolean>>;
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

export interface StartupProfileProps {
    name: string;
    description: string;
    banner: string;
    logo: string;
    website: string;
    twitter: string;
}

export interface SnackbarProps {
    message: string;
    type: string;
}