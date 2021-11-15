<template>
  <div class="homepage">
    <div>
      <router-link :to="{ name: 'detail', params: { userId: 'Madis' }}">madis</router-link>
    </div>
    <div>
      <router-link :to="{ name: 'detail', params: { userId: 'Urmas' }}">urmas</router-link>
    </div>
    <div>
      <router-link :to="{ name: 'detail', params: { userId: 'Kaisa' }}">kaisa</router-link>
    </div>
    <div>
      <router-link :to="{ name: 'detail', params: { userId: 'Triin' }}">triin</router-link>
    </div>
  </div>
</template>
