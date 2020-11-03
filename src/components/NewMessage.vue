<template>
    <div class="new-message">
        <form @submit.prevent="addMessage">
            <label for="new-message">New Message (enter to add):</label>
            <div class="send">
                <input type="text" name="new-message" v-model="newMessage">
            <span class="material-icons" v-on:click="addMessage">            
            send
            </span>
            </div>
            <p class="red-text" v-if="this.feedBack">{{this.feedBack}}</p>
        </form>
    </div>
</template>

<script>
import db from "@/firebase/init"
export default {
    name: 'NewMessage',
    props:['name'],
    data(){
        return{
            newMessage: null,
            feedBack: null
        }
    },
    methods:{
        addMessage:function(){
            if(this.newMessage){
                db.collection('messages').add({
                    content: this.newMessage,
                    name: this.name,
                    timestamp: Date.now(),
                }).catch( err => {
                    console.log(err)
                })
                this.newMessage = null;
                this.feedBack = null;
            } else {
                this.feedBack = 'You must enter somethind to send!'
            }
            
        }
    }
}
</script>
<style scoped>
.send{
    display:flex;
    justify-content: space-between;
}
.send span{
    /* border:1px solid red; */
    /* width: 50px; */
    padding-top: 20px;
}
</style>