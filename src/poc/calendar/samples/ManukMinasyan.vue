<template>
  <article>
    <h2>Manuk Minasyan</h2>
    <p class="text-info">
      link:
      <a href="https://github.com/ManukMinasyan/vue-functional-calendar">
        https://github.com/ManukMinasyan/vue-functional-calendar
      </a>
    </p>
    <FunctionalCalendar
      v-model="calendarData"
      :configs="calendarConfigs"
      @choseDay="onChoseDay"
      @input="onInput"
    />
    {{ calendarData }}
  </article>
</template>

<script>
import { FunctionalCalendar } from "vue-functional-calendar";

export default {
  components: {
    FunctionalCalendar
  },
  data() {
    return {
      calendarData: {},
      calendarConfigs: {
        sundayStart: false,
        dateFormat: "dd/mm/yyyy",
        isDatePicker: true,
        isMultipleDatePicker: true,
        isDateRange: false
      }
    };
  },
  methods: {
    onChoseDay(e) {
      console.debug("onChoseDay", { evt: e, data: this.calendarData });
    },
    onInput(e) {
      console.debug("onInput", { evt: e, data: this.calendarData });
    }
  }
};
</script>
