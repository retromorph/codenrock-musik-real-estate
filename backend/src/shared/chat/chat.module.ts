import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';
// import { Chat, ChatSchema } from './chat.entity';

@Module({
    imports: [
        // MongooseModule.forFeature([{ name: Chat.name, schema: ChatSchema }]),
    ],
    controllers: [ChatController],
    providers: [ChatService],
})
export class ChatModule {}