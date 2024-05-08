<script setup lang="ts">

</script>

<template>
	<div class="header my-4">
		<ul class="flex text-black">
			<li>
				<NuxtLink to="/" class="bg-sky-950 text-white rounded-md px-3 py-2 text-sm font-medium">Home</NuxtLink>
			</li>
			<li class="ml-1">
				<NuxtLink to="/events" class="bg-sky-950 text-white rounded-md px-3 py-2 text-sm font-medium">Events</NuxtLink>
			</li>
			<li class="ml-1">
				<NuxtLink to="/custom" class="bg-sky-950 text-white rounded-md px-3 py-2 text-sm font-medium">Custom</NuxtLink>
			</li>
			<li class="ml-1">
				<NuxtLink to="/login" class="bg-sky-950 text-white rounded-md px-3 py-2 text-sm font-medium">Login</NuxtLink>
			</li>
		</ul>
	</div>
</template>

<style scoped>

</style>