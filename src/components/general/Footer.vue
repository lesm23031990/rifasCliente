<script setup>
import { ref } from "vue";

const contactInfo = ref({
  ubicacion: {
    direccion: "Av. Principal, Edificio Central, Piso 5",
    ciudad: "Caracas",
    estado: "Distrito Capital",
    coordenadas: {
      lat: "10.4806",
      lng: "-66.9036"
    }
  },
  redes: {
    instagram: "@sorteos_example",
    whatsapp: "+58 412-1234567",
    telegram: "@sorteos_support"
  },
  telefonos: [
    {
      tipo: "Principal",
      numero: "+58 212-1234567"
    },
    {
      tipo: "Soporte",
      numero: "+58 212-7654321"
    }
  ],
  responsables: [
    {
      nombre: "Carlos Rodríguez",
      cargo: "Director General",
      email: "carlos@example.com",
      telefono: "+58 424-1234567"
    },
    {
      nombre: "María González",
      cargo: "Atención al Cliente",
      email: "maria@example.com",
      telefono: "+58 414-7654321"
    }
  ],
  horario: {
    semana: "Lunes a Viernes: 8:00 AM - 5:00 PM",
    finde: "Sábados: 9:00 AM - 1:00 PM"
  }
});
</script>

<template>
  <footer>
    <!-- Sección de Contacto -->
    <div class="footer-contact">
      <div class="container py-5">
        <div class="row">
          <!-- Columna de Ubicación -->
          <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <div class="footer-section">
              <h5 class="footer-title">
                <i class="fas fa-map-marker-alt me-2"></i>Ubicación
              </h5>
              <ul class="footer-list">
                <li>
                  <i class="fas fa-building me-2"></i>
                  {{ contactInfo.ubicacion.direccion }}
                </li>
                <li>
                  <i class="fas fa-city me-2"></i>
                  {{ contactInfo.ubicacion.ciudad }}, {{ contactInfo.ubicacion.estado }}
                </li>
              </ul>
            </div>
          </div>

          <!-- Columna de Redes Sociales -->
          <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <div class="footer-section">
              <h5 class="footer-title">
                <i class="fas fa-share-alt me-2"></i>Redes Sociales
              </h5>
              <ul class="footer-list">
                <li>
                  <a href="#" class="footer-link">
                    <i class="fab fa-instagram me-2"></i>
                    {{ contactInfo.redes.instagram }}
                  </a>
                </li>
                <li>
                  <a href="#" class="footer-link">
                    <i class="fab fa-whatsapp me-2"></i>
                    {{ contactInfo.redes.whatsapp }}
                  </a>
                </li>
                <li>
                  <a href="#" class="footer-link">
                    <i class="fab fa-telegram me-2"></i>
                    {{ contactInfo.redes.telegram }}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <!-- Columna de Teléfonos -->
          <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <div class="footer-section">
              <h5 class="footer-title">
                <i class="fas fa-phone-alt me-2"></i>Contacto
              </h5>
              <ul class="footer-list">
                <li v-for="(telefono, index) in contactInfo.telefonos" :key="index">
                  <i class="fas fa-phone-square-alt me-2"></i>
                  {{ telefono.tipo }}: {{ telefono.numero }}
                </li>
              </ul>
              <div class="mt-3">
                <h6 class="footer-subtitle">
                  <i class="far fa-clock me-2"></i>Horario
                </h6>
                <p class="mb-1">{{ contactInfo.horario.semana }}</p>
                <p>{{ contactInfo.horario.finde }}</p>
              </div>
            </div>
          </div>

          <!-- Columna de Equipo -->
          <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <div class="footer-section">
              <h5 class="footer-title">
                <i class="fas fa-users me-2"></i>Nuestro Equipo
              </h5>
              <ul class="footer-list">
                <li v-for="(responsable, index) in contactInfo.responsables" :key="index" class="mb-3">
                  <strong>{{ responsable.nombre }}</strong>
                  <p class="mb-1 text-small">{{ responsable.cargo }}</p>
                  <p class="mb-1">
                    <i class="fas fa-envelope me-2"></i>{{ responsable.email }}
                  </p>
                  <p class="mb-0">
                    <i class="fas fa-phone me-2"></i>{{ responsable.telefono }}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer Original -->
    <div class="py-3 footer">
      <div class="container-fluid">
        <div class="row align-items-center justify-content-lg-between">
          <div class="mb-4 col-lg-6 mb-lg-0">
            <div
              class="text-sm text-center copyright text-muted text-lg-start"
            >
              © {{ new Date().getFullYear() }}, desarrollado con 
              <i class="fa fa-heart"></i> por
              <a href="#" class="font-weight-bold" target="_blank">Lorena Salas</a>
              utilizando tecnología de 
              <a href="https://www.creative-tim.com" class="font-weight-bold" target="_blank">Creative Tim</a>.
              Todos los derechos reservados.
            </div>
          </div>
          <div class="col-lg-6">
            <ul
              class="nav nav-footer justify-content-center justify-content-lg-end"
            >
              <li class="nav-item">
                <a
                  href="#"
                  class="nav-link text-muted"
                  target="_blank"
                  >Seguridad</a
                >
              </li>
              <li class="nav-item">
                <a
                  href="#"
                  class="nav-link text-muted"
                  target="_blank"
                  >Privacidad</a
                >
              </li>
              <li class="nav-item">
                <a
                  href="#"
                  class="nav-link text-muted"
                  target="_blank"
                  >Términos y Condiciones</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-contact {
  background: linear-gradient(310deg, #17ad37 0%, #98ec2d 100%);
  color: white;
  width: 100%;
  padding: 1rem 0;
  margin-bottom: 1rem;
}

.footer-section {
  padding: 0 1rem;
  margin-bottom: 2rem;
}

.footer-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
}

.footer-subtitle {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.footer-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-list li {
  margin-bottom: 1rem;
  font-size: 0.95rem;
}

.footer-link {
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
}

.footer-link:hover {
  transform: translateX(5px);
  color: rgba(255, 255, 255, 0.8);
}

.text-small {
  font-size: 0.85rem;
  opacity: 0.9;
}

.footer-list li i {
  width: 20px;
  text-align: center;
}

.footer-section p {
  font-size: 0.95rem;
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
</style>
