//重写vue类型接口

import Vue from 'vue';
import {NuxtAxiosInstance} from '@nuxtjs/axios'
import {NuxtCookies} from 'cookie-universal-nuxt'
declare module 'vue/types/vue' {
  interface Vue {
    $axios: NuxtAxiosInstance;
    $seo:Function;
    detail:{title:string,des:string};
    $show:()=>void;
    collectionName:string;
    $cookies: NuxtCookies;
    username:string;
    password:string;
  }
}