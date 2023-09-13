<template>
    <headerComponent></headerComponent>
    <!-- <nav class="navbar navbar-expand-lg bg-body-tertiary collapse" id="navbarToggleExternalContent">
        <div class="container-fluid navback">
            <img src="madxaback.jpeg" width="50" height="50" alt="">
            <a class="navbar-brand logo" href="#">Madxa</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarSupportedContent">
                <ul class="navbar-nav  me-auto mb-2 mb-lg-0 ">
                    <li class="nav-item navcontainer ">
                        <a class="nav-link  navitems" aria-current="page" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link navitems" href="createAcc.html">Create Account</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link navitems" href="service.html">Services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link navitems" href="#">Blogs</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link navitems" href="#">About</a>
                    </li>
                </ul>
                <button type="button" class="btn btn-primary  rqst">Request Service</button>
            </div>
        </div>
    </nav> -->
    

    <!-- <v-layout>
        <v-app-bar
            color="#103c61" :elevation="0">
    
            <v-app-bar-title>Madxa</v-app-bar-title>
            <v-spacer></v-spacer>
            <v-btn >Home</v-btn>
            <v-btn >Create Account</v-btn>
            <v-btn >Services</v-btn>
            <v-btn>Blogs</v-btn>
            <v-btn>About</v-btn>
            <v-btn color="#2eab79" variant="flat">Request Service</v-btn>

          </v-app-bar>
    </v-layout>
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

<script>
import headerComponent from '@/components/headerComponent.vue'; // Import the component

export default {
  components: {
    headerComponent: "headerComponent", // Register the component for use in the template
  },
  // ...page logic
}
</script>