import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { DetailPage } from '../detail/detail';

/**
 * Generated class for the BuscarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-buscar',
  templateUrl: 'buscar.html',
})
export class BuscarPage {

  searchQuery:string ='' ;

  private per_page:number = 2;
  private page:number = 1;
  private showLoadMore = false;
  private isLoading = false;
 public items:any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public api:ApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuscarPage');
  }



  onSearch(){
  this.items = [];
  this.getPosts();

  }




  getPosts(){
    if (!this.isLoading && this.searchQuery.length > 0){
      this.isLoading = true;
      this.api.get('posts?_embed&per_page='+this.per_page +'&page='+this.page+'&search='+this.searchQuery)
      .subscribe((data:any) => {
        this.isLoading = false;
        this.items = this.items.concat(data);
        if(data.length===this.per_page){
          this.page++;
          this.showLoadMore = true;
        }else{
          this.showLoadMore = false;
        }
      }, (error)=> {
        this.isLoading = false;
        if (error.error.code==="rest_post_invalid_page_number"){
          this.showLoadMore = false;
        }
      });
    }
  }



  clearSearch(){
    this.searchQuery = '';
    this.items = [];
    this.page = 1;
    this.showLoadMore = false;

  }



  openDetail(item){
    this.navCtrl.push(DetailPage, {post:item})
  }


  
}
