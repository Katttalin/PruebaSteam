<template>
    <nav>
        <ul>
            <li>
                <NuxtLink to="/">Home</NuxtLink>
                <Icon name="streamline-emojis:ant" size="3em"></Icon>
            </li>
            <li>
                <NuxtLink to="/about">About</NuxtLink>
                <Icon name="streamline-emojis:bird-2" size="3em"></Icon>
            </li>
            <li>
                <NuxtLink to="/users">Ususarios (Fetch)</NuxtLink>
            </li>
        </ul>
        <button
            class="user"
            @click="panelActive = !panelActive">U</button>
        <div
            class="panel"
            v-show="panelActive">
        </div>
    </nav>
</template>

<script setup>
    import { ref } from 'vue'
    const panelActive = ref(false)
</script>

<style lang="postcss">
    ul{
        @apply flex p-4;
        
        li{
            @apply p-4;
        }
    }
    nav{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        position: relative;
    }
    .user{
        background-color: aquamarine;
        border-radius: 100px;
        width: 40px;
        height: 40px;
    }
    .panel{
        background-color: aqua;
        height: 200px;
        width: 200px;
        position: absolute;
        right: 20px;
        top: 128px;
    }
</style>