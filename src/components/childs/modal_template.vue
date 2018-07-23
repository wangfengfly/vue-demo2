<template>
  <transition name="modal-toggle">
    <div class="modal" v-show="myvisible">
      <button class="modal__close" @click="close">X</button>
      <div class="modal__body"> <h1>Modal</h1> <slot>这是一个Modal，是否需要添加新的内容?</slot> </div>
      <div class="modal__actions"> <slot name="actions"> <button @click="close">关闭</button> </slot> </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ['visible'],
  data () {
    return {
      myvisible: false
    }
  },
  methods: {
    close: function () {
      this.myvisible = false
    }
  },
  mounted () {
    this.myvisible = this.visible
  }
}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Montserrat);

$colour:hsla(350,100%,25%,1);
$grey:desaturate($colour,90%);

body {
  background:lighten($grey,30%);
  background-image:
    linear-gradient(40deg,transparentize($grey,0.95),transparentize($colour,0.95)),

    linear-gradient(135deg,
    lighten($grey,18%) 0%,
    lighten($grey,18%) 10%,
    lighten($grey,25%) 11%,
    lighten($grey,25%) 40%,
    lighten($grey,35%) 41%,
    lighten($grey,35%) 50%,
    lighten($grey,18%) 51%,
    lighten($grey,18%) 60%,
    lighten($grey,25%) 61%,
    lighten($grey,25%) 90%,
    lighten($grey,35%) 91%)
;
  background-size:7px 7px, 4px 4px;
  font-family: montserrat;
}

html,body {
  width: 100vw;
  height: 100vh;
}
h1 {
  margin: 0 0 15px;
}
.modal {
  background: white;
  display: flex;
  flex-direction: column;
  padding: 40px 40px 20px 40px;
  width: 300px;
  margin: 10px auto;
  transform-origin: top center;
  position: relative;
}
.modal-toggle-enter-active,
.modal-toggle-leave-active {
  transform: scale(1);
  transition: transform 0.3s;
}

.modal-toggle-enter,
.modal-toggle-leave-to {
  transform: scale(0);
}
.modal__actions {
  padding: 13px 26px;
  border-top: 1px solid #efefef;
  text-align: center;
}
.modal__body {
  padding: 0 0 15px;
}
.modal__close {
  position: absolute;
  top: -15px;
  right: -15px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin: 0;
  min-width: 40px;
}
.actions {
  text-align: center;
}
button {
  border: none;
  background: #123456;
  color: #FFFFFF;
  cursor: pointer;
  padding: 10px;
  border-radius: 4px;
  margin: 10px auto 0 auto;
  display: inline-block;
  outline: none;
  min-width: 60px;
}

</style>
