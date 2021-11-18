// 하이오더 컴포넌트: 컴포넌트의 로직(코드)을 재사용하기 위한 고급 기술
import ListView from './ListView.vue';
import bus from '../utils/bus.js';

export default function CreateListView(name) {
    return {
        // //재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
        // // name: name, //AskView와 같이 하이오더 컴포넌트로 생성된(대체된) 원 컴포넌트
        // name: "HOC-Component",
        // created() {
        //     bus.$emit("start:spinner");
            
        //     this.$store.dispatch("FETCH_LIST", this.$route.name)
        //         .then(() => {
        //             console.log("fetched");
        //             bus.$emit('end:spinner');
        //         })
        //         .catch((error) => {console.error(error)})

        // },
        // render(createElement) {
        //     // import한 인자를 매개변수로 받는다.
        //     return createElement(ListView);
        // }
    }
}