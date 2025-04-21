<script setup>
import { onMounted, onBeforeMount, onBeforeUnmount, ref } from "vue";
import { useStore } from "vuex";
import AppFooter from "@/components/general/Footer.vue";
import Navbar from "@/components/general/NavbarSimple.vue";
import setTooltip from "@/assets/js/tooltip.js";
import { Modal } from 'bootstrap';

const body = document.getElementsByTagName("body")[0];

const store = useStore();

const sidebarMinimize = () => store.commit("sidebarMinimize");
const toggleConfigurator = () => store.commit("toggleConfigurator");

const sorteos = ref([
  {
    id: 1,
    titulo: "Gran Sorteo Nacional",
    fecha: "2024-03-25",
    estado: "Activo",
    premio: "$1,000,000"
  },
  {
    id: 2,
    titulo: "Sorteo Especial Semanal",
    fecha: "2024-03-28",
    estado: "Próximo",
    premio: "$500,000"
  },
  {
    id: 3,
    titulo: "Sorteo Express",
    fecha: "2024-03-30",
    estado: "Activo",
    premio: "$250,000"
  },
  {
    id: 4,
    titulo: "Mega Sorteo Premium",
    fecha: "2024-04-01",
    estado: "Próximo",
    premio: "$2,000,000"
  },
  {
    id: 5,
    titulo: "Sorteo Relámpago",
    fecha: "2024-04-05",
    estado: "Activo",
    premio: "$750,000"
  },
  {
    id: 6,
    titulo: "Super Sorteo Mensual",
    fecha: "2024-04-15",
    estado: "Próximo",
    premio: "$1,500,000"
  }
]);

const bancoSeleccionado = ref(null);
const bancos = ref([
  {
    id: 1,
    nombre: 'Banco de Venezuela',
    cuenta: '0102-0000-00-0000000000',
    tipoCuenta: 'Corriente',
    titular: 'Nombre de la Empresa',
    rif: 'J-00000000-0'
  },
  {
    id: 2,
    nombre: 'Banesco',
    cuenta: '0134-0000-00-0000000000',
    tipoCuenta: 'Corriente',
    titular: 'Nombre de la Empresa',
    rif: 'J-00000000-0'
  },
  // Añade más bancos según necesites
]);

const verificacionForm = ref({
  numeroBoleto: '',
  sorteoId: ''
});

const estadoBoleto = ref(null);

const verificarBoleto = () => {
  // Simulación de verificación - Aquí irá la lógica real de verificación
  estadoBoleto.value = {
    numeroBoleto: verificacionForm.value.numeroBoleto,
    sorteo: sorteos.value.find(s => s.id === parseInt(verificacionForm.value.sorteoId)),
    estado: 'Pagado', // Esto vendrá de tu backend
    fechaCompra: '2024-03-25',
    comprador: 'Juan Pérez',
    monto: '$10.00'
  };
  
  const modal = new Modal(document.getElementById('verificacionModal'));
  modal.show();
};

const abrirPopup = (banco) => {
  bancoSeleccionado.value = banco;
  const modal = new Modal(document.getElementById('bancoModal'));
  modal.show();
};

const showDetails = ref(false);

const toggleDetails = () => {
  showDetails.value = !showDetails.value;
};

onMounted(() => {
  setTooltip();
});

onBeforeMount(() => {
  store.state.layout = "vr";
  store.state.showNavbar = false;
  store.state.showSidenav = false;
  store.state.showFooter = false;
  body.classList.add("virtual-reality");
  store.state.isTransparent = "bg-white";
});
onBeforeUnmount(() => {
  store.state.layout = "default";
  store.state.showNavbar = true;
  store.state.showSidenav = true;
  store.state.showFooter = true;
  body.classList.remove("virtual-reality");

  if (store.state.isPinned === false) {
    const sidenav_show = document.querySelector(".g-sidenav-show");
    sidenav_show.classList.remove("g-sidenav-hidden");
    sidenav_show.classList.add("g-sidenav-pinned");
    store.state.isPinned = true;
  }
  store.state.isTransparent = "bg-transparent";
});
</script>

