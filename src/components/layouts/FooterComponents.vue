<template>
  <div class="const">
    <div class="footer">
      <div class="footer-info">
        <div class="footer-item">
          <p>Address: Abai ave, Almaty, Kazakhstan 050046</p>
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
import 'font-awesome/css/font-awesome.css';
</script>

<style scoped>

.const{
  width:1400px;
  background-color: #222e51;
  height:auto;
}

.footer {
  background-color: #222e51;
  color: #fff;
  padding: 3% 0;
  text-align: center;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  margin: 0 auto;

  }

.footer-info {
  display: flex;
  flex-wrap: wrap; /* Allow items to wrap to the next line on small screens */
  justify-content: center;
  align-items: center;
}

.footer-item {
  padding: 10px;
  flex: 1; /* Make each item equally distribute on small screens */
  text-align: center;
}

/* Style the email and Instagram links */
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
  .footer{
    width:1000pxpx;
    background-color: #222e51;
    height:auto;
    position: fixed;
  bottom: 0;
  }

  .footer-info {
    flex-direction: column; /* Stack items vertically on small screens */
  }

  .footer-item {
    text-align: center;
  }
}
</style>