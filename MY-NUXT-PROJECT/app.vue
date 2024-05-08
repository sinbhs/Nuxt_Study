<template>
  <div>
	  <NuxtLayout>
		  <h1>{{ website.name }}</h1>
		  <p class="mb-3">{{ website.description }}</p>
		  <button class="px-4 py-2 font-semibold text-sm bg-white text-slate-700 border border-slate-300 rounded-md shadow-sm ring ring-offset-2 ring-offset-slate-50 ring-blue-300 dark:bg-slate-700 dark:text-slate-200 dark:ring-offset-slate-900 dark:border-transparent" @click="color === 'pink' ? color ='red' : color ='pink'">store data value change 버튼</button>
		  <br>
		  <br>
		  <br><button class="px-4 py-2 font-semibold text-sm bg-white text-slate-700 border border-slate-300 rounded-md shadow-sm ring ring-offset-2 ring-offset-slate-50 ring-blue-300 dark:bg-slate-700 dark:text-slate-200 dark:ring-offset-slate-900 dark:border-transparent" @click="`${$route.meta.layout === 'custom' ? setPageLayout('default') : setPageLayout('custom')}`">{{ $route.meta.layout === 'custom' ? 'Set Layout Default' : 'Set Layout Custom' }}</button>
		  <p class="mt-3">Current color: {{ color }}</p>
		  <Header/>
		  <NuxtPage />
	  </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
const website = useWebsiteStore()

await callOnce(website.fetch)
const color = useColor() // Same as useState('color')

const route = useRoute()
//console.log(route.meta.layout)

useHead({
	titleTemplate: (titleChunk) => {
		return titleChunk ? `${titleChunk} - Site Title` : 'Site Title';
	},
	bodyAttrs: {
		class: 'test'
	},
	script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
})

useSeoMeta({
	ogTitle: 'My Amazing Site',
	description: 'This is my amazing site, let me tell you all about it.',
	ogDescription: 'This is my amazing site, let me tell you all about it.',
	ogImage: 'https://example.com/image.png',
	twitterCard: 'summary_large_image',
})
</script>
<style>
.page-enter-active,
.page-leave-active {
	transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
	opacity: 0;
	filter: blur(1rem);
}
.layout-enter-active,
.layout-leave-active {
	transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
	opacity: 0;
	filter: blur(1rem);
}
.rotate-enter-active,
.rotate-leave-active {
	transition: all 0.4s;
}
.rotate-enter-from,
.rotate-leave-to {
	opacity: 0;
	transform: rotate3d(1, 1, 1, 15deg);
}
</style>