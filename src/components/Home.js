import { Link } from "react-router-dom";
import { useState , useEffect } from 'react';

function Home(){

   const [ post , setpost ] = useState([]);
   useEffect(()=>{
    fetch('https://webeetec.com/itsharks24/blog/api/getposts.php')
    .then(res => res.json())
    .then((r)=>{
        console.log(r);
        setpost(r);
    })
   },[])

    return(
      <div>
       <section className="container mt-5">
		<div className="wrapper clear">
			
			<div className="clear"></div>
			<div className="contentLeft">
				<div className="blogPostListWrap">
					{
                        post.map((p)=>{
                          return(
                            <div className="blogPostListItem clear" key={p.id} >
						<Link to={'/single/'+p.id} className="blogPostListImg">
							<img src={'https://webeetec.com/itsharks24/blog/admin/'+p.image} alt="Francoise img"/>
						</Link>
						<div className="blogPostListText">
							<div className="blogPostListTime">{p.date}</div>
							<h3><a href="single.html">{p.title}</a></h3>
							<p>{p.description}</p>
						</div>
					</div>
                          );
                        })
                    }
					<div className="blogPostListItem clear">
						<a href="single.html" className="blogPostListImg">
							<img src="images/content/postList8.jpg" alt="Francoise img"/>
						</a>
						<div className="blogPostListText">
							<div className="blogPostListTime">15.05.2015</div>
							<h3><a href="single.html">ROUNDTABLE: THE CHANGING STATE OF THE SEA</a></h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt consectetur adipisicing elit sed do eiusmod</p>
						</div>
					</div>
				</div>
				<div className="postPagination">
					<ul className="clear">
						<li className="newPosts"><a href="#">New posts</a></li>
						<li className="olderPosts"><a href="#">Older posts</a></li>
					</ul>
				</div>
			</div>
			<div className="sidebarRight">
				<div className="sidebar-widget">
					<h3>About us</h3>
					<div className="aboutMeWidget">
						<img src="images/ourlogo.png" alt="Francoise img"/>
						<p>A training company specialized in teaching programming languages, networking and computer science to ensure that you get practical experience in the field of software.</p>
					</div>
				</div>
				<div className="sidebar-widget">
					<h3>follow me</h3>
					<div className="followMeSocialLinks">
						<a href="#"><i className="fa fa-instagram"></i></a>
						<span></span>
						<a href="#"><i className="fa fa-facebook"></i></a>
						<span></span>
						<a href="#"><i className="fa fa-twitter"></i></a>
						<span></span>
						<a href="#"><i className="fa fa-heart"></i></a>
						<span></span>
						<a href="#"><i className="fa fa-pinterest"></i></a>
						<span></span>
						<a href="#"><i className="fa fa-google-plus"></i></a>
					</div>
				</div>
				
				<div className="sidebar-widget">
					<h3>Recent post</h3>
					<div className="popularPostsWidget">
						<div className="popularPostsWidgetItem">
							<a href="#" className="popularPostsItemImg"><img src="/images/content/popularPostImg.jpg" alt="Francoise img"/></a>
							<time datetime="2015-05-15">15.05.2015</time>
							<h4><a href="#">MY BEDSIDE TABLE: THE CURATOR</a></h4>
						</div>
						
					</div>
				</div>
				
				
			</div>
		</div>
		<div className="clear"></div>
		
	</section>
      </div>
    );
}
export default Home;