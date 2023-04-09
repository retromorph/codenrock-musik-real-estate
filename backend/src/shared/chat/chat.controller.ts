// import {
//     Controller,
//     Get,
//     Post,
//     Put,
//     Delete,
//     Body,
//     Param, NotFoundException,
// } from '@nestjs/common';
// import {ChatService} from './chat.service';
// import {Chat} from './chat.entity';
// import {Message} from "./chat.entity";
// import * as Option from "fp-ts/Option"

import {Controller} from "@nestjs/common";

@Controller('chat')
export class ChatController {
    // constructor(private chatService: ChatService) {
    // }
    //
    // @Post()
    // async createChat(@Body() chat: Chat): Promise<Chat> {
    //     return this.chatService.createChat(chat.name, chat.participants);
    // }
    //
    // @Get()
    // async getAllChats(): Promise<Chat[]> {
    //     return this.chatService.getAllChats();
    // }
    //
    // @Get(':id')
    // async getChatById(@Param('id') id: string): Promise<Chat> {
    //     const chatOption = await this.chatService.getChatById(id);
    //
    //     if (Option.isNone(chatOption)) {
    //         throw new NotFoundException();
    //     }
    //
    //     return chatOption.value
    // }
    //
    // @Put(':id')
    // async updateChat(@Param('id') id: string, @Body() chat: Chat): Promise<Chat> {
    //     return this.chatService.updateChat(id, chat);
    // }
    //
    // @Delete(':id')
    // async deleteChat(@Param('id') id: string): Promise<any> {
    //     return this.chatService.deleteChat(id);
    // }
    //
    // @Post(':id/messages')
    // async sendMessage(@Param('id') id: string, @Body() message: Message): Promise<Chat> {
    //     return this.chatService.sendMessage(id, message);
    // }
    //
    // @Delete(':id/messages/:messageId')
    // async deleteMessage(
    //     @Param('id') id: string,
    //     @Param('messageId') messageId: string,
    //     @Param('userId') userId: string,
    // ): Promise<Chat> {
    //     return this.chatService.deleteMessage(id, messageId, userId);
    // }
}