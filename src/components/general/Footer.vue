<!--script setup>
import { useStore } from "vuex";
const store = useStore();
</script-->
<template>
  <footer class="py-3 footer">
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
  </footer>
</template>
