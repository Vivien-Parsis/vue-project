<script setup>
    import { router } from '../../router';
    import { useLoginStore } from '../../store/login.store'
    import { useLoadingStore } from '../../store/loading.store'
    const loadingStore = useLoadingStore()
    const loginStore = useLoginStore()
    loadingStore.setLoading(false)
    const formSignUp = async (event) => {
        event.preventDefault()
        await loginStore.signUp(event.target.email.value, event.target.password.value)
        router.push({path:"/"})
    } 
</script>
<template>
    <form @submit="formSignUp">
        <input name="email" type="email" placeholder="inserer email..." required>
        <input name="password" type="password" placeholder="inserer mot de passe..." required>
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