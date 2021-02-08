<template>
  <div id="app">
    <div id="mario-chat">
      <div id="chat-window">
        <div id="feedback">
          <p v-if="this.personTyping != ''"><em>{{this.personTyping}} is typing a message</em></p>
        </div>
        <div id="output">
            <ul>
              <li v-for="message in messageObj" v-bind:key="message.id">
                <div>
                  <p><strong>{{message.handle}} : </strong>{{message.message}}</p>
                </div>
              </li>
            </ul>
        </div>
      </div>
      <input v-model=handle type="text" placeholder="Handle" />
      <input v-on:keypress="broadcast" v-model=message type="text" placeholder="Message" />
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
      personTyping : ''
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
}

h2{
    font-size: 18px;
    padding: 10px 20px;
    color: #575ed8;
}

#mario-chat{
    max-width: 600px;
    margin: 30px auto;
    border: 1px solid #ddd;
    box-shadow: 1px 3px 5px rgba(0,0,0,0.05);
    border-radius: 2px;
}

#chat-window{
    height: 400px;
    overflow: auto;
    background: #f9f9f9;
}

#output p{
    padding: 14px 0px;
    margin: 0 20px;
    border-bottom: 1px solid #e9e9e9;
    color: #555;
}

#feedback p{
    color: #aaa;
    padding: 14px 0px;
    margin: 0 20px;
}

#output strong{
    color: #575ed8;
}

label{
    box-sizing: border-box;
    display: block;
    padding: 10px 20px;
}

input{
    padding: 10px 20px;
    box-sizing: border-box;
    background: #eee;
    border: 0;
    display: block;
    width: 100%;
    background: #fff;
    border-bottom: 1px solid #eee;
    font-family: Nunito;
    font-size: 16px;
}

button{
    background: #575ed8;
    color: #fff;
    font-size: 18px;
    border: 0;
    padding: 12px 0;
    width: 100%;
    border-radius: 0 0 2px 2px;
}
</style>
