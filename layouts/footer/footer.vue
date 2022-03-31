<template>
    <!-- <footer class="footer-14398">
        <div class="container">
            <div class="row mb-1">
                <div class="col-md-4">
                    <a href="#" class="footer-site-logo">
                        <div class="img-logo">
                            <img src="/logo.svg" alt="">
                        </div>
                    </a>
                <p>{{$t('footer-h')}} </p>
                </div>
                <div class="col-md-4 mr-auto footer-menu">
                    <h3>{{$t('sections')}}</h3>
                    <ul class="list-unstyled links">
                        <li><a href="#">{{$t('home')}}</a></li>
                        <li><a href="#">{{$t('events')}}</a></li>
                        <li><a href="#">{{$t('awards')}}</a></li>
                        <li><a href="#">{{$t('testimonials')}}</a></li>
                    </ul>
                </div>

				<div class="col-md-4 mr-auto footer-menu">
                    <h3>{{$t('contact')}}</h3>
                    <ul class="list-unstyled links">
                        <li><a href="#">{{$t('menasat')}}</a></li>
                        <li><a href="#">{{$t('services')}}</a></li>
                        <li><a href="#">{{$t('clients')}}</a></li>
                        <li><a href="#">{{$t('register')}}</a></li>
                    </ul>
                </div>
            </div>
            <div class="row mb-4">
                <div class="col-12 pb-4">
                    <div class="line"></div>
                </div>
                <div class="col-md-6 ms-auto text-md-left">
                    <ul class="list-unstyled social nav-right">
                        <li><a href="#"><span class="icon-twitter"></span></a></li>
                        <li><a href="#"><span class="icon-instagram"></span></a></li>
                        <li><a href="#"><span class="icon-facebook"></span></a></li>
                        <li><a href="#"><span class="icon-pinterest"></span></a></li>
                    </ul>
                </div>
                <div class="col-md-6 text-md-right text-center">
                    <ul class="list-unstyled link-menu nav-left">
                        <li>Copyright © 2000-2022 Badia Inc. All Rights Reserved.</li>

                    </ul>
                </div>
            </div>
        </div>
    </footer> -->

    <footer class="mt-5">
    <v-row class="my-2">
      <v-col cols="12" md="6" class="footer_info">
        <div class="img-logo">
          <a href="#">
            <img src="http://localhost:3000/logo.svg" alt="" />
          </a>
        </div>

        <p class="p1" v-html="$t('headp1')"></p>
      </v-col>
      <v-col cols="12" md="3">
        <div class="links_heading_p">
          <div class="links">
            <h2 class="links_heading">{{ $t("Other pages") }}</h2>
            <nuxt-link :to="localePath('terms-condition')">{{ $t("Terms and conditions") }}</nuxt-link>
            <nuxt-link :to="localePath('/privcy-policy')">{{ $t("Privacy Policy") }}</nuxt-link>
            <nuxt-link :to="localePath('/about')">{{ $t("About mr.musllaha") }}</nuxt-link>
          </div>
        </div>
      </v-col>
      <v-col cols="12" md="3">
        <div class="links_heading_p">
          <h2 class="links_heading">{{ $t("Quick links") }}</h2>
          <div class="links">
            <nuxt-link :to="localePath('/')" >{{ $t("Home") }}</nuxt-link>
            <nuxt-link :to="localePath('/UserProfile')"  v-if="allAuth.checkAuth"  >{{ $t("UserProfile") }}</nuxt-link>
            <nuxt-link :to="localePath('/ListOrder')"  v-if="allAuth.checkAuth"  >{{ $t("My Order") }}</nuxt-link>
            <nuxt-link :to="localePath('/login')"  v-if="!allAuth.checkAuth"  >{{ $t("Login") }}</nuxt-link>
            <nuxt-link :to="localePath('/register')"  v-if="!allAuth.checkAuth" >{{ $t("Create Account") }}</nuxt-link>
          </div>
        </div>
      </v-col>
    </v-row>

    <v-row class="my-3 social">
      <ul>
        <li class="mx-2" v-for="icon in icons" :key="icon">
          <v-icon size="24px">{{ icon }}</v-icon>
        </li>
      </ul>
    </v-row>
    <v-divider></v-divider>

    <p class="my-2 copy">
      {{ $t("copyright") }}
    </p>
  </footer>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),

  computed:{
    ...mapGetters(['allAuth'])
  }
}
</script>



