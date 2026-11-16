import { defineStore } from 'pinia';
import { ref } from 'vue';

export const shoppingState = defineStore('shoppingList',()=>{
     const items = ref([]);
    
        function getItems(){
            return items.value;
        }
        function addItem(item){
            items.value.push(item);
        }
        function removeItem(index){
            items.value.splice(index,1);
        }
    
        return{
            getItems,addItem,removeItem
        }
})