<template>
  <div class="resume">
    <section class="contact">
      <h2>David Parker</h2>
      <div>Fresno, CA</div>
      <div><span>(55</span>9) 9<span>03-</span>7877</div>
      <div>dav<span>idm</span>par<span>ker@</span>pm.me</div>
    </section>
    <hr />
    <section>
      <h3>Education</h3>
      <h4>California State University</h4>
      <ul>
        <li><strong>Major:</strong> Computer Science, B.S. (major GPA: 3.7)</li>
        <li><strong>Minor:</strong> Biology</li>
        <li>
          <strong>Relevant Coursework:</strong>
          Software Engineering, Algorithms & Data Structures, Machine Learning
        </li>
      </ul>
    </section>
    <section>
      <h3>Employment</h3>
      <h4>
        <div>Associate Software Engineer</div>
        <div>FocusVision</div>
        <div>May 2018 - Present</div>
      </h4>
      <ul>
        <li>
          Developed a new application that internal apps use to integrate with 3rd party APIs.
        </li>
        <li>Implemented new features and fixed bugs in a 20 year old legacy application.</li>
        <li>Transitioned areas of the legacy app to utilize a modern front-end build process.</li>
        <li>Regularly reviewed code from developers and apps across the organization.</li>
        <li>
          <strong>Utilized:</strong>
          Python 2.7, Python 3, AngularJS, React, VueJS, jQuery, Unix, AWS, Docker, Kubernetes
        </li>
      </ul>
      <h4>
        <div>Development Intern</div>
        <div>FocusVision</div>
        <div>Dec 2017 - May 2018</div>
      </h4>
      <ul>
        <li>Followed Scrum development framework and participated in regular team meetings.</li>
        <li>
          Contributed development to a multi-dimensional established web surveying application.
        </li>
        <li>
          Exposed to web technologies including RESTful
          APIs, Ajax, and various JavaScript libraries.
          </li>
        <li><strong>Utilized:</strong> Python 2.7, AngularJS, jQuery, SASS, Unix</li>
      </ul>
      <h4>
        <div>Delivery Driver</div>
        <div>Pizza Factory</div>
        <div>Dec 2015 - May 2018</div>
      </h4>
      <ul>
        <li>Ensured customers got their proper order delivered on time.</li>
      </ul>
      <h4>
        <div>Tech Sales Associate</div>
        <div>Kennel Bookstore</div>
        <div>Aug 2013 - May 2016</div>
      </h4>
      <ul>
        <li>Maintained website product pages and promotionsand developed new sections.</li>
        <li>
          Sold various tech products, provided basic tech support,
          and passed frequent knowledge tests.
        </li>
      </ul>
    </section>
    <section>
      <h3>Noteable Projects</h3>
      <h4>GroupUp</h4>
      <ul>
        <li>
          Ported previous class project (StudyGroup) to a web app that used WebSocket technology.
        </li>
        <li>
          Designed and implemented a web server written in Go and
          utilized VueJS for the front-end.
        </li>
        <li>Coordinated with classmates through Github.</li>
        <li><strong>Utilized:</strong> Golang, VueJS, AWS</li>
      </ul>
      <h4>StudyGroup</h4>
      <ul>
        <li>Led a team of five other developers in this software engineering project.</li>
        <li>Specified requirements, constructed relevant UML diagrams and documentation.</li>
        <li>Primarily developed the client TCP communications and a multi-user whiteboard.</li>
        <li><strong>Utilized:</strong> Qt/C++, PHP, TCP Sockets, AWS</li>
      </ul>
    </section>
  </div>
</template>

<style>
.resume {
  max-width: 800px;
  margin: auto;
}

.resume .contact {
  text-align: center;
}

.resume h2,
.resume h3 {
  margin-bottom: 10px;
}

.resume h4 {
  display: flex;
  margin: 0;
}

.resume h4 > div {
  flex: 1;
}

.resume h4 > div:nth-child(2) {
  text-align: center;
}

.resume h4 > div:nth-child(3) {
  text-align: right;
}

.resume ul {
  margin-top: 0;
}
</style>
