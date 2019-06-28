<template>
	<div id="home">
		<img src="../assets/img/pic1.jpg" id="main-bg" alt="">
		<div class="content">
			<div id="title">
				<h1>Kirill Sakun</h1>
				<p>
					Junior Frontend developer
				</p>
			</div>

			<section id="information">

				<div class="column" id="about-me">
					<h4>About me</h4>
					<p>
						I'm student of BSUIR, faculty of Computer Disign.
						<!-- I can describe myself as a sociable and adaptable person with great motivation and quick learning skills. -->
						I can describe myself as an attentive to detail
						(sometimes too attentive even where it is not necessary),
						systematic and punctual person, able to learn a lot in a short time.

						And if I do something, I do it well, and if not for the soul, then for show.

						
					</p>
				</div>

				<div class="column" id="my-photo">
					<img src="../assets/img/me.png" alt="My photo">
				</div>

				<div class="column" id="personal-information">
					<h4>Personal information</h4>
					<div v-for="item in personalInformation" :key="item.title" class="line">
						<h5>{{item.title}}</h5><p>{{item.info}}</p>
					</div>
				</div>
			</section>
			<section id="skills">
				<div class="skill" v-for="(skill ,index) in mySkills" :key="skill.title"> 
					<h4>{{skill.title}}</h4>
					<!-- <div class="logos">
						<img v-for="img in skill.img" :key="img.title" :src="img.url" :alt="img.title">
					</div> -->
					<p>{{skill.description}}</p>
					<i>{{index+1}}</i>
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
						img: [
							{
								url:'https://pngicon.ru/file/uploads/html5.png',
								title: 'html'
							}
						],
						description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget mauris posuere, scelerisque lectus id, vestibulum nisl.'
					},
					{
						title: 'CSS3 using SASS',
						img: [
							{
								url: 'https://pngicon.ru/file/uploads/css3.png',
								title: 'css'
							},
							{
								url: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/288_Sass_logo-512.png',
								title: 'sass'
							}
						],
						description: 'Donec ultrices, turpis at iaculis eleifend, ante velit pretium ligula, quis fermentum sapien sem a ante. Vivamus ullamcorper nibh sed dictum volutpat. '
					},
					{
						title: 'JavaScript',
						img: [
							{
								url:'https://techracho.bpsinc.jp/wp-content/uploads/2009/08/javascript.png',
								title: 'js'
							}
						],
						description: 'Nulla facilisi. Sed auctor pretium nunc, sit amet ullamcorper lectus condimentum at. Aenean accumsan eros nec dolor eleifend, non pulvinar urna scelerisque.'
					},
					{
						title: 'Vue.js',
						img: [
							{
								url:'https://ru.vuejs.org/images/logo.png',
								title: 'vue'
							}
						],
						description: 'Nunc sollicitudin porta ipsum eu eleifend. Vestibulum nec dignissim arcu, at imperdiet lorem. Donec et tincidunt massa. Nam id dictum turpis. Suspendisse in consectetur ligula, et finibus risus. Curabitur et arcu orci.'
					},
					// {
					// 	title: 'Jquery',
					// 	img: 'https://seeklogo.com/images/J/jquery-logo-BD35C03823-seeklogo.com.png'
					// }
				],
				personalInformation:[
					{
						title: 'Fullname',
						info: 'Kirill Sakun'
					},
					{
						title: 'Phone',
						info: '+375447617425'
					},
					{
						title: 'Email',
						info: 'kirillsakun03@gmail.com'
					},
					{
						title: 'Birth date',
						info: '03.04.2000'
					},
					{
						title: 'Location',
						info: 'Minsk, Belarus'
					}
				]
			}
		}
	}



Jquery(window).bind('scroll', function () {
	mainBgBr();
	parallax('#main-bg',.5);
});

function mainBgBr() {
	let scrolled = Jquery(window).scrollTop();
	Jquery('#main-bg').css('filter', `brightness(${70 - (scrolled/15)}%)`);
}
function parallax(el, koeficent) {
	let scrolled = Jquery(window).scrollTop();
	Jquery(el).css('top', (0 - (scrolled * koeficent)) + 'px');
}


</script>

<style lang="scss" scoped>

