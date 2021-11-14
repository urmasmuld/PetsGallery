<template>
  <div class="homepage">
    <div>
      <router-link :to="{ name: 'detail', params: { userId: 'madis' }}">madis</router-link>
    </div>
    <div>
      <router-link :to="{ name: 'detail', params: { userId: 'urmas' }}">urmas</router-link>
    </div>
    <div>
      <router-link :to="{ name: 'detail', params: { userId: 'kaisa' }}">kaisa</router-link>
    </div>
    <div>
      <router-link :to="{ name: 'detail', params: { userId: 'triin' }}">triin</router-link>
    </div>
  </div>
</template>
