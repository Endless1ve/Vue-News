export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formatDate(date) {
      const newDate = new Date(date);
      const day = newDate.getDate();
      const month = this.formatMonth(newDate.getMonth());
      const year = newDate.getFullYear();
      const formattedDate = `${day} ${month}, ${year}`;
      console.log(day);
      return formattedDate;
    },
    formatMonth(month) {
      switch (month) {
        case 0:
          return "Января";
        case 1:
          return "Февраля";
        case 2:
          return "Марта";
        case 3:
          return "Апреля";
        case 4:
          return "Мая";
        case 5:
          return "Июня";
        case 6:
          return "Июля";
        case 7:
          return "Августа";
        case 8:
          return "Сентября";
        case 9:
          return "Октября";
        case 10:
          return "Ноября";
        case 11:
          return "Декабря";
      }
    },
  },
};
