import { mapGetters } from "vuex";

export default {
  props: {
    iconName: {
      type: String,
      required: true,
    },
    width: {
      type: [Number, String],
      default: 30,
    },
    height: {
      type: [Number, String],
      default: 30,
    },
  },
  computed: {
    ...mapGetters({
      isHeaderLight: "header/isHeaderLight",
    }),
    themeClass() {
      return {
        "icon-ligth": this.isHeaderLight,
      };
    },
  },
};
