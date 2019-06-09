<template>
	<div id="home">
		<img src="https://pp.userapi.com/c824603/v824603840/50edc/2wMhrLsEfgc.jpg" id="pic1" alt="">
		<div class="content">
			<div id="text1">
				<h1>About coffee</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in venenatis lectus. Fusce imperdiet aliquet ipsum, id interdum turpis fringilla eu. Praesent ac est vitae magna commodo auctor. Sed tellus lorem, sagittis in vehicula ut, tempor nec lacus. Integer tellus est, consectetur nec commodo nec, lacinia in dui. Duis quis interdum lacus, viverra consequat dui. Etiam tempus velit sed sodales suscipit.
				</p>
				<p>
					Ut justo nulla, commodo a dolor eu, volutpat tempor turpis. Cras congue, nibh ac condimentum pellentesque, felis quam pulvinar magna, in vestibulum magna velit eu nunc. Integer non dolor dictum, porta tellus id, fringilla purus. Donec ut lacus libero. Praesent venenatis odio quam, non laoreet velit tristique imperdiet. Vestibulum blandit, sapien nec fringilla dictum, leo tellus porta enim, vitae maximus magna lectus sit amet mauris. Donec lobortis, tortor et convallis. 
				</p>
			</div>

			<section id="about-coffee">
				<h2 class="section-title">
					Сoffee processing steps
				</h2>
				<div class="col-3" v-for="item in aboutCoffee" :key="item.title">
					<img :src="item.img" :alt="item.title">
					<h3> {{item.title}}</h3>
					<p>{{item.description}}</p>
				</div>
			</section>
			<section id="cards">
				<h2 class="section-title">
					Best belarusian coffee roasters (IMHO!!!)
				</h2>
				<div class="card" v-for="item in cards" :key="item.title">
					<div class="face">
						<img :src="item.img" :alt="item.title">
						<h3>{{item.title}}</h3>
					</div>
					<div class="backface">
						<p>{{item.description}}</p>
					</div>
				</div>
			</section>
		</div>
	</div>
</template>

<script>
import Jquery from "jquery";

