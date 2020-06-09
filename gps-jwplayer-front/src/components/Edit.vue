<script src="https://cdn.jwplayer.com/libraries/sbU3eHJm.js"></script>
<template>
  <v-container fluid class="px-12">
    <v-row>
      <v-col cols="12">
        <h1 class="display-3 text-center mb-3">{{video.title}}</h1>
        <v-row>
          <v-col cols="6">
            <v-select
                    :items="captions.captionList"
                    label="Choose Caption"
                    item-text="label"
                    solo
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
              <v-col cols="1">
                <p>Voice</p>
              </v-col>
              <v-col cols="9">
                <p>Text</p>
              </v-col>
            </v-row>

            <div style="overflow-y: scroll;overflow-x: hidden; height: 600px;">
              <v-row cols="12" v-for="(caption, index) in captions.caption.VttData.cues" :key="index">
                <v-col cols="1">
                  <v-text-field solo v-model="caption.start" :rules="noCommaRule"></v-text-field>
                </v-col>
                <v-col cols="1">
                  <v-text-field solo v-model="caption.end" :rules="noCommaRule"></v-text-field>
                </v-col>
                <v-col cols="1">
                  <v-text-field solo v-model="caption.voice"></v-text-field>
                </v-col>
                <v-col cols="8">
                  <v-text-field solo v-model="caption.text"></v-text-field>
                </v-col>
              </v-row>
            </div>
            <v-btn @click="saveEditedCaptions">Save</v-btn>
            <v-btn slot="append-outer" @click="translateModal = true" style="margin-left: 5px;">Translate</v-btn>
            <v-btn slot="append-outer" @click="addCaptionLine" style="margin-left: 5px;">Add Line</v-btn>

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
        <v-snackbar v-model="snack.generalSnack" :color="this.snack.generalSnackColor" :top="false"
                    :timeout="this.snack.generalSnackTimeout">
          {{ snack.generalSnackText }}
          <v-btn text @click="snack.generalSnack = false" class="font-weight-bold">Close</v-btn>
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
                    <v-text-field v-model="uploadCaption.label" label="Caption name*" required></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field v-model="uploadCaption.newLanguage" label="Language (ex. nl, en, de etc.)*" required></v-text-field>
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
              <v-btn color="blue darken-1" text type="submit">Auto-Gen</v-btn>
            </v-card-actions>
          </v-card>
        </V-form>
      </v-dialog>
    </div>

    <div class="testclass">
      <v-dialog v-model="translateModal" persistent max-width="600px">
        <V-form name="form" @submit.prevent="autoTranslateCaptions">
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
                    <v-text-field v-model="translationInfo.sourceLanguage" label="Source" required></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field v-model="translationInfo.targetLanguage" label="Target"
                                  required></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
              <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="translateModal = false">Close</v-btn>
              <v-btn color="blue darken-1" text type="submit">Translate</v-btn>
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
                snack: {
                    generalSnack: false,
                    generalSnackColor: "info",
                    generalSnackText: "",
                    generalSnackTimeout: 5000,
                },

                selectedIndex: 0,
                video: [],
                autoGenCaption: {
                    languageCode: '',
                    label: '',
                },
                uploadCaption: {
                    label: '',
                    newLanguage: '',
                },
                autoGenModal: false,
                uploadCaptionModal: false,
                translateModal: false,
                captions: {
                    trackLabel: '',
                    trackFile: '',
                    captionList: [],
                    caption: {
                        "VttData": {
                            "cues": []
                        }
                    }
                },
                noCommaRule:
                    [value => {
                        const pattern = /^[^,]+$/;
                        return pattern.test(value) || "No comma's allowed";
                    }, value => {
                        const pattern = /(?<=^| )\d+(\.\d+)?(?=$| )/;
                        return pattern.test(value) || "Only float values";
                    }],
                translationInfo: {
                    targetLanguage: '',
                    sourceLanguage: '',
                }
            }

        },
        methods: {
            showSnack(color, message) {
                this.snack.generalSnackColor = color;
                this.snack.generalSnackText = message;
                this.snack.generalSnack = true;
                this.snack.generalSnackTimeout = 5000;
            },
            changeCaption(label) {

                var index = this.findWithAttr(this.captions.captionList, 'label', label) + 1
                jwplayer("video").setCurrentCaptions(index)
                this.$store.dispatch('fetchCaptionJson', this.video.tracks[index - 1].file)
                    .then(() => {

                        this.captions.trackFile = this.video.tracks[index - 1].file
                        this.captions.trackLabel = this.video.tracks[index - 1].label
                        this.captions.caption = this.$store.getters.getCaptionJson
                        console.log(this.captions.caption.VttData.cues)

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
                let audioFileIndex = this.findWithAttr(this.$store.state.video.playlist[0].sources, 'label', 'AAC Audio')
                this.$store.dispatch('autoGenCaptions', {
                    filePath: this.$store.state.video.playlist[0].sources[audioFileIndex].file,
                    languageCode: this.autoGenCaption.languageCode,
                    videoKey: this.$store.state.video.playlist[0].mediaid,
                    label: this.autoGenCaption.label,
                })
                    .then(() => {
                        this.showSnack("success", "Transcription has started")
                    })
                    .catch(() => {
                        this.showSnack("error", "Transcription failed")
                    })
            },
            uploadCaptions() {
                this.$store.dispatch('uploadCaption', {
                    VttData: this.captions.caption.VttData.cues,
                    video_key: this.$store.state.video.playlist[0].mediaid,
                    kind: 'captions',
                    label: this.uploadCaption.label,
                    language: this.uploadCaption.newLanguage
                })
            },
            saveEditedCaptions() {
                this.$store.dispatch('saveEditedCaptions',
                    {
                        VttLink: this.captions.trackFile,
                        VttData: this.captions.caption.VttData.cues,
                        label: this.captions.trackLabel,
                    })
                    .then(() => {
                        this.showSnack('success', 'Changes has been saved, it will take about 10 minutes')
                    })
                    .catch(() => {
                        this.showSnack('error', 'Save failed')
                    })
            },
            autoTranslateCaptions() {
                this.$store.dispatch('autoTranslateCaptions',
                    {
                        VttData: this.captions.caption.VttData.cues,
                        targetLanguage: this.translationInfo.targetLanguage,
                        kind: 'captions',
                        sourceLanguage: this.translationInfo.sourceLanguage,
                    })
                .then(() => {
                    console.log(JSON.stringify(this.$store.state.translatedCaptions))

                    this.captions.caption.VttData.cues = this.$store.state.translatedCaptions
                    console.log(JSON.stringify(this.captions.caption))
                })
            },
            addCaptionLine() {
                this.captions.caption.VttData.cues.push(
                    {
                        "end": 0,
                        "identifier": "",
                        "start": 0,
                        "text": "",
                        "voice": ""
                    }
                )
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
                            this.captions.captionList = this.video.tracks
                            this.captions.captionList.splice(this.captions.captionList.length - 1, 1)
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