<script setup>
//import { useStore } from "vuex";

//const store = useStore();
const titulo = "SorteaTelo";

/*const minimizeSidebar = () => store.commit("sidebarMinimize");
const toggleConfigurator = () => store.commit("toggleConfigurator");*/

</script>

<template>
  <nav
    class="navbar navbar-main navbar-expand-lg shadow-none border-radius-xl"
    v-bind="$attrs"
    id="navbarBlur"
    data-scroll="true"
    style="margin: 20px;"
  >
    <div class="px-3 py-1 container-fluid">
      <div class="header-content mx-auto">
        <div class="lottery-balls">
          <div class="ball ball-1">$</div>
          <div class="ball ball-2">
            <i class="fas fa-trophy"></i>
          </div>
          <div class="ball ball-3">
            <i class="fas fa-star"></i>
          </div>
          <div class="ball ball-4">
            <i class="fas fa-gift"></i>
          </div>
        </div>
        <h1 class="brand-title">
          <span class="text-gradient">{{ titulo.slice(0, 6) }}</span>
          <span class="text-white">{{ titulo.slice(6) }}</span>
        </h1>
        <p class="header-subtitle">Tu destino con la suerte</p>
      </div>
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
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: #17ad37;
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
  background: linear-gradient(to right, #ffffff, #98ec2d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.text-white {
  color: white;
}

.header-subtitle {
  color: white;
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
  background: linear-gradient(150deg, #17ad37 0%, #98ec2d 100%); /* Fondo del navbar */
  border-radius: 1rem; /* Bordes redondeados */
}
</style>