<style lang="scss" scoped >


// body {
// 	font-family: $font-family-sans-serif;
// }
// h1, h2, h3, h4, h5, h6,
// .h1, .h2, .h3, .h4, .h5, .h6 {
// 	font-family: $font-family-sans-serif;
// }
// a {
// 	transition: .3s all ease;
// 	&, &:hover {
// 		text-decoration: none!important;
// 	}
// }
// .v-application ul, .v-application ol{
// 	padding-left: 0px;
// }
// .footer-menu{
// 	text-align: end;
// }
// .footer-14398 {
// 	padding: 3rem 0 1rem;
// 	background: #30c88d;
// 	color: #ffffff;
// 	.footer-site-logo {
// 		color: white;
// 		font-size: 26px;
// 		font-weight: bold;
// 		margin-bottom: 30px;
// 		display: block;
// 	}
// 	h3 {
// 		color: #c1804c;
// 		font-size: 16px;
// 		margin-bottom: 20px;
// 	}
//     .img-logo{
//         width: 150px;
//         height: 80px;
//         img{
//             position: relative;
//             height: 100%;
//             width: 100%;
//         }
//     }
// 	.links {
// 		li {
// 			margin-bottom: 10px;
// 			a {
// 				color: #ffffff;
// 				&:hover {
// 					color: #c1804c;
// 				}
// 			}
// 		}
// 	}
// 	.link-menu {
// 		li {
// 			display: inline-block;
// 			a {
// 				color: white;
// 				display: inline-block;
// 				padding: 10px;
// 			}
// 		}
// 		&.nav-left {
// 			li {
// 				&:first-child {
// 					a {
// 						padding-left: 0;
// 					}
// 				}
// 			}
// 		}
// 		&.nav-right {
// 			li {
// 				&:last-child {
// 					a {
// 						padding-left: 0;
// 					}
// 				}
// 			}
// 		}

// 	}
// 	.social {
// 		li {
// 			display: inline-block;
// 			a {
// 				display: inline-block;
// 				padding: 10px;
// 				color: #ffffff;
// 			}
// 			&:last-child {
// 				a {
// 					padding-right: 0;
// 				}
// 			}
// 		}
// 	}
// 	.social a:hover {

// 			color: #c1804c;

// 	}
// 	.line {
// 		border-top: 1px solid rgba(white, .2);
// 	}
// }


footer {
  background: #f6f6f6;
  border-top: 1px solid #efefef;
}
footer .footer_info,
footer ul,
footer .social,
footer .copy {
  display: flex;
  justify-content: center;
  width: 100%;
}
.footer_info {
  flex-direction: column;
}
footer .img-logo {
  width: 100%;
}
footer .img-logo a {
  display: block;
  text-align: center;
}
footer .img-logo img {
  max-width: 100px;
}
footer .p1 {
  width: 60%;
  margin: 5px auto;
  text-align: center;
  font-size: 15px !important;
}
footer .links_heading {
  margin-bottom: 15px;
}
footer .links a {
  display: block;
  font-size: 14px;
  margin-top: 5px;
  transition: 0.3s all ease;
  line-height: 30px;
}
footer .links a:hover {
  color: #30c88c;
}
footer .social ul li .v-icon {
  cursor: pointer;
  transition: 0.3s all ease;
  color: #30c88c;
}
footer .social ul li .v-icon:hover {
  color: #444;
}
@media (max-width: 959px) {
  .links_heading_p {
    text-align: center;
    border: 1px solid #eaeaea;
    padding: 12px;
  }
}

</style>
