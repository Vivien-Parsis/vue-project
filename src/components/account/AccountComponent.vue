<script setup>
    import { router } from '../../router';
    import { useLoginStore } from '../../store/login.store'
    import { useLoadingStore } from '../../store/loading.store'
    import { storeToRefs } from 'pinia'
    const loadingStore = useLoadingStore()
    loadingStore.setLoading(false)
    const loginStore = useLoginStore()
    const user = loginStore.getUser()   
    const { signOut } = storeToRefs(loginStore) 
    const SignOut = async () => {
        loginStore.signOut()
        router.push({path:"/"})
    } 
</script>
<template>
    <h3>Mes infos</h3>
    <ul>
        <li>Email : {{ user.email ? user.email : "" }}</li>
    </ul>
    <button @click="SignOut()">Se deconnecter</button>
</template>
<style scoped>
    form{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        align-content: center;
    }
    ul{
        list-style: none;
    }
</style>