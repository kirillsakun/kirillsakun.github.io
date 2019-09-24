<template>
	<div class="coffee-shop">

		<img :src="coffeeShop.img" :alt="coffeeShop.title">
		<div class="col">
			<h4>{{coffeeShop.title}}</h4>
			<p class="coffeeshop-description">{{coffeeShop.description}}</p>
			<div class="row icons">
				<i class="icon ion-md-flame" v-if="coffeeShop.roasters"></i>
				<a :href="`https://www.instagram.com/${coffeeShop.instagram}`" target="_blank"><i class="icon ion-logo-instagram"></i></a>
				<button @click="coffeeShop.liked = !coffeeShop.liked"><i class="icon ion-md-heart" :class="{ liked : coffeeShop.liked }"></i></button>
			</div>
		</div>
	</div>

</template>

<script>

export default {
	name:'coffeeShop',
	props:{
		coffeeShop:{
			type: Object,
			required: true
		}
	}
}
</script>

<style lang="scss" scoped>
.coffee-shop{
	width: 30%;
	min-width: 17rem;
	display: flex;
	flex-direction: row;
	margin: 1rem 0;
	padding: .5rem;
	border-radius: .25rem;
	box-shadow: #ccc 0 0 .9rem;
	img{
		height: 8rem;
		margin-right: 5%;
		border-radius: 50%;
	}
	.coffeeshop-description{

		//padding: 0;
	}
	.col{
		width: 70%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.icons{
		justify-content: flex-end;
	}
	.row{
		padding: 0;
		display: flex;
		i,a,button{
			text-align: center;
			vertical-align: top;
			line-height: 1.4rem;
			font-size: 1.4rem;
			height: 1.4rem;
			width: 1.4rem;
			margin-left: .5rem;
			>i{
			margin-left: 0;
			}
		}
		.liked{
			color: rgb(255, 85, 85)
		}
		.ion-md-flame::before {
			background: #f12711;
			background: linear-gradient(to top, #f12711, #f5af19);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;

		}
		.ion-logo-instagram::before {
			background: #d6249f;
			background: radial-gradient(
				circle at 30% 107%,
				#fdf497 0%,
				#fdf497 5%,
				#fd5949 45%,
				#d6249f 60%,
				#285aeb 90%
			);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
		}
	}
}
@media (max-width: 1060px) {
	.coffee-shop{
		width: 48%;
	}
}
@media (max-width: 580px) {
	.coffee-shop{
		width: 100%;
	}
}
</style>