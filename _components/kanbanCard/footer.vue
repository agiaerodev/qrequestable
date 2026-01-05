<template>
<div>      
    <figure
      class="
        tw-flex
        tw-mt-4
        tw-cursor-pointer
      "
      v-if="fullName"
      @click.stop
    >
      <img
        class="
          tw-w-6
          tw-h-6
          tw-rounded-xl
          tw-border-2
          tw-border-solid
          tw-border-white
          hover:tw-border-blue-500
        "
        :src="urlAvatar"
      />

      <q-popup-proxy cover :breakpoint="600">
        <div class="tw-bg-white tw-shadow-md tw-rounded tw-p-4 tw-w-48">
          <img
            class="
              tw-w-10
              tw-h-10
              tw-rounded-xl
            "
            :src="urlAvatar"
          />
          <p class="tw-font-semibold tw-mb-2">
            {{ fullName.firstName + ' ' + fullName.lastName }}
          </p>
          <!-- Additional user information can be added here -->
        </div>
      </q-popup-proxy>

      <q-tooltip
        anchor="top left"
        self="bottom left"
        :offset="[10, 10]"
        :delay="100"
      >
        <p>
          {{ fullName.firstName + ' ' + fullName.lastName }}
        </p>
      </q-tooltip>
    </figure>
  </div>


</template>
<script>
  export default {
    props: {
      data: {
        type: Object,
        default: () => ({})
      },
    }, 
    computed: {
      quserState() {
        return this.$store.state.quserAuth
      },
      fullName() {
        const firstName = this.data?.responsible?.firstName || ''
        const lastName = this.data?.responsible?.lastName || ''
        return { firstName, lastName }
      },
      urlAvatar() {
        return  this.data?.responsible?.mediaFiles?.profile?.largeThumb ||
                this.quserState?.userData?.mainImage
      },
    }
  }
</script>