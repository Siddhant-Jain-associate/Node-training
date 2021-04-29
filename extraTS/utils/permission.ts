import Constants from '../constants';
import{ Permissions }from '../interfaces';

const hasPermission =(moduleName:string,role:string ,permissionType:string):void=>{
  console.log(Constants.Permissions[moduleName][permissionType].includes(role));
  return;
    //permissions.'getUsers'.permissionType.include("trainee")
}

// hasPermission(process.argv[2],process.argv[3],process.argv[4]);
// console.log(process.argv[2],process.argv[3],process.argv[4]);
let hasPermissionValid:Permissions = hasPermission;
export default hasPermissionValid;