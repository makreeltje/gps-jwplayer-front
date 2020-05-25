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
              <v-btn slot="append-outer" style="margin-right: 5px;" @click="uploadCaptionModal = true">Upload
              </v-btn>
              <v-btn slot="append-outer" style="margin-right: 5px;" @click="autoGenModal = true"> Auto-gen
              </v-btn>

            </v-select>
            <v-row cols="12">
              <v-col cols="1">
                <p>Start</p>
              </v-col>
              <v-col cols="1">
                <p>End</p>
              </v-col>
              <v-col cols="10">
                <p>Text</p>
              </v-col>
            </v-row>

            <v-row cols="12" v-for="(caption, index) in captionJson" :key="index">
              <v-col cols="1">
                <v-text-field v-model="caption.start"></v-text-field>
              </v-col>
              <v-col cols="1">
                <v-text-field v-model="caption.end"></v-text-field>
              </v-col>
              <v-col cols="10">
                <v-text-field v-model="caption.text"></v-text-field>
              </v-col>
            </v-row>

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
        <v-snackbar v-model="generalSnack" :color="this.generalSnackColor" :top="false"
                    :timeout="this.generalSnackTimeout">
          {{ generalSnackText }}
          <v-btn color="accent" text @click="generalSnack = false">Close</v-btn>
        </v-snackbar>
      </v-col>

    </v-row>

    <div class="testclass">
      <v-dialog v-model="uploadCaptionModal" persistent max-width="600px">
        <V-form name="form" @submit.prevent="uploadCaptions">
          <v-card light flat color="grey lighten-2">
            <v-toolbar color="primary" dark flat>
              <v-spacer></v-spacer>
              <v-toolbar-title>Auto-gen Captions</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field v-model="autoGenCaption.label" label="Caption name*" required></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field v-model="uploadCaption.vttData" label="URL to VTT*"
                                  required></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
              <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="uploadCaptionModal = false">Close</v-btn>
              <v-btn color="blue darken-1" text type="submit">Upload</v-btn>
            </v-card-actions>
          </v-card>
        </V-form>
      </v-dialog>
    </div>

    <div class="testclass">
      <v-dialog v-model="autoGenModal" persistent max-width="600px">
        <V-form name="form" @submit.prevent="autoGenCaptions">
          <v-card light flat color="grey lighten-2">
            <v-toolbar color="primary" dark flat>
              <v-spacer></v-spacer>
              <v-toolbar-title>Auto-gen Captions</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field v-model="autoGenCaption.label" label="Caption name*" required></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field v-model="autoGenCaption.languageCode" label="Language code (ex. en-US, nl-NL)*"
                                  required></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
              <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="autoGenModal = false">Close</v-btn>
              <button v-on:click="autoGenCaption"></button>
              <v-btn color="blue darken-1" text type="submit">Auto-Gen</v-btn>
            </v-card-actions>
          </v-card>
        </V-form>
      </v-dialog>
    </div>

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
                generalSnackTimeout: 5000,
                caption_list: [],
                selectedIndex: 0,
                video: [],
                captionText: '',
                captionJson: [],
                autoGenCaption: {
                    languageCode: '',
                    label: '',
                },
                uploadCaption: {
                    vttData: '',
                    label: '',
                },
                autoGenModal: false,
                uploadCaptionModal: false,
            };
        },
        methods: {
            showSnack(color, message) {
                this.generalSnackColor = color;
                this.generalSnackText = message;
                this.generalSnack = true;
                this.generalSnackTimeout = 5000;
            },
            changeCaption(label) {
                var index = this.findWithAttr(this.caption_list, 'label', label) + 1
                jwplayer("video").setCurrentCaptions(index)
                this.$store.dispatch('fetchCaptionJson', this.video.tracks[index - 1].file)
                    .then(() => {
                        this.captionJson = this.$store.getters.getCaptionJson
                        console.log('done')
                        this.showSnack("success", "Caption loaded successfully")
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
            },
            autoGenCaptions() {
                this.$store.dispatch('autoGenCaptions', {
                    filePath: this.$store.state.video.playlist[0].sources[4].file,
                    languageCode: this.autoGenCaption.languageCode,
                    videoKey: this.$store.state.video.playlist[0].mediaid,
                    label: this.autoGenCaption.label,
                })
                    .then(response => {
                        this.showSnack("success", "Transcription has started")
                    })
                    .catch(error => {
                        this.showSnack("error", "Transcription failed")
                    })
            },
            uploadCaptions() {
                this.$store.dispatch('uploadCaption', {
                    VttData: this.uploadCaption.vttData,
                    video_key: this.$store.state.video.playlist[0].mediaid,
                    kind: 'captions',
                    label: this.uploadCaption.label,
                })
                    .then(() => {
                        console.log("wtkk")
                    })
                    .catch(() => {
                        console.log("wtfkk")
                    })
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
                    this.showSnack("error", "Failed to load JwPlayer")
                })
        },
    };
</script>