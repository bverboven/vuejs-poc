<template>
  <article>
    <h2>Nathan Reyes</h2>
    <p class="text-info">
      link:
      <a href="https://vcalendar.io/">
        https://vcalendar.io/
      </a>
    </p>
    <div class="row">
      <div class="col-md-8">
        <Calendar
          :attributes="dateAttributes"
          :columns="2"
          :rows="2"
          @dayclick="onSelectDate"
        />
      </div>
      <div class="col-md-4">
        <DatePicker
          mode="multiple"
          :attributes="dateAttributes"
          v-model="selectedDate"
          @input="onInput"
          @dayclick="onSelectDate"
        >
          <button
            class="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              class="w-4 h-4 fill-current"
            >
              <path
                d="M1 4c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm2 2v12h14V6H3zm2-6h2v2H5V0zm8 0h2v2h-2V0zM5 9h2v2H5V9zm0 4h2v2H5v-2zm4-4h2v2H9V9zm0 4h2v2H9v-2zm4-4h2v2h-2V9zm0 4h2v2h-2v-2z"
              />
            </svg></button
        ></DatePicker>
      </div>
    </div>
  </article>
</template>

<script>
import moment from "moment";
import { Calendar, DatePicker } from "v-calendar";

export default {
  components: {
    Calendar,
    DatePicker
  },
  data() {
    return {
      selectedDate: moment(new Date())
        .add(-5, "days")
        .toDate(),
      dateAttributes: [
        {
          // weekends
          key: "weekends",
          highlight: {
            color: "gray"
          },
          dates: [
            new Date(),
            {
              weekDays: [1, 7]
            }
          ],
          excludeDates: {
            weekDays: [1, 7]
          }
        },
        {
          key: "selected",
          highlight: {
            color: "blue"
          },
          contentStyle: {
            color: "#ffffff"
          },
          dates: [
            // Use date ranges
            {
              start: moment(new Date())
                .add(1, "days")
                .toDate(),
              end: moment(new Date())
                .add(4, "days")
                .toDate()
            },
            // Or single dates
            moment(new Date())
              .add(8, "days")
              .toDate(),
            moment(new Date())
              .add(11, "days")
              .toDate()
          ]
        }
      ]
    };
  },
  methods: {
    onInput(e) {
      console.debug("OnInput", { evt: e });
    },
    onSelectDate(e) {
      console.debug("OnSelectDate", { evt: e });
    }
  },
  mounted() {
    console.debug("Mounted", { selectedDate: this.selectedDate });
  }
};
</script>
