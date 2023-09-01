export interface product{
    id:number,
    productName:string,
    productPrice :string,
    productColor:string,
    productCategory:string,
    productDescription:string,
    productImage:string
}

export interface signUp{
    name: string,
    email:string,
    password:string
}

export interface login{    
    email:string,
    password:string
}

