<template>
  <main>

    <section class="container">
       <h1>Vídeos</h1>
       <section class="videos">
        <div v-for="(video, index) in videos" class="video" :key="index">
            <a :href="video.link" target="_blank">
                <div><img :src="video.thumb" :alt="video.title"></div>
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
//     Esta é uma função mounted() definida no objeto Vue que é executada automaticamente quando o componente
// é montado. A função utiliza a biblioteca Axios para fazer uma solicitação GET para um arquivo videos.json no servidor.

// A função api.get() recebe a rota para o arquivo videos.json como argumento e retorna uma Promessa.
// Quando a Promessa é resolvida, o método .then() é chamado com o objeto de resposta da solicitação como argumento.

// Dentro do .then(), o conteúdo da resposta é atribuído à propriedade videos do componente usando this.videos = response.data.
// O objeto response contém uma propriedade data que contém os dados da resposta da solicitação, neste caso, um objeto JSON com
// informações sobre os vídeos.

// Em resumo, esta função é responsável por fazer uma solicitação HTTP para um arquivo JSON que contém informações
// sobre vídeos e atualizar o estado do componente com essas informações para que possam ser renderizadas na lista de vídeos.
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
    align-items: center;
    align-content: center;
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
    align-content: center;
    
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
@media (min-width: 700px) {
    .videos{
      flex-direction: column;
      align-items: flex-start;
      flex-wrap: wrap;
    }
    .video{
      align-items: center;
      align-content: center;
      width: 90%;
      margin-bottom: 90px;
    }
  }



</style>