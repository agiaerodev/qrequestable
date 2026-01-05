<template>

<div >
  
    <div
      v-if="data?.type"
      class="
        tw-flex
        tw-mt-1
        tw-justify-between
        tw-items-center
      "
    >
      <span
        class="
          tw-mt-4
          tw-text-xs
          tw-text-gray-600
        "
      >
        <b>Tipo * </b> {{ data?.type }}
      </span>
    </div>
    <div
      
      class="
        tw-flex
        tw-mt-1
        tw-justify-between
        tw-items-center
      "
      v-for="field in data?.fields"
      :key="field.id"
    >
      <span
        class="
          tw-text-xs
          tw-text-gray-600
          tw-truncate
        "
        v-if="field.name && typeof field.value !== 'object'"
      >
        <b>{{ field.label || field.name }} *</b>
        <span class="tw-lowercase">{{ field.value }}</span>
      </span>
    </div>

    <div
      class="
        tw-flex
        tw-mt-4
        tw-justify-between
        tw-items-center
      ">
      <span
        class="
          tw-text-xs
          tw-text-gray-600
        ">
          <b>{{ $tr('isite.cms.label.date') }} *</b> {{ data.createdAt }}
      </span>
    </div>


     <footerComponent 
      :data="data"
     />

    </div>


</template>
<script>

  import footerComponent from './footer.vue';


  export default {
    components: {
      footerComponent
    },
    props: {
      data: {
        type: Object,
        default: () => ({})
      },
    }
  }
</script>