export default {
		name: 'App',
		data(){
			return{
				aboutCoffee:[
					{
						title: 'Coffee berry',
						description: 'Sed at ultrices massa. Maecenas bibendum pulvinar dolor vel scelerisque. Luctus tincidunt lacus. Nam imperdiet semper faucibus. Donec quam diam, bibendum vel imperdiet quis, consectetur quis urna. Integer blandit enim at erat eleifend accumsan. Nunc eu scelerisque ex. Nulla egestas lectus sodales lacus porta, non bibendum turpis varius. Quisque suscipit, purus eu egestas mollis, nunc ante mollis metus, ut blandit ligula turpis et augue. Etiam ultricies auctor magna vitae tempus.',
						img: 'https://www.kings.co.nz/media/catalog/product/cache/1/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/p/r/product_16301_20170614_121306.jpg'
					},
					{
						title: 'Drying',
						description: 'Sed lectus eros, cursus a mi sit amet, sodales faucibus enim. Ut non scelerisque massa, in maximus augue. Phasellus sapien lorem, condimentum a vestibulum vitae, rutrum ac sapien. Duis accumsan mollis nulla ut tempus. Phasellus a ante vitae dolor vulputate tempor. Proin venenatis rhoncus lorem. Sed dolor tortor, vulputate et feugiat ut, mattis non metus. Vivamus et nisi nec nibh dapibus dapibus at quis nunc.',
						img: 'https://res.cloudinary.com/fleetnation/image/private/c_fill,g_center,h_640,w_640/v1482201708/lit5xvzaqnx1zedmtlhz.jpg'
					},
					{
						title: 'Roasting',
						description: 'In ut felis mollis, pulvinar leo eu, tincidunt fecursus a mi sit amet, sodales faucibus enim. Ut non scelerisque massa, in maximus augue. Phasellus sapien lorem, condimentum a vestibulum vitae, rutrum ac sapien. Duis accumsan mollis nulla ut tempus. Phasellus a ante vitae dolor vulputate tempor. Proin venenatis rhoncus lorem. Sed dolor tortor, vulputate et feugiat ut, mattis non metus. Vivamus et nisi nec nibh dapibus dapibus at quis nunc.',
						img: 'https://www.arakucoffee.com/media/wysiwyg/Le-monde-du-cafe/Torrefaction-du-cafe/Torr_faction_du_caf_2.png'
					},
					{
						title: 'Grinding',
						description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam in enim a risus lobortis consequat ut blandit urna. In congue orci at orci consectetur eleifend. Duis leo justo, ullamcorper ut odio et, gravida pellentesque libero. Integer tempus justo id metus auctor tristique. Praesent sodales mattis ultrices. Aenean non magna vitae ex elementum mollis a ac orci. In tincidunt ligula sit amet tellus ullamcorper, et hendrerit dolor fringilla. Donec viverra nulla eget tincidunt pulvinar.',
						img: 'https://driftaway.coffee/wp-content/uploads/2016/03/IMG_0997-min-min.jpg'
					},
					{
						title: 'Brewing',
						description: 'Pulvinar leo eu, tincidunt fecursus a mi sit amet, sodales faucibus enim. Ut non scelerisque massa, in maximus augue. Phasellus sapien lorem, condimentum a vestibulum vitae, rutrum ac sapien. Duis accumsan mollis nulla ut tempus. Phasellus a ante vitae dolor vulputate tempor. Proin venenatis rhoncus lorem. Sed dolor tortor, vulputate et feugiat ut, mattis non metus. Vivamus et nisi nec nibh dapibus dapibus at quis nunc.',
						img: 'https://кофе.бел/wp-content/uploads/2018/10/svetlaja-obzharka-436x436.jpg'
					}
				],
				cards:[
					{
						title: 'Kitchen Coffee Roasters',
						img: 'https://pp.userapi.com/c636726/v636726638/4d59/urJfBpGIYjw.jpg',
						description: 'The peony is a flowering plant in the genus Paeonia , the only genus in the family Paeoniaceae . They are native to Asia, Europe and Western North America. Scientists differ on the number of species that can be distinguished ranging from 25 to 40, although the current consensus is 33 known species. The relationships between the species also need to be further clarified.'
					},
					{
						title: 'Knot Coffee',
						img: 'https://static1.vigbo.com/u31928/43821/blog/3498527/1906718/33029909/1000-11717214dc9eb826bd58e93b653e7d5b.jpg',
						description: 'Syringa vulgaris (lilac or common lilac) is a species of flowering plant in the olive family Oleaceae, native to the Balkan Peninsula, where it grows on rocky hills. This species is widely cultivated as an ornamental and has been naturalized in other parts of Europe (including the United Kingdom, France, Germany, and Italy), as well as much of North America. It is not regarded as an aggressive species, found in the wild in widely scattered sites, usually in the vicinity of past or present human habitations'
					},
				]
			}
		}
	}

	Jquery(window).bind('scroll', function (e) {
		parallaxScroll();
		headerOpacity();
	});

function headerOpacity() {
	let scrolled = Jquery(window).scrollTop();
	if (scrolled > 10) {
		Jquery('header').css({
			opacity: 1.0 - scrolled * 0.0016
		});
	}
	else{
		Jquery('header').css({
			opacity: 1.0
		});
	}
}


function parallaxScroll() {
	let scrolled = Jquery(window).scrollTop();

	Jquery('#pic1').css('top', (0 - (scrolled * .3)) + 'px');
	if(scrolled>50){
		Jquery('#pic1').css('filter', `brightness(${100 - scrolled/24}%)`);
	}
	else{
		Jquery('#pic1').css('filter', 'brightness(100%)');
	}	
}

</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Merienda');
@import url('https://fonts.googleapis.com/css?family=Roboto');


.content{
	top: 100vh;
	box-sizing: unset;
}
#pic1{
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 1;
	transition: 0;
}
#text1{
	color: white;
	font-weight: lighter;
	font-style: italic; 
	z-index: 2;
	width: 60%;
	font-size: 1.3rem;
	margin: 0 20% 10vh;
	text-align: justify;
}
h1{
	text-align: center;
	font-style: normal;
}

