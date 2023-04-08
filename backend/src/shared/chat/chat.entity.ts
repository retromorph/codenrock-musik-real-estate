import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ChatDocument = Chat & Document;

export interface Message {
    id: string;
    message: string;
    sender: string;
    timestamp: Date;
    fileUrls?: string[];
}

@Schema()
export class Chat {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    participants: string[];

    @Prop({ type: [Object] })
    messages: Message[];
}

export const ChatSchema = SchemaFactory.createForClass(Chat);