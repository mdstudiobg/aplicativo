import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {ApiProvider} from '../../providers/api/api';
import { DetailPage } from '../detail/detail';
import { Storage } from '@ionic/storage';
import { BuscarPage } from '../buscar/buscar';


@Component({
  selector: 'page-conteudo',
  templateUrl: 'conteudo.html',
})
export class ConteudoPage {

  public items:any = [];
  public Categories:any = [];

  private per_page:number = 2;
  private page:number = 1;
  private isLoading = false;
  private ordenar:string = '0';
  
  constructor (public navCtrl: NavController, public storage: Storage, public api:ApiProvider, public navParms:NavParams) {
    console.log(this.navParms.get('cat_id'));
    this.getPosts();
   }

 


    getPosts(infiniteScroll = null){
      if (!this.isLoading){
        this.isLoading = true;
        if(infiniteScroll!=null && infiniteScroll.ionRefresh){
          this.page = 1;
        }
        let url:string = 'posts?_embed&categories='+this.navParms.get('cat_id')+'&per_page='+this.per_page +'&page='+this.page;
        url += this.ordenar=='1' ? '&order=asc' :this.ordenar=='2' ? '&orderby=title&order=asc' :this.ordenar=='3' ? '&orderby=title&order=desc': '';  
        this.api.get(url)
        .subscribe((data:any) => {
          this.isLoading = false;
          this.items = infiniteScroll!=null && infiniteScroll.ionRefresh ? data: this.items.concat(data);
          if(data.length===this.per_page){
            this.page++;
          } 
          if(infiniteScroll!=null){
            infiniteScroll.complete();
          }
        }, (error)=> {
          this.isLoading = false;
          if(infiniteScroll!=null){
            infiniteScroll.complete();
          }
        });
      }
    }



openDetail(item){
  this.navCtrl.push(DetailPage, {post:item})
}




getCatName(cat_id:number){
  let cat_name:string = '';
  this.api.Categories.forEach(element => {
    if (element.id == cat_id){
      cat_name = element.name;
    }
  });
  return cat_name;
}


BuscarPage(){
  this.navCtrl.push(BuscarPage);
}


mudarOrdem(){
  this.items = [];
  this.page = 1;
  this.getPosts();
  }

  


}