section{
	z-index: 4;
	width: 100%;
	background-color: #fff;
	justify-content: space-around;
	flex-wrap: wrap;
	display: flex;
	border-top: 3px solid;
	flex-basis: 33%;
}
section .col-3{
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0 2%;
	padding-top: 5vh;
	z-index: 5;
	width: 33%;
	min-width: 45vh;
}
.col-3 img{
	animation: 11s bounceBorder cubic-bezier(.1,.77,.91,.91)  infinite;
	height: 40vh;
	max-height: 100vw;
	animation-fill-mode: backwards;
	border-radius: 2vh;
}

.col-3:first-child img{
	animation-delay:0s;
}
.col-3:nth-child(2) img{
	animation-delay:-3s;
	
}
.col-3:nth-child(3) img{
	animation-delay:-9s;
}
.col-3:nth-child(4) img{
	animation-delay:-1s;
}
.col-3:nth-child(5) img{
	animation-delay:-4s;
}
.col-3:nth-child(6) img{
	animation-delay:-2.3s;
}

@keyframes bounceBorder {
 0%{clip-path: ellipse(32% 29% at 32% 29%);}
 25%{clip-path: ellipse(30% 32% at 69% 45%);}
 50%{clip-path: ellipse(30% 30% at 53% 70%);}
 75%{clip-path: ellipse(30% 30% at 32% 47%);}
 100%{clip-path: ellipse(32% 29% at 32% 29%);}
}

h3, h2{
	font-family: 'PoorRichard-Regular';
}
.col-3 h3{
	font-size: 2.2rem;
	margin: 0 0;
}
.col-3 p{
	font-size: 1.2rem;
	font-style: italic;
}
#cards{
	width: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
}
.card{
	width: 77vh;
	height: 50vh;
	perspective: 200vh;
	margin: 4vh;
}
.card .backface,
.card .face{
	position: absolute;
	top: 0;
	left: 0;
	backface-visibility: hidden;
	height: 100%;
	width: 100%;
	transition: 1s ease-in-out;
	background-color: #424242;
	border-radius: 3vh;
	color: #fff;
	box-shadow: 1vh 1vh 3vh	#757575;
}
.card .face *,
.card .backface *{
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	border-radius: inherit;
}
.card .face img{
	z-index: 1;
	height: 100%;
	width: 100%;
	filter: brightness(75%);
}
.card .face h3{
	z-index: 2;
	padding: 0;
	margin: 0;
	color: #fff;
	width: 100%;
	text-align: center;
	font-size: 7vw;
}
.card .face{
	transform: rotateY(0deg)
}

.card .backface{
	transform: rotateY(180deg);
}
.card .backface p{
	width: 100%;
	height: 100%;
	padding: 3vh 4vh;
	font-size: 3vh;
	font-style: italic;
}
.card:hover .face{
	transform: rotateY(180deg)
}
.card:hover .backface{
	transform: rotateY(360deg)
}
@media (max-width: 1060px) {
	#pic1{
		height: 120vh;
		width: unset;
		min-width: 100%;
	}
	#text1{
		width: 100%;
		padding: 0 2vw;
		margin: 0;
		font-size: 1.3rem;
	}
	section .col-3{
		width: 80%;
		min-width: unset;
	}
}
@media (max-width: 1060px) and (max-height: 500px) {
	#pic1{
		height: unset;
		min-height: unset;
		width: 100%;
	}
	#text1{
		width: 100%;
		padding: 0 2vw;
		margin: 0;
	}

}

@media (max-width: 670px){
	#pic1{
		filter: brightness(60%) !important;
		height: 130vh;
	}
	.card{
		width: 90vw;
		height: 55vw;
	}
	.card .backface p{
		padding: 1vh 2vh;
		font-size: 3.25vw;
	}
}

</style>
<style>

footer{
	margin-top: 100vh;
}
</style>

