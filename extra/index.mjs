
import {Diamond,Equilateral} from './patterns/index.mjs';
import{ hasPermission, validateUser} from './utils/index.mjs';
import Constants from './constants.mjs';

hasPermission('getUsers','trainee','read');
hasPermission('getUsers','trainee','write');
hasPermission('getUsers','trainer','all');

validateUser(Constants.users);