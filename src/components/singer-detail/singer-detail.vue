<template>
  <!-- <transition name="slide"> -->
    <!-- <music-list ></music-list> -->
    <div class="top">ddfsdfdsfsdfdfdsf</div>
    <!-- sdfdsfdsfdsf -->
  <!-- </transition> -->
</template>

<script type="text/ecmascript-6">
  // import MusicList from 'components/music-list/music-list'
  // import {getSingerDetail} from 'api/singer'
  // import {ERR_OK} from 'api/config'
  // import {createSong} from 'common/js/song'
  // import {mapGetters} from 'vuex'

  // export default {
  //   computed: {
  //     title() {
  //       return this.singer.name
  //     },
  //     bgImage() {
  //       return this.singer.avatar
  //     },
  //     // ...mapGetters([
  //     //   'singer'
  //     // ])
  //   },
  //   data() {
  //     return {
  //       songs: []
  //     }
  //   },
  //   created() {
  //     this._getDetail()
  //     console.log(111);
  //   },
  //   methods: {
  //     _getDetail() {
  //       console.log(this.singer);
  //       // if (!this.singer.id) {
  //       //   // this.$router.push('/singer')
  //       //   return
  //       // }
  //       // getSingerDetail(this.singer.id).then((res) => {
  //       //   if (res.code === ERR_OK) {
  //       //     console.log(res.data.list);
  //       //   }
  //       // })
  //     },
  
  //   },
  //   components: {
  //     MusicList
  //   }
  // }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
    .top {
      width: 1000px;
      height: 500px
      background-color #fff
    }
</style>