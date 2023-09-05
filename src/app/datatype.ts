export interface product{
    id:number,
    productName:string,
    productPrice :string,
    productColor:string,
    productCategory:string,
    productDescription:string,
    productImage:string
    quntity : undefined | number;
}

export interface cart{
    id:number | undefined,
    productName:string,
    productPrice :string,
    productColor:string,
    productCategory:string,
    productDescription:string,
    productImage:string
    quntity : undefined | number,
    userId:number,
    productId:number
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

