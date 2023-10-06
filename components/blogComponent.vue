<template>
    <h1> blogs</h1>
    <div v-for="blog in blogs" :key="blog.id">
      <!-- <router-link :to="{name: 'blogDetails', params:{id:blog.id}}"> 
          </router-link> -->
  
        <v-card class="mx-auto" max-width="344">
          <v-img :src="blog.img" height="200px" cover></v-img>
        <v-card-title>{{ blog.title }} {{ blog.id }}</v-card-title>
        <v-card-subtitle>{{ blog.subtitle}}</v-card-subtitle>
        <v-card-actions>
          <nuxt-link :to="{ name: 'blogdetail-id', params: { id: blog.id } }">Check details</nuxt-link>

        <v-spacer></v-spacer>
          <v-btn
            :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
            @click="show = !show"
          ></v-btn>
        </v-card-actions>
    
        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>
    
            <v-card-text> {{ blog.description }}   </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
      
    </div>
  
    </template>
    <script>
      export default {
        data: () => ({
          show: false,
          return:{
            blogs:[]
          }
        }),
        mounted()
        {
          fetch("http://localhost:3000/blogs")
          .then((response)=>response.json())
          .then(data=>this.blogs = data)
          .catch(error=> console.log(error.message))
        }
      }
    </script>