<template>
    <footer class="footer-14398">
        <div class="container">
            <div class="row mb-1">
                <div class="col-md-4">
                    <a href="#" class="footer-site-logo">
                        <div class="img-logo">
                            <img src="/images/onlinepngtools.png" alt="">
                        </div>
                    </a>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit officiis corporis optio natus. </p>
                </div>
                <div class="col-md-4 mr-auto footer-menu">
                    <h3>Shop</h3>
                    <ul class="list-unstyled links">
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Clients</a></li>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Manassat</a></li>
                        <li><a href="#">Online retail</a></li>
                    </ul>
                </div>
                <div class="col-md-4 mr-auto footer-menu">
                    <h3>Press</h3>
                    <ul class="list-unstyled links">
                        <li><a href="#">Events</a></li>
                        <li><a href="#">News</a></li>
                        <li><a href="#">Awards</a></li>
                        <li><a href="#">Testimonials</a></li>
                        <li><a href="#">Online retail</a></li>
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
    </footer>
</template>

<style lang="scss" scoped >


a {
	transition: .3s all ease;
	&, &:hover {
		text-decoration: none!important;
	}
}
.list-unstyled{
		list-style: none;
}
.v-application ul, .v-application ol{
	padding-left: 0px;
}
.footer-menu{
	text-align: end;
}
.footer-14398 {
	padding: 3rem 0 1rem;
	background: #E0B855;	
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