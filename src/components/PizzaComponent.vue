<template>
	<div>
		<div class="container">
			<div class="row">
				<div class="col-md-8 mx-auto">
					<h3 class="text-primary text-left">
						Order
						<span class="font-weight-bold">Pizza</span>
					</h3>
					<div class="mb-4">
						<div class="d-flex flex-column border">
							<div class="d-flex justify-content-end py-3 align-items-center">
								<i class="fas fa-pizza-slice" style="font-size:15px"></i>
								<div class="w-25">Small</div>
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
								<i class="fas fa-pizza-slice" style="font-size:20px"></i>
								<div class="w-25">Medium</div>
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
								<i class="fas fa-pizza-slice" style="font-size:25px"></i>
								<div class="w-25">Large</div>
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
									>+</button>
								</div>
							</div>
							<div>
								<hr />
							</div>
							<div class="d-flex justify-content-between py-3">
								<div class="px-3">
									<i class="fas fa-user-alt"></i> Adults
								</div>
								<div class="px-2">
									<button
										:disabled="adult == 1 ? true : false"
										class="btn btn-primary"
										style="border-radius:50%"
										@click="removeAdult"
									>-</button>
									{{adult}}
									<button
										class="btn btn-primary"
										style="border-radius:50%"
										@click.prevent="addAdult"
									>+</button>
								</div>
							</div>
							<div>
								<hr />
							</div>
							<div class="d-flex justify-content-between py-3">
								<div class="px-3">
									<i class="fas fa-child"></i> Children
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
									>+</button>
								</div>
							</div>
						</div>
						<div class="d-flex justify-content-between py-3">
							<div class="px-3">
								Order
								<span class="font-weight-bold">Total</span>
							</div>
							<div class="px-3">{{total}}</div>
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
			total() {
				if (total < 200 || total > 1000) {
					alert("You exceed the limit");
					return;
				}
				let total =
					this.spizza.cost * this.spizza.count +
					this.mpizza.cost * this.mpizza.count +
					this.lpizza.cost * this.lpizza.count;
				return total;
			}
		},
		methods: {
			countAdult(countBY) {
				this.adult = this.adult + countBY;
			},
			countChild(countBY) {
				this.children = this.children + countBY;
			},
			addSmallPizza() {
				if (this.children > 0 && this.adult < 0) {
					this.adult = this.adult + 1;
				}
				this.spizza.count += 1;
				// this.countChild(1);
				if (this.spizza.count >= 2) {
					this.spizza.count = 0;
					this.addMediumPizza();
				}
			},
			RemoveSmallPizza() {
				this.spizza.count -= 1;
			},
			addMediumPizza() {
				this.mpizza.count += 1;
				// this.countAdult(1);
				if (this.mpizza.count >= 2) {
					this.mpizza.count = 0;
					this.addLargePizza();
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
			},
			addLargePizza() {
				this.lpizza.count += 1;
				this.countAdult(2);
			},

			addChild() {
				this.children += 1;
				// if(this.children > )
			},
			removeChild() {
				this.children -= 1;
			},
			addAdult() {
				this.adult += 1;
			},
			removeAdult() {
				this.adult -= 1;
			}
		}
	};
</script>

<style>
</style>