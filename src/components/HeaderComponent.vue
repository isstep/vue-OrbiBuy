<script setup>
</script>

<template>
    <header class="header">
        <div class="header__container">
            <div class="header__logo">
                <img src="/public/Symbol.png" alt="Logo" class="logo-img" />
                Orbibuy
            </div>
            <nav class="header__nav">
                <ul class="header__menu">
                    <li class="header__menu-item"><a href="#" class="header__link">Home</a></li>
                    <li class="header__menu-item"><a href="#" class="header__link">About Us</a></li>
                    <li class="header__menu-item"><a href="#" class="header__link">Properties</a></li>
                    <li class="header__menu-item"><a href="#" class="header__link">Services</a></li>
                </ul>
            </nav>
            <button class="header__button">Contact Us</button>
        </div>
    </header>
</template>

<style scoped>
.header {
    width: 100%;
    background-color: rgba(26, 26, 26, 1);
    position: sticky; 
    z-index: 1000;
}

.header__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

.header__logo {
    font-size: 1.4em;
    font-family: 'Urbanist', sans-serif;
    font-weight: bold;
    display: flex;
    align-items: center;
    letter-spacing: 0.06em;
}

.logo-img {
    width: 48px;
    height: 48px;
    margin-right: 10px;
}

.header__nav {
    flex-grow: 1;
    text-align: center;
}

.header__menu {
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
    margin: 0;
}

.header__link {
    color: #ffffff;
    text-decoration: none;
    font-size: 1rem;
    padding: 14px 24px;
    border: 2px solid transparent;
    border-radius: 10px;
    transition: background-color 0.3s ease, border-color 0.3s ease;
}

.header__link:hover {
    background-color: rgba(20, 20, 20, 1);
    color: #ffffff;
    border-color: rgb(38, 38, 38);
    cursor: pointer;
}

.header__button {
    background-color: rgba(20, 20, 20, 1);
    color: #ffffff;
    border: 2px solid rgb(38, 38, 38);
    padding: 10px 15px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    border-radius: 10px;
}

.header__button:hover {
    background-color: rgba(0, 0, 0, 0.394);
}
</style>
