
import { Link , useParams } from "react-router-dom";
import { useState , useEffect } from 'react';
function Cat(){
	var myprama= useParams();
	var category= myprama.category;
	console.log(category)
	const [ categoryPost , setCategoryPost ] = useState([]);
	useEffect(()=>{
	 fetch('https://webeetec.com/itsharks24/blog/api/getpostsbycategory.php?category='+category)
	 .then(res => res.json())
	 .then((r)=>{
		setCategoryPost(r);
		 console.log(r);
	 })
	},[category])
    return(
     <>
     <section class="container">
		<div class="wrapper clear">
			<div class="contentLeft">
				<div class="archivePageTitle"><span>Lifestyle</span></div>
				<div class="archivePostWrap">
					{
						categoryPost.map((catPost)=>{
							return(
								<div class="archivePostItem">
						<div class="archivePostTime">{catPost.date}</div>
						<h3 class="archivePostTitle"><a href="#">{catPost.date}</a></h3>
						<Link to={'/single/'+catPost.id} class="archivePostCategory">{catPost.category}</Link>
						<Link to={'/single/'+catPost.id} class="archivePostImg">
							<img src={' https://webeetec.com/itsharks24/blog/admin/'+catPost.image} alt="Francoise img"/>
						</Link>
						<p>{catPost.discription}</p>
						<div class="archivePostItemMeta">
							<a href="#" class="archivePostItemComments">124 Comments</a>
							<div class="archivePostItemShareLinks">
								<a href="#"><i class="fa fa-facebook"></i></a>
								<a href="#"><i class="fa fa-twitter"></i></a>
								<a href="#"><i class="fa fa-pinterest"></i></a>
							</div>
							<Link to={'/single/'+catPost.category+'/'+catPost.id} class="archivePostReadMore">Read More</Link>
						</div>
					</div>

							)
						})
					}
                 

					
					
				</div>
				<div class="postPagination">
					<ul class="clear">
						<li class="newPosts"><a href="#">New posts</a></li>
						<li class="olderPosts"><a href="#">Older posts</a></li>
					</ul>
				</div>
			</div>
			<div class="sidebarRight">
				<div class="sidebar-widget">
					<h3>About us</h3>
					<div class="aboutMeWidget">
						<img src="/images/ourlogo.png" alt="Francoise img"/>
						<p>A training company specialized in teaching programming languages, networking and computer science to ensure that you get practical experience in the field of software.</p>
					</div>
				</div>
				<div class="sidebar-widget">
					<h3>follow me</h3>
					<div class="followMeSocialLinks">
						<a href="#"><i class="fa fa-instagram"></i></a>
						<span></span>
						<a href="#"><i class="fa fa-facebook"></i></a>
						<span></span>
						<a href="#"><i class="fa fa-twitter"></i></a>
						<span></span>
						<a href="#"><i class="fa fa-heart"></i></a>
						<span></span>
						<a href="#"><i class="fa fa-pinterest"></i></a>
						<span></span>
						<a href="#"><i class="fa fa-google-plus"></i></a>
					</div>
				</div>
				
				<div class="sidebar-widget">
					<h3>Recent post</h3>
					<div class="popularPostsWidget">
						<div class="popularPostsWidgetItem">
							<a href="#" class="popularPostsItemImg"><img src="/images/content/popularPostImg.jpg" alt="Francoise img"/></a>
							<time datetime="2015-05-15">15.05.2015</time>
							<h4><a href="#">MY BEDSIDE TABLE: THE CURATOR</a></h4>
						</div>
						
					</div>
				</div>
				
				
			</div>
		</div>
		<div class="clear"></div>
		
	</section>
     </>
    );
}
export default Cat;