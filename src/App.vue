<template>
	<div id="sheet">
		<header>
			<router-link to="/" id="logo"><a @click="menuShow = false">skA</a></router-link>
			<button class="icon ion-md-menu" id="show-menu-icon"  @click="menuShow = true"></button>
			<transition name="slide">
				<nav id="menu" v-show="menuShow" @click="menuShow = false">
					<router-link v-for="link in mainMenuLinks" :key="link.title" :to="`${link.url}`"><h2>{{link.title}}</h2></router-link>
					<button class="icon ion-md-close" id="close-menu-icon" @click="menuShow = false"></button>
				</nav>
			</transition>
		</header>
		<transition name="slide-page">
			<router-view style="flex: auto;"></router-view>
		</transition>
		<footer>
			<div></div>
			<div class="social-media">
				<h4>Follow me</h4>
				<div class="icons">
					<a v-for="item in socialMedia" :href="item.url" :key="item.title">
						<i :class="'icon ' + 'ion-logo-' + item.title.toLowerCase()"></i>
					</a>
				</div>
			</div>
		</footer>
	</div>
</template>



<script>
	import Jquery from "jquery";
	
	export default {
		name: 'App',
		data(){
			return{
				companyTitle: 'tortik_s_vishney',
				menuShow: false,
				mainMenuLinks:[
					{title: 'Home', url: '/'},
					{title: 'Templates', url: '/Templates'},
					{title: 'Coffee', url: '/coffee'},
					{title: 'Bootstrap', url: '/bootstrap'}
				],
				socialMedia:[
					{title: 'Github', url: 'https://github.com/tortiksvishney'},
					{title: 'Facebook', url: 'https://www.facebook.com/profile.php?id=100010532382767'},
					{title: 'Vk', url: 'https://vk.com/kirill_sakun'},
					{title: 'Instagram', url: 'https://www.instagram.com/tortik_s_vishney'},
					{title: 'Twitter', url: 'https://twitter.com/tortiksvishney'},
				]
			}
		}
	}


	Jquery(window).bind('scroll', function () {
		headerOpacity();
	});
	function headerOpacity() {
		let prevScroll = Jquery(window).scrollTop();
		let scrolled = Jquery(window).scrollTop();
		if (scrolled > 100) {
			Jquery('header').css({
				opacity: 1.0 - scrolled * 0.0033
			});
		}
		else{
			Jquery('header').css({
				opacity: 1.0
		});
		}
	}
</script>

<style lang="scss">

@import url('https://unpkg.com/ionicons@4.5.5/dist/css/ionicons.min.css');
@import url('https://fonts.googleapis.com/css?family=Raleway:300,400,600&display=swap');
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,600&display=swap');

$primary-font:'Raleway', sans-serif;
$secondary-font: 'Montserrat', sans-serif;
$primary-color: rgb(255, 255, 255);
$text-color: rgb(26, 26, 26);
$default-border: 1px rgb(0, 0, 0) solid;
$header-height: 5rem;
$facebook:#3b5998;
$vk: #4d7198;
$twitter: #1da1f2;

