export default {
  requestables: {
    permission: 'requestable.requestables.manage',
    activated: true,
    authenticated: true,
    path: '/requestable/index',
    name: 'qrequestable.main.requestables',
    crud: import('modules/qrequestable/_crud/requests'),
    page: () => import('modules/qcrud/_pages/admin/crudPage'),
    layout: () => import('layouts/master.vue'),
    title: 'requestable.cms.sidebar.mainRequestable',
    icon: 'fal fa-file-signature',
    subHeader: {
      refresh: true,
    }
  },
  newRequestable: {
    permission: 'requestable.requestables.create',
    activated: true,
    authenticated: true,
    path: '/requestable/create',
    name: 'qrequestable.main.requestables.create',
    page: () => import('modules/qrequestable/_pages/main/formRequest'),
    layout: () => import('layouts/master.vue'),
    title: 'requestable.cms.sidebar.mainRequestableCreate',
    icon: 'fal fa-file-signature',
    subHeader: {
      refresh: true,
      breadcrumb : ['mainqrequestable.requestables']
    }
  }
}
