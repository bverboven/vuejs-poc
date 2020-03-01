<template>
  <article>
    <calendar-view
      :show-date="showDate"
      :events="items"
      @drop-on-date="onDrop"
      @click-date="onClickDay"
      @click-event="onClickItem"
    >
      <calendar-view-header
        slot="header"
        slot-scope="t"
        :header-props="t.headerProps"
        @input="setShowDate"
      />
    </calendar-view>
    {{ showDate }}
    <p>
      <label>Message: </label>
      {{ message }}
    </p>
    <p>
        <label>Output: </label>
        <pre>{{ output }}</pre>
    </p>
  </article>
</template>

<script>
import {
  CalendarView,
  CalendarViewHeader,
  CalendarMathMixin
} from "vue-simple-calendar";
require("vue-simple-calendar/static/css/default.css");
require("vue-simple-calendar/static/css/holidays-us.css");

export default {
  mixins: [CalendarMathMixin],
  data: function() {
    return {
      showDate: new Date(),
      startingDayOfWeek: 0,
      disablePast: false,
      disableFuture: false,
      displayPeriodUom: "month",
      items: [],
      message: "",
      output: null
    };
  },
  components: {
    CalendarView,
    CalendarViewHeader
  },
  methods: {
    onClickDay(d) {
      this.message = `You selected: ${d.toLocaleDateString()}`;
      this.output = d;
    },
    onClickItem(e) {
      this.message = `You clicked: ${e.title}`;
      this.output = e;
    },
    onDrop(item, date) {
      this.message = `You dropped ${item.id} on ${date.toLocaleDateString()}`;
      // Determine the delta between the old start date and the date chosen,
      // and apply that delta to both the start and end date to move the item.
      const eLength = this.dayDiff(item.startDate, date);
      item.originalEvent.startDate = this.addDays(item.startDate, eLength);
      item.originalEvent.endDate = this.addDays(item.endDate, eLength);
    },
    setShowDate(d) {
      this.showDate = d;
    },
    thisMonth(d, h, m) {
      const t = new Date();
      return new Date(t.getFullYear(), t.getMonth(), d, h || 0, m || 0);
    }
  },
  created() {
    this.items = [
      {
        id: "e0",
        startDate: "2020-01-05"
      },
      {
        id: "e1",
        startDate: this.thisMonth(15, 18, 30)
      },
      {
        id: "e2",
        startDate: this.thisMonth(15),
        title: "Single-day item with a long title"
      },
      {
        id: "e3",
        startDate: this.thisMonth(7, 9, 25),
        endDate: this.thisMonth(10, 16, 30),
        title: "Multi-day item with a long title and times"
      },
      {
        id: "e4",
        startDate: this.thisMonth(20),
        title: "My Birthday!",
        classes: "birthday",
        url: "https://en.wikipedia.org/wiki/Birthday"
      },
      {
        id: "e5",
        startDate: this.thisMonth(5),
        endDate: this.thisMonth(12),
        title: "Multi-day item",
        classes: "purple"
      },
      {
        id: "foo",
        startDate: this.thisMonth(29),
        title: "Same day 1"
      },
      {
        id: "e6",
        startDate: this.thisMonth(29),
        title: "Same day 2",
        classes: "orange"
      },
      {
        id: "e7",
        startDate: this.thisMonth(29),
        title: "Same day 3"
      },
      {
        id: "e8",
        startDate: this.thisMonth(29),
        title: "Same day 4",
        classes: "orange"
      },
      {
        id: "e9",
        startDate: this.thisMonth(29),
        title: "Same day 5"
      },
      {
        id: "e10",
        startDate: this.thisMonth(29),
        title: "Same day 6",
        classes: "orange"
      },
      {
        id: "e11",
        startDate: this.thisMonth(29),
        title: "Same day 7"
      }
    ];
  }
};
</script>

<style scoped>
.calendar-controls {
  margin-right: 1rem;
  min-width: 14rem;
  max-width: 14rem;
}

.calendar-parent {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-x: hidden;
  overflow-y: hidden;
  max-height: 80vh;
  background-color: white;
}

/* For long calendars, ensure each week gets sufficient height. The body of the calendar will scroll if needed */
.cv-wrapper.period-month.periodCount-2 .cv-week,
.cv-wrapper.period-month.periodCount-3 .cv-week,
.cv-wrapper.period-year .cv-week {
  min-height: 6rem;
}

/* These styles are optional, to illustrate the flexbility of styling the calendar purely with CSS. */

/* Add some styling for items tagged with the "birthday" class */
.theme-default .cv-event.birthday {
  background-color: #e0f0e0;
  border-color: #d7e7d7;
}

.theme-default .cv-event.birthday::before {
  content: "\1F382"; /* Birthday cake */
  margin-right: 0.5em;
}
</style>
