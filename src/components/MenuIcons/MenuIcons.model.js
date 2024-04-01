import { mapGetters } from "vuex";

import IconBase from "@/components/UI/IconBase/IconBase.vue";
import ProfileIcon from "@/components/UI/icons/ProfileIcon/ProfileIcon.vue";
import SettingsIcon from "@/components/UI/icons/SettingsIcon/SettingsIcon.vue";
import ExitIcon from "@/components/UI/icons/ExitIcon/ExitIcon.vue";

export default {
  components: {
    IconBase,
    ProfileIcon,
    SettingsIcon,
    ExitIcon,
  },
  computed: {
    ...mapGetters({
      isAuth: "auth/isAuth",
    }),
  },
};
