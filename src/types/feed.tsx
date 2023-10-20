import { Dispatch, SetStateAction } from 'react';
import { Database } from './database.types';

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

export enum InputType {
    Text='text',
    TextArea='textarea',
    Tags='tags',
}
export interface FormInputField {
    value: Feed['author']|Feed['category']|Feed['content']|Feed['tags']|Feed['title']|Profile['bio']|Profile['full_name']|Profile['avatar_url'];
    setValue: Dispatch<SetStateAction<any>>;
    title: string;
    palceholder: string;
    inputType: InputType;
}

export interface EditorProps {
    editMode: boolean;
    title: string;
    defaultContent: object;
    setValue: Dispatch<SetStateAction<object>>;
}

export type Feed=Database['public']['Tables']['Feed']['Row'];
export type Profile=Database['public']['Tables']['profiles']['Row'];