<template>
  <div>    
    <dynamicKanban
      :crudData="import('modules/qrequestable/_crud/requests.vue')"      
      :title="$tr($route.meta.title)"
    />

    
  </div>
</template>
<script>
//Components

import dynamicKanban from 'modules/qsite/_components/master/dynamickanban/index.vue'


export default {
  components: { dynamicKanban }  
};
</script>
