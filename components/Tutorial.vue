<!-- Please remove this file from your project -->
<template>
  <div
  >
    <button type="button" @click="getToken">token</button>
    <div>{{token}}</div>
    <br><br>11
    <br><br>
    <div>{{err}}</div>
  </div>
</template>

<script>

export default {
  name: 'NuxtTutorial',
  data() {
    return {
      token: '',
      err: '',
    }
  },
  mounted() {
    // if (process.client) {
      this.$fire.messaging.onMessage((payload) => {
        console.log('Message received. ', payload);
        // ...
      })
    // }
  },
  methods: {
    async getToken() {
      try {
        // await this.$fire.auth.signInAnonymously()
        // console.log(this.$fire.$messaging.getToken())
        const data = await this.$fire.messaging.getToken({
          vapidKey: 'BJmpLFMCL1u3z776sQmGKRxenW9Twmc4KgQCSAyrGhY-bwUM5kfXJ730fjUTefvF4zrG-JwbxvkB3S7ysc8y7Fs'
        });
        this.token = data;
        console.log(this.token)
        // const message = {
        //   // ...
        //   webpush: {
        //     notification: {
        //       actions: [
        //         {
        //           action: 'randomName',
        //           title: 'Go to URL',
        //         },
        //       ],
        //     },
        //   },
        //   // ...
        // }
        // await this.$fire.$messaging.send(message)
      } catch (e) {
        this.err = e
      }

    }
  }
}
</script>
