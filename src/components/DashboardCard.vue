<template>
	<router-link :to="link" @click="modalDismiss()">
		<ion-card class="card-icon-container">
			<ion-card-content>
				<ion-icon class="card-icon">C</ion-icon>
				<br /><br />
				<ion-card-title> {{ cardTitle }} </ion-card-title>
			</ion-card-content>
		</ion-card>
	</router-link>
</template>
<script lang="ts">
    import { modalController } from "@ionic/core";
import { IonCard, IonCardContent, IonIcon, IonCardTitle} from "@ionic/vue";
		const components = {IonCard, IonCardContent, IonIcon, IonCardTitle};
		import { defineComponent } from 'vue';

    export default defineComponent({
			name: "DashboardCard",
			components: components,
			props: {
				cardTitle: {
					type: String,
					required: true
				},
				link: {
					type: String,
					required: false,
					default: "#"
				}
			},

			setup(){
				const modalDismiss = ()=>{ 
					modalController.dismiss(); 
				};

				return{
					modalDismiss
				}
			}
    });
</script>