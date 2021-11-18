<template lang="">
    <div class="user-container">
        <div>
            <i class="fas fa-user"></i>
        </div>

        <div class="user__description">
            <!-- <div>username : {{ info.id }}</div> -->
            <!-- 사용자컴포넌트 데이터 흐름처리 방법3 - slot 이용 -->
            <slot name="username">
                <!-- [상위 컴포넌트에서 정의할 영역] -->
            </slot>

            <div class="time">
                <!-- time: {{ info.created }} -->

                <slot name="time">
                    <!-- [상위 컴포넌트에서 정의할 영역] -->
                </slot>

                <slot name="karma">
                    <!-- [상위 컴포넌트에서 정의할 영역] -->
                </slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    // *** 사용자컴포넌트 데이터 흐름처리 방법2 - 부모 자식 props 전달
    props: {
        info: Object
    },
    // *** 사용자컴포넌트 데이터 흐름처리 방법1 - 자식요소에서 computed
    // computed: {
    //     userInfo() {
    //         return this.$store.state.user;
    //     }
    // },
}
</script>

<style scoped>
    .user-container {
        display: flex;
        align-items: center;
        padding: 0.5rem;
    }

    .fa-user {
        font-size: 2.5rem;
    }

    .user__description {
        padding-left: 8px;
    }

    .time {
        font-size: 0.7rem;
    } 
</style>