.content{
	top: 100vh;
	box-sizing: unset;
}
p{
	margin: 0;
	line-height: 1.8rem;
	text-align: justify;
}

#main-bg{
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 1;
	filter:brightness(70%);
}

#title{
	position: relative;
	top: -50vh;
	color: white;
	z-index: 2;
	width: 60%;
	font-size: 1.3rem;
	margin: 0 20%;
	text-align: justify;

	h1{
		margin-bottom: 4rem;
		text-align: center;
		margin-bottom: 1rem;
	}
	
	p{
		margin-top: 0;
		text-align: center;
		font-style: italic;
		letter-spacing: .1rem;
	}
}
section{
	z-index: 4;
	width: 100%;
	padding: 3rem 2%;
	background-color: #fff;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	
	.column{
		display: flex;
		flex-direction: column;
		align-items: center;
		h4{
			font-size: 1.3rem;
			font-weight: 200;
			margin: 1rem;
		}
	}
}
#about-me{
	width: 40%;
}
#my-photo{
	width: 20%;
	justify-content: center;
	img{
		border-radius: 50%;
		width: 90%;
	}
}
#personal-information{
	width: 30%;
	.line{
		display: flex;
		width: 90%;
		margin: .0rem 0;
		h5{
			font-size: 1.0rem;
			width: 6rem;
			line-height: 1.8rem;
		}
		p{
			margin: 0;
		}
	}
}
$lineHeight: 2rem;
#skills{
	
	background-image: url(../assets/img/skills-bg.jpg);
	background-size: 100% auto;
	background-position: center 0;
	background-repeat: no-repeat;
	color: white;
}
.skill{
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	flex-direction: column;
	align-items: center;
	width: 21%;
	padding-bottom: 3rem;
	&:not(:last-child):after{
		content: '';
		position: absolute;
		bottom: 0.5rem;
		left: 2rem;
		//border-radius: 0 .1 * $lineHeight .1 * $lineHeight 0;
		background-color: rgba(255, 255, 255, 0.5);
		height: 1rem;
		width: calc(100% - 2rem);
		clip-path: polygon(0% 0%, 98% 0%, 100% 50%, 98% 100%, 0% 100%);
	}
	&:last-child:after{
		content: '';
		position: absolute;
		bottom: 0.5rem;
		left: 2rem;
		border-radius: 0 .1 * $lineHeight .1 * $lineHeight 0;
		background-color: rgba(255, 255, 255, 0.5);
		height: 1rem;
		width: calc(100% - 2rem);
	}
	h4{
		height: 1.3rem;
	}
	p{
		font-size: .9rem;
		line-height: 1.5rem;
	}
	i{
		height: $lineHeight;
		width: $lineHeight;
		line-height: $lineHeight;
		text-align: center;
		color: rgba(0, 0, 0, 0.7);
		font-size: 0.65*$lineHeight;
		font-weight: 700;
		font-style: normal;
		position: absolute;
		bottom: 0;
		left: 0;
		border-radius: .1 * $lineHeight;
		background-color: rgba(255, 255, 255, 0.5);

	}

	.logos{
		display: flex;
		img{
			height: 2rem;
		}
	}
}

@media (max-width: 1060px) {
	#main-bg{
		height: 120vh;
		width: unset;
		min-width: 100%;
	}
	#title{
		width: 100%;
		padding: 0 2vw;
		margin: 0;
		font-size: 1.3rem;
	}
	#information{
		#about-me{
			width: 100%;
		}
		#my-photo{
			width: 30%;
			padding: 0;
			img{
				width: 100%;
			}
		}
		#personal-information{
			width: 70%;
		}
	}
}
@media (max-width: 1060px) and (max-height: 500px) {
	#main-bg{
		height: unset;
		min-height: unset;
		width: 100%;
	}
	#title{
		width: 100%;
		padding: 0 2vw;
		margin: 0;
	}
	
}

@media (max-width: 670px){
	#main-bg{
		height: 100vh;
	}
	#information{
		.column{
			width: 100% !important;		
		}
		#my-photo{
			width: 30%;
			padding: 0;
			img{
				width: 70%;
			}
		}

	}
}

</style>

<style>

footer{
	margin-top: 100vh;
}

</style>

