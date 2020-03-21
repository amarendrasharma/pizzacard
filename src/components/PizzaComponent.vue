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
                    :class="spizza.count == 0 ? 'btn btn-secondary' : 'btn btn-primary'"
                    style="border-radius:50%"
                    :disabled="spizza.count == 0 ? true : false"
                    @click="removeSmallPizza"
                  >
                    <i class="fas fa-minus fa-lg"></i>
                  </button>
                  <span
                    class="block mx-3 text-muted"
                    style="font-size:25px;font-weight:500"
                  >{{spizza.count}}</span>
                  <button
                    class="btn btn-danger circle-custom"
                    style="border-radius:50%"
                    @click="addSmallPizza"
                  >
                    <i class="fas fa-plus fa-lg"></i>
                  </button>
                </div>
              </div>
              <div class="d-flex justify-content-end py-3 align-items-center">
                <i class="fas fa-pizza-slice" style="font-size:20px;color:darkblue;"></i>
                <div class="w-25 text-uppercase" style="color:darkblue;font-size:20px;">Medium</div>
                <div class="px-2">
                  <button
                    class="circle-custom align-items-center justify-content-between"
                    :class="mpizza.count ==0 ? 'btn btn-secondary' : 'btn btn-primary'"
                    :disabled="mpizza.count == 0 ? true : false"
                    style="border-radius:50%"
                    @click="removeMediumPizza"
                  >
                    <i class="fas fa-minus fa-lg"></i>
                  </button>
                  <span
                    class="block mx-3 text-muted"
                    style="font-size:25px;font-weight:500"
                  >{{mpizza.count}}</span>
                  <button
                    class="btn btn-danger circle-custom align-items-center justify-content-between"
                    style="border-radius:50%"
                    @click="addMediumPizza"
                  >
                    <i class="fas fa-plus fa-lg"></i>
                  </button>
                </div>
              </div>
              <div class="d-flex justify-content-end py-3 align-items-center">
                <i class="fas fa-pizza-slice" style="font-size:25px;color:darkblue;"></i>
                <div class="w-25 text-uppercase" style="color:darkblue;font-size:20px;">Large</div>
                <div class="px-2">
                  <button
                    class="circle-custom"
                    :class="lpizza.count == 0 ? 'btn btn-secondary' : 'btn btn-primary'"
                    style="border-radius:50%"
                    :disabled="lpizza.count == 0 ? true : false"
                    @click="removeLargePizza"
                  >
                    <i class="fas fa-minus fa-lg"></i>
                  </button>
                  <span
                    class="block mx-3 text-muted"
                    style="font-size:25px;font-weight:500"
                  >{{lpizza.count}}</span>
                  <button
                    class="btn btn-danger circle-custom"
                    style="border-radius:50%"
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
                    :class=" Number(adult) <= 1 ? 'btn btn-secondary' : 'btn btn-primary'"
                    :disabled="adult == 1 ? true : false"
                    class="circle-custom"
                    style="border-radius:50%"
                    @click="removeAdult"
                  >
                    <i class="fas fa-minus fa-lg"></i>
                  </button>
                  <span
                    class="block mx-3 text-muted"
                    style="font-size:25px;font-weight:500"
                  >{{adult}}</span>
                  <button
                    class="btn btn-danger circle-custom"
                    style="border-radius:50%"
                    @click.prevent="addAdult"
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
                    :class=" Number(children) == 0 ? 'btn btn-secondary' : 'btn btn-primary'"
                    class="circle-custom"
                    :disabled="children == 0 ? true : false"
                    style="border-radius:50%"
                    @click="removeChild"
                  >
                    <i class="fas fa-minus fa-lg"></i>
                  </button>
                  <span
                    class="block mx-3 text-muted"
                    style="font-size:25px;font-weight:500"
                  >{{children}}</span>
                  <button
                    class="btn btn-danger circle-custom"
                    style="border-radius:50%"
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
  computed: {
    total(oldValue) {
      let total = this.totalPrice();
      if (total < 200 || total > 1000) {
        this.$swal(
          "oops!!",
          "you have to place order between of Rs. 200 && 1000",
          "error"
        );
        total = oldValue;
        return total;
      }
      return total;
    }
  },
  methods: {
    totalPrice() {
      let total =
        this.spizza.cost * this.spizza.count +
        this.mpizza.cost * this.mpizza.count +
        this.lpizza.cost * this.lpizza.count;
      return total;
    },
    countAdult(countBY) {
      this.adult = this.adult + countBY;
    },
    countChild(countBY) {
      this.children = this.children + countBY;
    },
    addSmallPizza() {
      this.spizza.count += 1;

      if (this.spizza.count >= 2) {
        this.spizza.count = 0;
        this.mpizza.count += 1;
        if (this.mpizza.count >= 2) {
          this.lpizza.count += 1;
          this.adult += 1;
          this.mpizza.count = 0;
        }
      }
      this.countChild(1);
    },
    removeSmallPizza() {
      if ((this.total < 200) & (this.total > 1000)) {
        this.spizza.count -= 1;
        this.children -= 1;
      } else {
        this.$swal("oops!!", "not allowed,minimun order limit is 200", "error");
      }
    },
    addMediumPizza() {
      this.mpizza.count += 1;
      this.countAdult(1);
      if (this.mpizza.count >= 2) {
        this.mpizza.count = 0;
        this.lpizza.count += 1;
      }
    },
    removeMediumPizza() {
      if (this.mpizza.count >= 1) {
        this.mpizza.count -= 1;
        if (this.adult > 2) {
          this.adult -= 1;
        }
      } else {
        this.$swal("oops!!", "not allowed,minimun order limit is 200", "error");
      }
      if (this.adult == 1 && this.children > 2) {
        this.children -= 2;
      }
    },
    removeLargePizza() {
      this.lpizza.count -= 1;
      this.adult -= 2;
    },
    addLargePizza() {
      this.lpizza.count += 1;
      this.countAdult(2);
    },

    addChild() {
      this.children += 1;
      this.spizza.count += 1;
      if (this.spizza.count >= 2) {
        this.spizza.count = 0;
        this.mpizza.count += 1;
        if (this.mpizza.count >= 2) {
          this.lpizza.count += 1;
          this.adult += 1;
          this.mpizza.count = 0;
        }
      }
    },
    removeChild() {
      if (this.children > 0) {
        this.children -= 1;
        if (this.spizza.count >= 1) {
          this.spizza.count -= 1;
        }
      } else {
        this.$swal("oops!!", "not allowed,minimun order limit is 200", "error");
      }
    },
    addAdult() {
      this.adult += 1;
      this.mpizza.count += 1;
      if (this.mpizza.count >= 2) {
        this.mpizza.count = 0;
        this.lpizza.count += 1;
        this.adult += 1;
      }
    },
    removeAdult() {
      if (this.adult > 1) {
        this.adult -= 1;
        if (this.mpizza.count > 0) {
          this.mpizza.count -= 1;
        }
      } else {
        this.$swal("oops!!", "not allowed,minimun order limit is 200", "error");
      }
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
}
</style>