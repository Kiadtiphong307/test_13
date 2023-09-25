<script setup>
import {ref} from'vue'
import { menuStore } from '../stores/menu.js';

const allmenu = menuStore();
const shop_food = allmenu.menu_list;

function del_item(i) {
    allmenu.remove_list(i);
}

function add_list() {
    const new_menu = ref({name:'ไก่ทอด', img:'ภาพปลากรอบ', price:69, rating:5});
    allmenu.add_list(new_menu.value);
}


</script>

<template>
    <div>
        <h1>List menu</h1>
        
        <button @click="add_list()">Add Item</button>
        <ul>
            <li v-for="(i, index) in shop_food" :key="index">
                {{i.name}} - {{i.price}}฿
                <button @click="del_item(index)">ลบรายการ</button>
            </li>
        </ul>
    </div>
</template>
