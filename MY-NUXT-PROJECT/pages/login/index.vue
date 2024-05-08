<template>
	<div class="login">
		<h1>Login</h1>
	</div>
</template>
<script setup>
useSeoMeta({
	title: 'login',
})
definePageMeta({
	layout: "custom",
	layoutTransition: {
		name: 'slide-in'
	}
})

// 특정 페이지에 SEO 추가하는 방법
useHead({
	title: 'login page',
})
</script>
