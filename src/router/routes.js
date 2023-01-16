export default [
  {
    path: '',
    redirect: () => {
        return {name: 'Login'};
    }
  },
  {
    path: '/auth/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "sign in" */ '../views/auth/login.vue')
  },
  {
    path: '/auth/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "sign up" */ '../views/auth/register.vue')
  },
  {
    path: '/auth/forgot-password',
    name: 'ForgotPassword',
    component: () => import(/* webpackChunkName: "forgot password" */ '../views/auth/forgotPassword.vue')
  },
  {
    path: '/auth/change-password',
    name: 'ChangePassword',
    component: () => import(/* webpackChunkName: "change password" */ '../views/auth/changePassword.vue')
  },
  {
    path: '/auth/confirm-email',
    name: 'ConfirmEmail',
    component: () => import(/* webpackChunkName: "confirm email" */ '../views/auth/confirmEmail.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    meta: {
      authRequired: true,
    },
    component: () => import(/* webpackChunkName: "main" */ '../views/dashboard.vue'),
    children: [
      {
        path: '/products',
        name: 'Products',
        component: () => import(/* webpackChunkName: "products" */ '../views/products.vue'),
      },
      {
        path: '/customers',
        name: 'Customers',
        component: () => import(/* webpackChunkName: "customers" */ '../views/customers.vue'),
      },
      {
        path: '/transactions',
        name: 'Transactions',
        component: () => import(/* webpackChunkName: "transactions" */ '../views/transactions.vue'),
      },{
        path: '/geography',
        name: 'Geography',
        component: () => import(/* webpackChunkName: "geography" */ '../views/geography.vue'),
      },
      {
        path: '/overview',
        name: 'Overview',
        component: () => import(/* webpackChunkName: "overview" */ '../views/overview.vue'),
      },
      {
        path: '/daily-sales',
        name: 'Daily',
        component: () => import(/* webpackChunkName: "daily sales" */ '../views/daily.vue'),
      },
      {
        path: '/monthly-sales',
        name: 'Monthly',
        component: () => import(/* webpackChunkName: "monthly sales" */ '../views/monthly.vue'),
      },
      {
        path: '/breakdown',
        name: 'Breakdown',
        component: () => import(/* webpackChunkName: "breakdown" */ '../views/breakdown.vue'),
      },
      {
        path: '/admin',
        name: 'Admin',
        component: () => import(/* webpackChunkName: "admin" */ '../views/admin.vue'),
      },
      {
        path: '/performance',
        name: 'Performance',
        component: () => import(/* webpackChunkName: "performance" */ '../views/performance.vue'),
      },
      {
        path: '/settings',
        name: 'Settings',
        component: () => import(/* webpackChunkName: "settings" */ '../views/settings.vue'),
      }
    ]
  }
]