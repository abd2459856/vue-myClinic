<template>
    <div>
        <v-sheet tile height="54" class="d-flex">
            <v-btn icon class="ma-2" @click="$refs.calendar.prev()">
                <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn icon class="ma-2" @click="$refs.calendar.next()">
                <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
        </v-sheet>
        <v-sheet height="600">
            <v-calendar ref="calendar" v-model="value" :weekdays="weekday" :type="type" :events="events"
                :event-overlap-mode="mode" :event-overlap-threshold="30" :event-color="getEventColor"
                @click:event="showEvent" @click:date="showday" @change="getEvents"></v-calendar>
        </v-sheet>
    </div>
</template>
<script>
import axios from "axios";
export default {
    data: () => ({
        type: 'month',
        types: ['month', 'week', 'day', '4day'],
        mode: 'stack',
        modes: ['stack', 'column'],
        weekday: [0, 1, 2, 3, 4, 5, 6],
        weekdays: [
            { text: 'Sun - Sat', value: [0, 1, 2, 3, 4, 5, 6] },
            { text: 'Mon - Sun', value: [1, 2, 3, 4, 5, 6, 0] },
            { text: 'Mon - Fri', value: [1, 2, 3, 4, 5] },
            { text: 'Mon, Wed, Fri', value: [1, 3, 5] },
        ],
        value: '',
        events: [],
        colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
        names: ['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party'],
        file: [],
    }),
    methods: {
        showday() {
            this.$router.push({
                path: "/",
                query: { Date: this.value },
            });
        },
        showEvent({ nativeEvent, event }) {
            console.log(event)
            const open = () => {
                this.selectedEvent = event
                this.selectedElement = nativeEvent.target
                this.$router.push({
                    path: "/",
                    query: { Date: this.selectedEvent.end },
                });
            }
            if (this.selectedOpen) {
                this.selectedOpen = false
                requestAnimationFrame(() => requestAnimationFrame(() => open()))
            } else {
                open()
            }
            nativeEvent.stopPropagation()
        },
        async getEvents({ start, end }) {
            const events = []
            // let { data } = await axios
            //     .get(`http://localhost/api-myClinic/index.php/Welcome/get_rendezvous`, {

            //     })
            //     .catch((err) => {
            //         alert(err)
            //     });
            // for (let i = 0; i < data.result.length; i++) {
            //     console.log(data.result[i].Fisrtname);
                // events.push({
                //     name: data.result[i].Fisrtname + ' ' + data.result[i].Yogurt,
                //     start: data.result[i].Savedate,
                //     end: data.result[i].Savedate,
                //     color: this.colors[this.rnd(0, this.colors.length - 1)],
                // })
                events.push({
                    name: 'Frozen Yogurt ทำจมูก',
                    start: '2023-09-02',
                    end: '2023-09-02',
                    color: this.colors[this.rnd(0, this.colors.length - 1)],
                })
                events.push({
                    name: 'Ice cream sandwich ทำจมูก',
                    start: '2023-09-02',
                    end: '2023-09-02',
                    color: this.colors[this.rnd(0, this.colors.length - 1)],
                })
                events.push({
                    name: 'Eclair ทำปาก',
                    start: '2023-09-02',
                    end: '2023-09-02',
                    color: this.colors[this.rnd(0, this.colors.length - 1)],
                })
            // }
            this.events = events
        },
        getEventColor(event) {
            return event.color
        },
        rnd(a, b) {
            return Math.floor((b - a + 1) * Math.random()) + a
        },
    },
}
</script>