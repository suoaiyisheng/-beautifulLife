<template>
  <div id="app">
    <div class="sidebar">
        <div class="sidebar-header">
            <div id="avatar"></div>
            <div class="info">
                <p class="name">韦雯悦</p>
                <p class="desc">Remain true to our original aspiration</p>
            </div>
        </div>

        <nav class="nav">
            <ul class="blog-item-list">
                <router-link to="/blog">
                    <li class="nav-item">
                        <span><img src="../src/assets/ic_home.png" class="nav-item-icon"/></span>
                        <span>Home-主页</span>
                    </li>
                </router-link>

                <router-link to="/about">
                    <li class="nav-item">
                        <span><img src="../src/assets/ic_project.png" class="nav-item-icon"/></span>
                        <span>Github-项目</span>
                    </li>
                </router-link>

                 <router-link to="/about">
                    <li class="nav-item">
                        <span><img src="../src/assets/ic_categories.png" class="nav-item-icon"/></span>
                        <span>Categories-分类</span>
                    </li>
                </router-link>

                <router-link to="/about">
                    <li class="nav-item">
                        <span><img src="../src/assets/ic_tag.png" class="nav-item-icon"/></span>
                        <span>Tag-标签</span>
                    </li>
                </router-link>

                <router-link to="/about">
                    <li class="nav-item">
                        <span><img src="../src/assets/ic_life.png" class="nav-item-icon"/></span>
                        <span>Life-杂七杂八的生活</span>
                    </li>
                </router-link>

            </ul>

            <ul>
                <router-link to="/about">
                    <li class="nav-item">
                        <span><img src="../src/assets/ic_about.png" class="nav-item-icon"/></span>
                        <span>About-关于我</span>
                    </li>
                </router-link>

                <router-link to="/about">
                    <li class="nav-item">
                        <span><img src="../src/assets/ic_contact.png" class="nav-item-icon"/></span>
                        <span>contact-联系我</span>
                    </li>
                </router-link>
            </ul>
        </nav>
    </div>
    <div class="main">
        <div class="main-header">
             <div class="mask"></div>
             <p class="title">韦雯悦的博客</p>
             <ul class="my-tag-list">
                 <li class="my-tag-item">学习</li>
                 <li class="my-tag-item">总结</li>
                 <li class="my-tag-item">分享</li>
                 <li class="my-tag-item">吃</li>
             </ul>
             <div class="search-wrapper">
                 <i><img src="../src/assets/search.png" class="ic_search"/></i>
                 <input type="text" placeholder="search....." class="ipt"/>
             </div>
        </div>
        <div class="main-content">
            <router-view></router-view>
        </div>
    </div>
  </div>
</template>

<style scope>
#app{
  display: flex;

  font-family:'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
  color:#2c3e50
}

body,
html,
#app{
    height: 100%;
}
  
.sidebar{
    display: flex;
    flex-direction:column;
    flex-basis: 300px;
    background-color: #FFB4AA;
}

.sidebar-header{
    display: flex;
    align-content: center;
    position: relative;

    box-sizing: border-box;
    height: 150px;
    padding: 10px 10px;

    background-image: linear-gradient( 135deg, #FEB692 10%, #EA5455 100%);
}

#avatar{
    flex-shrink: 0;
    width: 100px;
    height: 100px;
    margin-right: 10px;

    background-image: url('../src/assets/avatar.jpeg');
    background-size: cover;
    border-radius: 50%;
    box-shadow: 0 0 10px #FDCED3;
}

.info{
    padding-top: 20px;
}

.name{
     margin-bottom: 10px;

    font-weight: 500;
    font-size: 20px;
    color: #fff;
}

.nav{
    flex:1;
    padding: 30px 10px 0 10px;
    box-sizing: border-box;
}

.nav-item{
    margin-bottom: 15px;
}
            
.nav-item-icon{
    display:inline-block;
    width: 48px;
    height: 48px;
    margin-right: 5px;
}

.blog-item-list{
    margin-bottom: 100px
}

.main{
    overflow: auto;

    flex:1;
    display: flex;
    flex-direction: column;
}

.main-header{
    position: relative;

    height:200px;
    padding: 40px 30px 0 30px;
    box-sizing: border-box;

    font-size: 30px;
    font-weight: 800;
    color: #fff;

    background-image:  url('../src/assets/bg.png');
}

.title{
    margin-bottom: 30px;
}

.my-tag-item{
    display: inline-block;

    font-style: italic;
    margin-right: 20px;
}

.mask{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;

    background-color: rgba(255,255,255,0.5)
}

.ipt{
    float: right;

    width:30%;
    height: 30px;
    margin-right: 20px;
    border-radius: 10px;
    box-sizing: border-box;

    line-height: 30px;
}

.ic_search{
    float: right;
}

.main-content{
    flex:1;

    padding: 50px 30px 0 30px;
    box-sizing: border-box;
}

</style>