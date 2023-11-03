<template>
  <div class="const">
    <div class="footer">
      <div class="footer-info">
        <div class="footer-item">
          <p>Address: Abai ave, Almaty</p>
        </div>
        <div class="footer-item">
          <p>Phone: 8775 069 4394</p>
        </div>
        <div class="footer-item">
          <a href="mailto:info@example.com">
            <i class="fa fa-envelope"></i> Email: info@example.com
          </a>
        </div>
        <div class="footer-item">
          <a href="https://instagram.com/teachme.korean?igshid=YTQwZjQ0NmI0OA==">
            <i class="fa fa-instagram"></i> Instagram
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import 'font-awesome/css/font-awesome.css';
</script>

<style scoped>
.const {
  background-color: #222e51;
  height: auto;
  width: 100%; /* Измените ширину на 100% */
  position: fixed;
  bottom: 0;
  display: flex; /* Используйте flexbox для центрирования по вертикали */
  justify-content: center; /* Центрируйте по горизонтали */
}

.footer {
  background-color: #222e51;
  color: #fff;
  padding: 0;
  text-align: center;
  width: 100%; /* Измените ширину на 100% */
  display: flex; /* Используйте flexbox для центрирования по вертикали */
  justify-content: center; /* Центрируйте по горизонтали */
}

.footer-info {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.footer-item {
  padding: 10px;
  flex: 1;
  text-align: center;
}

.footer-item a {
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  margin: 10px;
}

.footer-item a i {
  font-size: 20px;
  margin-right: 5px;
}

.footer-item a:hover {
  color: #c5c5c5;
  transition: color 0.3s;
}

/* Media query for smaller screens (adjust as needed) */
@media (max-width: 768px) {
  .footer {
    width: 100%; /* Измените ширину на 100% */
  }
  .footer-info {
    flex-direction: column; /* Stack items vertically on small screens */
  }
}
</style>
