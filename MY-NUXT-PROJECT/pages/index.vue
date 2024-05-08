<template>
	<div class="main">
		<contentDoc class="mb-6 bg-amber-300 text-black rounded p-3"/>
		
		<Head>
			<Title>This is my title</Title>
			<Meta name="description" :content="title" />
			<Style type="text/css" children="body { background-color: green; }" />
		</Head>
		<h1>Main Page</h1>
		
		<!--<p class="text-4xl font-bold" :class="`${$route.meta.layout === 'custom' ? 'text-blue-500' : 'text-amber-300'}`">{{pending ? 'Loading...' : products}}</p>-->
		<p class="text-4xl font-bold" :class="`${$route.meta.layout === 'custom' ? 'text-blue-500' : 'text-amber-300'}`">{{pending ? 'Loading...' : productCount}}</p>
		<button @click="refresh">Refresh</button>
		<IconsBell/>
		
		<div class="">assets 폴더 소스 : 웹팩 빌드 시 모듈로 취급</div>
		<img src="../assets/images/1.jpg" alt="">
		
		<div class="mt-5">public 폴더 소스 : 웹팩 빌드 시 처리 과정X 그대로 복사되어 최종 결과물에 포함</div>
		<img src="/images/1.jpg" alt="">
	</div>
</template>
<script setup>
/*const { data: products, pending } = await useLazyFetch('/api/products');*/
const { data: productCount, pending } = await useAsyncData('products', () =>
	$fetch('/api/products')
);

// nuxt refresh
const refresh = () => refreshNuxtData('products');

// javascript로 가져오는 방법
/*console.log(toRaw(products.value));*/


definePageMeta({
	middleware: 'auth',
})

/* composable 사용 시 */
/*const { sayHello } = useUtils();
sayHello();*/

/* plugins 사용 시 */
//const { $sayHello } = useNuxtApp();
console.log(useNuxtApp());
//$sayHello('Guillaume');

const response = await $fetch('/api/hello');
console.log(response);

// 특정 페이지에 SEO 추가하는 방법
useHead({
	title: 'This is my homepage for Nuxt course',
	meta: [
		{ name: 'description', content: 'Page where you are going to find everything about this course of Nuxt.' }
	],
	bodyAttrs: {
		class: 'test'
	},
	script: [ { innerHTML: 'console.log(\'Hello index~~~\')' } ]
})

//
const title = ref("this is my dynamic title")
</script>
