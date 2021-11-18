<template lang="">
    <div>
        <!-- 사용자 정보 -->
        <UserProfile :info="fetchedItem">
            <router-link slot="username" :to="`/user/${fetchedItem.user}`">{{ fetchedItem.user }}</router-link>
            <template slot="time">{{ "Posted " + fetchedItem.time_ago }}</template>
        </UserProfile>

        <!-- 타이틀 영역 -->
        <section>
            <h2>{{ fetchedItem.title }}</h2>
        </section>

        <!-- 질문 내용 -->
        <section>
            <div v-html="fetchedItem.content"></div>
        </section>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import UserProfile from '../components/UserProfile.vue';

export default {
    components: {
        UserProfile,
    },
    computed: {
        ...mapGetters([
            "fetchedItem"
        ])
    },
    created() {
        const itemId = this.$route.params.id;
        this.$store.dispatch("FETCH_ITEM", itemId);
    }
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