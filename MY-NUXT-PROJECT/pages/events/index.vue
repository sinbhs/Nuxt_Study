<template>
	<div class="event">
		<h1>Event List</h1>
		
		<p class="font-bold text-4xl" v-if="pending">Loading...</p>
		
		<ul class="grid grid-cols-2 gap-6" v-else>
			<li class="w-full relative" v-for="product in products">
				<img :src="product.image_url" :alt="product.image_url">
				<div>{{product.name}}</div>
				<div>{{product.description}}</div>
				<div>{{product.price}}$</div>
				<NuxtLink class="block w-full hover:underline absolute top-0 right-0 left-0 bottom-0" :to="'/events/' + product.id"><span class="absolute block h-px w-px overflow-hidden">이벤트 바로가기</span></NuxtLink>
			</li>
		</ul>
	</div>
</template>
<script setup>
const { data: products, pending } = await useLazyFetch('/api/products');

/*watch(products, (newProducts) => {
	// Because posts might start out null, you won't have access
	// to its contents immediately, but you can watch it.
	console.log('watch products',products.value, 'newProducts', newProducts);
})*/
/*const { data: products, pending } = await useLazyFetch('/api/products');
console.log(toRaw(products.data));*/

useSeoMeta({
	title: 'Events',
})
definePageMeta({
	pageTransition: {
		name: 'rotate'
	}
})
</script>
