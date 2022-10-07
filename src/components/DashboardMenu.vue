<template>
    <ion-grid>
			<!--DASHBOARD MENU-->
			<ion-row>
				<ion-col size="3" size-lg="4" size-md="6" size-sm="6" size-xs="12">
					<router-link to="#">
						<ion-card class="card-icon-container" @click="popupMenu('scannersmenu')">
							<ion-card-content>
								<ion-icon class="card-icon" :icon="qrCodeOutline"></ion-icon>
								<br /><br />
								<ion-card-title> SCANNER APPS</ion-card-title>
							</ion-card-content>
						</ion-card>
					</router-link>
				</ion-col>
			</ion-row>
		</ion-grid>
</template>
<script lang="ts">
    import { IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonCardTitle, IonIcon, modalController } from '@ionic/vue';
		import ScannersMenu from './ScannersMenu.vue';
    const components = { IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonCardTitle, IonIcon, ScannersMenu};
    import { defineComponent } from 'vue';
    import { qrCodeOutline } from 'ionicons/icons';

    export default defineComponent({
       name: "DashboardMenu",
       components: components,
       setup(){
				//Click QRCODE MENU
				const popupMenu = async (componentName: any)=>{
					let component: any;
					if(componentName === 'scannersmenu') component = ScannersMenu; 

					const modal = await modalController.create({
						component:  component,
						cssClass: "ion-modal-fullscreen",
						componentProps: { componentName: componentName}
					});
					return modal.present()
				};

        return{
            qrCodeOutline,
						popupMenu
        }
       }
    })
</script>