const permissions = {
    'getUsers': {
        all: ['head-trainer'],
        read: ['trainee', 'trainer'],
        write: ['trainer'],
        delete: [],
    }
}


const hasPermission =(moduleName,role,permissionType)=>{
  console.log(permissions[moduleName][permissionType].includes(role));
  return;
    //permissions.'getUsers'.permissionType.include("trainee")
}

hasPermission(process.argv[2],process.argv[3],process.argv[4]);
// console.log(process.argv[2],process.argv[3],process.argv[4]);