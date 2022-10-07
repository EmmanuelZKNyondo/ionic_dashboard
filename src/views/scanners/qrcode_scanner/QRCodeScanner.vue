<template>
	<MainLayout>
		
	</MainLayout>
</template>
<script lang="ts">
	import MainLayout from '@/components/MainLayout.vue';
	const components = {MainLayout};
	import { defineComponent } from 'vue';

	export default defineComponent({
		name: "QRCodeScanner",
		components: components
	});
</script>