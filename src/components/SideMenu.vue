<template>
    <div>
        <!--ION SLIDE MENU-->
			<ion-menu content-id="main-content">
				<ion-header>
					<ion-toolbar>
						<ion-title>Menu Content</ion-title>
					</ion-toolbar>
				</ion-header>
				<ion-content class="ion-padding">
					<ion-menu-toggle>
						<ion-button>Click to close the menu</ion-button>
					</ion-menu-toggle>
					<ion-list>
						<ion-item>Dashboard</ion-item>
						<ion-item>QR Code Apps</ion-item>
					</ion-list>
				</ion-content>
			</ion-menu>
			<ion-page id="main-content">
				<ion-header>
					<ion-toolbar>
						<ion-title>Menu</ion-title>
					</ion-toolbar>
				</ion-header>
				<ion-content class="ion-padding">
					<ion-menu-toggle>
						<ion-button>MENU</ion-button>
					</ion-menu-toggle>
				</ion-content>
			</ion-page>
    </div>
</template>

<script lang="ts">
	import { IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonCardTitle, IonIcon, IonMenu, IonContent, IonMenuToggle, IonButton, IonHeader, IonToolbar, IonTitle, IonPage, IonList, IonItem } from '@ionic/vue';
import { defineComponent } from 'vue';
  const components = { IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonCardTitle, IonIcon, IonMenu, IonContent, IonMenuToggle, IonButton, IonHeader, IonToolbar, IonTitle, IonPage, IonList, IonItem };
	
	export default defineComponent({
		name: "SideMenu",
		components: components
	});
</script>