import Constants from '../constants.mjs';
const hasPermission =(moduleName,role,permissionType)=>{
  console.log(Constants.Permissions[moduleName][permissionType].includes(role));
  return;
    //permissions.'getUsers'.permissionType.include("trainee")
}

// hasPermission(process.argv[2],process.argv[3],process.argv[4]);
// console.log(process.argv[2],process.argv[3],process.argv[4]);

export default hasPermission;