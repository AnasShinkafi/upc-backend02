import { Injectable } from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Menu } from './entities/menu.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MenuService {
  constructor(@InjectRepository(Menu) private menuRepository: Repository<Menu>) {}

  async create(createMenuDto: CreateMenuDto): Promise<Menu> {
    const menu = await this.menuRepository.create(createMenuDto);
    return this.menuRepository.save(menu);
  }

  async findAll(): Promise<Menu[]> {
    const menu = await this.menuRepository.find()
    return menu;
  }

  async findOne(id: number): Promise<Menu> {
    const menu = await this.menuRepository.findOne({ where: {id}});
    return menu;
  }

  async update(id: number, updateMenuDto: UpdateMenuDto): Promise<Menu> {
    const menu = await this.menuRepository.findOne({ where: {id}});
    if (!menu) {
      throw new Error("Menu no found");
    }

    Object.assign(menu, updateMenuDto);
    return this.menuRepository.save(menu);
  }

  async remove(id: number): Promise<void> {
    await this.menuRepository.delete(id);
  }
}
