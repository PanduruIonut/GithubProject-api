import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateResult, DeleteResult } from 'typeorm';

import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOne(user: User) {
    return await this.userRepository.findOne(user);
  }

  async findByUsername(username) {
    return await this.userRepository.findOne({
      where: {
        username
      }
    });
  }

  async create(user: User): Promise<User> {
    return await this.userRepository.save(user);
  }

  async update(user: User): Promise<UpdateResult> {
    await this.userRepository.update(user.id, user);
    await this.userRepository.update(user.firstName, user);
    await this.userRepository.update(user.lastName, user);
    await this.userRepository.update(user.password, user);
    await this.userRepository.update(user.email, user);
    await this.userRepository.update(user.city, user);
    await this.userRepository.update(user.phone, user);
    return await this.userRepository.update(user.country, user);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.userRepository.delete(id);
  }
}
