<template>
  <div id="app">
    <div id="title">
      CHATROOM APP
    </div>
    <div v-if="!this.isHandleEntered" id="handle">
      <input id="handleinput"  v-on:keypress.enter="setHandle" v-model=handle type="text" placeholder="Please enter your name and press enter" />
    </div>
    
    <div v-if="this.isHandleEntered" id="mario-chat">
      <!-- Chat window html -->
      <div id="chat-window">
        <div id="feedback">
          <p v-if="this.personTyping != ''"><em>{{this.personTyping}} is typing a message</em></p>
        </div>
        <div id="output">
            <ul>
              <li v-for="message in messageObj" v-bind:key="message.id">
                <div id="listchat">
                  <strong>{{message.handle}}</strong> : {{message.message}}
                </div>
              </li>
            </ul>
        </div>
      </div>
      

      <div id="message">
          <input id="messageinput" v-on:keypress="broadcast" v-model=message type="text" placeholder="Message" />
      </div>
      <button v-on:click="send">SEND</button>
    </div>
  </div>
</template>

<script>
import io from 'socket.io-client';
export default {
  name: "App",
  components: {},
  data() {
    return {
      handle : '',
      message: '',
      socket : null,
      messageObj : [],
      personTyping : '',
      isHandleEntered: false
    };
  },
  methods: {
    send(){
      this.socket.emit('chat', {
        message : this.message,
        handle :this.handle
      })
    },
    broadcast(){
      this.socket.emit('typing',{
        handle : this.handle
      })
    },
    setHandle(){
      this.isHandleEntered = true;
    }
  },
  created() {
    this.socket = io.connect('http://localhost:3500');
  },
  mounted(){
    this.socket.on('chat', data => {
      this.personTyping = '';
      this.messageObj.push(data);
    });
    this.socket.on('typing',data=>{
      this.personTyping = data.handle;
      setTimeout(()=>{
        this.personTyping = '';
      },1000)
    })
  }
};
</script>

<style>
body{
    font-family: 'Nunito';
    background: #E4E4E3;
}

/* h2{
    font-size: 18px;
    padding: 10px 20px;
    color: #575ed8;
} */

#mario-chat{
    max-width: 600px;
    margin: 30px auto;
    border: 1px solid #ddd;
    box-shadow: 1px 3px 5px rgba(0,0,0,0.05);
    border-radius: 2px;
}

#chat-window{
    height: 600px;
    overflow: auto;
    background: #FFAC8F;
    border: 4px solid #FF723E;
}

/* #output p{
    padding: 14px 0px;
    margin: 0 20px;
    border-bottom: 1px solid #e9e9e9;
    color: #555;
} */

/* #feedback p{
    color: #aaa;
    padding: 14px 0px;
    margin: 0 20px;
} */

/* #output strong{
    color: #575ed8;
} */

/* label{
    box-sizing: border-box;
    display: block;
    padding: 10px 20px;
} */


#title{
  text-align: center;
  color: #161616;
  background: #CBCACA;
  padding: 4px 4px;
  font-size: 32px;
  font-weight:bolder;
  margin-bottom: 20px;
}

#handle  {
  margin: auto;
  background: #FBE9E7;
  border: 2px solid #C03800;
  margin: 0 auto;
  width: 50%;
  padding: 5px 5px;
}

 #handleinput{
  outline: none;
  border: 0;
  background: #FBE9E7;
  font-style: italic;  
  color: #161616;
  font-weight: bolder;
  width: 100%;
} 

#message{
  padding: 5px 5px;
  background: #FFCDBB;
  border: 4px solid #FFAC8F;
  margin-top: 4px;
}

#messageinput{
   outline: none;
   border: 0;
   font-style: italic;  
   font-weight: bolder;
   width: 100%;
   background: #FFCDBB;
   color: #161616;
}

button{
    background: #FF8B62;
    color: #161616;
    font-size: 18px;
    margin-top: 4px;
    border: 4px solid #FF5916;
    padding: 12px 0;
    width: 100%;
}

ul{
  list-style: none;
  padding: 4px;
}

#listchat{
  width: max-content;
  background: #FFCDBB;
  border: 2px solid #FF5916;
  padding: 2px 10px 2px 10px;
  margin-bottom: 5px;
  margin-left: 10px;
  border-radius: 20%;
}


</style>
