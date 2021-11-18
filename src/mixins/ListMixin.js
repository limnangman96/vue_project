import bus from '../utils/bus.js';

export default {
    // 재사용할 컴포넌트 옵션
    // created() {
    //     bus.$emit("start:spinner");
        
    //     // #1 실행순서
    //     this.$store.dispatch("FETCH_LIST", this.$route.name)
    //         // #5 실행순서
    //         .then(() => {
    //             bus.$emit('end:spinner');
    //         })
    //         .catch((error) => {console.error(error)})
    // },
    mounted() {
        // 인스턴스가 화면에 불려와 나타났을 때 완료되는 시점에서 실행되는 라이프사이클 훅
        bus.$emit('end:spinner');
    },
}