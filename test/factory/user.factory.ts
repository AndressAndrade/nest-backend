import { Factory } from 'rosie';
import { Chance } from 'chance';
import { User } from '../../src/user/domain/entities/user.entity';

const chance = new Chance();

export const UserFactory = new Factory<User>()
  .attr('id', () => chance.guid({ version: 5 }))
  .attr('name', () => chance.name())
  .attr('email', () => chance.email())
  .attr('phone', () => chance.phone({ country: 'br', formatted: false }))
  .attr('createdAt', () => chance.date())
  .attr('updatedAt', () => chance.date());
