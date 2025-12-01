import { defineStore } from "pinia";
import {
  onSnapshot,
  collection,
  doc,
  setDoc,
  query,
  where,
  Unsubscribe,
} from "firebase/firestore";
import { User } from "firebase/auth";
import { db } from "../firebase";

export interface BeverageType {
  id: string;
  name: string;
  config: {
    temp: string;
    baseId: string;
    creamerId: string;
    syrupId: string;
  };
  userId: string;
}

export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    // Auth
    user: null as User | null,

    // Firestore listener cancel function
    _bevUnsub: null as Unsubscribe | null,

    // Beverage data
    beverages: [] as BeverageType[],
    currentBeverage: null as BeverageType | null,

    // Options
    temps: ["Cold", "Hot"],
    currentTemp: "Cold",

    bases: [] as any[],
    currentBase: null as any,

    creamers: [] as any[],
    currentCreamer: null as any,

    syrups: [] as any[],
    currentSyrup: null as any,

    // UI naming buffer
    currentName: "",
  }),

  actions: {
    async init() {
      const loadCollection = async (name: string) => {
        const snap = await import("firebase/firestore").then(({ getDocs }) =>
          getDocs(collection(db, name))
        );
        return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      };

      this.bases = await loadCollection("bases");
      this.creamers = await loadCollection("creamers");
      this.syrups = await loadCollection("syrups");

      this.currentBase = this.bases[0] || null;
      this.currentCreamer = this.creamers[0] || null;
      this.currentSyrup = this.syrups[0] || null;
    },

    /**
     * ----------------------------
     *   AUTH + LISTENER CONTROL
     * ----------------------------
     */
    setUser(user: User | null) {
      // Stop previous listener if any
      if (this._bevUnsub) {
        this._bevUnsub();
        this._bevUnsub = null;
      }

      this.user = user;

      // Not logged in → clear beverages
      if (!user) {
        this.beverages = [];
        this.currentBeverage = null;
        return;
      }

      // Logged in → start Firestore listener
      const q = query(
        collection(db, "beverages"),
        where("userId", "==", user.uid)
      );

      this._bevUnsub = onSnapshot(q, (snap) => {
        this.beverages = snap.docs.map((d) => ({
          id: d.id,
          ...d.data(),
        })) as BeverageType[];

        // Maintain currentBeverage selection
        if (
          this.currentBeverage &&
          this.beverages.some((b) => b.id === this.currentBeverage!.id)
        ) {
          this.currentBeverage = this.beverages.find(
            (b) => b.id === this.currentBeverage!.id
          )!;
        } else {
          this.currentBeverage = null;
        }
      });
    },

    /**
     * ----------------------------
     *   MAKE BEVERAGE
     * ----------------------------
     */
    async makeBeverage(): Promise<string> {
      if (!this.user) return "No user logged in, please sign in first.";

      if (
        !this.currentTemp ||
        !this.currentBase ||
        !this.currentCreamer ||
        !this.currentSyrup ||
        !this.currentName.trim()
      ) {
        return "Please complete all beverage options and the name before making a beverage.";
      }

      const id = `${this.user.uid}_${this.currentName.replace(/\s+/g, "_")}`;

      const beverage: BeverageType = {
        id,
        name: this.currentName.trim(),
        userId: this.user.uid,
        config: {
          temp: this.currentTemp,
          baseId: this.currentBase.id,
          creamerId: this.currentCreamer.id,
          syrupId: this.currentSyrup.id,
        },
      };

      // Optimistic UI update
      const existing = this.beverages.findIndex((b) => b.id === id);
      if (existing >= 0) {
        this.beverages[existing] = beverage;
      } else {
        this.beverages.push(beverage);
      }

      await setDoc(doc(db, "beverages", id), beverage);

      this.currentBeverage = beverage;

      return `Beverage "${beverage.name}" made successfully!`;
    },

    /**
     * ----------------------------
     *   SHOW BEVERAGE IN UI
     * ----------------------------
     */
    showBeverage() {
      if (!this.currentBeverage) return;

      const { temp, baseId, creamerId, syrupId } = this.currentBeverage.config;

      this.currentTemp = temp;
      this.currentBase = this.bases.find((b) => b.id === baseId) || null;
      this.currentCreamer = this.creamers.find((c) => c.id === creamerId) || null;
      this.currentSyrup = this.syrups.find((s) => s.id === syrupId) || null;
    },
  },

  persist: true,
});
