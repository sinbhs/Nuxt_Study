<script setup lang="ts">
import {definePageMeta} from "#imports";
</script>

<template>
	<div class="default-layout text-white bg-slate-900 min-h-lvh w-1/2 mx-auto py-10 px-4">
		<div class="text-3xl font-bold">Default Layout</div>
		<slot />
	</div>
</template>