import React from "react";

import replicaImg from "assets/images/neptune/replica.png";
import socialNetworkImg from "assets/images/neptune/social-networking.png";
import recommendEngineImg from "assets/images/neptune/recommend-engine.png";
import fraudDetectionImg from "assets/images/neptune/fraud-detection.png";
import knowledgeGraphImg from "assets/images/neptune/knowledge-grahps.png";
import lifeSciencesImg from "assets/images/neptune/life-sciences.png";
import networkImg from "assets/images/neptune/network.png";
import pricingImg from "assets/images/neptune/pricing.png";

export const AWSNaptune = () => {
  return (
    <section id="blog-detail" className="about">
      <div className="container aos-init aos-animate" data-aos="fade-up">
        <div className="section-title">
          <h2>Graph Database</h2>
          <h3>Amazon Neptune</h3>
        </div>

        <div className="row">
          <h2>What is Amazon Neptune?</h2>
          <ul>
            <li>It’s a fast, reliable, fully managed graph database service.</li>
            <li>It’s easy to build and run applications that work with highly connected datasets.</li>
            <li>Its core is a purpose-built, high-performance graph database engine optimized for storing billions of relationships and querying the graph with milliseconds latency.</li>
            <li>It supports popular graph models: Property Graph and W3C’s RDF (Resource Description Framework).</li>
            <li>It supports the popular query languages: Gremlin, W3C’s SPARQL to build queries easily with efficiently navigate highly connected datasets.</li>
          </ul>
        </div>
        <div className="row">
          <h3>Benefits</h3>
          <div className="col-lg-6 aos-init aos-animate" data-aos="fade-right" data-aos-delay="100">
            <img src={replicaImg} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="100" >
            
            <ul>
              <li>
                <i className="bx bx-images"></i>
                <div>
                  <h5>Supports open graph APIs</h5>
                  <p>Gremlin, SPARQL</p>
                </div>
              </li>
              <li>
                <i className="bx bx-images"></i>
                <div>
                  <h5>High performance and scalability</h5>
                  <p>Neptune supports up to 15 low latency read replicas across 3 Availability Zones to scale read capacity and execute more than one-hundred thousand graph queries per second. You can easily scale your database deployment up and down from smaller to larger instance types as you want.</p>
                </div>
              </li>
              <li>
                <i className="bx bx-images"></i>
                <div>
                  <h5>High availability and durability</h5>
                  <p>Neptune is designed to provide greater than 99.99% availability. Neptune supports fault-tolerant and self-healing storage built for cloud that replicates 6 copies of your data across 3 Availability Zones. Neptune continuously backs up your data to Amazon S3 and transparently recovers from physical storage failures. Neptune can process instance failover typically less than 30 seconds</p>
                </div>
              </li>
              <li>
                <i className="bx bx-images"></i>
                <div>
                  <h5>High secure</h5>
                  <p>Neptune provides multiple levels of security for your database, including network isolation using Amazon VPC such as: IAM authentication for endpoint access, HTTPS encrypted client connections, encrypted Neptune instance, encrypted data in the underlying storage or in automated backups, snapshots,…</p>
                </div>
              </li>
              <li>
                <i className="bx bx-images"></i>
                <div>
                  <h5>Fully managed</h5>
                  <p>Neptune automatically and continuously monitors and backs up database to Amazon S3. You don’t need to manage database management tasks such as hardware provisioning, software patching, setup, configuration, or backups. You can monitor database performance using Amazon CloudWatch.</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="row">
            <h3>There are some Neptune features that <span>you need to know</span></h3>

            <ul>
              <li><b>Neptune’s graph data model:</b> Basic unit is four-position (quad) element SPOG: Subject (S), predicate (P), object (O), graph (G)</li>
              <li><b>Neptune clusters and instances:</b> Neptune DB cluster manages access to your data through queries. A cluster consists of one primary DB instance, up to 15 read-replica DB instances. All instances in a cluster share the same underlying managed storage volume.</li>
              <li><b>Neptune endpoints:</b>use to connect to the DB instances in DB cluster. We have some endpoints in a Neptune DB cluster: cluster endpoint, reader endpoint, instance endpoint, custom endpoint.</li>
              <li><b>Neptune’s custom query IDs:</b>let you check query status.</li>
              <li><b>Neptune’s JDBC connectivity:</b>Neptune has released an open-source JDBC driver that support Gremlin, SPARQL queries,… With JDBC connectivity, you can connect to Neptune BI tools as Tableau easily without no additional cost</li>
            </ul>
          </div>
          
          <div className="row">
            <h3>When do you use Graph Database (Amazon Neptune)?</h3>
            <ul>
              <li>Graph databases (Neptune) are purpose-built to store and navigate relationships. They have advantages over relational database. You should you graph databases wherever you need to create relationships between data and quickly query these relationships.</li>
              <li>If you use relational database for building relationships, this takes several challenges to build. You need multiple tables with multiple foreign keys. SQL queries to navigate this data would require nested queries and complex joins that quickly become unwieldy, and the queries would not perform well as your data size grows over time.</li>
              <li>Neptune uses graph structures such as nodes (it is data entities in relational database), edges (it is relationships in relational database), and properties to represent and store data. The relationships are stored as first order citizens of the data model. This allows data in nodes to be directly linked, dramatically improving the performance of queries.</li>
            </ul>
          </div>

          <h3>Some Amazon Neptune use cases</h3>
          <div className="row">
            <div className="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="100" >
              <h5>Social Networking</h5>
              <p>group friends who like or dislike similar things.</p>
            </div>
            <div className="col-lg-6 aos-init aos-animate" data-aos="fade-right" data-aos-delay="100">
              <img src={socialNetworkImg} className="img-fluid" alt="" />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 aos-init aos-animate" data-aos="fade-right" data-aos-delay="100">
              <img src={recommendEngineImg} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="100" >
              <h5>Recommendation Engines</h5>
              <p>make purchase suggestions based on other users with similar interests.</p>
            </div>
            
          </div>

          <div className="row">
            <div className="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="100" >
              <h5>Fraud Detection</h5>
              <p>detect connections to known Fraud senarios.</p>
            </div>
            <div className="col-lg-6 aos-init aos-animate" data-aos="fade-right" data-aos-delay="100">
              <img src={fraudDetectionImg} className="img-fluid" alt="" />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 aos-init aos-animate" data-aos="fade-right" data-aos-delay="100">
              <img src={knowledgeGraphImg} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="100" >
              <h5>Knowledge Graphs</h5>
              <p>store and query info with relationships between users.</p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="100" >
              <h5>Life Sciences</h5>
              <p>securely store and process patient with healthcare.</p>
            </div>
            <div className="col-lg-6 aos-init aos-animate" data-aos="fade-right" data-aos-delay="100">
              <img src={lifeSciencesImg} className="img-fluid" alt="" />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 aos-init aos-animate" data-aos="fade-right" data-aos-delay="100">
              <img src={networkImg} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="100" >
              <h5>Network / IT Operations</h5>
              <p>store network topology with discover relationships between hosts.</p>
            </div>
            
          </div>

          <h3>Amazon Neptune pricing</h3>
          <div className="row">
            <div className="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="100" >
              <ul>
                <li>
                  <i className="bx bx-images"></i>
                  <div>
                    <p>You can create an instance with up to 64 TB of auto-scaling storage, 6-way replication across availability zones, and support for up to 15 read replicas; and you pay only for the resources that you use.</p>
                  </div>
                </li>
                <li>
                  <i className="bx bx-images"></i>
                  <div>
                    <p>You can use Amazon Neptune for free for the first time using with 750 hours of Neptune db.t3.medium or db.t4g.medium instance, 10 million I/O request, 1 GB storage, and 1 GB of backup storage for 30 days.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 aos-init aos-animate" data-aos="fade-right" data-aos-delay="100">
              <img src={pricingImg} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}