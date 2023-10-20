import { Dispatch, SetStateAction } from 'react';

export interface FeedItem {
    type: string;
    title: string;
    description: string;
    image: string;
    slug: string;
    category: string;
    tags: string[];
}

export interface NewFeedItemCreateType {
    title: Category;
    fields: FormInputField[];
}

export enum Category {
    Event='Event',
    Idea='Idea',
    Resource='Resource',
}

export interface FormInputField {
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
    title: string;
    palceholder: string;
}