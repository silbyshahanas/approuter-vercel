import { ServiceBase } from "./service-base";

export class ProductsService extends ServiceBase {
  static getProducts = async () => {
    var productsResponse = await fetch(this.getUrl('/products'),{
        cache:'no-store',
    });
    var products = await productsResponse.json();
    return products;
  };

  static getProductById = async (id:number) => {
    var productResponse = await fetch(this.getUrl('/products/'+id));
    var product = await productResponse.json();
    return product;
  };


   static loadProductsBySearchText = async () => {
    var searchResponse = await fetch(this.getUrl('/products'));
    var searchList = await searchResponse.json();
    return searchList;
  };
}

