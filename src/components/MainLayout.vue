<template>
    <ion-page>
			<ion-header :translucent="true">
				<ion-toolbar>
					<ion-grid>
						<ion-row>
							<ion-col size="2" v-if="isHomePage==false">
									<ion-button name="" @click="functions.goBack()" color="secondary">
										<ion-icon :icon="icons.backspaceOutline"></ion-icon> BACK
									</ion-button>
							</ion-col>
							<ion-col>
								<ion-title>Sample Apps</ion-title> 
							</ion-col>
						</ion-row>
					</ion-grid>
				</ion-toolbar>
			</ion-header>

			<ion-content>
				<div>
					<slot></slot>
				</div>
			</ion-content>
    </ion-page>
</template>
<script lang="ts">
	import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonGrid, IonRow, IonCol, IonButton, IonIcon } from "@ionic/vue";
	const components = {IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonGrid, IonRow, IonCol, IonButton, IonIcon};
	import { defineComponent, ref } from 'vue';
	import { useRoute, useRouter } from "vue-router";
	import { backspaceOutline } from "ionicons/icons";

	export default defineComponent({
		name: "MainLayout",
		components: components,

		setup(){
			const route = useRoute();
			const router = useRouter();
			const isHomePage = ref<boolean>(false);
			
			//Check Route
			const checkRoute = ()=>{
				if(route.fullPath == "/home" || route.fullPath == "/") isHomePage.value = true;
				console.log("Route", route.fullPath)
			};
			checkRoute();

			//Go Back
			const goBack = ()=>{ router.go(-1); }

			return{
				icons: {
					backspaceOutline
				},
				isHomePage,
				functions: {
					goBack
				}
			}
		}
	});
</script>