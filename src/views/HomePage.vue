<script setup>
import { reactive } from 'vue'
import AnimatedNumbersSection from '@/components/AnimatedNumbersSection.vue'
import LinkCard from '@/components/LinkCard.vue'
import PropertyCard from '@/components/PropertyCard.vue'
import HomeSection from '@/components/HomeSection.vue'
import TestimonialCard from '@/components/TestimonialCard.vue'
import FaqItem from '@/components/FaqItem.vue'

const numbers = reactive({
  customers: 200,
  properties: 10,
  experience: 16
})
const linksData = reactive([
  {
    imgSrc: '/dream-home.png',
    imgAlt: 'dream home',
    title: 'Find Your Dream Home',
    arrowSrc: '/home__arrow.png',
    specialClass: 'home__card-link--with-offset'
  },
  {
    imgSrc: '/property-value.png',
    imgAlt: 'property value',
    title: 'Unlock Property Value',
    arrowSrc: '/home__arrow.png'
  },
  {
    imgSrc: '/property-management.png',
    imgAlt: 'property management',
    title: 'Effortless Property Management',
    arrowSrc: '/home__arrow.png'
  },
  {
    imgSrc: '/smart-investments.png',
    imgAlt: 'smart investments',
    title: 'Smart Investments, Informed Decisions',
    arrowSrc: '/home__arrow.png',
    specialClass: 'home__card-link--with-set'
  }
])
const featuredProperties = reactive([
  {
    id: 1,
    imageSrc: '/Villa.png',
    title: 'Seaside Serenity Villa',
    description: 'A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...',
    features: [
      { icon: '/Icon1.png', text: '4-Bedroom' },
      { icon: '/Icon2.png', text: '3-Bathroom' },
      { icon: '/Icon3.png', text: 'Villa' }
    ],
    price: '$550,000',
    detailsLink: '/property/seaside-serenity-villa'
  },
  {
    id: 2,
    imageSrc: '/HomeTower.png',
    title: 'Metropolitan Modern Mansion',
    description: 'Experience city living at its finest in this sleek 5-bedroom penthouse...',
    features: [
      { icon: '/Icon1.png', text: '5-Bedroom' },
      { icon: '/Icon2.png', text: '4-Bathroom' },
      { icon: '/Icon3.png', text: 'Penthouse' }
    ],
    price: '$1,200,000',
    detailsLink: '/property/metropolitan-mansion'
  },
  {
    id: 3,
    imageSrc: '/Tower.png',
    title: 'Rustic Countryside Retreat',
    description:
      'Escape to the tranquility of the countryside in this charming 3-bedroom cottage...',
    features: [
      { icon: '/Icon1.png', text: '3-Bedroom' },
      { icon: '/Icon2.png', text: '2-Bathroom' },
      { icon: '/Icon3.png', text: 'Cottage' }
    ],
    price: '$350,000',
    detailsLink: '/property/rustic-retreat'
  }
])
const testimonialsData = reactive([
  {
    id: 1,
    quote:
      'Working with Orbibuy was a dream come true. They found us the perfect home faster than we ever thought possible.',
    authorName: 'Sarah Jones',
    authorLocation: 'Sunnyvale, CA',
    authorImage: '/Profile1.png',
    rating: 5
  },
  {
    id: 2,
    quote:
      "The team's expertise in property management is unmatched. They handle everything effortlessly.",
    authorName: 'Michael Smith',
    authorLocation: 'Austin, TX',
    authorImage: '/Profile2.png',
    rating: 5
  },
  {
    id: 3,
    quote: 'Incredible attention to detail and market knowledge. Highly recommend for investments.',
    authorName: 'Emily White',
    authorLocation: 'New York, NY',
    authorImage: '/Profile3.png',
    rating: 4
  }
])
const faqData = reactive([
  {
    id: 1,
    question: 'How do I start searching for a property?',
    answer:
      "You can start by using our advanced search filters on the 'Browse Properties' page. Filter by location, property type, price range, and more to narrow down your options. You can also contact one of our agents for personalized assistance."
  },
  {
    id: 2,
    question: 'What documents do I need to buy a house?',
    answer:
      "Generally, you'll need proof of income (pay stubs, tax returns), identification (driver's license, passport), bank statements, and pre-approval for a mortgage if you're financing. Requirements can vary, so consult with your agent or lender."
  },
  {
    id: 3,
    question: 'What is property management?',
    answer:
      'Property management involves overseeing residential, commercial, or industrial real estate. This includes managing tenants, collecting rent, handling maintenance and repairs, and ensuring the property complies with all regulations. Orbibuy offers comprehensive property management services.'
  }
])
const propertiesPagination = reactive({ currentPage: 1, totalPages: 10 })
const testimonialsPagination = reactive({ currentPage: 1, totalPages: 5 })
function nextPage(pagination) {
  if (pagination.currentPage < pagination.totalPages) {
    pagination.currentPage++
  }
}
function prevPage(pagination) {
  if (pagination.currentPage > 1) {
    pagination.currentPage--
  }
}
function handleViewDetails(link) {
  console.log('View details for:', link)
}
function handleViewAll(section) {
  console.log('View All clicked for:', section)
}
</script>
<template>
  <main class="home">
    <div class="home__container">
      <div class="home__content">
        <div class="home__description">
          <p>Discover Your Dream Property with Orbibuy</p>
        </div>
        <p class="home__text">
          Your journey to finding the perfect property begins here. Explore our listings to find the
          home that matches your dreams.
        </p>
        <div class="home__actions">
          <button class="home__button home__button--primary">Learn More</button>
          <button class="home__button home__button--secondary">Browse Properties</button>
        </div>
        <AnimatedNumbersSection
          :target-customers="numbers.customers"
          :target-properties="numbers.properties"
          :target-experience="numbers.experience"
        />
      </div>
      <div class="home__image">
        <img src="/Container2.png" alt="Beautiful property" class="home__image-img" />
      </div>
      <div class="home__linkimage">
        <img src="/Sub Container.png" />
      </div>
    </div>
    <div class="home__card-links">
      <div class="home__card-links-container">
        <LinkCard
          v-for="(link, index) in linksData"
          :key="index"
          :img-src="link.imgSrc"
          :img-alt="link.imgAlt"
          :title="link.title"
          :arrow-src="link.arrowSrc"
          :special-class="link.specialClass"
          :href="link.href"
        />
      </div>
    </div>
    <div class="home__section-wrapper">
      <HomeSection
        title="Featured Properties"
        description="Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click 'View Details' for more information."
        button-text="View All Properties"
        :show-pagination="true"
        :current-page="propertiesPagination.currentPage"
        :total-pages="propertiesPagination.totalPages"
        @button-click="handleViewAll('Properties')"
        @prev-page="prevPage(propertiesPagination)"
        @next-page="nextPage(propertiesPagination)"
      >
        <div class="property-cards-grid">
          <PropertyCard
            v-for="property in featuredProperties"
            :key="property.id"
            :image-src="property.imageSrc"
            :title="property.title"
            :description="property.description"
            :features="property.features"
            :price="property.price"
            :details-link="property.detailsLink"
            @view-details="handleViewDetails"
          />
        </div>
      </HomeSection>
    </div>
    <div class="home__section-wrapper">
      <HomeSection
        title="What Our Clients Say"
        description="Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs."
        button-text="View All Testimonials"
        :show-pagination="testimonialsData.length > 3"
        :current-page="testimonialsPagination.currentPage"
        :total-pages="testimonialsPagination.totalPages"
        @button-click="handleViewAll('Testimonials')"
        @prev-page="prevPage(testimonialsPagination)"
        @next-page="nextPage(testimonialsPagination)"
      >
        <div class="testimonial-cards-grid">
          <TestimonialCard
            v-for="testimonial in testimonialsData"
            :key="testimonial.id"
            :quote="testimonial.quote"
            :author-name="testimonial.authorName"
            :author-location="testimonial.authorLocation"
            :author-image="testimonial.authorImage"
            :rating="testimonial.rating"
          />
        </div>
      </HomeSection>
    </div>
    <div class="home__section-wrapper">
      <HomeSection
        title="Frequently Asked Questions"
        description="Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way."
        button-text="View All FAQs"
        :show-pagination="false"
        @button-click="handleViewAll('FAQs')"
      >
        <div class="faq-items-list">
          <FaqItem
            v-for="faq in faqData"
            :key="faq.id"
            :question="faq.question"
            :answer="faq.answer"
          />
        </div>
      </HomeSection>
    </div>
  </main>
