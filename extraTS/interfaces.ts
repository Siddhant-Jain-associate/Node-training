interface Permissions
{
    (moduleName: string, role: string,permissionType:string): void;
};
interface hasValidEmail{
    (email:string):boolean
}
interface validatingUser{
    (user:any[]):void
}
export {Permissions,hasValidEmail,validatingUser};