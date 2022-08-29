import React from 'react'

export default function About() {
  return (
    <section id="aboutMe" className="">
    <div className='w-100 text-center'><h1>About Jaden rodriguez</h1></div>
      
      <div className="row px-5 mx-5">
      <div className="col-4"><img style={{ width: '50%',height:'auto'}} src="https://www.jadent.dev/img/me.png" alt="pic of me" /></div>
    <div className="col-8">
    <h4  class="subColor w-100 text-center">Who am I?</h4>
            <p class="mx-lg-5 mx-md-1">&emsp;&emsp;Hi, I'm a ful-stack web developer. I enjoy working with algorithms and apis on the front and back end with javascript. Although javascript is what I like to do, my skills range from working on CSS on the front-end to querying data on the back-end. 
            </p>
            <h4 class="subColor w-100 text-center">What got me into coding?</h4>
            <p class="mx-lg-5 mx-sm-1">&emsp;&emsp;I got into gaming at a young age, which naturally interested me in computers. I first learned about coding my sophomore year of high school when I joined the robotics team learning python and java. It wasn't until I took a free front-end class, when I learned about javascript. I was hooked immediately knowing this is the career I wanted</p>
      
    </div>
      </div>
    </section>
  )
}