</template>
<style scoped>
.home {
  width: 100%;
  overflow-x: hidden;
}
.home__container {
  display: flex;
  align-items: flex-start;
  padding: 0 120px;
  gap: 60px;
  position: relative;
  box-sizing: border-box;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
}
.home__content {
  flex: 1;
  max-width: 610px;
  padding-top: 100px;
}
.home__description {
  font-weight: 600;
  font-size: 46px;
  font-family: Urbanist, sans-serif;
  color: #ffffff;
  line-height: 1.2;
  margin-bottom: 20px;
}
.home__text {
  font-size: 1rem;
  color: #a89e9e;
  line-height: 1.6;
  margin-bottom: 40px;
}
.home__actions {
  display: flex;
  gap: 15px;
  margin-bottom: 49px;
}
.home__button {
  padding: 14px 24px;
  font-size: 14px;
  font-weight: 500;
  font-family: Urbanist, sans-serif;
  border-radius: 10px;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease,
    color 0.3s ease;
  border: 1px solid transparent;
}
.home__button--primary {
  background-color: rgba(20, 20, 20, 1);
  color: #ffffff;
  border-color: rgb(38, 38, 38);
}
.home__button--primary:hover {
  background-color: #262626;
  border-color: #444;
}
.home__button--secondary {
  background-color: rgba(112, 59, 247, 1);
  color: #ffffff;
  border-color: rgba(112, 59, 247, 0.8);
}
.home__button--secondary:hover {
  background-color: rgba(100, 50, 230, 1);
  border-color: rgba(100, 50, 230, 1);
}
.home__image {
  width: 50%;
  max-width: 730px;
  align-self: stretch;
}
.home__image-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.home__linkimage {
  position: absolute;
  transform: translateX(465%);
  top: 20%;
  width: 129px;
  height: 129px;
  z-index: 1;
}
.home__linkimage img {
  display: block;
  width: 100%;
  height: auto;
}
.home__card-links {
  width: 100%;
  background-color: rgba(26, 26, 26, 1);
  padding: 5px 0;
  border-top: 1px solid #262626;
  border-bottom: 1px solid #262626;
  margin-top: 80px;
}
.home__card-links-container {
  background-color: rgba(20, 20, 20, 1);
  width: 100%;
  margin: 0 auto;
  padding: 15px 120px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  box-sizing: border-box;
}
.home__section-wrapper {
  padding: 40px 60px;
  max-width: 1440px;
  margin: 0 auto;
  box-sizing: border-box;
}
.property-cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
}
.testimonial-cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}
.faq-items-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
@media (max-width: 1024px) {
  .home__container {
    padding: 0 60px;
    gap: 40px;
  }
  .home__card-links-container {
    padding: 15px 60px;
  }
  .home__section-wrapper {
    padding: 70px 60px;
  }
}
@media (max-width: 768px) {
  .home__container {
    flex-direction: column;
    padding: 0 20px;
    gap: 30px;
    align-items: center;
  }
  .home__content {
    max-width: 100%;
    padding-top: 40px;
    text-align: center;
  }
  .home__description {
    font-size: 36px;
  }
  .home__text {
    font-size: 0.9rem;
    margin-bottom: 30px;
  }
  .home__actions {
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
    margin-bottom: 40px;
  }
  .home__image {
    width: 100%;
    max-width: 500px;
    height: auto;
    align-self: center;
    order: -1;
  }
  .home__image-img {
    height: auto;
  }
  .home__linkimage {
    display: none;
  }
  .home__card-links {
    margin-top: 40px;
  }
  .home__card-links-container {
    flex-direction: column;
    align-items: center;
    padding: 20px 20px;
    gap: 15px;
  }
  .home__section-wrapper {
    padding: 50px 20px;
  }
  .property-cards-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
  }
  .testimonial-cards-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}
@media (max-width: 480px) {
  .home__description {
    font-size: 28px;
  }
  .home__text {
    font-size: 0.85rem;
  }
  .home__button {
    padding: 12px 20px;
    font-size: 13px;
  }
}
</style>
