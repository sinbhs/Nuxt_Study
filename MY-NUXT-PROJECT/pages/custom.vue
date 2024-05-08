<template>
	<h1 class="custom-page">Custom Page</h1>
</template>
<script setup>
/*const sayHello = () => console.log("Goodbye");*/
const {sayHello} = useUtils();
sayHello();
definePageMeta({
	layout: "custom",
})
useSeoMeta({
	title: 'Custom',
})
</script>