var app = new Vue({
  el: '#foodmenu',
  data() {
    return {
      sectionName: 'Let\'s discover food',
      selectedCategory: 'a',
      viewAll: false,
      max: 4,
      goods: [
        {
          price: '40$',
          imgSrc: 'images/food-1.jpg',
          title: 'Pizza',
          text: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Fuidhir Pinnately.',
          category: 'a'
        },
        {
          price: '30$',
          imgSrc: 'images/food-2.jpg',
          title: 'Pizza',
          text: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Fuidhir Pinnately.',
          category: 'a'
        },
        {
          price: '20$',
          imgSrc: 'images/food-3.jpg',
          title: 'Pizza',
          text: 'Lorassdfsdgsdft, Consectetur Adipiscing Elit Fuidhir Pinnately.',
          category: 'a'
        },
        {
          price: '30$',
          imgSrc: 'images/food-4.jpg',
          title: 'Pizza',
          text: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Fuidhir Pinnately.',
          category: 'b'
        },
        {
          price: '30$',
          imgSrc: 'images/food-5.jpg',
          title: 'Pizza',
          text: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Fuidhir Pinnately.',
          category: 'b'
        },
        {
          price: '30$',
          imgSrc: 'images/food-6.jpg',
          title: 'Pizza',
          text: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Fuidhir Pinnately.',
          category: 'b'
        },
        {
          price: '30$',
          imgSrc: 'images/food-5.jpg',
          title: 'Pizza',
          text: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Fuidhir Pinnately.',
          category: 'c'
        },
        {
          price: '30$',
          imgSrc: 'images/food-6.jpg',
          title: 'Pizza',
          text: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Fuidhir Pinnately.',
          category: 'c'
        },
        {
          price: '40$',
          imgSrc: 'images/food-1.jpg',
          title: 'Pizza',
          text: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Fuidhir Pinnately.',
          category: 'a'
        },
        {
          price: '30$',
          imgSrc: 'images/food-2.jpg',
          title: 'Pizza',
          text: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Fuidhir Pinnately.',
          category: 'a'
        },
        {
          price: '20$',
          imgSrc: 'images/food-3.jpg',
          title: 'Pizza',
          text: 'Lorassdfsdgsdft, Consectetur Adipiscing Elit Fuidhir Pinnately.',
          category: 'a'
        },
        {
          price: '30$',
          imgSrc: 'images/food-4.jpg',
          title: 'Pizza',
          text: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Fuidhir Pinnately.',
          category: 'b'
        },
        {
          price: '30$',
          imgSrc: 'images/food-5.jpg',
          title: 'Pizza',
          text: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Fuidhir Pinnately.',
          category: 'b'
        },
        {
          price: '30$',
          imgSrc: 'images/food-6.jpg',
          title: 'Pizza',
          text: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Fuidhir Pinnately.',
          category: 'b'
        },
        {
          price: '30$',
          imgSrc: 'images/food-5.jpg',
          title: 'Pizza',
          text: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Fuidhir Pinnately.',
          category: 'c'
        },
        {
          price: '30$',
          imgSrc: 'images/food-6.jpg',
          title: 'Pizza',
          text: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Fuidhir Pinnately.',
          category: 'c'
        },
        {
          price: '40$',
          imgSrc: 'images/food-1.jpg',
          title: 'Pizza',
          text: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Fuidhir Pinnately.',
          category: 'a'
        },
        {
          price: '30$',
          imgSrc: 'images/food-2.jpg',
          title: 'Pizza',
          text: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Fuidhir Pinnately.',
          category: 'a'
        },
        {
          price: '20$',
          imgSrc: 'images/food-3.jpg',
          title: 'Pizza',
          text: 'Lorassdfsdgsdft, Consectetur Adipiscing Elit Fuidhir Pinnately.',
          category: 'a'
        },
        {
          price: '30$',
          imgSrc: 'images/food-4.jpg',
          title: 'Pizza',
          text: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Fuidhir Pinnately.',
          category: 'b'
        },
        {
          price: '30$',
          imgSrc: 'images/food-5.jpg',
          title: 'Pizza',
          text: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Fuidhir Pinnately.',
          category: 'b'
        },
        {
          price: '30$',
          imgSrc: 'images/food-6.jpg',
          title: 'Pizza',
          text: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Fuidhir Pinnately.',
          category: 'b'
        },
        {
          price: '30$',
          imgSrc: 'images/food-5.jpg',
          title: 'Pizza',
          text: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Fuidhir Pinnately.',
          category: 'c'
        },
        {
          price: '30$',
          imgSrc: 'images/food-6.jpg',
          title: 'Pizza',
          text: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Fuidhir Pinnately.',
          category: 'c'
        },
      ]
    }
  },
  watch: {
    selectedCategory: function () {
      this.viewAll = false
    }
  },
  computed: {
    computedGoods() {
      return this.goods.filter((good, i) => {
        return good.category === this.selectedCategory
      }).filter((good, i) => {
        return this.viewAll || i < this.max
      })
    }
  },
  methods: {
    viewMore() {
      this.viewAll = true
    }
  }
})