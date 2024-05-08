<script setup>
const route = useRoute();
/*const nuxt = useNuxtApp();

console.log(nuxt);*/

const { data: products, pending, error } = await useFetch('/api/products')

const id = computed(() => Number(route.params.id || 1))
const prev = computed(() => '/' + (id.value - 1))
const next = computed(() => '/' + (id.value + 1))
const canDecrease = computed(() => id.value > 1)
const canIncrease = computed(() => id.value < products.value.length)

// 특정 ID로 필터링된 제품 가져오기
const filteredProduct = products.value.find(product => product.id === parseInt(route.params.id));


definePageMeta({
	pageTransition: {
		name: 'slide-right',
		mode: 'out-in'
	},
	middleware (to, from) {
		if (to.meta.pageTransition && typeof to.meta.pageTransition !== 'boolean')
			to.meta.pageTransition.name = +to.params.id > +from.params.id ? 'slide-left' : 'slide-right'
	}
})
</script>
<template>
	<div>
		<div v-if="$route.params.id">
			<NuxtLink :to="'/events' + prev" :class="{'opacity-30 pointer-events-none cursor-default' : !canDecrease}">⬅️</NuxtLink> |
			<NuxtLink :to="'/events' + next" :class="{'opacity-30 pointer-events-none cursor-default': !canIncrease}">➡️</NuxtLink>
		</div>
		
		<div>event id: {{ $route.params.id }}</div>
		
		<div class="mt-3">
			<img :src="filteredProduct.image_url" alt="임시 이미지">
			<div>{{filteredProduct.name}}</div>
			<div>{{filteredProduct.description}}</div>
			<div>{{filteredProduct.price}}</div>
		</div>
	</div>
</template>
<style>
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
	transition: all 0.2s;
}
.slide-left-enter-from {
	opacity: 0;
	transform: translate(50px, 0);
}
.slide-left-leave-to {
	opacity: 0;
	transform: translate(-50px, 0);
}
.slide-right-enter-from {
	opacity: 0;
	transform: translate(-50px, 0);
}
.slide-right-leave-to {
	opacity: 0;
	transform: translate(50px, 0);
}
</style>