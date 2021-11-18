// HOC-Component를 사용하는 경우 삭제될 파일 (CreateListView.js)

<template>
    <div>
        <ListItem></ListItem>
    </div>
</template>
<script>
// import { mapStatem, mapGetters } from 'vuex';
import ListItem from '../components/ListItem.vue';
import ListMixin from '../mixins/ListMixin.js';

export default {
    components: {
        ListItem,
    },
    mixins: [ListMixin],
    computed: {
        // #3 배열
        // ...mapGetters([
        //     "fetchedAsk",
        // ])
       
       // #3 객체
        // ...mapGetters({
        //     askItems: "fetchedAsk",
        // })

        // #2
        // ...mapState({
        //     fetchedAsk: state => state.ask
        // })

        // #1
        // ask() {
        //     return this.$store.state.ask;
        // },
    },
    // created() {
    //     bus.$emit("start:spinner");
        
    //     // setTimeout(() => {
    //         this.$store.dispatch("FETCH_ASK")
    //             .then(() => {
    //                 console.log("fetched");
    //                 bus.$emit('end:spinner');
    //             })
    //             .catch((error) => {console.error(error)})
    //     // }, 3000)
    // }.
}
</script>
<style scoped>
     .page__wrapper {
        margin: 0;
        padding: 0;
    }

    .page__list {
        display: flex;
        list-style: none;
        align-items: center;
        border-bottom: 1px solid #eee;
    }

    .page__list__points {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80px;
        height: 60px;
        color: #42b883;
    }

    .page__list__title {
        margin: 0;
    }

    .page__list__info {
        color: #828282;
    }
</style>