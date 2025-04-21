<script setup>
import { useStore } from "vuex";
import { computed } from 'vue';

const store = useStore();
const titulo = computed(() => store.state.env.textLogo || process.env.VUE_APP_TEXT_LOGO);
const subtitulo = computed(() => store.state.env.textSubtitle || process.env.VUE_APP_TEXT_SUBTITLE);

const colorPrimary1 = computed(() => store.state.env.colorPrimary1 || process.env.VUE_APP_COLOR_PRIMARY_1);
const colorPrimary2 = computed(() => store.state.env.colorPrimary2 || process.env.VUE_APP_COLOR_PRIMARY_2);
const colorContrast = computed(() => store.state.env.colorContrast || process.env.VUE_APP_COLOR_CONSTRAST);
const colorText = computed(() => store.state.env.colorText || process.env.VUE_APP_COLOR_TEXT);
const colorLogo = computed(() => store.state.env.colorLogo || process.env.VUE_APP_COLOR_LOGO);

//const minimizeSidebar = () => store.commit("sidebarMinimize");
const toggleConfigurator = () => store.commit("toggleConfigurator");

</script>

<template>
  <nav
    class="navbar navbar-main navbar-expand-lg shadow-none border-radius-xl"
    v-bind="$attrs"
    id="navbarBlur"
    data-scroll="true"
    :style="`margin: 20px; background: linear-gradient(150deg, ${colorPrimary1} 0%, ${colorPrimary2} 100%) !important;`"
  >
    <div class="px-3 py-1 container-fluid">
      <div class="header-content">
        <div class="lottery-balls">
          <a 
            href="#sorteos" 
            class="ball ball-1" 
            data-bs-toggle="tooltip"
            data-bs-placement="top" 
            title="Sorteos"
            :style="`background: ${colorContrast}; color: ${colorText};`"
          >
            $
          </a>
          <a 
            href="#boletos" 
            class="ball ball-2" 
            data-bs-toggle="tooltip"
            data-bs-placement="top" 
            title="Boletos"
            :style="`background: ${colorContrast}; color: ${colorText};`"
          >
            <i class="fas fa-trophy"></i>
          </a>
          <a 
            href="#metodos_pagos" 
            class="ball ball-3" 
            data-bs-toggle="tooltip"
            data-bs-placement="top" 
            title="Métodos de Pago"
            :style="`background: ${colorContrast}; color: ${colorText};`"
          >
            <i class="fas fa-star"></i>
          </a>
          <a 
            href="#contactos" 
            class="ball ball-4" 
            data-bs-toggle="tooltip"
            data-bs-placement="top" 
            title="Contactos"
            :style="`background: ${colorContrast}; color: ${colorText};`"
          >
            <i class="fas fa-gift"></i>
          </a>
        </div>
        <h1 class="brand-title">
          <span 
            class="text-gradient" 
            :style="`background-image: linear-gradient(to right, ${colorContrast}, ${colorLogo});`"
          >{{ titulo.slice(0, 6) }}</span>
          <span 
            :style="`color: ${colorContrast};`"
          >{{ titulo.slice(6) }}</span>
        </h1>
        <p class="header-subtitle" :style="`color: ${colorContrast};`">{{subtitulo}}</p>
      </div>
      <ul class="navbar-nav justify-content-end">
        <li class="nav-item d-flex align-items-center">
          <router-link
            :to="{ name: 'Signin' }"
            class="px-0 nav-link font-weight-bold"
            target="_blank"
            title="Iniciar Sesión"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            :style="`color: ${colorContrast};`"
          >
            <i class="fa fa-user"></i>
          </router-link>
        </li>
        <!--li class="nav-item d-xl-none ps-3 d-flex align-items-center">
          <a
            href="#"
            @click="minimizeSidebar"
            class="p-0 nav-link"
            id="iconNavbarSidenav"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Minimizar/Maximizar"
            :style="`color: ${colorContrast};`"
          >
            <div class="sidenav-toggler-inner">
              <i class="sidenav-toggler-line bg-white"></i>
              <i class="sidenav-toggler-line bg-white"></i>
              <i class="sidenav-toggler-line bg-white"></i>
            </div>
          </a>
        </li-->
        <li class="px-3 nav-item d-flex align-items-center">
          <a class="p-0 nav-link text-white" @click="toggleConfigurator" data-bs-toggle="tooltip" data-bs-placement="top" title="Configuración">
            <i class="cursor-pointer fa fa-cog fixed-plugin-button-nav" :style="`color: ${colorContrast};`"></i>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.header-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 20px; /* Margen de 20px en todos los lados */
}

.lottery-balls {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.ball {
  width: 50px;
  height: 50px;
  /*background: white;*/
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  /*color: #17ad37;*/
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  animation: float 3s ease-in-out infinite;
}

.brand-title {
  font-size: 2.5rem; /* Ajusta el tamaño según sea necesario */
  font-weight: 800;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
}

.text-gradient {
  background-image: linear-gradient(to right, var(--color-contrast, #ffffff), var(--color-logo, #98ec2d));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
  display: inline-block;
}

.text-white {
  /*color: white;*/
}

.header-subtitle {
  /*color: white;*/
  font-size: 1.2rem;
  margin: 0;
}

/* Animación de flotación para las bolas */
@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}

.navbar {
  /*background: linear-gradient(150deg, #17ad37 0%, #98ec2d 100%); *//* Fondo del navbar */
  border-radius: 1rem; /* Bordes redondeados */
}
</style>