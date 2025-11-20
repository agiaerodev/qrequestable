<template>
  <div>
    <p>page</p>
    <dynamicKanban
      :crudData="import('modules/qrequestable/_crud/requests.vue')"      
      :title="$tr($route.meta.title)"
    />


    <dynamicKanban
      :crudData="import('modules/qrequestable/_crud/requests.vue')"      
      title="'--kanban dynamic test'"
    />
  </div>
</template>
<script>
//Components

import dynamicKanban from 'modules/qsite/_components/master/dynamickanban/index.vue'


export default {
  components: { dynamicKanban },
  data() {
    return {
      showAsKanban: true
    };
  }  
};
</script>
