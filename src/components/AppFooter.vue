<script setup>
</script>

<template>
  <footer class="app-footer">
    <div class="footer-container">
      <div class="footer-cta">
        <div class="footer-cta__content">
          <h2 class="footer-cta__title">Start Your Real Journey Today</h2>
          <p class="footer-cta__text">
            Your dream property is just a click away. Whether you're looking for a new home, a
            strategic investment, or expert real advice,
            <span class="brand-name">OrbiBuy</span> is here to assist you every step of the way.
            Take the first step towards your real goals and explore our available properties
            or get in touch with our team for personalized assistance.
          </p>
        </div>
        <button class="footer-cta__button">Explore Properties</button>
      </div>
      <div class="footer-main">
        <div class="footer-branding">
          <a href="/" class="footer-logo brand-name">OrbiBuy</a>
          <div class="footer-subscribe">
            <input type="email" placeholder="Enter Your Email" class="footer-subscribe__input" />
          </div>
        </div>
        <nav class="footer-nav">
          <div class="footer-nav__column">
            <h4 class="footer-nav__heading">Home</h4>
            <ul>
              <li><router-link to="/">Hero Section</router-link></li>
              <li><router-link to="/features">Features</router-link></li>
              <li><router-link to="/properties">Properties</router-link></li>
              <li><router-link to="/testimonials">Testimonials</router-link></li>
              <li><router-link to="/faq">FAQ’s</router-link></li>
            </ul>
          </div>
          <div class="footer-nav__column">
            <h4 class="footer-nav__heading">About Us</h4>
            <ul>
              <li><router-link to="/about/story">Our Story</router-link></li>
              <li><router-link to="/about/works">Our Works</router-link></li>
              <li><router-link to="/about/how-it-works">How It Works</router-link></li>
              <li><router-link to="/about/team">Our Team</router-link></li>
              <li><router-link to="/about/clients">Our Clients</router-link></li>
            </ul>
          </div>
          <div class="footer-nav__column">
            <h4 class="footer-nav__heading">Properties</h4>
            <ul>
              <li><router-link to="/properties/portfolio">Portfolio</router-link></li>
              <li><router-link to="/properties/categories">Categories</router-link></li>
            </ul>
          </div>
          <div class="footer-nav__column">
            <h4 class="footer-nav__heading">Services</h4>
            <ul>
              <li><router-link to="/services/valuation">Valuation Mastery</router-link></li>
              <li><router-link to="/services/marketing">Strategic Marketing</router-link></li>
              <li><router-link to="/services/negotiation">Negotiation Wizardry</router-link></li>
              <li><router-link to="/services/closing">Closing Success</router-link></li>
              <li><router-link to="/services/management">Property Management</router-link></li>
            </ul>
          </div>
          <div class="footer-nav__column">
            <h4 class="footer-nav__heading">Contact Us</h4>
            <ul>
              <li><router-link to="/contact">Contact Form</router-link></li>
              <li><router-link to="/contact/offices">Our Offices</router-link></li>
            </ul>
          </div>
        </nav>
      </div>
      <div class="footer-bottom">
        <p class="footer-bottom__copyright">
          @{{ new Date().getFullYear() }} <span class="brand-name">OrbiBuy</span>. All Rights
          Reserved.
        </p>
        <router-link to="/terms" class="footer-bottom__terms">Terms & Conditions</router-link>
      </div>
    </div>
  </footer>
</template>


