import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()

export class ApiProvider {

    private API_URL:string = 'http://www.embrios.com.br/wp-json/wp/v2/';
    public Categories:any = [];

    
constructor (public http:HttpClient){

}

get (query:string = ''){
    return this.http.get(this.API_URL + query);
}

getCategories(){
    this.get('categories?parent=47').subscribe((data)=> { // esse ?parent=47 mostra as subcategorias da categoria com id 47
      this.Categories = data;
    });
  }



  getCatName(cat_id:number){
    let cat_name:string = '';
    this.Categories.forEach(element => {
      if (element.id == cat_id){
        cat_name = element.name;
      }
    });
    return cat_name;
  }


}
