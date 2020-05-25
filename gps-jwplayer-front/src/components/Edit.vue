<script src="https://cdn.jwplayer.com/libraries/sbU3eHJm.js"></script>
<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="display-3 text-center mb-3">{{video.title}}</h1>
        <v-row>
          <v-col cols="6">
            <v-select
                    :items="caption_list"
                    label="Choose Caption"
                    item-text="label"
                    @change="changeCaption">
              <v-btn slot="append-outer" style="margin-right: 5px;">Upload vtt...</v-btn>
              <v-btn slot="append-outer" style="margin-right: 5px;"> Auto-gen captions</v-btn>

            </v-select>
            <v-row cols="12">
              <v-col cols="1">
                <v-text-field></v-text-field>
              </v-col>
              <v-col cols="1">
                <v-text-field></v-text-field>
              </v-col>
              <v-col cols="10">
                <v-text-field></v-text-field>
              </v-col>
            </v-row>
            <v-textarea
                    v-model="captionText"
                    rows="30"
            ></v-textarea>

          </v-col>
          <v-col cols="6">
            <div id="video">This text will be replaced with a player.</div>
            <h1 class="display-1 text-center mt-3">Video statistics</h1>
            <v-row cols="12">
              <v-col cols="3">
                <p>Video title</p>
                <p>Video duration</p>

              </v-col>
              <v-col cols="9">
                <p>{{video.title}}</p>
                <p>{{video.duration * 1000 | duration('humanize')}}</p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-card class="pa-2" outlined tile>Some grid feature</v-card>
        <v-snackbar v-model="generalSnack" :color="this.generalSnackColor" :top="false" :timeout="this.generalSnackTimeout">
          {{ generalSnackText }}
          <v-btn color="accent" text @click="generalSnack = false">Close</v-btn>
        </v-snackbar>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
    import Vue from "vue";

    export default {
        data() {
            return {
                generalSnack: false,
                generalSnackColor: "info",
                generalSnackText: "",
                generalSnackTimeout: 2000,
                caption_list: [],
                selectedIndex: 0,
                video: [],
                captionText: '',
            };
        },
        methods: {
            showSnack(color, message) {
                this.generalSnackColor = color;
                this.generalSnackText = message;
                this.generalSnack = true;
            },
            changeCaption(label) {
                var index = this.findWithAttr(this.caption_list, 'label', label) + 1
                jwplayer("video").setCurrentCaptions(index)
                this.$store.dispatch('fetchCaptions', this.video.tracks[index - 1].file)
                .then(() => {
                    this.captionText = this.$store.state.captionText
                })
                .catch(() => {
                    this.showSnack("error", "Caption could not be loaded")
                })

            },
            findWithAttr(array, attr, value) {
                for (var i = 0; i < array.length; i += 1) {
                    if (array[i][attr] === value) {
                        return i;
                    }
                }
                return -1;
            }
        },
        mounted() {
            Vue.loadScript("https://cdn.jwplayer.com/libraries/sbU3eHJm.js")
                .then(() => {
                    this.$store.dispatch('fetchVideo', this.$route.params.id)
                        .then(() => {
                            this.video = this.$store.state.video.playlist[0]
                            jwplayer("video").setup({
                                "file": this.video.sources[0].file,
                                "image": this.video.image,
                                "tracks": this.video.tracks
                            });
                            this.caption_list = this.video.tracks
                            this.caption_list.splice(this.caption_list.length - 1, 1)
                        })
                        .catch(() => {
                            this.showSnack("error", "Failed to load player")
                        })
                })
                .catch(() => {
                    this.showSnack("error", "Failed to load jwplayer")
                })
        }
    };
</script>