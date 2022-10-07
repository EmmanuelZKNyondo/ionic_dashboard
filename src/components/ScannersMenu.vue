<template>
	<div>
		<ion-header>
			<ion-toolbar>
				<ion-grid>
					<ion-row>
						<ion-col>
							<ion-icon :icon="qrCodeOutline"></ion-icon> SCANNERS
						</ion-col>
						<ion-col class="ion-text-end">
							<ion-icon :icon="closeCircle" class="icon-md close" @click="closeModal()"></ion-icon>
						</ion-col>
					</ion-row>
				</ion-grid>
			</ion-toolbar>
		</ion-header>
		<ion-content class="ion-modal-menu-content">
			<ion-grid>
				<ion-row>
					<ion-col>
						<DashboardCard cardTitle="QR CODE SCANNER" link="/scanners/qrcode-scanner"></DashboardCard>
					</ion-col>
				</ion-row>
			</ion-grid>
		</ion-content>
		<ion-footer>
			<ion-toolbar>
				Menu
			</ion-toolbar>
		</ion-footer>
	</div>
</template>
<script lang="ts">
	import { defineComponent } from 'vue';
	import { IonHeader, IonFooter, IonContent, IonIcon, IonToolbar, IonGrid, IonRow, IonCol} from "@ionic/vue";
	const components = {IonHeader, IonFooter, IonContent, IonIcon, IonToolbar, IonGrid, IonRow, IonCol, DashboardCard};
	import { qrCodeOutline, closeCircle } from "ionicons/icons";
import DashboardCard from './DashboardCard.vue';
import { modalController } from '@ionic/core';

	export default defineComponent({
    name: "ScannersMenu",
    components: components,

    setup() {
			//Close Modal
			const closeModal = ()=>{
				modalController.dismiss();
			};

			return {
				qrCodeOutline,
				closeModal,
				closeCircle
			};
    }
});
</script>