<template>
  <!---NAVBAR--->
  <navbar
      :minNav="sidebarMinimize"
      :toggle="toggleConfigurator"
      class="header-navbar"
  />

  <div
    class="mx-3 mt-4 border-radius-xl position-relative section-container"
  >
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div
            class="sorteo-image"
            :style="{
              backgroundImage: 'url(' + require('@/assets/img/vr-bg.jpg') + ')',
              backgroundSize: 'cover'
            }"
          ></div>
        </div>
        <div class="col-md-6 d-flex flex-column justify-content-center">
          <div class="sorteo-details">
            <h3 class="sorteo-title">GRAN RIFA ESPECIAL</h3>
            <p class="sorteo-description" style="font-weight: bold; color: #17ad37;">¡Participa y gana increíbles premios!</p>
            <h4 style="color: #17ad37;">Detalles de la Rifa</h4>
            <ul>
              <li>Valor del boleto: <strong>$3 🇺🇸</strong> (Debes comprar mínimo 2 boletos para poder participar)</li>
              <li>Nota importante: <strong>¡Atención!</strong> El sorteo de la rifa se realizará solo después de que se hayan vendido todos los números. Estaremos informando la fecha del sorteo tan pronto se completen las ventas.</li>
            </ul>
            <button class="btn bg-success text-white mt-3" @click="toggleDetails">Ver Detalles</button>
            <div v-if="showDetails" class="details-content">
              <h4 style="color: #17ad37;">Premios</h4>
              <ol style="font-weight: bold;">
                <li>Primer Premio: <span style="color: #ff5733;">Moto Bera Marca BRF 150cc</span></li>
                <li>Segundo Premio: <span style="color: #ff5733;">250$ USD en efectivo</span></li>
                <li>Tercer Premio: <span style="color: #ff5733;">Un Teléfono Android, Marca Redmi 14C - 8GB/256GB</span></li>
                <li>Cuarto Premio: <span style="color: #ff5733;">Un TV Smart 43" Marca COBY HD</span></li>
                <li>Premio Especial: <span style="color: #ff5733;">Un Teléfono Android Marca Tecno Spark 30 - 16GB/256GB</span> para quien compre más boletos (Válido a partir de 5 boletos en adelante)</li>
              </ol>
              <p><strong style="color: #17ad37;">Fecha del sorteo:</strong> <span style="font-weight: bold;">Fecha (Pendiente)</span></p>
              <p>Por las últimas 3 cifras y La Moto por las primeras 3 cifras de la lotería Super Gana (4to premio 1:00pm /3 últimas cifras) - (3er premio 4:00pm /3 últimas cifras) - (2do premio 10:00pm /3 últimas cifras) y (1er premio 10:00pm /3 primeras cifras)</p>
              <p><strong style="color: #17ad37;">HORA VENEZUELA 🇻🇪⏰</strong></p>
              <p>¡Participa desde cualquier lugar! No te pierdas esta oportunidad de ganar increíbles premios. ¡Compra tus boletos ahora!</p>
              <p><strong>Rifas Optimus JMT</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    class="mx-3 mt-4 border-radius-xl position-relative section-container"
  >
    <div class="container">
      <div class="section-header">
        <h3 class="text-gradient text-success mb-4">
          <i class="fas fa-ticket-alt me-2"></i>Sorteos Disponibles
        </h3>
        <hr class="horizontal dark mb-4">
      </div>
      <div class="row justify-content-center">
        <div v-for="sorteo in sorteos" :key="sorteo.id" class="col-md-4 col-sm-6 mb-4">
          <div class="card">
            <div class="card-img-placeholder bg-gradient-success">
              <i class="fas fa-ticket-alt placeholder-icon"></i>
            </div>
            <div class="card-body">
              <h5 class="card-title fw-bold">{{ sorteo.titulo }}</h5>
              <div class="card-text">
                <p class="mb-2"><i class="fas fa-calendar-alt me-2"></i><strong>Fecha:</strong> {{ sorteo.fecha }}</p>
                <p class="mb-2">
                  <i class="fas fa-info-circle me-2"></i><strong>Estado:</strong> 
                  <span :class="sorteo.estado === 'Activo' ? 'badge bg-success' : 'badge bg-warning'">
                    {{ sorteo.estado }}
                  </span>
                </p>
                <p class="mb-3"><i class="fas fa-trophy me-2"></i><strong>Premio:</strong> {{ sorteo.premio }}</p>
              </div>
              <button class="btn bg-success text-white w-100 mb-0 hover-overlay">
                Ver detalles <i class="fas fa-arrow-right ms-2"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    class="mx-3 mt-4 border-radius-xl position-relative section-container"
  >
    <div class="container">
      <div class="section-header">
        <h3 class="text-gradient text-success mb-4">
          <i class="fas fa-search me-2"></i>Verificación de Boletos
        </h3>
        <hr class="horizontal dark mb-4">
      </div>
      
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card">
            <div class="card-body">
              <form @submit.prevent="verificarBoleto" class="verificacion-form">
                <div class="mb-4">
                  <label for="numeroBoleto" class="form-label">Número de Boleto</label>
                  <input
                    type="text"
                    class="form-control"
                    id="numeroBoleto"
                    v-model="verificacionForm.numeroBoleto"
                    placeholder="Ingrese el número de boleto"
                    required
                  >
                </div>
                
                <div class="mb-4">
                  <label for="sorteo" class="form-label">Seleccione el Sorteo</label>
                  <select
                    class="form-select"
                    id="sorteo"
                    v-model="verificacionForm.sorteoId"
                    required
                  >
                    <option value="">Seleccione un sorteo</option>
                    <option 
                      v-for="sorteo in sorteos" 
                      :key="sorteo.id" 
                      :value="sorteo.id"
                    >
                      {{ sorteo.titulo }}
                    </option>
                  </select>
                </div>
                
                <button 
                  type="submit" 
                  class="btn bg-success text-white w-100 mb-0 hover-overlay"
                >
                  Verificar Boleto <i class="fas fa-search ms-2"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal de Resultado -->
    <div class="modal fade" id="verificacionModal" tabindex="-1" aria-labelledby="verificacionModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="verificacionModalLabel">
              Información del Boleto
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body" v-if="estadoBoleto">
            <div class="verificacion-info">
              <div class="estado-icon-container mb-3">
                <i class="fas fa-ticket-alt estado-icon-large"></i>
              </div>
              <div class="info-grid">
                <p><strong>Número de Boleto:</strong> {{ estadoBoleto.numeroBoleto }}</p>
                <p><strong>Sorteo:</strong> {{ estadoBoleto.sorteo?.titulo }}</p>
                <p>
                  <strong>Estado:</strong> 
                  <span :class="estadoBoleto.estado === 'Pagado' ? 'badge bg-success' : 'badge bg-warning'">
                    {{ estadoBoleto.estado }}
                  </span>
                </p>
                <p><strong>Fecha de Compra:</strong> {{ estadoBoleto.fechaCompra }}</p>
                <p><strong>Comprador:</strong> {{ estadoBoleto.comprador }}</p>
                <p><strong>Monto:</strong> {{ estadoBoleto.monto }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--div class="parallax-section">
    <div class="parallax-background layer-1"></div>
    <div class="parallax-background layer-2"></div>
    <div class="parallax-background layer-3"></div>
    <div class="parallax-background layer-4"></div>
    <div class="parallax-content">
      <h2>Bienvenido a nuestra sección especial</h2>
      <p>Explora nuestras ofertas y promociones exclusivas.</p>
      <p>¡No te lo pierdas!</p>
      <p>Contenido adicional para apreciar el efecto parallax.</p>
      <p>Contenido adicional para apreciar el efecto parallax.</p>
      <p>Contenido adicional para apreciar el efecto parallax.</p>
      <p>Contenido adicional para apreciar el efecto parallax.</p>
      <p>Contenido adicional para apreciar el efecto parallax.</p>
      <p>Contenido adicional para apreciar el efecto parallax.</p>
      <p>Contenido adicional para apreciar el efecto parallax.</p>
      <p>Contenido adicional para apreciar el efecto parallax.</p>
      <p>Contenido adicional para apreciar el efecto parallax.</p>
      <p>Contenido adicional para apreciar el efecto parallax.</p>
      <p>Contenido adicional para apreciar el efecto parallax.</p>
      <p>Contenido adicional para apreciar el efecto parallax.</p>
    </div>
  </div-->

  <div
    class="mx-3 mt-4 border-radius-xl position-relative section-container"
  >
    <div class="container">
      <div class="section-header">
        <h3 class="text-gradient text-success mb-4">
          <i class="fas fa-university me-2"></i>Métodos de Pago Disponibles
        </h3>
        <hr class="horizontal dark mb-4">
      </div>
      <div class="row justify-content-center">
        <div v-for="banco in bancos" :key="banco.id" class="col-auto mb-3">
          <button 
            class="banco-btn" 
            @click="abrirPopup(banco)"
            :title="banco.nombre"
          >
            <i class="fas fa-university banco-icon"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- Modal/Popup -->
    <div class="modal fade" id="bancoModal" tabindex="-1" aria-labelledby="bancoModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="bancoModalLabel">{{ bancoSeleccionado?.nombre }}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div v-if="bancoSeleccionado" class="banco-info">
              <div class="banco-icon-container mb-3">
                <i class="fas fa-university banco-icon-large"></i>
              </div>
              <p><strong>Número de Cuenta:</strong> {{ bancoSeleccionado.cuenta }}</p>
              <p><strong>Tipo de Cuenta:</strong> {{ bancoSeleccionado.tipoCuenta }}</p>
              <p><strong>Titular:</strong> {{ bancoSeleccionado.titular }}</p>
              <p><strong>RIF:</strong> {{ bancoSeleccionado.rif }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <app-footer class="py-3 bg-white border-radius-lg" />
</template>

<style scoped>
.card {
  transition: all 0.3s ease;
  border: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
}

.card-img-top {
  height: 160px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.card:hover .card-img-top {
  transform: scale(1.05);
}

.card-title {
  color: #344767;
  font-size: 1.25rem;
  margin-bottom: 1rem;
}

.badge {
  padding: 0.5em 0.8em;
  font-weight: 500;
}

.hover-overlay:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

.btn {
  transition: all 0.3s ease;
}

.card-text i {
  color: #344767;
  width: 20px;
}

.card-img-placeholder {
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(310deg, #17ad37 0%, #98ec2d 100%);
}

.placeholder-icon {
  font-size: 3rem;
  color: rgba(255, 255, 255, 0.8);
}

.banco-btn {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 2px solid #e9ecef;
  background: linear-gradient(310deg, #17ad37 0%, #98ec2d 100%);
  padding: 10px;
  margin: 0 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.banco-btn:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  border-color: #ffffff;
}

.banco-icon {
  font-size: 2rem;
  color: white;
}

.banco-icon-container {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(310deg, #17ad37 0%, #98ec2d 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.banco-icon-large {
  font-size: 3.5rem;
  color: white;
}

.banco-info {
  text-align: center;
}

.section-container {
  background-color: white;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.section-header {
  margin-bottom: 1.5rem;
}

.section-header h3 {
  font-weight: 600;
  font-size: 1.5rem;
}

.text-gradient.text-success {
  background-image: linear-gradient(310deg, #17ad37 0%, #98ec2d 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.horizontal.dark {
  height: 2px;
  background: linear-gradient(to right, #17ad37, #98ec2d);
  opacity: 0.3;
  border: 0;
}

.verificacion-form {
  padding: 1rem;
}

.form-control, .form-select {
  border: 1px solid #e9ecef;
  padding: 0.75rem;
  border-radius: 0.5rem;
  transition: all 0.2s ease;
}

.form-control:focus, .form-select:focus {
  border-color: #17ad37;
  box-shadow: 0 0 0 0.2rem rgba(23, 173, 55, 0.25);
}

.estado-icon-container {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(310deg, #17ad37 0%, #98ec2d 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.estado-icon-large {
  font-size: 3rem;
  color: white;
}

.verificacion-info {
  text-align: center;
}

.info-grid {
  display: grid;
  gap: 0.75rem;
  margin-top: 1.5rem;
}

.info-grid p {
  margin: 0;
  padding: 0.5rem;
  background-color: #f8f9fa;
  border-radius: 0.5rem;
}

@media (max-width: 992px) {
  .footer-section {
    text-align: center;
  }

  .footer-title {
    display: inline-block;
    border-bottom: none;
  }

  .footer-list li {
    text-align: left;
  }
}

.hero-content {
  padding: 5rem 1rem;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 1rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8px);
}

.main-title {
  font-size: 4.5rem;
  font-weight: 800;
  margin-bottom: 2.5rem;
  background: linear-gradient(310deg, #17ad37, #98ec2d, #17ad37);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient 3s ease infinite;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  line-height: 1.2;
}

.subtitle {
  font-size: 2rem;
  color: #344767;
  margin-bottom: 1.5rem;
  opacity: 0;
  transform: translateY(20px);
  font-weight: 600;
}

.fade-in-up {
  animation: fadeInUp 0.8s ease forwards;
}

.delay-1 {
  animation-delay: 0.4s;
}

.delay-2 {
  animation-delay: 0.8s;
}

.pulse-button {
  animation: pulse 2s infinite;
  box-shadow: 0 0 0 0 rgba(23, 173, 55, 0.7);
  transform: scale(1);
  font-size: 1.25rem;
  font-weight: 600;
  padding: 1rem 2rem;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  transition: all 0.3s ease;
}

.pulse-button:hover {
  background: #15a834 !important;
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 5px 15px rgba(23, 173, 55, 0.4);
}

.pulse-button i {
  font-size: 1.2rem;
  margin-left: 0.75rem !important;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(23, 173, 55, 0.7);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(23, 173, 55, 0);
  }
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(23, 173, 55, 0);
  }
}

@media (max-width: 768px) {
  .main-title {
    font-size: 3rem;
  }
  
  .subtitle {
    font-size: 1.5rem;
  }

  .pulse-button {
    font-size: 1.1rem;
    padding: 0.75rem 1.5rem;
  }
}

.header-wrapper {
  position: relative;
  background: linear-gradient(150deg, #17ad37 0%, #98ec2d 100%);
  padding: 1rem 0;
  margin: 1rem 1.5rem;
  border-radius: 1rem;
  overflow: hidden;
}

.header-navbar {
  position: relative;
  z-index: 3;
}

.header-content {
  position: relative;
  padding: 2rem 1rem;
  text-align: center;
  z-index: 2;
  margin: 20px;
}

.lottery-balls {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
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

.ball-1 { animation-delay: 0s; }
.ball-2 { animation-delay: 0.5s; }
.ball-3 { animation-delay: 1s; }
.ball-4 { animation-delay: 1.5s; }

.brand-title {
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 2px;
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
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0;
  opacity: 0.9;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
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

/* Efecto de partículas en el fondo */
.header-wrapper::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at center, transparent 0%, rgba(255,255,255,0.1) 100%);
  animation: sparkle 4s ease-in-out infinite;
}

@keyframes sparkle {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}

/* Responsive */
@media (max-width: 768px) {
  .brand-title {
    font-size: 2.5rem;
  }

  .header-subtitle {
    font-size: 1.2rem;
  }

  .ball {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }

  .lottery-balls {
    gap: 1rem;
  }
}

/* Nueva sección con efecto parallax */
.parallax-section {
  position: relative;
  height: 1000px; /* Aumentar la altura de la sección parallax a 1000px */
  overflow: hidden;
}

.parallax-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, rgba(23, 173, 55, 0.8), rgba(152, 236, 45, 0.8)); /* Gradiente de fondo */
  z-index: 1; /* Asegúrate de que esté detrás del contenido */
}

/* Capas de fondo con diferentes velocidades */
.layer-1 {
  transform: translateZ(-1px) scale(1.5); /* Fondo más lejano */
}

.layer-2 {
  transform: translateZ(-0.5px) scale(1.2); /* Fondo intermedio */
}

.layer-3 {
  transform: translateZ(0px) scale(1); /* Fondo más cercano */
}

.layer-4 {
  transform: translateZ(0.5px) scale(0.8); /* Nueva capa más cercana */
}

.parallax-content {
  position: relative;
  z-index: 2; /* Asegúrate de que el contenido esté por encima del fondo */
  color: white;
  text-align: center;
  padding: 20px;
}
</style>
