<script src="https://cdn.jwplayer.com/libraries/sbU3eHJm.js"></script>
<template>
  <v-container>
    <v-row justify="center">
      <v-col sm="10">
        <v-row>
          <v-col cols="6">
            <v-select
                    :items="caption_select"
                    label="Overflow Btn"
                    @change="changedCaption"
            ></v-select>
          </v-col>
          <v-col cols="6">
            <div id="video">This text will be replaced with a player.</div>
          </v-col>
        </v-row>
        <v-card class="pa-2" outlined tile>Some grid feature</v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
    export default {
        data() {
            return {
                generalSnack: false,
                generalSnackColor: "info",
                generalSnackText: "",
                generalSnackTimeout: 2000,
                caption_select: [],
                caption_element: [],
                captions: null,
                name: ''
            };
        },
        methods: {
            showSnack(color, message) {
                this.generalSnackColor = color;
                this.generalSnackText = message;
                this.generalSnack = true;
            },
            changedCaption(caption) {
                console.log(caption)
                this.caption_element.find(this.searchCaption(caption, this.caption_element))
                console.log(this.caption_element.find(this.searchCaption))
            },
            searchCaption(captionArray) {
                return captionArray.label === 'new 6';
            }
        },
        mounted() {
            this.showSnack("info", "Welcome " + localStorage.name);
            this.$store.dispatch('fetchVideo', this.$route.params.id)
            .then(() => {
                jwplayer("video").setup({
                    "file": this.$store.state.video.playlist[0].sources[0].file,
                    "image": this.$store.state.video.playlist[0].image,
                    "tracks": [{
                        "kind": "captions",
                        "file": '/assets/files/new6.vtt',
                        "label": "Kutje"
                    }]
                });
                // this.caption_select = this.$store.state.video.playlist[0].tracks(label => label.label)
                this.captions = this.$store.state.video
                // console.log(JSON.stringify(this.captions))
                for (var i = 0; i < this.captions.playlist[0].tracks.length; i++) {
                    console.log(this.captions.playlist[0].tracks[i].label);
                    if (this.captions.playlist[0].tracks[i].label != null)
                    {
                        this.caption_select.push(this.captions.playlist[0].tracks[i].label)
                        this.caption_element.push(this.captions.playlist[0].tracks[i])
                    }


                }
                console.log(JSON.stringify(this.caption_element))
                /*console.log(JSON.stringify(this.captions.map(caption => caption.playlist[0].tracks)))
                this.caption_select = objArray.map(caption => this.$store.state.video.playlist[0].tracks)*/
                }
            )
        }
    };
</script>