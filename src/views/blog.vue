/* eslint-disable */
<template>
 <div class="wrapper">
    <div class="blog-list" >
        <div class="card" v-for=" blog in blogs " v-bind:key="blog.id">
            <div class="card-top">
                <p class="title">{{ blog.title }}</p>
                <p class="time"><img src="../assets/calendar.png" class="icon_time"/>{{ blog.create_time }}</p>
                <p class="desc">{{ blog.desc }}</p>
            </div>
            <div class="card-bottom">
                <span class="get-more-btn">READ MORE</span>
            </div>
        </div>
    </div>
    <div class="paginator-wrapper">
        <div class="paginator">
            <img v-bind:src=" has_previous?require('../assets/left.png'):require('../assets/disable-left.png')" class="icon_left"/>
            <span class="num" v-for=" page in pages" v-bind:key="page">{{ page+1 }}</span> 
            <img v-bind:src=" has_next?require('../assets/right.png'):require('../assets/disable-right.png')" class="icon_right">
        </div>
    </div>
  </div>
</template>

<style scope>
    .card{
        overflow: hidden;

        border-radius: 8px;
        margin-bottom: 20px;
    }

    .card-top{
        padding: 24px;
        background-image: linear-gradient(25deg, #55a6f8, #a0b3e2, #d0c0cc, #f9ceb4);
        color:#fff;
    }

    .card-bottom{
        padding: 14px 24px;

        font-weight: bold;
        color: #FFD54A;

        background-color: #A1CDFC;
    }

    .get-more-btn:hover{
        cursor:pointer;
        text-decoration:underline
    }


    .title{
        margin-bottom: 12px;

        font-size: 24px;
        font-weight: bold;
    }

    .time{
        display: flex;
        align-items: center;

        margin-bottom: 12px;

        font-size: 14px;
    }

    .icon_time{
        width:14px;
        height: 14px;
        margin-right: 15px;
    }

    .desc{
        font-size: 20px;
    }

    .card:hover{
        transition: box-shadow .25s;
        box-shadow: 0 8px 17px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    }

    .paginator-wrapper{
        text-align: center;
        font-size: 18px;
        font-weight: bold;
        color: #fff;
        margin-bottom: 20px;
    }

    .num{
        border-radius: 6px;
        padding: 6px 12px;
        background: #BFCFEF;
    }

    .icon-left,.icon-right{
        width: 16px;
        height: 16px;
    }
</style>

<script>
import axios from 'axios';

export default {
  name: 'blog',
  data:function(){
      return{
        blogs:[],
        pages:[],
        page:1,
        has_next:true,
        has_previous:true
      }
  },
  created(){
      axios.get('http://127.0.0.1:8000/api/blog_list').then((rep) => {
        this.blogs = rep.data.blogs,
        this.has_next = rep.data.has_next,
        this.has_previous = rep.data.has_previous
        this.pages = [...Array(rep.data.total_count).keys()];
       })
    },

    loadData(page){
        axios.get('http://127.0.0.1:8000/api/blog_list?page='+page)
            .then((rep)=>{
                this.has_next = rep.data.has_next,
                this.has_previous = rep.data.has_previous
                this.pages = [...Array(rep.data.total_count).keys()];
            })
    },

    next(){
        this.page = this.page++;
        this.loadData(this.page);
    },

    previous(){
        this.page = this.page--;
        this.loadData(this.page)
    }
}
</script>
