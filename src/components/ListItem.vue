<template>
    <div>
         <ul class="page__wrapper">
            <li v-for="item in listItems" class="page__list">
                <div class="page__list__points">
                    {{ item.points || 0 }}
                </div>
                
                <div>
                    <!-- 타이틀 영역 -->
                    <p class="page__list__title">
                        <!-- <template>라는 가상의 태그를 넣어 vue 내부적으로 분기처리를 시킨다. -->
                        <template v-if="item.domain">
                            <a :href="item.url">{{ item.title }}</a>        
                        </template>

                        <template v-else>
                            <router-link :to="`item/${item.id}`">{{ item.title }}</router-link>       
                        </template>
                    </p>

                    <!-- 기타 정보 영역 -->
                    <small class="page__list__info">
                        {{ item.time_ago }} by 
                        <router-link :to="`/user/${item.user}`" v-if="item.user">{{ item.user }}</router-link>    
                        <a :href="`https://${item.domain}`" v-else>{{ item.domain }}</a> 
                    </small>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    computed: {
        listItems() {
            return this.$store.state.list;
        }
    },
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