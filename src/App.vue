<template>
  <div>
    <Beverage :isIced="beverageStore.currentTemp === 'Cold'" />

    <!-- Temperature -->
    <ul v-if="beverageStore.user">
      <li>
        <template v-for="temp in beverageStore.temps" :key="temp">
          <label>
            <input
              type="radio"
              name="temperature"
              :value="temp"
              v-model="beverageStore.currentTemp"
            />
            {{ temp }}
          </label>
        </template>
      </li>
    </ul>

    <!-- Bases -->
    <ul v-if="beverageStore.user">
      <li>
        <template v-for="b in beverageStore.bases" :key="b.id">
          <label>
            <input
              type="radio"
              name="bases"
              :value="b"
              v-model="beverageStore.currentBase"
            />
            {{ b.name }}
          </label>
        </template>
      </li>
    </ul>

    <!-- Creamers -->
    <ul v-if="beverageStore.user">
      <li>
        <template v-for="c in beverageStore.creamers" :key="c.id">
          <label>
            <input
              type="radio"
              name="creamers"
              :value="c"
              v-model="beverageStore.currentCreamer"
            />
            {{ c.name }}
          </label>
        </template>
      </li>
    </ul>

    <!-- Syrups -->
    <ul v-if="beverageStore.user">
      <li>
        <template v-for="s in beverageStore.syrups" :key="s.id">
          <label>
            <input
              type="radio"
              name="syrups"
              :value="s"
              v-model="beverageStore.currentSyrup"
            />
            {{ s.name }}
          </label>
        </template>
      </li>
    </ul>

    <!-- AUTH UI -->
    <div class="auth-row">
      <!-- WHEN LOGGED OUT -->
      <button v-if="!beverageStore.user" @click="withGoogle">
        Sign in with Google
      </button>

      <!-- WHEN LOGGED IN -->
      <div v-else>
        <span class="user-label">
          {{ beverageStore.user.email }}
        </span>

        <button @click="signOutUser">Sign out</button>
      </div>
    </div>

    <!-- Only show controls if logged in -->
    <div v-if="beverageStore.user">
      <input
        v-model="beverageStore.currentName"
        type="text"
        placeholder="Beverage Name"
      />

      <button
        @click="handleMakeBeverage"
        :disabled="!beverageStore.user"
      >
        🍺 Make Beverage
      </button>
    </div>

    <p v-if="message" class="status-message">
      {{ message }}
    </p>

    <!-- Saved beverages list -->
    <div v-if="beverageStore.user" style="margin-top: 20px">
      <template
        v-for="beverage in beverageStore.beverages"
        :key="beverage.id"
      >
        <input
          type="radio"
          :value="beverage"
          v-model="beverageStore.currentBeverage"
          @change="beverageStore.showBeverage()"
        />
        <label>{{ beverage.name }}</label>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import Beverage from "./components/Beverage.vue";
import { useBeverageStore } from "./stores/beverageStore";

const beverageStore = useBeverageStore();
onMounted(() => {
  beverageStore.init();
});

const message = ref("");

const showMessage = (txt: string) => {
  message.value = txt;
  setTimeout(() => {
    message.value = "";
  }, 5000);
};

const withGoogle = async () => {
  try {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  } catch (err: any) {
    showMessage("Sign-in failed: " + err.message);
  }
};

const signOutUser = async () => {
  await signOut(getAuth());
  beverageStore.setUser(null);
};

onMounted(() => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    beverageStore.setUser(user);
  });
});
const handleMakeBeverage = async () => {
  const txt = await beverageStore.makeBeverage();
  showMessage(txt);
};

</script>

<style lang="scss">
body,
html {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #6e4228;
  background: linear-gradient(to bottom, #6e4228 0%, #956f5a 100%);
}

ul {
  list-style: none;
}

.auth-row {
  margin-top: 10px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.user-label {
  color: #ffffff;
  font-size: 0.9rem;
}

.hint {
  margin-top: 4px;
  color: #ffffff;
  font-size: 0.85rem;
}

.status-message {
  margin-top: 8px;
  padding: 6px 10px;
  border-radius: 4px;
  background: #fff3cd;
  border: 1px solid #ffeeba;
  color: #856404;
  font-size: 0.9rem;
}
</style>