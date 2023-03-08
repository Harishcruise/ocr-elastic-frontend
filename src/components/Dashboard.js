import React from 'react'
import Style from './Dashboard.module.css';
import { PieChart } from 'react-minimal-pie-chart';

function Dashboard() {
  return (
    <>
    <div className= {Style.wrapper}>
  <h1>User Dashboard</h1>
  <div className= {Style.cols}>
			<div className={Style.col} ontouchstart="this.classNameList.toggle('hover');">
				<div className= {Style.container}>
					<div className={Style.front} style={{BackgroundImage: "url(https://unsplash.it/500/500/)"}}>
						<div className={Style.inner}>
							<p>Diligord</p>
              <span>Lorem ipsum</span>
						</div>
					</div>
					<div className={Style.back}>
					<div className={Style.inner}>
						  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
						</div>
					</div>
				</div>
			</div>
			<div className={Style.col} ontouchstart="this.classNameList.toggle('hover');">
				<div className={Style.container}>
					<div className={Style.front} style={{BackgroundImage: "url(https://unsplash.it/500/500/)"}}>
						<div className={Style.inner}>
							<p>Rocogged</p>
              <span>Lorem ipsum</span>
						</div>
					</div>
					<div className={Style.back}>
						<div className={Style.inner}>
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
						</div>
					</div>
				</div>
			</div>
			<div className= {Style.col} ontouchstart="this.classNameList.toggle('hover');">
				<div className={Style.container}>
					<div className={Style.front} style={{BackgroundImage: "url(https://unsplash.it/500/500/)"}}>
						<div className= {Style.inner}>
							<p>Strizzes</p>
              <span>Lorem ipsum</span>
						</div>
					</div>
					<div className={Style.back}>
						<div className={Style.inner}>
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
						</div>
					</div>
				</div>
			</div>
			<div className={Style.col} ontouchstart="this.classNameList.toggle('hover');">
				<div className={Style.container}>
					<div className={Style.front} style={{BackgroundImage: "url(https://unsplash.it/500/500/)"}}>
						<div className={Style.inner}>
							<p>Clossyo</p>
              <span>Lorem ipsum</span>
						</div>
					</div>
					<div className={Style.back}>
						<div className={Style.inner}>
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
						</div>
					</div>
				</div>
			</div>
			<div className={Style.col} ontouchstart="this.classNameList.toggle('hover');">
				<div className={Style.container}>
					<div className={Style.front} style={{BackgroundImage: "url(https://unsplash.it/500/500/)"}}>
						<div className={Style.inner}>
							<p>Rendann</p>
              <span>Lorem ipsum</span>
						</div>
					</div>
					<div className={Style.back}>
						<div className={Style.inner}>
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
						</div>
					</div>
				</div>
			</div>
			<div className={Style.col} ontouchstart="this.classNameList.toggle('hover');">
				<div className={Style.container}>
					<div className={Style.front} style={{BackgroundImage: "url(https://unsplash.it/500/500/)"}}>
						<div className={Style.inner}>
							<p>Reflupper</p>
              <span>Lorem ipsum</span>
						</div>
					</div>
					<div className={Style.back}>
						<div className={Style.inner}>
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
						</div>
					</div>
				</div>
			</div>
			<div className={Style.col} ontouchstart="this.classNameList.toggle('hover');">
				<div className={Style.container}>
					<div className={Style.front} style={{BackgroundImage: "url(https://unsplash.it/500/500/)"}}>
						<div className={Style.inner}>
							<p>Acirassi</p>
              <span>Lorem ipsum</span>
						</div>
					</div>
					<div className={Style.back}>
						<div className={Style.inner}>
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
						</div>
					</div>
				</div>
			</div>
			<div className={Style.col} ontouchstart="this.classNameList.toggle('hover');">
				<div className={Style.container}>
					<div className={Style.front} style={{BackgroundImage: "url(https://unsplash.it/500/500/)"}}>
						<div className={Style.inner}>
							<p>Sohanidd</p>
              <span>Lorem ipsum</span>
						</div>
					</div>
					<div className={Style.back}>
						<div className={Style.inner}>
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
 </div>
</>
  )
}

export default Dashboard