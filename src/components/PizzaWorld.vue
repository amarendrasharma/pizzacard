<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-8 mx-auto">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h3 class="text-primary text-left">
              Order
              <span class="font-weight-bold">Pizza</span>
            </h3>
            <button class="btn btn-primary" @click.prevent="confirm">Confirm Order</button>
          </div>
          <div class="mb-4">
            <div class="d-flex flex-column" style="border: 3px solid gray;">
              <div class="d-flex justify-content-end py-3 align-items-center">
                <i class="fas fa-pizza-slice" style="font-size:15px;color:darkblue;"></i>
                <div class="w-25 text-uppercase" style="color:darkblue;font-size:20px;">Small</div>
                <div class="px-2">
                  <button
                    class="circle-custom"
                    :class="spizzaCount == 0 ? 'btn btn-secondary' : 'btn btn-primary'"
                    style="border-radius:50%"
                    :disabled="spizzaCount == 0 ? true : false"
                    @click="removeSmallPizza"
                  >
                    <i class="fas fa-minus fa-lg"></i>
                  </button>
                  <span
                    class="block mx-3 text-muted"
                    style="font-size:25px;font-weight:500"
                  >{{spizzaCount}}</span>
                  <button
                    :class="(total === 950 || total === 900 )? 'btn btn-secondary' : 'btn btn-danger'"
                    class="circle-custom"
                    style="border-radius:50%"
                    :disabled="(total === 950 || total === 900 )? true : false"
                    @click="addSmallPizza"
                  >
                    <i class="fas fa-plus fa-lg"></i>
                  </button>
                </div>
              </div>
              <div class="mx-2">
                <hr class="hr-custom" />
              </div>
              <div class="d-flex justify-content-end py-3 align-items-center">
                <i class="fas fa-pizza-slice" style="font-size:20px;color:darkblue;"></i>
                <div class="w-25 text-uppercase" style="color:darkblue;font-size:20px;">Medium</div>
                <div class="px-2">
                  <button
                    class="circle-custom align-items-center justify-content-between"
                    :class="mpizzaFunda ?  'btn btn-secondary' : 'btn btn-primary' "
                    :disabled="Boolean(mpizzaFunda) === true ? true : false"
                    style="border-radius:50%"
                    @click="removeMediumPizza"
                  >
                    <i class="fas fa-minus fa-lg"></i>
                  </button>
                  <span
                    class="block mx-3 text-muted"
                    style="font-size:25px;font-weight:500"
                  >{{mpizzaCount}}</span>
                  <button
                    :class="(total === 950 || total === 900 )? 'btn btn-secondary' : 'btn btn-danger'"
                    class="circle-custom align-items-center justify-content-between"
                    style="border-radius:50%"
                    :disabled="(total === 950 || total === 900 )? true : false"
                    @click="addMediumPizza"
                  >
                    <i class="fas fa-plus fa-lg"></i>
                  </button>
                </div>
              </div>
              <div class="mx-2">
                <hr class="hr-custom" />
              </div>
              <div class="d-flex justify-content-end py-3 align-items-center">
                <i class="fas fa-pizza-slice" style="font-size:25px;color:darkblue;"></i>
                <div class="w-25 text-uppercase" style="color:darkblue;font-size:20px;">Large</div>
                <div class="px-2">
                  <button
                    class="circle-custom"
                    :class="Boolean(lpizzaFunda) == true? 'btn btn-secondary' : 'btn btn-primary'"
                    style="border-radius:50%"
                    :disabled=" Boolean(lpizzaFunda) == true ? true : false"
                    @click="removeLargePizza"
                  >
                    <i class="fas fa-minus fa-lg"></i>
                  </button>
                  <span
                    class="block mx-3 text-muted"
                    style="font-size:25px;font-weight:500"
                  >{{lpizzaCount}}</span>
                  <button
                    :class=" lpizzaPriceFunda ? 'btn btn-secondary' : 'btn btn-danger'"
                    class="circle-custom"
                    style="border-radius:50%"
                    :disabled=" lpizzaPriceFunda ? true : false"
                    @click="addLargePizza"
                  >
                    <i class="fas fa-plus fa-lg"></i>
                  </button>
                </div>
              </div>
              <div class="mx-2">
                <hr class="hr-custom" />
              </div>
              <div class="d-flex justify-content-between py-3">
                <div class="px-3">
                  <i class="fas fa-user-alt mr-3" style="color:darkblue"></i>
                  <span style="color:darkblue;font-size:20px;" class="text-uppercase">Adults</span>
                </div>
                <div class="px-2">
                  <button
                    :class=" Number(getAdultCount) <= 1 ? 'btn btn-secondary' : 'btn btn-primary'"
                    :disabled="getAdultCount <= 1 ? true : false"
                    class="circle-custom"
                    style="border-radius:50%"
                    @click="removeAdult"
                  >
                    <i class="fas fa-minus fa-lg"></i>
                  </button>
                  <span
                    class="block mx-3 text-muted"
                    style="font-size:25px;font-weight:500"
                  >{{getAdultCount}}</span>
                  <button
                    :class="(total === 950 || total === 900 )? 'btn btn-secondary' : 'btn btn-danger'"
                    class="circle-custom"
                    style="border-radius:50%"
                    @click.prevent="addAdult"
                    :disabled="(total === 950 || total === 900 )? true : false"
                  >
                    <i class="fas fa-plus fa-lg"></i>
                  </button>
                </div>
              </div>
              <div class="mx-2">
                <hr class="hr-custom" />
              </div>
              <div class="d-flex justify-content-between py-3">
                <div class="px-3">
                  <i class="fas fa-child mr-3" style="color:darkblue"></i>
                  <span style="color:darkblue;font-size:20px;" class="text-uppercase">Children</span>
                </div>
                <div class="px-2">
                  <button
                    :class=" Number(getChildCount) == 0 ? 'btn btn-secondary' : 'btn btn-primary'"
                    class="circle-custom"
                    :disabled="Number(getChildCount) == 0 ? true : false"
                    style="border-radius:50%"
                    @click="removeChild"
                  >
                    <i class="fas fa-minus fa-lg"></i>
                  </button>
                  <span
                    class="block mx-3 text-muted"
                    style="font-size:25px;font-weight:500"
                  >{{getChildCount}}</span>
                  <button
                    :class="(total === 950 || total === 900 )? 'btn btn-secondary' : 'btn btn-danger'"
                    class="circle-custom"
                    style="border-radius:50%"
                    :disabled="(total === 950 || total === 900 )? true : false"
                    @click="addChild"
                  >
                    <i class="fas fa-plus fa-lg"></i>
                  </button>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-between py-3">
              <div class="px-3 h5" style="color:darkblue;font-size:20px;">
                Order
                <span class="font-weight-bold" style="color:darkblue;font-size:20px;">Total</span>
              </div>
              <div class="px-3 h5">
                <span class="text-muted" style="font-size:25px;font-weight:500">{{total}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      increment: 0,
      adult: 1,
      children: 1,
      spizza: {
        cost: 150,
        count: 1
      },
      mpizza: {
        cost: 200,
        count: 1
      },
      lpizza: {
        cost: 300,
        count: 0
      },
      orderPrice: 0
    };
  },
  watch: {},
  computed: {
    total() {
      return this.$store.getters.total;
    },
    mpizzaCount() {
      return this.$store.getters.mpizzaCount;
    },
    spizzaCount() {
      return this.$store.getters.spizzaCount;
    },
    lpizzaCount() {
      return this.$store.getters.lpizzaCount;
    },
    getAdultCount() {
      return this.$store.getters.getAdultCount;
    },
    getChildCount() {
      return this.$store.getters.getChildCount;
    },
    mpizzaFunda() {
      let disabledMe;
      if (
        this.$store.getters.mpizzaCount == 1 &&
        this.$store.getters.getAdultCount == 1
      ) {
        disabledMe = true;
      }
      if (
        this.$store.getters.lpizzaCount > 0 &&
        this.$store.getters.mpizzaCount == 1 &&
        this.$store.getters.getAdultCount == 1
      ) {
        disabledMe = true;
      }

      if (
        this.$store.getters.getAdultCount == 1 ||
        this.$store.getters.mpizzaCount == 0
      ) {
        disabledMe = true;
      }
      return disabledMe;
    },
    lpizzaFunda() {
      let disabledMe;
      if (
        this.$store.getters.spizzaCount == 0 &&
        this.$store.getters.mpizzaCount == 0 &&
        this.$store.getters.getAdultCount <= 2
      ) {
        disabledMe = true;
      }
      if (this.$store.getters.lpizzaCount == 0) {
        disabledMe = true;
      }
      if (
        this.$store.getters.spizzaCount == 0 &&
        this.$store.getters.mpizzaCount == 0 &&
        this.$store.getters.lpizzaCount >= 2 &&
        this.$store.getters.getAdultCount > 2
      ) {
        disabledMe = true;
      }

      if (this.$store.getters.getAdultCount <= 2) {
        disabledMe = true;
      }

      return disabledMe;
    },
    lpizzaPriceFunda() {
      let disabledMe;
      if (
        this.$store.getters.total >= 950 ||
        this.$store.getters.total >= 900 ||
        this.$store.getters.total >= 800
      ) {
        disabledMe = true;
      }
      return disabledMe;
    }
  },
  methods: {
    addSmallPizza() {
      this.$store.dispatch("spizzaincrement");
    },
    addMediumPizza() {
      this.$store.dispatch("mpizzaincrement");
    },
    addLargePizza() {
      this.$store.dispatch("lpizzaincrement");
    },
    addAdult() {
      this.$store.dispatch("adultincrement");
    },
    addChild() {
      this.$store.dispatch("childincrement");
    },
    removeSmallPizza() {
      this.$store.dispatch("spizzadecrement");
    },
    removeMediumPizza() {
      this.$store.dispatch("mpizzadecrement");
    },
    removeLargePizza() {
      this.$store.dispatch("lpizzadecrement");
    },

    removeAdult() {
      this.$store.dispatch("adultdecrement");
    },
    removeChild() {
      this.$store.dispatch("childdecrement");
    },
    confirm() {
      let that = this;
      this.$dialog
        .confirm("Are you sure ?")
        .then(function(dialog) {
          if (dialog) {
            that.$swal("Yaah!", "Your order is placed!", "success");
          }
        })
        .catch(function() {
          console.log("hhhll");
        });
    }
  }
};
</script>
<style>
.circle-custom {
  height: 42px;
  width: 42px;
  border-radius: 50%;
  display: inline-block;
}
hr.hr-custom {
  border: 1px solid gray;
}

.btn-primary {
  background-color: rgb(0, 0, 143) !important;
  border-color: rgb(0, 0, 143) !important;
}
</style>