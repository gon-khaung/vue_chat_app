<template>
    <div class="chat container">
        <h2 class="center teal-text">Furious Fighter Group Chat</h2>
        <div class="card">
            <div class="card-content">
                <ul class="messages" v-chat-scroll>
                    <li v-for="message in messages" :key="message.id">
                        <span class="teal-text">{{message.name}} -> </span>
                        <span class="grey-text text-darken-3">{{message.content}}</span>    
                        <span class="grey-text time">{{message.timestamp}}</span>  
                    </li>
                </ul>
            </div>
            <div class="card-action">
                <new-message :name="name" />
            </div>
        </div>
        
    </div>
</template>
<script>
import NewMessage from '@/components/NewMessage.vue'
import db from '@/firebase/init';
import moment from 'moment'
export default {
    name: 'Chat',
    components:{
        'new-message':NewMessage,
    },
    props: ['name'],
    data(){
        return{
            messages:[],
        }
    },
    created(){
        let ref = db.collection('messages').orderBy('timestamp')

        ref.onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                if(change.type == 'added'){
                    let doc = change.doc;
                    this.messages.push({
                        id: doc.id,
                        name: doc.data().name,
                        content: doc.data().content,
                        timestamp: moment(doc.data().timestamp).fromNow(),
                    })
                }
            });
        })
        // console.log(this.messages)
    }
}
</script>
<style>
.chat h2{
    font-size: 2em;
    margin-bottom: 40px;
}
.chat span{
    font-size:1.2em;
}
.chat .time{
    display:block;
    font-size:0.8em;
}
.messages{
    max-height:300px;
    overflow:auto;
}
.messages::-webkit-scrollbar{
    width:3px;
}
.messages::-webkit-scrollbar-track{
    background: #ddd;
}
.messages::-webkit-slider-thumb{
    background:#aaa;
}
</style>