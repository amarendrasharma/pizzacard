<template>
	<div>
		<div class="container">
			<div class="row">
				<div class="col-md-8 mx-auto">
					<h3 class="text-left" style="color:darkblue">
						Order
						<span class="font-weight-bold">Pizza</span>
					</h3>
					<div class="mb-4">
						<div class="d-flex flex-column" style="border: 3px solid gray;">
							<div class="d-flex justify-content-end py-3 align-items-center">
								<i class="fas fa-pizza-slice" style="font-size:15px;color:darkblue;"></i>
								<div class="w-25 text-uppercase" style="color:darkblue">Small</div>
								<div class="px-2">
									<button
										class="btn btn-primary"
										style="border-radius:50%"
										:disabled="spizza.count == 0 ? true : false"
										@click="RemoveSmallPizza"
									>-</button>
									{{spizza.count}} - {{spizza.cost}}
									<button
										class="btn btn-primary"
										style="border-radius:50%"
										@click="addSmallPizza"
									>+</button>
								</div>
							</div>
							<div class="d-flex justify-content-end py-3 align-items-center">
								<i class="fas fa-pizza-slice" style="font-size:20px;color:darkblue"></i>
								<div class="w-25 text-uppercase" style="color:darkblue">Medium</div>
								<div class="px-2">
									<button
										class="btn btn-primary"
										:disabled="mpizza.count == 1 ? true : false"
										style="border-radius:50%"
										@click="removeMediumPizza"
									>-</button>
									{{mpizza.count}} - {{mpizza.cost}}
									<button
										class="btn btn-primary"
										style="border-radius:50%"
										@click="addMediumPizza"
									>+</button>
								</div>
							</div>
							<div class="d-flex justify-content-end py-3 align-items-center">
								<i class="fas fa-pizza-slice" style="font-size:25px;color:darkblue"></i>
								<div class="w-25 text-uppercase" style="color:darkblue">Large</div>
								<div class="px-2">
									<button
										class="btn btn-primary"
										style="border-radius:50%"
										:disabled="lpizza.count == 0 ? true : false"
										@click="removeLargePizza"
									>-</button>
									{{lpizza.count}} - {{lpizza.cost}}
									<button
										class="btn btn-primary"
										style="border-radius:50%"
										@click="addLargePizza"
										:disabled="total >= 1000 ? true : false"
									>+</button>
								</div>
							</div>
							<div class="mx-2">
								<hr class="hr-custom" />
							</div>
							<div class="d-flex justify-content-between py-3">
								<div class="px-3 font-weight-bold text-primary">
									<i class="fas fa-user-alt mr-3" style="color:darkblue"></i>
									<span style="color:darkblue" class="text-uppercase">Adults</span>
								</div>
								<div class="px-2">
									<button
										:disabled="adult == 0? true : false"
										class="btn btn-primary"
										style="border-radius:50%"
										@click="removeAdult"
									>-</button>
									{{adult}}
									<button
										class="btn btn-primary"
										style="border-radius:50%"
										@click.prevent="addAdult"
										:disabled="total >= 1000 ? true : false"
									>+</button>
								</div>
							</div>
							<div class="mx-2">
								<hr class="hr-custom" />
							</div>
							<div class="d-flex justify-content-between py-3">
								<div class="px-3 font-weight-bold text-primary">
									<i class="fas fa-child mr-3" style="color:darkblue"></i>
									<span style="color:darkblue" class="text-uppercase">Children</span>
								</div>
								<div class="px-2">
									<button
										class="btn btn-primary"
										:disabled="children == 0 ? true : false"
										style="border-radius:50%"
										@click="removeChild"
									>-</button>
									{{children}}
									<button
										class="btn btn-primary"
										style="border-radius:50%"
										@click="addChild"
										:disabled="total >= 1000 ? true : false"
									>+</button>
								</div>
							</div>
						</div>
						<div class="d-flex justify-content-between py-3">
							<div class="px-3 h5" style="color:darkblue">
								Order
								<span class="font-weight-bold" style="color:darkblue">Total</span>
							</div>
							<div class="px-3 h5">{{total}}</div>
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
			total(oldVal) {
				let total =
					this.spizza.cost * this.spizza.count +
					this.mpizza.cost * this.mpizza.count +
					this.lpizza.cost * this.lpizza.count;
				if (total > 1000) {
					alert("You exceed the limit");
					return oldVal;
				}
				if (total < 200) {
					alert("You have to order minimum of 200");
					return oldVal;
				}
				return total;
			}
		},
		methods: {
			addSmallPizza() {
				if (this.children > 0 && this.adult < 0) {
					this.adult = this.adult + 1;
				}
				this.spizza.count += 1;
				if (this.spizza.count >= 2) {
					this.spizza.count = 0;
					this.mpizza.count += 1;
				}
				this.children += 1;
			},
			RemoveSmallPizza() {
				this.spizza.count -= 1;
				this.children -= 1;
			},
			addMediumPizza() {
				if (this.total < 1000) {
					this.mpizza.count += 1;
					if (this.mpizza.count >= 2) {
						this.mpizza.count = 0;
						this.addLargePizza();
					}
					this.adult += 1;
				}
			},
			removeMediumPizza() {
				this.mpizza.count -= 1;
				if (this.adult > 2) {
					this.adult -= 1;
				}
				if (this.adult == 1 && this.children > 2) {
					this.children -= 2;
				}
			},
			removeLargePizza() {
				this.lpizza.count -= 1;
				if (this.adult > 2) {
					this.adult -= 2;
				}
				if (this.adult == 1 && this.children >= 4) {
					this.children -= 4;
				}
			},
			addLargePizza() {
				this.lpizza.count += 1;
				this.adult += 2;
			},

			addChild() {
				this.children += 1;
				this.spizza.count += 1;
				if (this.spizza.count >= 2) {
					this.spizza.count = 0;
					this.mpizza.count += 1;
				}
				// if(this.children > )
			},
			removeChild() {
				this.children -= 1;
				if (this.spizza.count > 0) {
					this.spizza.count -= 1;
				}
			},
			addAdult() {
				this.adult += 1;
				if (this.adult >= 1 && this.adult <= 2) {
					this.mpizza.count += 1;
				}
				if (this.mpizza.count >= 2) {
					this.mpizza.count = 0;
					this.lpizza.count += 1;
				}
				if (this.adult >= 2) {
					this.lpizza.count += 1;
				}
			},
			removeAdult() {
				this.adult -= 1;
			}
		}
	};
</script>

<style>
.btn-primary {
	background-color: darkblue !important;
}
.text-primary {
	color: darkblue !important;
}
hr.hr-custom {
	border: 1px solid gray;
}
</style>