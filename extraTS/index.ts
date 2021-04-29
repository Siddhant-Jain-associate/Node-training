import {Diamond,Equilateral} from './patterns/index';

import{ hasPermission, validateUser} from './utils/index';

import Constants from './constants';

hasPermission('getUsers','trainee','read');
hasPermission('getUsers','trainee','write');
hasPermission('getUsers','trainer','all');

validateUser(Constants.users);