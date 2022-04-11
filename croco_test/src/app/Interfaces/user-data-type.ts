export interface UserDataType {
  [index: number]: {
    id:number,
    name:string,
    username:string,
    email: string,
    address?:any,
    phone?:string,
    website?: string,
    company?:any
};
}