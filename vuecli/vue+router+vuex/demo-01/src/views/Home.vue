<template>
  <div>
    <products-list :list="products"></products-list>
  </div>
</template>

<script>
import ProductsList from '../components/ProductsList'
export default {
  name: 'Home',
  components: { ProductsList },
  data(){
    return {
      products:[]
    }
  },
  async created(){
    try{
        this.products = await this.getProductsList()
    }
    catch(e){
      alert('请求错误', e)
    }
      
  },
  methods:{
    getProductsList(){
      return new Promise((resolve, reject) => {
        setTimeout(()=> {
          const data = [
        {
          id:'1001',
          name:'联想笔记本电脑 ThinkBook 14 锐龙版 2021款 14英寸轻薄笔记本(7nm 六核 R5 5600U 16G 512G 高色域 长续航)',
          img:'https://img14.360buyimg.com/n0/jfs/t1/202976/5/2685/133464/61233f9dE500c1f35/5f79d5573ff4b5f9.jpg',
          price:4899.00,
          description:'联想笔记本电脑 ThinkBook 14 锐龙版 2021款 14英寸轻薄笔记本(7nm 六核 R5 5600U 16G 512G 高色域 长续航)'
        },
        {
          id:'1002',
          name:'联想笔记本电脑 ThinkBook 14 锐龙版 2021款 14英寸轻薄笔记本(7nm 六核 R5 5600U 16G 512G 高色域 长续航)',
          img:'https://img14.360buyimg.com/n0/jfs/t1/202976/5/2685/133464/61233f9dE500c1f35/5f79d5573ff4b5f9.jpg',
          price:4899.00,
          description:'联想笔记本电脑 ThinkBook 14 锐龙版 2021款 14英寸轻薄笔记本(7nm 六核 R5 5600U 16G 512G 高色域 长续航)'
        },
        {
          id:'1003',
          name:'联想笔记本电脑 ThinkBook 14 锐龙版 2021款 14英寸轻薄笔记本(7nm 六核 R5 5600U 16G 512G 高色域 长续航)',
          img:'https://img14.360buyimg.com/n0/jfs/t1/202976/5/2685/133464/61233f9dE500c1f35/5f79d5573ff4b5f9.jpg',
          price:4899.00,
          description:'联想笔记本电脑 ThinkBook 14 锐龙版 2021款 14英寸轻薄笔记本(7nm 六核 R5 5600U 16G 512G 高色域 长续航)'
        },
        {
          id:'1004',
          name:'联想笔记本电脑 ThinkBook 14 锐龙版 2021款 14英寸轻薄笔记本(7nm 六核 R5 5600U 16G 512G 高色域 长续航)',
          img:'https://img14.360buyimg.com/n0/jfs/t1/202976/5/2685/133464/61233f9dE500c1f35/5f79d5573ff4b5f9.jpg',
          price:4899.00,
          description:'联想笔记本电脑 ThinkBook 14 锐龙版 2021款 14英寸轻薄笔记本(7nm 六核 R5 5600U 16G 512G 高色域 长续航)'
        },
        {
          id:'1005',
          name:'联想笔记本电脑 ThinkBook 14 锐龙版 2021款 14英寸轻薄笔记本(7nm 六核 R5 5600U 16G 512G 高色域 长续航)',
          img:'https://img14.360buyimg.com/n0/jfs/t1/202976/5/2685/133464/61233f9dE500c1f35/5f79d5573ff4b5f9.jpg',
          price:4899.00,
          description:'联想笔记本电脑 ThinkBook 14 锐龙版 2021款 14英寸轻薄笔记本(7nm 六核 R5 5600U 16G 512G 高色域 长续航)'
        },
        {
          id:'1006',
          name:'联想笔记本电脑 联想笔记本电脑联想笔记本电脑联想笔记本电脑联想笔记本电脑联想笔记本电脑联想笔记本电脑联想笔记本电脑联想笔记本电脑联想笔记本电脑联想笔记本电脑联想笔记本电脑联想笔记本电脑联想笔记本电脑联想笔记本电脑联想笔记本电脑联想笔记本电脑联想笔记本电脑联想笔记本电脑联想笔记本电脑联想笔记本电脑联想笔记本电脑联想笔记本电脑联想笔记本电脑ThinkBook 14 锐龙版 2021款 14英寸轻薄笔记本(7nm 六核 R5 5600U 16G 512G 高色域 长续航)',
          img:'https://img14.360buyimg.com/n0/jfs/t1/202976/5/2685/133464/61233f9dE500c1f35/5f79d5573ff4b5f9.jpg',
          price:4899.00,
          description:'联想笔记本电脑 ThinkBook 14 锐龙版 2021款 14英寸轻薄笔记本(7nm 六核 R5 5600U 16G 512G 高色域 长续航)'
        }
          ];
          if(data){
            resolve(data);
          }else{
            reject(0)
          }
          
        },500)
      })
    }
  }

}
</script>

<style scoped>

</style>>
