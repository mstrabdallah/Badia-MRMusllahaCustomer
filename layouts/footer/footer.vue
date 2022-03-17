<template>
    <footer class="footer-14398">
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
                        <!-- <li><a href="#">Features</a></li> -->
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
                        <!-- <li><a href="#">Terms &amp; Conditions</a></li>
                        <li><a href="#">Code of Conduct</a></li> -->
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped >


// body {
// 	font-family: $font-family-sans-serif;
// }
// h1, h2, h3, h4, h5, h6,
// .h1, .h2, .h3, .h4, .h5, .h6 {
// 	font-family: $font-family-sans-serif;
// }
a {
	transition: .3s all ease;
	&, &:hover {
		text-decoration: none!important;
	}
}
.v-application ul, .v-application ol{
	padding-left: 0px;
}
.footer-menu{
	text-align: end;
}
.footer-14398 {
	padding: 3rem 0 1rem;
	background: #e0b755;
	color: #ffffff;
	.footer-site-logo {
		color: white;
		font-size: 26px;
		font-weight: bold;
		margin-bottom: 30px;
		display: block;
	}
	h3 {
		color: #c1804c;
		font-size: 16px;
		margin-bottom: 20px;
	}
    .img-logo{
        width: 150px;
        height: 80px;
        img{
            position: relative;
            height: 100%;
            width: 100%;
        }
    }
	.links {
		li {
			margin-bottom: 10px;
			a {
				color: #ffffff;
				&:hover {
					color: #c1804c;
				}
			}
		}
	}
	.link-menu {
		li {
			display: inline-block;
			a {
				color: white;
				display: inline-block;
				padding: 10px;
			}
		}
		&.nav-left {
			li {
				&:first-child {
					a {
						padding-left: 0;
					}
				}
			}
		}
		&.nav-right {
			li {
				&:last-child {
					a {
						padding-left: 0;
					}
				}
			}
		}

	}
	.social {
		li {
			display: inline-block;
			a {
				display: inline-block;
				padding: 10px;
				color: #ffffff;
			}
			&:last-child {
				a {
					padding-right: 0;
				}
			}
		}
	}
	.social a:hover {

			color: #c1804c;

	}
	.line {
		border-top: 1px solid rgba(white, .2);
	}
}


</style>
