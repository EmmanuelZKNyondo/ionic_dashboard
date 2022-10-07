<template>
  <MainLayout>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">My Sample Apps Dashboard</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <div>
        <DashboardMenu />
      </div>
    </ion-content>
  </MainLayout>
</template>

<script lang="ts">
  import MainLayout from '@/components/MainLayout.vue';
  import { IonContent, IonHeader, IonTitle, IonToolbar} from '@ionic/vue';
  import { defineComponent } from 'vue';
  import { qrCodeOutline } from 'ionicons/icons';
  import DashboardMenu from '@/components/DashboardMenu.vue';

  export default defineComponent({
    name: 'HomePage',
    components: {
      IonContent,
      IonHeader,
      IonTitle,
      IonToolbar,
      DashboardMenu,
      MainLayout
  }, 

    setup(){
      {
        return{
          qrCodeOutline
        }
      }
    }
  });
</script>

<style scoped>

</style>
