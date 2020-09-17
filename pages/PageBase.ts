import { Component, Vue } from 'nuxt-property-decorator';

@Component({
  components: {},
})
export default class PageBase extends Vue {
  private innerWidth = window.innerWidth;
  get isMobile() {
    return this.innerWidth < 832;
  }

  mounted() {
    window.addEventListener('resize', this.onResize);
  }

  destroyed() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize(e: Event) {
    const { innerWidth } = e.target as Window;
    this.innerWidth = innerWidth;
  }
}
