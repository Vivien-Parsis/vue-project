<script setup>
    import { router } from '../../router';
    import { useLoginStore } from '../../store/login.store'
    import { useLoadingStore } from '../../store/loading.store'
    const loadingStore = useLoadingStore()
    const loginStore = useLoginStore()
    loadingStore.setLoading(false)
    const formSignIn = async (event) => {
        event.preventDefault()
        await loginStore.signIn(event.target.email.value, event.target.password.value)
        if(loginStore.isSign()){
            router.push({path:"/"})
        }
    } 
</script>
<template>
    <form @submit="formSignIn">
        <input name="email" type="email" placeholder="inserer email..." required autocomplete="false">
        <input name="password" type="password" placeholder="inserer mot de passe..." required autocomplete="false">
        <input type="submit" value="se connecter">
    </form>
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
</style>