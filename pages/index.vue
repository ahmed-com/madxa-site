<script setup>
import { defineComponent } from 'vue';
import HeaderComponent from '@/components/headerComponent.vue'; // Import the component

// Export the components and page logic
const components = {
  HeaderComponent, // Register the component for use in the template
};

// ... Define your page logic here
</script>


<template>
    <headerComponent></headerComponent>
    <!--
    <div class="container text-center">
        <div class="row">
            <div class="col">
                <img src="—Pngtree—young doctor_3412130.png" width="450" height="450" alt="">
            </div>
            <div class="col intro">
                <div class="txtcontainer">
                    <span>Welcome to Madxa - <br>Your Trusted Healthcare Companion!</span> <br>
                    Madxa is your comprehensive online resource dedicated
                    to revolutionizing the way you access healthcare information and services.
                    We understand that your health is precious
                    , and that's why we've created a one-stop platform
                    to cater to all your medical needs.
                </div>
            </div>
        </div>
        <div class="row row-cols-2 row-cols-md-3 cards">
            <div class="col">
                <div class="card" style="width: 15rem;height: 8rem;">
                    <div class="card-body">
                        <p> <i class="fa-solid fa-phone-volume"></i>
                        </p>
                        <a href="#" class="card-link">0111 222 3344</a>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card" style="width: 15rem; height:8rem">
                    <div class="card-body">
                        <p> <i class="fa-regular fa-envelope"></i>
                        </p>
                        <a href="#" class="card-link">Madxa@gmail.com</a>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card" style="width: 8rem;">
                    <div class="card-body socialMedia">
                        <p> <i class="fa-brands fa-whatsapp"></i>
                            <a href="#" class="card-link"> contact</a>
                            <p>
                                <i class="fa-brands fa-facebook"></i>
                                <a href="#" class="card-link">  Madxa</a>

                            </p>
                            <p>
                                <i class="fa-brands fa-instagram"></i>
                                <a href="#" class="card-link">MadTech</a>

                            </p>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <footer>
        <p>&copy; 2023 Madxa official website. All rights reserved.</p>

    </footer> -->
</template>

<style scoped>
        .custom-color {
        background-color:"#2eab79";
        }
</style>