<style scoped>
.app-footer {
  background-color: #1a1a1a;
  color: #999999;
  padding: 60px 0 20px 0;
  border-top: 1px solid #262626;
  font-family: Urbanist, sans-serif;
  width: 100%;
  box-sizing: border-box;
}
.brand-name {
  font-weight: bold;
}
.footer-container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 60px;
  box-sizing: border-box;
}
.footer-cta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  padding: 40px;
  background-color: #262626;
  border: 1px solid #333333;
  border-radius: 10px;
  margin-bottom: 60px;
}
.footer-cta__content {
  flex: 1;
}
.footer-cta__title {
  font-size: 28px;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 15px 0;
  line-height: 1.3;
}
.footer-cta__text {
  font-size: 14px;
  line-height: 1.6;
  margin: 0;
}
.footer-cta__text .brand-name {
  color: #ffffff;
  font-weight: 500;
}
.footer-cta__button {
  padding: 14px 24px;
  font-size: 14px;
  font-weight: 500;
  font-family: inherit;
  border-radius: 10px;
  cursor: pointer;
  background-color: #703af7;
  color: #ffffff;
  border: none;
  white-space: nowrap;
  transition: background-color 0.3s ease;
}
.footer-cta__button:hover {
  background-color: #5a2fcf;
}
.footer-main {
  display: flex;
  justify-content: space-between;
  gap: 60px;
  margin-bottom: 60px;
}
.footer-branding {
  flex-basis: 25%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.footer-logo {
  font-size: 24px;
  font-weight: 700;
  color: #ffffff;
  text-decoration: none;
  display: inline-block;
}
.footer-subscribe {
  display: flex;
  align-items: center;
  background-color: #1a1a1a;
  border: 1px solid #333333;
  border-radius: 8px;
  padding: 5px 10px;
}
.footer-subscribe__input {
  flex-grow: 1;
  background: transparent;
  border: none;
  color: #ffffff;
  padding: 10px 5px;
  font-size: 14px;
  outline: none;
  font-family: inherit;
}
.footer-subscribe__input::placeholder {
  color: #666666;
}
.footer-nav {
  flex: 1;
  display: flex;
  justify-content: space-between;
  gap: 30px;
  flex-wrap: wrap;
}
.footer-nav__column {
  min-width: 120px;
}
.footer-nav__heading {
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 15px 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.footer-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.footer-nav li {
  margin-bottom: 10px;
}
.footer-nav a {
  color: #999999;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;
}
.footer-nav a:hover,
.footer-nav a.router-link-active {
  color: #ffffff;
  text-decoration: underline;
}
.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  border-top: 1px solid #262626;
  font-size: 13px;
  color: #666666;
}
.footer-bottom__copyright {
  margin: 0;
}
.footer-bottom__copyright .brand-name {
  color: #aaaaaa;
  font-weight: 500;
}
.footer-bottom__terms {
  color: #666666;
  text-decoration: none;
  transition: color 0.3s ease;
}
.footer-bottom__terms:hover,
.footer-bottom__terms.router-link-active {
  color: #999999;
  text-decoration: underline;
}
@media (max-width: 1024px) {
  .footer-container {
    padding: 0 40px;
  }
  .footer-cta {
    flex-direction: column;
    text-align: center;
    gap: 20px;
    padding: 30px;
  }
  .footer-cta__button {
    width: auto;
  }
  .footer-main {
    flex-direction: column;
    gap: 40px;
  }
  .footer-branding {
    align-items: center;
  }
  .footer-subscribe {
    max-width: 300px;
    width: 100%;
  }
  .footer-nav {
    justify-content: flex-start;
    gap: 40px;
  }
  .footer-nav__column {
    min-width: 150px;
  }
}
@media (max-width: 768px) {
  .footer-container {
    padding: 0 20px;
  }
  .footer-nav {
    justify-content: space-between;
    gap: 30px 20px;
  }
  .footer-nav__column {
    min-width: calc(50% - 10px);
    flex-basis: calc(50% - 10px);
  }
  .footer-bottom {
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }
}
@media (max-width: 480px) {
  .footer-cta__title {
    font-size: 24px;
  }
  .footer-cta__text {
    font-size: 13px;
  }
  .footer-nav__column {
    min-width: 100%;
    flex-basis: 100%;
  }
  .footer-nav {
    gap: 25px;
  }
}
</style>
