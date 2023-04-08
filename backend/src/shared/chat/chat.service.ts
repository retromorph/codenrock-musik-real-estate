// import {BadRequestException, Injectable, NotFoundException} from '@nestjs/common';
// import {InjectModel} from '@nestjs/mongoose';
// import {Model} from 'mongoose';
// import {Chat, ChatDocument} from './chat.entity';
// import {Message} from "./chat.entity";
// import * as Option from "fp-ts/Option"

import {Injectable} from "@nestjs/common";

@Injectable()
export class ChatService {
    // constructor(
    //     @InjectModel(Chat.name) private chatModel: Model<ChatDocument>,
    // ) {
    // }
    //
    // async createChat(name: string, participants: string[]): Promise<Chat> {
    //     const chat = new this.chatModel({name, participants, messages: []});
    //     return chat.save();
    // }
    //
    // async getAllChats(): Promise<Chat[]> {
    //     return this.chatModel.find().exec();
    // }
    //
    // async getChatById(id: string): Promise<Option.Option<Chat>> {
    //     const chatOrNull = await this.chatModel.findById(id).exec();
    //
    //     return Option.fromNullable(chatOrNull);
    // }
    //
    // async updateChat(id: string, chat: Partial<Chat>): Promise<Chat> {
    //     const chatOrNull = await this.chatModel.findByIdAndUpdate(id, chat, {new: true}).exec();
    //
    //     if (chatOrNull == null) {
    //         throw new Error(`There is no chat with ${id}`);
    //     }
    //
    //     return chatOrNull;
    // }
    //
    // async deleteChat(id: string): Promise<any> {
    //     return this.chatModel.findByIdAndDelete(id).exec();
    // }
    //
    // async sendMessage(chatId: string, message: Message): Promise<Chat> {
    //     const chat = Option.fromNullable(await this.chatModel.findById(chatId).exec());
    //
    //     if (Option.isSome(chat)) {
    //         chat.value.messages.push(message);
    //         return chat.value.save();
    //     }
    //
    //     throw new BadRequestException();
    // }
    //
    // async deleteMessage(chatId: string, messageId: string, userId: string): Promise<Chat> {
    //     const chat = Option.fromNullable(await this.chatModel.findById(chatId).exec());
    //
    //     if (Option.isSome(chat)) {
    //         const messageIndex = chat.value.messages.findIndex(
    //             (message) => message.id.toString() === messageId && message.sender.toString() === userId,
    //         );
    //         if (messageIndex === -1) {
    //             throw new NotFoundException(`Message with id ${messageId} not found in chat ${chatId}`);
    //         }
    //
    //         chat.value.messages.splice(messageIndex, 1);
    //         return chat.value.save();
    //     }
    //
    //     throw new BadRequestException();
    // }
}