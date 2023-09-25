// name foods

import { ref } from 'vue';
import { defineStore } from 'pinia'

export const menuStore = defineStore('menu', () => {

const menu_list=ref([
        {name:'ข้าวไก่กระเทียม', img:'ภาพปลากรอบ', price:50, rating:9 },
        {name:'ข้าวหมู', img:'ภาพปลากรอบ', price:40, rating:5 },
        {name:'ข้าวขาหมู', img:'ภาพปลากรอบ', price:45, rating:3 },
        {name:'ข้าวไก่ทอด', img:'ภาพปลากรอบ', price:55, rating:4 },
        {name:'แกงกะรี่', img:'ภาพปลากรอบ', price:99, rating:5 },
        {name:'ก๋วยเตี๋ยวไก่', img:'ภาพปลากรอบ', price:60, rating:5 },
        {name:'ข้าวผัดทะเล', img:'ภาพปลากรอบ', price:70, rating:6 },
        {name:'ก๋วยเตี้ยวเนื้อวากิว', img:'ภาพปลากรอบ', price:95, rating:8 },
        {name:'สุกี้ทะเลรวม', img:'ภาพปลากรอบ', price:100, rating:2 },
        {name:'ส้มตำทะเล', img:'ภาพปลากรอบ', price:99, rating:2 }
    
    ])
  


    function remove_list (i) {
        menu_list.value.splice(i, 1)
    }

    function add_list (x) {
        menu_list.value.push(x)
    }


    return { menu_list , remove_list ,add_list }
  })




