// HOC-Component를 사용하는 경우 삭제될 파일 (CreateListView.js)

<template lang="">
    <div>
        <ListItem></ListItem>
    </div>
</template>
<script>
    import ListItem from '../components/ListItem.vue';
    import ListMixin from '../mixins/ListMixin.js';

    export default {
        components: {
            ListItem,
        },
        mixins: [ListMixin],
        // created() {
        //     bus.$emit("start:spinner");
            
        //     // setTimeout(() => {
        //         this.$store.dispatch("FETCH_JOBS")
        //             .then(() => {
        //                 console.log("fetched");
        //                 bus.$emit('end:spinner');
        //             })
        //             .catch((error) => {console.error(error)})
        //     // }, 3000)
        // }
    }
</script>
