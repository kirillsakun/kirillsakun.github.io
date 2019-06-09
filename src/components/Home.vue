<template>
	<div id="home">
		<img src="../assets/img/pic1.jpg" id="pic1" alt="">
		<div class="content">
			<div id="about-me">
				<a href="#about-me"><h1>About me</h1></a>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in venenatis lectus. Fusce imperdiet aliquet ipsum, id interdum turpis fringilla eu. Praesent ac est vitae magna commodo auctor. Sed tellus lorem, sagittis in vehicula ut, tempor nec lacus. Integer tellus est, consectetur nec commodo nec, lacinia in dui. Duis quis interdum lacus, viverra consequat dui. Etiam tempus velit sed sodales suscipit.
				</p>
				<p>
					Ut justo nulla, commodo a dolor eu, volutpat tempor turpis. Cras congue, nibh ac condimentum pellentesque, felis quam pulvinar magna, in vestibulum magna velit eu nunc. Integer non dolor dictum, porta tellus id, fringilla purus. Donec ut lacus libero. Praesent venenatis odio quam, non laoreet velit tristique imperdiet. Vestibulum blandit, sapien nec fringilla dictum, leo tellus porta enim, vitae maximus magna lectus sit amet mauris. Donec lobortis, tortor et convallis. 
				</p>
			</div>

			<section id="skills">
				<h3 class="section-title">My skills</h3>
				<div class="skill" v-for="item in mySkills" :key="item.title">
					<h4>{{item.title}}</h4>
					<img :src="item.img" :alt="item.title" :title="item.title +' icon'">
				</div>
			</section>
			<section id="cards">
				<div class="card-1" v-for="item in cards" :key="item.title" >
					<div class="main-part">

					</div>
					<div class="secondary-part">
							
					</div>
				</div>
			</section>
		</div>
	</div>
</template>

<script>
import Jquery from "jquery";

export default {
		name: 'Home',
		data(){
			return{
				mySkills:[
					{
						title: 'HTML5',
						description: 'Sed nec porttitor libero. Proin convallis, massa id pharetra sodales, mauris metus vestibulum dui, sit amet imperdiet massa tortor ut neque. Etiam gravida at sapien quis porttitor.',
						img: 'https://pngicon.ru/file/uploads/html5.png'
					},
					{
						title: 'CSS3',
						description: 'Cras feugiat lorem id vehicula sagittis. Morbi viverra laoreet eros placerat pretium. Fusce ut ante faucibus, euismod tellus ut, porttitor nisi.',
						img: 'https://pngicon.ru/file/uploads/css3.png'
					},
					{
						title: 'SASS',
						description: ' Etiam viverra imperdiet ultrices. Proin fringilla imperdiet libero, sit amet semper magna fermentum id. Fusce gravida massa nec nunc ultricies, sed maximus leo pharetra.',
						img: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/288_Sass_logo-512.png'
					},
					{
						title: 'JS',
						description: 'Vestibulum in interdum velit. Aliquam sodales consequat eros quis egestas. Nam euismod aliquam leo. Integer lacinia mauris a neque tristique commodo.',
						img: 'https://techracho.bpsinc.jp/wp-content/uploads/2009/08/javascript.png'
					},
					{
						title: 'Vue',
						description: 'Nulla bibendum scelerisque rhoncus. Integer malesuada, nulla at cursus tempus, odio massa pellentesque risus, a malesuada mi odio id nulla. Pellentesque ante justo.',
						img: 'https://ru.vuejs.org/images/logo.png'
					},
					{
						title: 'Jquery',
						description: 'Quisque sed hendrerit justo, ac lobortis mauris. Vestibulum non leo ut odio pharetra dictum. Praesent semper et nisi et ornare. Phasellus a commodo mi, fermentum tempus orci.',
						img: 'https://seeklogo.com/images/J/jquery-logo-BD35C03823-seeklogo.com.png'
					},
					{
						title: 'Bootstrap 4',
						description: 'Quisque iaculis consectetur neque sed mattis. Sed mollis metus vel felis tristique, ut ultricies diam eleifend. Etiam vehicula diam a lacus vulputate volutpat.',
						img: 'https://bootstrap-4.ru/docs/4.3.1/assets/brand/bootstrap-solid.svg'
					}
					/*{
						title: '',
						description: '',
						img: ''
					}*/
				],
				cards:[
					{
						title: 'Peonies',
						img: 'https://pp.userapi.com/c635107/v635107609/ee93/gvwReUOudx4.jpg',
						description: 'The peony is a flowering plant in the genus Paeonia , the only genus in the family Paeoniaceae . They are native to Asia, Europe and Western North America. Scientists differ on the number of species that can be distinguished ranging from 25 to 40, although the current consensus is 33 known species. The relationships between the species also need to be further clarified.'
					},
					{
						title: 'Lilac',
						img: 'https://pp.userapi.com/c635107/v635107392/f4db/vWwCSnttSRU.jpg',
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
		Jquery('#pic1').css('filter', `brightness(${100 - scrolled/20}%)`);
	}
	else{
		Jquery('#pic1').css('filter', 'brightness(100%)');
	}	
}

</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Merienda');
@import url('https://fonts.googleapis.com/css?family=Roboto');
@import url('https://fonts.googleapis.com/css?family=Raleway');


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
#about-me{
	position: relative;
	top: -10rem;
	color: white;
	font-weight: lighter;
	font-style: italic; 
	z-index: 2;
	width: 60%;
	font-size: 1.3rem;
	margin: 0 20%;
	text-align: justify;
	h1{
		color: white;
		margin-bottom: 4rem;
	}
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
	border-top: 1px solid;
}
#skills{
	padding-bottom: 2rem;
	.section-title{
		font-family: 'Raleway', sans-serif;
	}
}
.skill{
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	min-width: 10rem;

	&:hover{
		img{
			transform: scale(1.2);
		}
	}

	h4{
		font-family: 'Raleway', sans-serif;
		margin-bottom: .4rem;
	}
	img{
		transition: .3s;
		max-height: 6rem;
		max-width: 20rem;
	}
}
@keyframes fliping {
	0%{transform: rotateY(0)};
	100%{transform: rotateY(360deg)}

}
@media (max-width: 1060px) {
	#pic1{
		height: 120vh;
		width: unset;
		min-width: 100%;
	}
	#about-me{
		width: 100%;
		padding: 0 2vw;
		margin: 0;
		font-size: 1.3rem;
	}
}
@media (max-width: 1060px) and (max-height: 500px) {
	#pic1{
		height: unset;
		min-height: unset;
		width: 100%;
	}
	#about-me{
		width: 100%;
		padding: 0 2vw;
		margin: 0;
	}
}

@media (max-width: 670px){
	#pic1{
		filter: brightness(60%) !important;
		height: 100vh;
	}
}

</style>
<style>

footer{
	margin-top: 100vh;
}
</style>

