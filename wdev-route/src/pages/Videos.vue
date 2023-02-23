<template>
  <main>

    <section class="container">
       <h1>Vídeos</h1>
       <section class="videos">
        <div v-for="(video, index) in videos" class="video" :key="index">
            <a :href="video.link" target="_blank">
                <img :src="video.thumb" :alt="video.title">
                <div class="video-title">{{ video.title }}</div>            
            </a>
        </div>

       </section> 
    </section>

  </main>
</template>

<script>
import api from '../services/api'

export default {

    data(){
        return{
            videos: []
        }
    },
    mounted(){
        api.get('/videos.json').then(response => {
            this.videos = response.data;
        });
    }

}
</script>

<style scoped>

main{
    align-items: center;
    height: calc(100vh - 120px);
    display: flex;
    flex-direction: column;
}
.video{
    width: 80%;
    margin-bottom: 30px;
}
.video a{
    color: var(--color-text-dark);
    font-weight: 600;
    text-align: center;
}
.videos{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.video img{
    width: 50%;
    align-items: center;
    align-content: center;
}
h1{
    color: var(--color-text-title);
    margin: 40px 0;
    font-size: 30px;
}



</style>