body,
html{
	scroll-behavior: smooth;
	font-family: $secondary-font;
	font-weight: 300;
	color: $text-color;
	width: 100%;
	margin: 0;
	padding: 0;
	background-color: $primary-color;
	box-sizing: border-box;
	overflow-x: hidden;
}
*,
*::after,
*::before{
	position: relative;
	box-sizing: border-box;
	padding: 0;
	margin: 0;
}
h1,h2,h3,h4,h5,h6{
	font-family: $primary-font;
}
p{
	font-family: $secondary-font;
	font-family: 'Montserrat', sans-serif;
	margin: 1rem 0;
}
a{
	text-decoration: none;
	color: $text-color;
}
h3{
	color: black;
	font-weight: 400;
	font-size: 5rem;
}
#sheet{
	display: flex;
	flex-direction: column;
}
.section-title{
	width: 100%;
	font-size: 2.8rem;
	text-align: center;
	font-weight: 300;
	margin: 1.3rem 0;
}
header{
	position: fixed;
	top:0;
	width: 100%;
	height: $header-height;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: $primary-color;
	z-index: 100;
	transition: .2s;
	border-top: (.03 * $header-height) solid red;
	border-bottom: 1px solid red;
	border-image: linear-gradient(to right, #40e0d0, #ff8c00, #ff0080);;
	border-image-slice: 1;

	&:hover{
		opacity: 1 !important;
	}
	#logo{	
		font-size: 3rem;
		padding: 0 3rem;
	}
	button{
		font-size: 1.4rem;
		color: $text-color;
		margin: 1rem;
		padding: -1rem;
		background: none;
		border: none;

	}
	#show-menu-icon{
		position: absolute;
		top: .5rem;
		right: 0rem;
		z-index: 1;
	}
	nav{
		z-index: 5;
		transition: 1s;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		background-color: $primary-color;
		a{
			display: flex;
			align-items: center;
			justify-content:center;
			height: .9 * $header-height;
			transition: .3s;
			$pseudo-mg: .2rem;
			h2{
				font-size: 1.3rem;
			}
			&::before,
			&::after{
				content: '';
				position: absolute;
				width: 100%;
				height: .1rem;
				transition: transform .35s;
				transform: scaleX(0);
				background: #93291e;  /* fallback for old browsers */
				background: linear-gradient(to right, #ed213a, #93291e, #ed213a); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
				z-index: 10;
			}
			&::before{
				transform-origin: right;
				top: $pseudo-mg;
				left: 0;
			}
			&::after{
				transform-origin: left;
				bottom: $pseudo-mg;
				left: 0;
			}
			&:hover::before,
			&:hover:after{
				transform: scaleX(1);
			}
			&:hover::before{
				transform-origin: left;
			}
			&:hover::after{
				transform-origin: right;
			}



			&:hover h2{
				text-shadow: 0 0 2px rgba(0, 0, 0, 0.267)
			}
			h2{
				display: block;
				transition: .3s;
				padding: 0 3rem;
				margin: 0;
				font-weight: 300;
			}
		}
	}
}

footer{
	z-index: 9999;
	flex-shrink: 0;
	width: 100%;
	padding: 2vh;
	border-top: 1px solid red;
	border-bottom: (.03 * $header-height) solid red;
	border-image: linear-gradient(to left, #40e0d0, #ff8c00, #ff0080);;
	border-image-slice: 1;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: $primary-color;
	.social-media{
		width: 20%;
		min-width: 10rem;
		height: 100%;
		display: flex;
		flex-direction: column;
		h4{
			font-size: 1.3rem;
			width: 100%;
			font-weight: 300;
		}
		.icons{
			display: flex;
			justify-content: space-between;
			width: 100%;
			align-items: center;

			a{
				padding: -1rem;
				i::before{
					font-size: 1.6rem;
					transition: .3s;
				}
				i:hover::before{
					transform: scale(1.3);
				}
				i:hover.ion-logo-facebook::before{
					color: $facebook;
				}
				i:hover.ion-logo-vk::before{
					color: $vk;
				}
				i:hover.ion-logo-twitter::before{
					color: $twitter;
				}
				i:hover.ion-logo-instagram::before{
					background: #d6249f;
					background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
					-webkit-background-clip: text;
					-webkit-text-fill-color: transparent;
				}
			}
		}
	}
}

.slide-enter-active, .slide-leave-active{
	transition: .5s ease-out;
}
.slide-enter-to, .slide-leave{
	top: 0;
	right: 0;
}
.slide-leave-to, .slide-enter{
	top: 0;
	right: -70%;
}

.slide-page-enter-active, .slide-page-leave-active{
	transition: .7s ease-in-out;
	position: relative;
	top:0;
	left: 0;
}
.slide-page-enter{
	left: 100%;
}
.slide-page-enter-to,.slide-page-leave{
	left: 0;
}
.slide-page-leave-to{
	left: -100%;
}



@media (max-width: 1060px) {
	header{
		opacity: 1 !important;
	}
}
@media (max-width:870px){
	header{
		nav{
			justify-content: flex-start;
			flex-direction: column;
			width: 100vw;
			height: unset;
			position: fixed;
			padding-top: 1rem;
			top: 0;
			right: 0;
			a{
				width: 70%;
				border: none;
				&:last-of-type{
					margin-bottom: 1rem;
				}
			}
		}
		#close-menu-icon{
			position: absolute;
			top: 0;
			right: 0;
		}
		.slide-leave-to, .slide-enter{
			top: 0;
			right: -100%;
		}
	}
}
</style>


