import { promises as fs } from 'fs';
import * as path from 'path';
import {
  Inject,
  Injectable,
} from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { MemoryStoredFile } from 'nestjs-form-data';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { FileEntity } from './entities/file.entity';
import { fileConfig } from '../../config/file.config';

@Injectable()
export class FileService {
  constructor(
    @InjectRepository(FileEntity)
    private readonly fileRepository: Repository<FileEntity>,
    @Inject(fileConfig.KEY)
    private readonly fileConf: ConfigType<typeof fileConfig>,
  ) {
  }

  async createFromMemoryStoredFile(memoryStoredFile: MemoryStoredFile): Promise<FileEntity> {
    const filePath = path.join(this.fileConf.path!, `${uuidv4()}.${memoryStoredFile.extension}`);
    await fs.writeFile(
      filePath,
      memoryStoredFile.buffer,
    );

    return this.fileRepository.save({
      url: filePath,
    });
  }

  findOne(id: number): Promise<FileEntity> {
    return this.fileRepository.findOneOrFail({
      where: {
        id,
      },
    });
  }

  async remove(id: number): Promise<void> {
    const file = await this.findOne(id);

    await Promise.all([
      fs.unlink(file?.url),
      this.fileRepository.remove(file),
    ]);
  }
}
