<script setup>
import AnimatedNumbersSection from '@/components/AnimatedNumbersSection.vue'
import { reactive } from 'vue'
const numbers = reactive({
  customers: 200,
  properties: 10,
  experience: 16
})
const valuesData = reactive([
  {
    icon: './IconTrust.png',
    title: 'Trust',
    description: 'Trust is the cornerstone of every successful real estate transaction.'
  },
  {
    icon: './IconExcellence.png',
    title: 'Excellence',
    description:
      'We set the bar high for ourselves. From the properties we list to the services we provide.'
  },
  {
    icon: './IconClient-Centric.png',
    title: 'Client-Centric',
    description: 'Your dreams and needs are at the center of our universe. We listen, understand.'
  },
  {
    icon: './IconTrust.png',
    title: 'Our Commitment',
    description: 'We are dedicated to providing you with the highest level of service and support.'
  }
])
const achievementsData = reactive([
  {
    title: '3+ Years of Excellence',
    description:
      "With over 3 years in the industry, we've amassed a wealth of knowledge and experience, becoming a go-to resource for all things real estate."
  },
  {
    title: 'Happy Clients',
    description:
      'Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do.'
  },
  {
    title: 'Industry Recognition',
    description:
      "We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence."
  }
])
const stepsData = reactive([
  {
    stepNumber: '01',
    title: 'Discover a World of Possibilities',
    description:
      'Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location, type, size, and budget.'
  },
  {
    stepNumber: '02',
    title: 'Narrowing Down Your Choices',
    description:
      "Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision."
  },
  {
    stepNumber: '03',
    title: 'Personalized Guidance',
    description:
      'Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away.'
  },
  {
    stepNumber: '04',
    title: 'See It for Yourself',
    description:
      "Arrange viewings of the properties you're interested in. We'll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home."
  },
  {
    stepNumber: '05',
    title: 'Making Informed Decisions',
    description:
      'Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed and confident in your choice.'
  },
  {
    stepNumber: '06',
    title: 'Getting the Best Deal',
    description:
      "We'll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms."
  }
])
const teamMembers = reactive([
  {
    avatar: './MaxMitchell.png',
    name: 'Max Mitchell',
    title: 'Founder',
    link: 'mailto:max.mitchell@estatein.example.com'
  },
  {
    avatar: './SarahJohnson.png',
    name: 'Sarah Johnson',
    title: 'Chief Real Estate Officer',
    link: 'mailto:sarah.johnson@estatein.example.com'
  },
  {
    avatar: './DavidBrown.png',
    name: 'David Brown',
    title: 'Head of Property Management',
    link: 'mailto:david.brown@estatein.example.com'
  },
  {
    avatar: './MichaelTurner.png',
    name: 'Michael Turner',
    title: 'Legal Counsel',
    link: 'mailto:michael.turner@estatein.example.com'
  }
])
const clientsData = reactive([
  {
    id: 1,
    logo: './123.png',
    name: 'ABC Corporation',
    since: '2019',
    domain: 'Commercial Real Estate',
    category: 'Luxury Home Development',
    quote:
      "Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
    website: 'https://abc-corp.example.com'
  },
  {
    id: 2,
    logo: './123.png',
    name: 'GreenTech Enterprises',
    since: '2018',
    domain: 'Commercial Real Estate',
    category: 'Retail Space',
    quote:
      "Estatein's ability to identify prime retail locations helped us expand our brand presence. They are a trusted partner in our growth.",
    website: 'https://greentech.example.com'
  },
  {
    id: 3,
    logo: './123.png',
    name: 'Innovate Solutions',
    since: '2020',
    domain: 'Tech Industry',
    category: 'Office Leasing',
    quote:
      'The team at Estatein made our office relocation seamless and efficient. Highly recommended!',
    website: 'https://innovate.example.com'
  }
])
const clientsPagination = reactive({
  currentPage: 1,
  itemsPerPage: 4,
  totalItems: clientsData.length
})
import { computed } from 'vue'
const paginatedClients = computed(() => {
  const start = (clientsPagination.currentPage - 1) * clientsPagination.itemsPerPage
  const end = start + clientsPagination.itemsPerPage
  return clientsData.slice(start, end)
})
const totalClientPages = computed(() => {
  return Math.ceil(clientsPagination.totalItems / clientsPagination.itemsPerPage)
})
function nextClientsPage() {
  if (clientsPagination.currentPage < totalClientPages.value) {
    clientsPagination.currentPage++
  }
}
function prevClientsPage() {
  if (clientsPagination.currentPage > 1) {
    clientsPagination.currentPage--
  }
}
</script>
<template>
  <div class="about-us-page">
    <section class="journey-section section-padding">
      <div class="container">
        <div class="journey-content-wrapper">
          <div class="journey-text-column">
            <h2 class="section-title">Our Journey</h2>
            <p class="section-description">
              Our story is one of continuous growth and evolution. We started as a small team with
              big dreams, determined to create a real estate platform that transcended the ordinary.
              Over the years, we've expanded our reach, forged valuable partnerships, and gained the
              trust of countless clients.
            </p>
            <div class="journey-numbers-container">
              <AnimatedNumbersSection
                :target-customers="numbers.customers"
                :target-properties="numbers.properties"
                :target-experience="numbers.experience"
              />
            </div>
          </div>
          <div class="journey-image-column">
            <img src="/AboutImage.png" alt="Our Journey Visual Representation" />
          </div>
        </div>
      </div>
    </section>
    <section class="values-section section-padding">
      <div class="container">
        <div class="values-header">
          <div class="values-text">
            <img src="/abstract-stars.png" alt="stars" class="home-section__stars" />
            <h2 class="section-title">Our Values</h2>
            <p class="section-description">
              Our story is one of continuous growth and evolution. We started as a small team with
              big dreams, determined to create a real estate platform that transcended the ordinary.
            </p>
          </div>
        </div>
        <div class="values-grid">
          <div v-for="(value, index) in valuesData" :key="index" class="value-card">
            <img :src="value.icon" :alt="`${value.title} icon`" class="value-icon" />
            <h3 class="value-title">{{ value.title }}</h3>
            <p class="value-description">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="achievements-section section-padding dark-bg">
      <div class="container">
        <h2 class="section-title">Our Achievements</h2>
        <p class="section-description">
          Our story is one of continuous growth and evolution. We started as a small team with big
          dreams, determined to create a real estate platform that transcended the ordinary.
        </p>
        <div class="achievements-grid">
          <div
            v-for="(achievement, index) in achievementsData"
            :key="index"
            class="achievement-card"
          >
            <h3 class="achievement-title">{{ achievement.title }}</h3>
            <p class="achievement-description">{{ achievement.description }}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="navigating-section section-padding">
      <div class="container">
        <h2 class="section-title">Navigating the Estatein Experience</h2>
        <p class="section-description">
          At Estatein, we've designed a straightforward process to help you find and purchase your
          dream property with ease. Here's a step-by-step guide to how it all works.
        </p>
        <div class="steps-list">
          <div v-for="step in stepsData" :key="step.stepNumber" class="step-item">
            <div class="step-header">
              <span class="step-number">Step {{ step.stepNumber }}</span>
              <h3 class="step-title">{{ step.title }}</h3>
            </div>
            <p class="step-description">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="team-section section-padding dark-bg">
      <div class="container">
        <h2 class="section-title">Meet the Estatein Team</h2>
        <p class="section-description">
          At Estatein, our success is driven by the dedication and expertise of our team. Get to
          know the people behind our mission to make your real estate dreams a reality.
        </p>
        <div class="team-grid">
          <div v-for="member in teamMembers" :key="member.name" class="team-member-card">
            <img :src="member.avatar" :alt="`${member.name} Avatar`" class="team-avatar" />
            <h3 class="team-name">{{ member.name }}</h3>
            <p class="team-title">{{ member.title }}</p>
            <a :href="member.link" class="team-link" target="_blank" rel="noopener noreferrer"
              >Say Hello 👋</a
            >
          </div>
        </div>
      </div>
    </section>
    <section class="clients-section section-padding">
      <div class="container">
        <h2 class="section-title">Our Valued Clients</h2>
        <p class="section-description">
          At Estatein, we have had the privilege of working with a diverse range of clients across
          various industries. Here are some of the clients we've had the pleasure of serving
        </p>
        <div class="clients-grid">
          <div v-for="client in paginatedClients" :key="client.id" class="client-card">
            <div class="client-header">
              <img :src="client.logo" :alt="`${client.name} Logo`" class="client-logo" />
              <div class="client-info">
                <p class="client-since">Since {{ client.since }}</p>
                <h3 class="client-name">{{ client.name }}</h3>
              </div>
              <a
                :href="client.website"
                target="_blank"
                rel="noopener noreferrer"
                class="client-website-button"
                >Visit Website</a
              >
            </div>
            <div class="client-details">
              <div><span>Domain:</span> {{ client.domain }}</div>
              <div><span>Category:</span> {{ client.category }}</div>
            </div>
            <div class="client-quote-section">
              <p class="client-quote-label">What They Said 🤗</p>
              <blockquote class="client-quote">{{ client.quote }}</blockquote>
            </div>
          </div>
        </div>
        <div class="pagination-controls">
          <button @click="prevClientsPage" :disabled="clientsPagination.currentPage === 1">
            ←
          </button>
          <span
            >{{ String(clientsPagination.currentPage).padStart(2, '0') }} of
            {{ String(totalClientPages).padStart(2, '0') }}</span
          >
          <button
            @click="nextClientsPage"
            :disabled="clientsPagination.currentPage === totalClientPages"
          >
            →
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about-us-page {
  color: #ffffff;
  background-color: #141414;
  font-family: Urbanist, sans-serif;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
.section-padding {
  padding: 80px 0;
}
.section-padding-sm {
  padding: 40px 0;
}
.section-title {
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #ffffff;
}
.section-description {
  font-size: 16px;
  color: #999999;
  line-height: 1.6;
  margin-bottom: 40px;
}
.dark-bg {
  background-color: #1a1a1a;
}
.journey-section {
  background-color: #141414;
}
.journey-content-wrapper {
  display: flex;
  align-items: center;
  gap: 50px;
  flex-wrap: wrap;
}
.journey-text-column {
  flex: 1;
  min-width: 300px;
}
.journey-text-column .section-title,
.journey-text-column .section-description {
  text-align: left;
  margin-left: 0;
  margin-right: 0;
  max-width: none;
}
.journey-text-column .section-description {
  margin-bottom: 40px;
}
.journey-numbers-container {
  margin-top: 30px;
}
.journey-image-column {
  flex: 1;
  min-width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.journey-image-column img {
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  display: block;
}

.values-header {
  display: flex;
  gap: 40px;
  align-items: center;
  margin-bottom: 60px;
  flex-wrap: wrap;
}
.values-text {
  flex: 1;
  min-width: 300px;
  text-align: left;
}
.values-text .section-title,
.values-text .section-description {
  text-align: left;
  margin-left: 0;
  margin-right: 0;
  max-width: none;
}
.values-image {
  flex: 1;
  min-width: 300px;
  max-width: 50%;
}
.values-image img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
}
.home-section__stars {
  width: 54.72px;
  height: 24px;
  margin-bottom: 10px;
}
.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 40px;
}
.value-card {
  background-color: #262626;
  padding: 30px;
  border-radius: 8px;
  border: 1px solid #333333;
  text-align: left;
}
.value-icon {
  width: 40px;
  height: 40px;
  margin-bottom: 15px;
}
.value-title {
  font-size: 20px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 10px;
}
.value-description {
  font-size: 14px;
  color: #999999;
  line-height: 1.6;
}
.achievements-section .section-title,
.achievements-section .section-description {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 800px;
}
.achievements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
}
.achievement-card {
  background-color: #262626;
  padding: 30px;
  border-radius: 8px;
  border: 1px solid #333333;
}
.achievement-title {
  font-size: 22px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 15px;
}
.achievement-description {
  font-size: 15px;
  color: #999999;
  line-height: 1.6;
}
.navigating-section .section-title,
.navigating-section .section-description {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 800px;
}
.steps-list {
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 50px;
  position: relative;
}
.step-item {
  background-color: #1a1a1a;
  padding: 30px;
  border-radius: 8px;
  border: 1px solid #333333;
  position: relative;
}
.step-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
}
.step-number {
  background-color: #703af7;
  color: white;
  padding: 5px 15px;
  border-radius: 15px;
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
}
.step-title {
  font-size: 20px;
  font-weight: 600;
  color: #ffffff;
  margin: 0;
}
.step-description {
  font-size: 15px;
  color: #999999;
  line-height: 1.6;
  margin: 0;
  text-align: left;
  max-width: none;
}
.team-section .section-title,
.team-section .section-description {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 800px;
}
.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 40px;
}
.team-member-card {
  background-color: #262626;
  padding: 30px;
  border-radius: 8px;
  border: 1px solid #333333;
  text-align: center;
}
.team-avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 0 auto 20px auto;
  object-fit: cover;
  border: 3px solid #333333;
}
.team-name {
  font-size: 20px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 5px;
}
.team-title {
  font-size: 14px;
  color: #999999;
  margin-bottom: 15px;
}
.team-link {
  display: inline-block;
  background-color: #141414;
  color: #ffffff;
  padding: 8px 15px;
  border-radius: 6px;
  font-size: 13px;
  text-decoration: none;
  border: 1px solid #333333;
  transition: background-color 0.3s ease;
}
.team-link:hover {
  background-color: #703af7;
  border-color: #703af7;
}
.clients-section .section-title,
.clients-section .section-description {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 800px;
}
.clients-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  margin-top: 40px;
}
.client-card {
  background-color: #1a1a1a;
  border: 1px solid #333333;
  border-radius: 10px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.client-header {
  display: flex;
  align-items: center;
  gap: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #262626;
  flex-wrap: wrap;
}
.client-logo {
  height: 40px;
  width: auto;
  object-fit: contain;
  flex-shrink: 0;
}
.client-info {
  flex-grow: 1;
}
.client-since {
  font-size: 12px;
  color: #777777;
  margin-bottom: 2px;
}
.client-name {
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
  margin: 0;
}
.client-website-button {
  background-color: #262626;
  color: #ffffff;
  padding: 8px 15px;
  border-radius: 6px;
  font-size: 13px;
  text-decoration: none;
  border: 1px solid #333333;
  transition: background-color 0.3s ease;
  white-space: nowrap;
  margin-left: auto;
}
.client-website-button:hover {
  background-color: #703af7;
  border-color: #703af7;
}
.client-details {
  display: flex;
  gap: 30px;
  font-size: 14px;
  color: #999999;
  flex-wrap: wrap;
}
.client-details span {
  font-weight: 500;
  color: #bbbbbb;
  margin-right: 5px;
}
.client-quote-section {
  background-color: #262626;
  border: 1px solid #333333;
  border-radius: 8px;
  padding: 20px;
}
.client-quote-label {
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
  margin-bottom: 10px;
}
.client-quote {
  font-size: 15px;
  color: #cccccc;
  line-height: 1.6;
  margin: 0;
  font-style: italic;
  border-left: 3px solid #703af7;
  padding-left: 15px;
}
.pagination-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-top: 40px;
  color: #999999;
}
.pagination-controls button {
  background-color: #262626;
  border: 1px solid #333333;
  color: #ffffff;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 18px;
  transition: background-color 0.3s ease;
}
.pagination-controls button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.pagination-controls button:not(:disabled):hover {
  background-color: #703af7;
  border-color: #703af7;
}
.pagination-controls span {
  font-size: 16px;
  font-weight: 500;
}
@media (max-width: 992px) {
  .values-image {
    max-width: 80%;
    margin: 20px auto 0;
  }
}
@media (max-width: 768px) {
  .section-title {
    font-size: 30px;
  }
  .section-padding {
    padding: 60px 0;
  }
  .section-padding-sm {
    padding: 30px 0;
  }
  .journey-content-wrapper {
    flex-direction: column;
    gap: 40px;
  }
  .values-grid,
  .achievements-grid,
  .team-grid {
    grid-template-columns: 1fr;
  }
  .client-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
  .client-website-button {
    align-self: flex-start;
    margin-left: 0;
  }
  .client-details {
    flex-direction: column;
    gap: 10px;
  }
}
@media (max-width: 480px) {
  .section-title {
    font-size: 26px;
  }
  .section-description {
    font-size: 15px;
  }
  .value-card,
  .achievement-card,
  .step-item,
  .team-member-card,
  .client-card {
    padding: 20px;
  }
  .step-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
  .pagination-controls span {
    font-size: 14px;
  }
  .pagination-controls button {
    width: 30px;
    height: 30px;
    font-size: 16px;
  }
  .journey-content-wrapper {
    gap: 30px;
  }
}
</style>
