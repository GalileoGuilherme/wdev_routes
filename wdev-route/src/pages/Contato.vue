<template>
    <main>
      <section class="cont">
          <h1>Contato</h1>
          <section class="contacts">

            <div class="contact" v-for="(contact, index) in contacts" :key="index">
                <div class="contact-title">{{ contact.title }}</div>
                <a :href="contact.link" target="_blank">{{ contact.label }}</a>


            </div>

          </section>
  
      </section>
    </main>
  </template>
  
  <script>
  import api from '../services/api.js';
  
  export default {
      data(){
          return{
          contacts : []
          }
      },
      mounted(){
          api.get('/contacts.json').then(response => {
              this.contacts = response.data;
          })
      }
  }
  </script>
  
  <style>
  
  main{
      align-items: center;
      
  }
  .contacts{
      margin-bottom: 40px;
      color: var(--color-text-dark);
      /* align-items: center; */
      /* align-content: center; */
  }
  .contact-title{
    font-weight: 600;
    font-size: 18px;
    /* margin-bottom: 10px; */
    /* padding: 10px 0; */
    
  }

  .contact a{
    color: var(--color-text-dark)
  }

  .contact{
    margin-bottom: 30px;
  }

  
  
  </style>